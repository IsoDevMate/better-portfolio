# Payment Callback & Keep-Alive Setup

## 🎯 What I've Added

### 1. **Payment Callback Page** ✅
- **File**: `src/pages/terminal-payment-callback.jsx`
- **Route**: `/terminal-payment-callback`
- **Features**:
  - Payment verification with your backend
  - Success/Error status display
  - Payment details showing
  - Navigation back to home/terminal

### 2. **Keep-Alive with node-cron** ✅
- **Interval**: Every minute
- **Method**: Self-pinging `/health` endpoint
- **Simple**: Just logs success/failure

## 🔧 Installation Steps

### 1. Install Dependencies
```bash
cd backend
npm install node-cron @types/node-cron
```

### 2. Environment Variables
Add to your backend `.env`:
```env
SERVER_URL=https://better-portfolio.onrender.com
```

### 3. Deploy Both Frontend & Backend
- Deploy frontend to Vercel
- Deploy backend to Render
- Set environment variables in Render dashboard

## 🚀 How It Works

### Payment Flow:
1. User makes payment in terminal
2. Paystack redirects to: `https://barack-ouma-portfolio.vercel.app/terminal-payment-callback?reference=xxx`
3. Callback page verifies payment with your backend
4. Shows success/error status to user

### Keep-Alive Flow:
1. Server starts → cron job begins
2. Every minute → pings `/health` endpoint
3. Logs success/failure in console

## 📋 URLs for Paystack Configuration

### Webhook URL:
```
https://better-portfolio.onrender.com/paystack-webhook
```

### Callback URL:
```
https://barack-ouma-portfolio.vercel.app/terminal-payment-callback
```

## 🔍 Testing

### Test Payment Callback:
1. Make a test payment
2. Should redirect to callback page
3. Should show payment verification status

### Test Keep-Alive:
1. Check server logs in Render
2. Should see keep-alive logs every minute:
```
🔄 Keep-alive cron job running...
✅ Keep-alive ping successful at 2024-01-15T10:30:00.000Z
```

## 🐛 Troubleshooting

### Payment Callback Not Working:
1. Check if route is added to App.jsx
2. Verify backend URL in callback page
3. Check browser console for errors

### Keep-Alive Not Working:
1. Install node-cron: `npm install node-cron @types/node-cron`
2. Check if SERVER_URL is set correctly
3. Verify server can reach itself

## 📞 Next Steps

1. **Install dependencies** in backend
2. **Deploy both** frontend and backend
3. **Test payment flow** end-to-end
4. **Monitor keep-alive** logs in Render

The payment callback page is now ready and will handle the redirect from Paystack properly! 🎉
