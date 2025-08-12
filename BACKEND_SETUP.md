# Backend Server Setup Guide

This guide will help you set up the TypeScript backend server for your portfolio with email functionality and Paystack integration.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

Create a `.env` file in the `backend` directory:

```env
# Email Configuration
EMAIL_PROVIDER=gmail
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-gmail-app-password
SENDER_NAME=Barack Ouma Portfolio
SENDER_EMAIL=your-email@gmail.com
RECIPIENT_EMAIL=your-email@gmail.com

# Paystack Configuration
PAYSTACK_PUBLIC_KEY=pk_test_your_paystack_public_key_here
PAYSTACK_SECRET_KEY=sk_test_your_paystack_secret_key_here

# Server Configuration
PORT=3001
```

### 3. Gmail App Password Setup

**Important**: You need to create an App Password for Gmail, not use your regular password.

#### Steps to get Gmail App Password:

1. **Enable 2-Factor Authentication**:
   - Go to your Google Account settings
   - Navigate to Security
   - Enable 2-Step Verification if not already enabled

2. **Generate App Password**:
   - Go to Security → 2-Step Verification
   - Scroll down to "App passwords"
   - Select "Mail" and "Other (Custom name)"
   - Enter "Portfolio Backend" as the name
   - Click "Generate"
   - Copy the 16-character password (no spaces)

3. **Use the App Password**:
   - Replace `your-gmail-app-password` in your `.env` file with the generated password

### 4. Paystack Configuration

1. **Get Your Paystack Keys**:
   - Sign up at [paystack.com](https://paystack.com)
   - Go to Settings → API Keys & Webhooks
   - Copy your Test/Live public and secret keys

2. **Update Environment Variables**:
   - Replace the Paystack keys in your `.env` file
   - Use test keys for development, live keys for production

### 5. Run the Server

```bash
# Development mode
npm run dev

# Production mode
npm run build
npm start
```

## 📧 Email Features

### Contact Form Email
- **Endpoint**: `POST /support-email`
- **Purpose**: Sends emails when someone submits the contact form
- **Email Template**: Professional portfolio contact notification

### Sponsorship Email
- **Endpoint**: `POST /paystack-webhook`
- **Purpose**: Sends notification emails when someone sponsors you
- **Email Template**: Beautiful sponsorship notification with thank you message

## 💳 Paystack Integration

### Webhook Setup
1. **In Paystack Dashboard**:
   - Go to Settings → Webhooks
   - Add webhook URL: `https://your-domain.com/paystack-webhook`
   - Select events: `charge.success`
   - Save the webhook

2. **Webhook Verification**:
   - The server automatically verifies webhook signatures
   - Only processes legitimate Paystack webhooks
   - Sends email notifications for successful payments

## 🔧 API Endpoints

### Contact Form
```http
POST /support-email
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'd like to discuss a project...",
  "phone": "+1234567890"
}
```

### Paystack Webhook
```http
POST /paystack-webhook
Content-Type: application/json
X-Paystack-Signature: [signature]

{
  "event": "charge.success",
  "data": {
    "amount": 5000,
    "reference": "ref_123",
    "customer": {
      "email": "sponsor@example.com",
      "first_name": "Jane",
      "last_name": "Smith"
    }
  }
}
```

### Health Check
```http
GET /health
```

### Root Info
```http
GET /
```

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm test` - Run tests (if configured)

### File Structure
```
backend/
├── src/
│   └── server.ts          # Main server file
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── .env                   # Environment variables (create this)
```

## 🔒 Security Notes

1. **Never commit your `.env` file** to version control
2. **Use environment variables** for all sensitive data
3. **Verify webhook signatures** (already implemented)
4. **Use HTTPS** in production
5. **Regularly update dependencies**

## 🚀 Deployment

### Vercel
1. Connect your GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Railway
1. Connect your GitHub repository
2. Add environment variables
3. Deploy with one click

### Heroku
1. Create a new app
2. Connect your repository
3. Set environment variables
4. Deploy

## 📝 Troubleshooting

### Email Issues
- **"Invalid login"**: Check your Gmail app password
- **"Authentication failed"**: Ensure 2FA is enabled
- **"Quota exceeded"**: Gmail has a 500 emails/day limit

### Paystack Issues
- **"Invalid signature"**: Check your secret key
- **"Webhook not received"**: Verify webhook URL is accessible
- **"Payment not processed"**: Check webhook event types

### Server Issues
- **"Port already in use"**: Change PORT in .env file
- **"Module not found"**: Run `npm install`
- **"TypeScript errors"**: Check your TypeScript configuration

## 📞 Support

For issues with:
- **Email setup**: Check Gmail documentation
- **Paystack**: Refer to Paystack documentation
- **Server**: Check the console logs for detailed error messages

## 🎉 Success!

Once everything is set up:
1. Your contact form will send emails to your inbox
2. Sponsorships will trigger beautiful notification emails
3. All payments will be securely processed through Paystack
4. You'll receive real-time notifications for all interactions

Your portfolio backend is now ready to handle emails and payments! 🚀
