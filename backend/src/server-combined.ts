// import express from 'express';
// import nodemailer from 'nodemailer';
// import cors from 'cors';
// import crypto from 'crypto';
// import dotenv from 'dotenv';

// // SSH imports (commented out for now)
// // import * as ssh2 from 'ssh2';
// // import { Server as SshServer, ServerChannel, Session, AuthContext, ClientInfo } from 'ssh2';
// // import { createSshTerminal } from './terminal';
// // import * as fs from 'fs/promises';
// // import * as path from 'path';
// // import { execSync } from 'child_process';

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // ============================================================================
// // ORIGINAL SSH SERVER CODE (COMMENTED OUT)
// // ============================================================================

// /*
// // User type definition
// interface User {
//   username: string;
//   password: string;
//   name: string;
//   email: string;
// }

// // SSH Server configuration
// interface SSHServerConfig {
//   port: number;
//   host: string;
//   hostKeyPath: string;
// }

// // User database type
// interface UserDatabase {
//   [username: string]: User;
// }

// // This is a simple in-memory user database
// const users: UserDatabase = {
//   guest: {
//     username: 'guest',
//     password: 'guest', // In production, use hashed passwords!
//     name: 'Guest User',
//     email: 'guest@example.com'
//   },
//   admin: {
//     username: 'admin',
//     password: 'admin', // In production, use hashed passwords!
//     name: 'Administrator',
//     email: 'admin@example.com'
//   }
// };

// // Generate or load SSH host key
// async function loadOrGenerateHostKey(keyPath: string): Promise<Buffer> {
//   try {
//     // Try to read existing key
//     return await fs.readFile(keyPath);
//   } catch (error) {
//     console.log('Generating new SSH host key...');
//     return generateTempKey(keyPath);
//   }
// }

// // Generate a temporary SSH key
// async function generateTempKey(keyPath: string, isRetry: boolean = false): Promise<Buffer> {
//   try {
//     // First try using ssh-keygen if available
//     try {
//       execSync('which ssh-keygen');
//       execSync(`ssh-keygen -t rsa -b 4096 -f ${keyPath} -N "" -q`);
//       console.log(`SSH host key generated using ssh-keygen at: ${keyPath}`);
//       return await fs.readFile(keyPath);
//     } catch (sshKeygenError) {
//       console.log('ssh-keygen not available, falling back to Node.js crypto...');

//       // Fall back to Node.js crypto
//       const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
//         modulusLength: 4096,
//         publicKeyEncoding: {
//           type: 'pkcs1',
//           format: 'pem'
//         },
//         privateKeyEncoding: {
//           type: 'pkcs1',
//           format: 'pem'
//         }
//       });

//       // Write the private key to file
//       await fs.writeFile(keyPath, privateKey);
//       console.log(`SSH host key generated using Node.js crypto at: ${keyPath}`);
//       return Buffer.from(privateKey);
//     }
//   } catch (error) {
//     console.error('Failed to generate SSH host key:', error);

//     if (!isRetry) {
//       // Try one more time
//       console.log('Retrying key generation...');
//       return generateTempKey(keyPath, true);
//     }

//     throw new Error('Failed to generate SSH host key after multiple attempts');
//   }
// }

// // Start the SSH server
// export async function startSshServer(port: number, host: string = '0.0.0.0'): Promise<void> {
//   try {
//     const hostKeyPath = path.join(__dirname, '../ssh/host_key');
//     const hostKey = await loadOrGenerateHostKey(hostKeyPath);

//     const sshServer = new SshServer({
//       hostKeys: [hostKey]
//     });

//     sshServer.on('connection', (client: ClientInfo, info: any) => {
//       console.log(`SSH connection from ${info.ip}:${info.port}`);

//       client.on('authentication', (ctx: AuthContext) => {
//         const username = ctx.username;
//         const user = users[username];

//         if (!user) {
//           ctx.reject();
//           return;
//         }

//         if (ctx.method === 'password') {
//           if (ctx.password === user.password) {
//             ctx.accept();
//             console.log(`SSH authentication successful for user: ${username}`);
//           } else {
//             ctx.reject();
//             console.log(`SSH authentication failed for user: ${username}`);
//           }
//         } else {
//           ctx.reject();
//         }
//       });

//       client.on('ready', () => {
//         console.log(`SSH client authenticated: ${client.username}`);

//         client.on('session', (accept, reject) => {
//           const session = accept();

//           session.on('pty', (accept, reject, info) => {
//             accept();
//           });

//           session.on('shell', (accept, reject) => {
//             const stream = accept();
//             createSshTerminal(stream, client.username);
//           });
//         });
//       });

//       client.on('error', (err) => {
//         console.error('SSH client error:', err);
//       });

//       client.on('close', () => {
//         console.log(`SSH client disconnected: ${client.username}`);
//       });
//     });

//     sshServer.listen(port, host, () => {
//       console.log(`SSH server listening on ${host}:${port}`);
//     });

//     sshServer.on('error', (err) => {
//       console.error('SSH server error:', err);
//     });

//   } catch (error) {
//     console.error('Failed to start SSH server:', error);
//   }
// }
// */

// // ============================================================================
// // NEW EMAIL AND PAYSTACK FUNCTIONALITY
// // ============================================================================

// // Email configuration options
// const getEmailTransporter = () => {
//   const provider = process.env.EMAIL_PROVIDER || 'gmail';

//   switch (provider.toLowerCase()) {
//     case 'gmail':
//     default:
//       // Gmail SMTP (500 emails/day, easiest setup)
//       return nodemailer.createTransporter({
//         service: 'gmail',
//         auth: {
//           user: process.env.GMAIL_USER,     // your-email@gmail.com
//           pass: process.env.GMAIL_APP_PASSWORD // App password (not regular password)
//         }
//       });
//   }
// };

// // Paystack webhook verification
// const verifyPaystackWebhook = (req: express.Request): boolean => {
//   const hash = crypto
//     .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY || '')
//     .update(JSON.stringify(req.body))
//     .digest('hex');

//   return hash === req.headers['x-paystack-signature'];
// };

// // Contact form endpoint (Contact Page form)
// app.post('/support-email', async (req, res) => {
//   try {
//     const { firstName, lastName, email, subject, message, phone } = req.body;

//     // Validate required fields
//     if (!firstName || !lastName || !email || !subject || !message) {
//       return res.status(400).json({
//         success: false,
//         error: 'All fields are required'
//       });
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return res.status(400).json({
//         success: false,
//         error: 'Invalid email format'
//       });
//     }

//     const transporter = getEmailTransporter();

//     // Email content for contact form
//     const mailOptions = {
//       from: `"${process.env.SENDER_NAME || 'Barack Ouma Portfolio'}" <${process.env.SENDER_EMAIL}>`,
//       to: process.env.RECIPIENT_EMAIL, // Where you want to receive emails
//       subject: `Portfolio Contact: ${subject}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
//           <div style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
//             <h1 style="margin: 0; font-size: 28px;">💻 Barack Ouma</h1>
//             <p style="margin: 10px 0 0 0; opacity: 0.9;">New Portfolio Contact</p>
//           </div>

//           <div style="border: 2px solid #e5e7eb; border-top: none; padding: 40px; border-radius: 0 0 10px 10px; background: #ffffff;">
//             <h2 style="color: #1f2937; margin-top: 0; font-size: 24px;">Contact Information</h2>

//             <div style="background: #f0fdf4; padding: 25px; border-radius: 8px; margin: 25px 0; border-left: 5px solid #10b981;">
//               <div style="display: grid; gap: 15px;">
//                 <p style="margin: 0;"><strong style="color: #374151;">👤 Name:</strong> <span style="color: #1f2937;">${firstName} ${lastName}</span></p>
//                 <p style="margin: 0;"><strong style="color: #374151;">📧 Email:</strong> <a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a></p>
//                 ${phone ? `<p style="margin: 0;"><strong style="color: #374151;">📱 Phone:</strong> <a href="tel:${phone}" style="color: #10b981; text-decoration: none;">${phone}</a></p>` : ''}
//                 <p style="margin: 0;"><strong style="color: #374151;">📋 Subject:</strong> <span style="color: #1f2937;">${subject}</span></p>
//               </div>
//             </div>

//             <h3 style="color: #1f2937; margin-bottom: 15px;">💬 Message:</h3>
//             <div style="background: #ffffff; padding: 25px; border: 2px solid #e5e7eb; border-radius: 8px; border-left: 5px solid #f59e0b;">
//               <p style="margin: 0; line-height: 1.7; color: #374151; font-size: 16px;">${message.replace(/\n/g, '<br>')}</p>
//             </div>

//             <div style="margin-top: 35px; padding: 25px; background: linear-gradient(135deg, #ecfdf5, #d1fae5); border-radius: 8px; text-align: center;">
//               <h4 style="margin: 0 0 15px 0; color: #059669;">🎯 Portfolio Contact</h4>
//               <p style="margin: 0 0 15px 0; color: #374151; font-size: 14px;">Please respond within 24 hours</p>
//               <a href="mailto:${email}?subject=Re: ${subject}"
//                  style="display: inline-block; background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
//                 Reply to ${firstName}
//               </a>
//             </div>
//           </div>

//           <div style="text-align: center; padding: 20px; background: #f9fafb; border-radius: 8px; margin-top: 10px;">
//             <p style="margin: 5px 0; color: #6b7280; font-size: 14px;">📍 Nairobi County, Kenya</p>
//             <p style="margin: 5px 0; color: #6b7280; font-size: 14px;">⏰ ${new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' })}</p>
//             <p style="margin: 5px 0; color: #6b7280; font-size: 12px;">Email Provider: ${process.env.EMAIL_PROVIDER || 'Gmail'}</p>
//           </div>
//         </div>
//       `,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     console.log(`✅ Contact email sent successfully from: ${email} | Name: ${firstName} ${lastName} | Provider: ${process.env.EMAIL_PROVIDER || 'Gmail'}`);

//     res.json({
//       success: true,
//       message: 'Message sent successfully! I\'ll get back to you within 24 hours.'
//     });

//   } catch (error) {
//     console.error('❌ Error sending contact email:', error);

//     res.status(500).json({
//       success: false,
//       error: 'Failed to send message. Please try again or contact me directly.'
//     });
//   }
// });

// // Sponsorship success email endpoint
// app.post('/sponsorship-email', async (req, res) => {
//   try {
//     const { amount, email, name, reference } = req.body;

//     // Validate required fields
//     if (!amount || !reference) {
//       return res.status(400).json({
//         success: false,
//         error: 'Missing required fields'
//       });
//     }

//     const transporter = getEmailTransporter();

//     // Email content for sponsorship
//     const mailOptions = {
//       from: `"${process.env.SENDER_NAME || 'Barack Ouma Portfolio'}" <${process.env.SENDER_EMAIL}>`,
//       to: process.env.RECIPIENT_EMAIL,
//       subject: `🎉 New Sponsorship: $${amount} from ${name || 'Anonymous'}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
//           <div style="background: linear-gradient(135deg, #ec4899, #be185d); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
//             <h1 style="margin: 0; font-size: 28px;">💝 New Sponsorship!</h1>
//             <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone just supported your work!</p>
//           </div>

//           <div style="border: 2px solid #e5e7eb; border-top: none; padding: 40px; border-radius: 0 0 10px 10px; background: #ffffff;">
//             <h2 style="color: #1f2937; margin-top: 0; font-size: 24px;">Sponsorship Details</h2>

//             <div style="background: #fdf2f8; padding: 25px; border-radius: 8px; margin: 25px 0; border-left: 5px solid #ec4899;">
//               <div style="display: grid; gap: 15px;">
//                 <p style="margin: 0;"><strong style="color: #374151;">💰 Amount:</strong> <span style="color: #1f2937; font-size: 18px; font-weight: bold;">$${amount}</span></p>
//                 <p style="margin: 0;"><strong style="color: #374151;">👤 Sponsor:</strong> <span style="color: #1f2937;">${name || 'Anonymous'}</span></p>
//                 <p style="margin: 0;"><strong style="color: #374151;">📧 Email:</strong> <a href="mailto:${email || 'anonymous@example.com'}" style="color: #ec4899; text-decoration: none;">${email || 'Anonymous'}</a></p>
//                 <p style="margin: 0;"><strong style="color: #374151;">🔗 Reference:</strong> <span style="color: #1f2937; font-family: monospace;">${reference}</span></p>
//               </div>
//             </div>

//             <div style="margin-top: 35px; padding: 25px; background: linear-gradient(135deg, #fdf2f8, #fce7f3); border-radius: 8px; text-align: center;">
//               <h4 style="margin: 0 0 15px 0; color: #be185d;">🎉 Thank You Message</h4>
//               <p style="margin: 0 0 15px 0; color: #374151; font-size: 14px;">Consider sending a thank you email to your sponsor!</p>
//               <a href="mailto:${email || 'anonymous@example.com'}?subject=Thank you for your sponsorship!"
//                  style="display: inline-block; background: #ec4899; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
//                 Send Thank You Email
//               </a>
//             </div>
//           </div>

//           <div style="text-align: center; padding: 20px; background: #f9fafb; border-radius: 8px; margin-top: 10px;">
//             <p style="margin: 5px 0; color: #6b7280; font-size: 14px;">📍 Nairobi County, Kenya</p>
//             <p style="margin: 5px 0; color: #6b7280; font-size: 14px;">⏰ ${new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' })}</p>
//             <p style="margin: 5px 0; color: #6b7280; font-size: 12px;">Payment Provider: Paystack</p>
//           </div>
//         </div>
//       `,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     console.log(`✅ Sponsorship email sent successfully! Amount: $${amount} | Sponsor: ${name || 'Anonymous'} | Reference: ${reference}`);

//     res.json({
//       success: true,
//       message: 'Sponsorship notification sent successfully!'
//     });

//   } catch (error) {
//     console.error('❌ Error sending sponsorship email:', error);

//     res.status(500).json({
//       success: false,
//       error: 'Failed to send sponsorship notification.'
//     });
//   }
// });

// // Paystack webhook endpoint
// app.post('/paystack-webhook', async (req, res) => {
//   try {
//     // Verify webhook signature
//     if (!verifyPaystackWebhook(req)) {
//       console.log('❌ Invalid Paystack webhook signature');
//       return res.status(401).json({ error: 'Invalid signature' });
//     }

//     const { event, data } = req.body;

//     if (event === 'charge.success') {
//       const { amount, customer, reference, metadata } = data;
//       const sponsorAmount = amount / 100; // Convert from kobo to naira
//       const sponsorEmail = customer?.email || metadata?.email || 'anonymous@example.com';
//       const sponsorName = customer?.first_name && customer?.last_name
//         ? `${customer.first_name} ${customer.last_name}`
//         : metadata?.name || 'Anonymous';

//       console.log(`🎉 Payment successful! Amount: $${sponsorAmount} | Sponsor: ${sponsorName} | Reference: ${reference}`);

//       // Send sponsorship notification email
//       try {
//         const transporter = getEmailTransporter();

//         const mailOptions = {
//           from: `"${process.env.SENDER_NAME || 'Barack Ouma Portfolio'}" <${process.env.SENDER_EMAIL}>`,
//           to: process.env.RECIPIENT_EMAIL,
//           subject: `🎉 New Sponsorship: $${sponsorAmount} from ${sponsorName}`,
//           html: `
//             <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
//               <div style="background: linear-gradient(135deg, #ec4899, #be185d); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
//                 <h1 style="margin: 0; font-size: 28px;">💝 New Sponsorship!</h1>
//                 <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone just supported your work!</p>
//               </div>

//               <div style="border: 2px solid #e5e7eb; border-top: none; padding: 40px; border-radius: 0 0 10px 10px; background: #ffffff;">
//                 <h2 style="color: #1f2937; margin-top: 0; font-size: 24px;">Sponsorship Details</h2>

//                 <div style="background: #fdf2f8; padding: 25px; border-radius: 8px; margin: 25px 0; border-left: 5px solid #ec4899;">
//                   <div style="display: grid; gap: 15px;">
//                     <p style="margin: 0;"><strong style="color: #374151;">💰 Amount:</strong> <span style="color: #1f2937; font-size: 18px; font-weight: bold;">$${sponsorAmount}</span></p>
//                     <p style="margin: 0;"><strong style="color: #374151;">👤 Sponsor:</strong> <span style="color: #1f2937;">${sponsorName}</span></p>
//                     <p style="margin: 0;"><strong style="color: #374151;">📧 Email:</strong> <a href="mailto:${sponsorEmail}" style="color: #ec4899; text-decoration: none;">${sponsorEmail}</a></p>
//                     <p style="margin: 0;"><strong style="color: #374151;">🔗 Reference:</strong> <span style="color: #1f2937; font-family: monospace;">${reference}</span></p>
//                   </div>
//                 </div>

//                 <div style="margin-top: 35px; padding: 25px; background: linear-gradient(135deg, #fdf2f8, #fce7f3); border-radius: 8px; text-align: center;">
//                   <h4 style="margin: 0 0 15px 0; color: #be185d;">🎉 Thank You Message</h4>
//                   <p style="margin: 0 0 15px 0; color: #374151; font-size: 14px;">Consider sending a thank you email to your sponsor!</p>
//                   <a href="mailto:${sponsorEmail}?subject=Thank you for your sponsorship!"
//                      style="display: inline-block; background: #ec4899; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
//                     Send Thank You Email
//                   </a>
//                 </div>
//               </div>

//               <div style="text-align: center; padding: 20px; background: #f9fafb; border-radius: 8px; margin-top: 10px;">
//                 <p style="margin: 5px 0; color: #6b7280; font-size: 14px;">📍 Nairobi County, Kenya</p>
//                 <p style="margin: 5px 0; color: #6b7280; font-size: 14px;">⏰ ${new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' })}</p>
//                 <p style="margin: 5px 0; color: #6b7280; font-size: 12px;">Payment Provider: Paystack</p>
//               </div>
//             </div>
//           `,
//         };

//         await transporter.sendMail(mailOptions);
//         console.log(`✅ Sponsorship notification email sent successfully!`);
//       } catch (emailError) {
//         console.error('❌ Error sending sponsorship notification email:', emailError);
//       }
//     }

//     res.json({ status: 'success' });
//   } catch (error) {
//     console.error('❌ Error processing Paystack webhook:', error);
//     res.status(500).json({ error: 'Webhook processing failed' });
//   }
// });

// // Health check endpoint
// app.get('/health', (req, res) => {
//   res.json({
//     status: '✅ Server running',
//     service: 'Barack Ouma Portfolio Backend',
//     provider: process.env.EMAIL_PROVIDER || 'Gmail',
//     timestamp: new Date().toISOString()
//   });
// });

// // Root endpoint
// app.get('/', (req, res) => {
//   res.json({
//     message: '💻 Barack Ouma Portfolio Backend',
//     provider: process.env.EMAIL_PROVIDER || 'Gmail',
//     endpoints: {
//       'POST /support-email': 'Send contact form email',
//       'POST /sponsorship-email': 'Send sponsorship notification email',
//       'POST /paystack-webhook': 'Paystack webhook verification',
//       'GET /health': 'Health check'
//     }
//   });
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
//   console.log(`📧 Using email provider: ${process.env.EMAIL_PROVIDER || 'Gmail'}`);
//   console.log(`📬 Emails will be sent to: ${process.env.RECIPIENT_EMAIL}`);
//   console.log(`💳 Paystack webhook enabled: ${process.env.PAYSTACK_SECRET_KEY ? 'Yes' : 'No'}`);
//   console.log(`📋 Available endpoints:`);
//   console.log(`   POST /support-email - Contact form`);
//   console.log(`   POST /sponsorship-email - Sponsorship notifications`);
//   console.log(`   POST /paystack-webhook - Paystack webhook`);
//   console.log(`   GET /health - Health check`);
// });

// export default app;
