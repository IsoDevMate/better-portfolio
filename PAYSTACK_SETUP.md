# Paystack Integration Setup Guide

## 🎯 Current Backend Configuration

Your backend already has the following Paystack integration:

### ✅ Implemented Features:
1. **Terminal Sponsorship Payment** (`POST /terminal-sponsor`)
2. **Payment Verification** (`POST /verify-payment`)
3. **Webhook Handler** (`POST /paystack-webhook`)
4. **Server IP Detection** (`GET /server-ip`)

## 🔧 Required Configuration

### 1. Get Your Server IP Address

After deploying to Render, visit:
```
https://better-portfolio.onrender.com/server-ip
```

This will return your server's public IP address needed for Paystack whitelisting.

### 2. Paystack Dashboard Configuration

#### A. Webhook URL Setup
- **Webhook URL**: `https://better-portfolio.onrender.com/paystack-webhook`
- **Events to listen for**: `charge.success`
- **HTTP Method**: `POST`

#### B. IP Whitelisting
1. Go to Paystack Dashboard → Settings → Webhooks
2. Add your server IP address (from `/server-ip` endpoint)
3. **Note**: Render IPs can change, so you may need to update this periodically

#### C. Environment Variables Required
```env
PAYSTACK_SECRET_KEY=sk_test_... # Your Paystack secret key
PAYSTACK_PUBLIC_KEY=pk_test_... # Your Paystack public key
FRONTEND_URL=https://your-frontend-domain.com # Your frontend URL
```

### 3. Frontend Callback URL

The callback URL is configured in your backend as:
```
${process.env.FRONTEND_URL}/terminal-payment-callback
```

Make sure your frontend has a route to handle this callback.

## 🚀 Deployment Checklist

### Backend (Render):
- [ ] Deploy your backend to Render
- [ ] Set environment variables in Render dashboard
- [ ] Get server IP from `/server-ip` endpoint
- [ ] Configure Paystack webhook URL
- [ ] Whitelist server IP in Paystack

### Frontend:
- [ ] Create `/terminal-payment-callback` route
- [ ] Handle payment success/failure states
- [ ] Set `FRONTEND_URL` environment variable

## 🔍 Testing Your Setup

### 1. Test Server IP Detection
```bash
curl https://better-portfolio.onrender.com/server-ip
```

### 2. Test Webhook (using ngrok for local testing)
```bash
# Install ngrok
npm install -g ngrok

# Expose your local server
ngrok http 3001

# Use the ngrok URL as your webhook URL for testing
```

### 3. Test Payment Flow
1. Make a test payment through your terminal
2. Check webhook logs in your server console
3. Verify email notifications are sent

## 📧 Email Notifications

Your backend automatically sends email notifications for:
- ✅ Successful payments
- ✅ Terminal sponsorships
- ✅ Contact form submissions

## 🔒 Security Features

- ✅ Webhook signature verification
- ✅ Environment variable protection
- ✅ Input validation
- ✅ Error handling

## 🐛 Troubleshooting

### Common Issues:

1. **Webhook not receiving events**
   - Check IP whitelisting in Paystack
   - Verify webhook URL is correct
   - Check server logs for errors

2. **Payment verification failing**
   - Ensure `PAYSTACK_SECRET_KEY` is correct
   - Check reference format
   - Verify amount conversion (kobo to naira)

3. **Email not sending**
   - Check email provider configuration
   - Verify `RECIPIENT_EMAIL` is set
   - Check email provider credentials

## 📞 Support

If you encounter issues:
1. Check server logs in Render dashboard
2. Verify all environment variables are set
3. Test webhook with ngrok for local debugging
4. Check Paystack dashboard for webhook delivery status
