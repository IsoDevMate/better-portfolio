import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import crypto from 'crypto';
import dotenv from 'dotenv';
import cron from 'node-cron';

// ============================================================================
// NOTE: Original SSH functionality is preserved in separate files:
// - ssh-server.ts: SSH server implementation
// - terminal.ts: Terminal functionality
// - websocket-server.ts: WebSocket server
// - index.ts: Main server entry point with SSH support
// ============================================================================

dotenv.config()

const app = express();

// Keep-alive configuration
const SERVER_URL = process.env.SERVER_URL || 'https://better-portfolio.onrender.com';

// Simple keep-alive function
const keepAlive = async () => {
  try {
    const response = await fetch(`${SERVER_URL}/health`);
    if (response.ok) {
      console.log(`✅ Keep-alive ping successful at ${new Date().toISOString()}`);
    } else {
      console.log(`⚠️ Keep-alive ping failed with status: ${response.status}`);
    }
  } catch (error) {
    console.error(`❌ Keep-alive ping error:`, error);
  }
};

// Schedule a cron job to keep the server alive (every minute)
cron.schedule('*/1 * * * *', () => {
  console.log('🔄 Keep-alive cron job running...');
  keepAlive();
});

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration options
const getEmailTransporter = () => {
  const provider = process.env.EMAIL_PROVIDER || 'gmail';

  switch (provider.toLowerCase()) {
    case 'gmail':
    default:
      // Gmail SMTP (500 emails/day, easiest setup)
      return nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD
        }
      });
  }
};

// Paystack webhook verification
const verifyPaystackWebhook = (req: express.Request): boolean => {
  const hash = crypto
    .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY || '')
    .update(JSON.stringify(req.body))
    .digest('hex');

  return hash === req.headers['x-paystack-signature'];
};


// Terminal sponsorship endpoint
app.post('/terminal-sponsor', async (req, res) => {
  try {
    const { amount, email, name } = req.body;

    // Validate required fields
    if (!amount || amount <= 0) {
      return res.status(400).json({
        success: false,
        error: 'Valid amount is required'
      });
    }

    // Generate unique reference
    const reference = `terminal_sponsor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Create Paystack payment URL
    const paystackUrl = `https://api.paystack.co/transaction/initialize`;

    const response = await fetch(paystackUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email || 'sponsor@example.com',
        amount: amount * 100, // Convert to kobo
        currency: 'KES',
        reference: reference,
        callback_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/terminal-payment-callback`,
        metadata: {
          name: name || 'Terminal Sponsor',
          source: 'terminal',
          amount: amount
        }
      })
    });

    const result = await response.json();

    if (result.status) {
      res.json({
        success: true,
        authorization_url: result.data.authorization_url,
        reference: reference,
        amount: amount,
        message: 'Payment URL generated successfully'
      });
    } else {
      res.status(400).json({
        success: false,
        error: result.message || 'Failed to generate payment URL'
      });
    }

  } catch (error) {
    console.error('❌ Error in terminal sponsorship:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Payment verification endpoint
app.post('/verify-payment', async (req, res) => {
  try {
    const { reference } = req.body;

    if (!reference) {
      return res.status(400).json({
        success: false,
        error: 'Reference is required'
      });
    }

    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        'Authorization': `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      }
    });

    const result = await response.json();

    if (result.status && result.data.status === 'success') {
      const { amount, customer, metadata } = result.data;
      const sponsorAmount = amount / 100;
      const sponsorEmail = customer?.email || metadata?.email || 'anonymous@example.com';
      const sponsorName = customer?.first_name && customer?.last_name
        ? `${customer.first_name} ${customer.last_name}`
        : metadata?.name || 'Anonymous';

      // Send sponsorship notification email
      try {
        const transporter = getEmailTransporter();
        const mailOptions = {
          from: `"${process.env.SENDER_NAME || 'Barack Ouma Portfolio'}" <${process.env.SENDER_EMAIL}>`,
          to: process.env.RECIPIENT_EMAIL,
          subject: `🎉 Terminal Sponsorship: ${sponsorAmount} from ${sponsorName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                <h1 style="margin: 0; font-size: 28px;">💻 Terminal Sponsorship!</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone sponsored via your terminal!</p>
              </div>

              <div style="border: 2px solid #e5e7eb; border-top: none; padding: 40px; border-radius: 0 0 10px 10px; background: #ffffff;">
                <h2 style="color: #1f2937; margin-top: 0; font-size: 24px;">Terminal Sponsorship Details</h2>

                <div style="background: #f0fdf4; padding: 25px; border-radius: 8px; margin: 25px 0; border-left: 5px solid #10b981;">
                  <div style="display: grid; gap: 15px;">
                    <p style="margin: 0;"><strong style="color: #374151;">💰 Amount:</strong> <span style="color: #1f2937; font-size: 18px; font-weight: bold;">${sponsorAmount}</span></p>
                    <p style="margin: 0;"><strong style="color: #374151;">👤 Sponsor:</strong> <span style="color: #1f2937;">${sponsorName}</span></p>
                    <p style="margin: 0;"><strong style="color: #374151;">📧 Email:</strong> <a href="mailto:${sponsorEmail}" style="color: #10b981; text-decoration: none;">${sponsorEmail}</a></p>
                    <p style="margin: 0;"><strong style="color: #374151;">🔗 Reference:</strong> <span style="color: #1f2937; font-family: monospace;">${reference}</span></p>
                    <p style="margin: 0;"><strong style="color: #374151;">💻 Source:</strong> <span style="color: #1f2937;">Terminal Interface</span></p>
                  </div>
                </div>

                <div style="margin-top: 35px; padding: 25px; background: linear-gradient(135deg, #f0fdf4, #d1fae5); border-radius: 8px; text-align: center;">
                  <h4 style="margin: 0 0 15px 0; color: #059669;">🎉 Terminal Success!</h4>
                  <p style="margin: 0 0 15px 0; color: #374151; font-size: 14px;">Your terminal sponsorship feature is working perfectly!</p>
                  <a href="mailto:${sponsorEmail}?subject=Thank you for your terminal sponsorship!"
                     style="display: inline-block; background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                    Send Thank You Email
                  </a>
                </div>
              </div>

              <div style="text-align: center; padding: 20px; background: #f9fafb; border-radius: 8px; margin-top: 10px;">
                <p style="margin: 5px 0; color: #6b7280; font-size: 14px;">📍 Nairobi County, Kenya</p>
                <p style="margin: 5px 0; color: #6b7280; font-size: 14px;">⏰ ${new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' })}</p>
                <p style="margin: 5px 0; color: #6b7280; font-size: 12px;">Payment Provider: Paystack | Source: Terminal</p>
              </div>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log(`✅ Terminal sponsorship notification email sent successfully!`);
      } catch (emailError) {
        console.error('❌ Error sending terminal sponsorship notification email:', emailError);
      }

      res.json({
        success: true,
        data: {
          amount: sponsorAmount,
          sponsor: sponsorName,
          email: sponsorEmail,
          reference: reference,
          status: 'success'
        }
      });
    } else {
      res.json({
        success: false,
        error: 'Payment verification failed'
      });
    }

  } catch (error) {
    console.error('❌ Error verifying payment:', error);
    res.status(500).json({
      success: false,
      error: 'Payment verification failed'
    });
  }
});

// Contact form endpoint (Contact Page form)
app.post('/support-email', async (req, res) => {
  try {
    const { firstName, lastName, email, subject, message, phone } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format'
      });
    }

    const transporter = getEmailTransporter();

    // Email content for contact form
    const mailOptions = {
      from: `"${process.env.SENDER_NAME || 'Barack Ouma Portfolio'}" <${process.env.SENDER_EMAIL}>`,
      to: process.env.RECIPIENT_EMAIL, // Where you want to receive emails
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">💻 Barack Ouma</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">New Portfolio Contact</p>
          </div>

          <div style="border: 2px solid #e5e7eb; border-top: none; padding: 40px; border-radius: 0 0 10px 10px; background: #ffffff;">
            <h2 style="color: #1f2937; margin-top: 0; font-size: 24px;">Contact Information</h2>

            <div style="background: #f0fdf4; padding: 25px; border-radius: 8px; margin: 25px 0; border-left: 5px solid #10b981;">
              <div style="display: grid; gap: 15px;">
                <p style="margin: 0;"><strong style="color: #374151;">👤 Name:</strong> <span style="color: #1f2937;">${firstName} ${lastName}</span></p>
                <p style="margin: 0;"><strong style="color: #374151;">📧 Email:</strong> <a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a></p>
                ${phone ? `<p style="margin: 0;"><strong style="color: #374151;">📱 Phone:</strong> <a href="tel:${phone}" style="color: #10b981; text-decoration: none;">${phone}</a></p>` : ''}
                <p style="margin: 0;"><strong style="color: #374151;">📋 Subject:</strong> <span style="color: #1f2937;">${subject}</span></p>
              </div>
            </div>

            <h3 style="color: #1f2937; margin-bottom: 15px;">💬 Message:</h3>
            <div style="background: #ffffff; padding: 25px; border: 2px solid #e5e7eb; border-radius: 8px; border-left: 5px solid #f59e0b;">
              <p style="margin: 0; line-height: 1.7; color: #374151; font-size: 16px;">${message.replace(/\n/g, '<br>')}</p>
            </div>

            <div style="margin-top: 35px; padding: 25px; background: linear-gradient(135deg, #ecfdf5, #d1fae5); border-radius: 8px; text-align: center;">
              <h4 style="margin: 0 0 15px 0; color: #059669;">🎯 Portfolio Contact</h4>
              <p style="margin: 0 0 15px 0; color: #374151; font-size: 14px;">Please respond within 24 hours</p>
              <a href="mailto:${email}?subject=Re: ${subject}"
                 style="display: inline-block; background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                Reply to ${firstName}
              </a>
            </div>
          </div>

          <div style="text-align: center; padding: 20px; background: #f9fafb; border-radius: 8px; margin-top: 10px;">
            <p style="margin: 5px 0; color: #6b7280; font-size: 14px;">📍 Nairobi County, Kenya</p>
            <p style="margin: 5px 0; color: #6b7280; font-size: 14px;">⏰ ${new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' })}</p>
            <p style="margin: 5px 0; color: #6b7280; font-size: 12px;">Email Provider: ${process.env.EMAIL_PROVIDER || 'Gmail'}</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log(`✅ Contact email sent successfully from: ${email} | Name: ${firstName} ${lastName} | Provider: ${process.env.EMAIL_PROVIDER || 'Gmail'}`);

    res.json({
      success: true,
      message: 'Message sent successfully! I\'ll get back to you within 24 hours.'
    });

  } catch (error) {
    console.error('❌ Error sending contact email:', error);

    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again or contact me directly.'
    });
  }
});

// Paystack webhook endpoint
app.post('/paystack-webhook', async (req, res) => {
  try {
    // Verify webhook signature
    if (!verifyPaystackWebhook(req)) {
      console.log('❌ Invalid Paystack webhook signature');
      return res.status(401).json({ error: 'Invalid signature' });
    }

    const { event, data } = req.body;

    if (event === 'charge.success') {
      const { amount, customer, reference, metadata } = data;
      const sponsorAmount = amount / 100; // Convert from kobo to naira
      const sponsorEmail = customer?.email || metadata?.email || 'anonymous@example.com';
      const sponsorName = customer?.first_name && customer?.last_name
        ? `${customer.first_name} ${customer.last_name}`
        : metadata?.name || 'Anonymous';

      console.log(`🎉 Payment successful! Amount: ${sponsorAmount} | Sponsor: ${sponsorName} | Reference: ${reference}`);

      // Send sponsorship notification email
      try {
        const transporter = getEmailTransporter();

        const mailOptions = {
          from: `"${process.env.SENDER_NAME || 'Barack Ouma Portfolio'}" <${process.env.SENDER_EMAIL}>`,
          to: process.env.RECIPIENT_EMAIL,
          subject: `🎉 New Sponsorship: ${sponsorAmount} from ${sponsorName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                <h1 style="margin: 0; font-size: 28px;">💝 New Sponsorship!</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone just supported your work!</p>
              </div>

              <div style="border: 2px solid #e5e7eb; border-top: none; padding: 40px; border-radius: 0 0 10px 10px; background: #ffffff;">
                <h2 style="color: #1f2937; margin-top: 0; font-size: 24px;">Sponsorship Details</h2>

                <div style="background: #f0fdf4; padding: 25px; border-radius: 8px; margin: 25px 0; border-left: 5px solid #10b981;">
                  <div style="display: grid; gap: 15px;">
                    <p style="margin: 0;"><strong style="color: #374151;">💰 Amount:</strong> <span style="color: #1f2937; font-size: 18px; font-weight: bold;">${sponsorAmount}</span></p>
                    <p style="margin: 0;"><strong style="color: #374151;">👤 Sponsor:</strong> <span style="color: #1f2937;">${sponsorName}</span></p>
                    <p style="margin: 0;"><strong style="color: #374151;">📧 Email:</strong> <a href="mailto:${sponsorEmail}" style="color: #10b981; text-decoration: none;">${sponsorEmail}</a></p>
                    <p style="margin: 0;"><strong style="color: #374151;">🔗 Reference:</strong> <span style="color: #1f2937; font-family: monospace;">${reference}</span></p>
                  </div>
                </div>

                <div style="margin-top: 35px; padding: 25px; background: linear-gradient(135deg, #f0fdf4, #d1fae5); border-radius: 8px; text-align: center;">
                  <h4 style="margin: 0 0 15px 0; color: #059669;">🎉 Thank You Message</h4>
                  <p style="margin: 0 0 15px 0; color: #374151; font-size: 14px;">Consider sending a thank you email to your sponsor!</p>
                  <a href="mailto:${sponsorEmail}?subject=Thank you for your sponsorship!"
                     style="display: inline-block; background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                    Send Thank You Email
                  </a>
                </div>
              </div>

              <div style="text-align: center; padding: 20px; background: #f9fafb; border-radius: 8px; margin-top: 10px;">
                <p style="margin: 5px 0; color: #6b7280; font-size: 14px;">📍 Nairobi County, Kenya</p>
                <p style="margin: 5px 0; color: #6b7280; font-size: 14px;">⏰ ${new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' })}</p>
                <p style="margin: 5px 0; color: #6b7280; font-size: 12px;">Payment Provider: Paystack</p>
              </div>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log(`✅ Sponsorship notification email sent successfully!`);
      } catch (emailError) {
        console.error('❌ Error sending sponsorship notification email:', emailError);
      }
    }

    res.json({ status: 'success' });
  } catch (error) {
    console.error('❌ Error processing Paystack webhook:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: '✅ Server running',
    service: 'Barack Ouma Portfolio Backend',
    provider: process.env.EMAIL_PROVIDER || 'Gmail',
    timestamp: new Date().toISOString()
  });
});

// Get server IP address for Paystack whitelisting
app.get('/server-ip', async (req, res) => {
  try {
    // Get server's public IP
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    const ipData = await ipResponse.json();

    res.json({
      success: true,
      server_ip: ipData.ip,
      message: 'Use this IP address to whitelist in Paystack dashboard',
      paystack_config: {
        webhook_url: `${req.protocol}://${req.get('host')}/paystack-webhook`,
        callback_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/terminal-payment-callback`
      }
    });
  } catch (error) {
    console.error('❌ Error getting server IP:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get server IP address'
    });
  }
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: '💻 Barack Ouma Portfolio Backend',
    provider: process.env.EMAIL_PROVIDER || 'Gmail',
    endpoints: {
      'POST /support-email': 'Send contact form email',
      'POST /paystack-webhook': 'Paystack webhook verification',
      'POST /terminal-sponsor': 'Terminal sponsorship payment',
      'POST /verify-payment': 'Verify payment status',
      'GET /health': 'Health check',
      'GET /server-ip': 'Get server IP for Paystack whitelisting'
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Using email provider: ${process.env.EMAIL_PROVIDER || 'Gmail'}`);
  console.log(`📬 Emails will be sent to: ${process.env.RECIPIENT_EMAIL}`);
  console.log(`💳 Paystack webhook enabled: ${process.env.PAYSTACK_SECRET_KEY ? 'Yes' : 'No'}`);
  console.log(`🔄 Keep-alive enabled: Yes (every minute)`);
  console.log(`📋 Available endpoints:`);
  console.log(`   POST /support-email - Contact form`);
  console.log(`   POST /paystack-webhook - Paystack webhook`);
  console.log(`   GET /health - Health check`);
});

export default app
