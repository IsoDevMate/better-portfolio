# Server Structure Overview

This backend has been designed to support both the original SSH terminal functionality and the new email/Paystack sponsorship features.

## 📁 File Structure

```
backend/src/
├── index.ts              # Main server entry point (SSH + WebSocket + HTTP)
├── server.ts             # Email and Paystack functionality
├── ssh-server.ts         # SSH server implementation
├── terminal.ts           # Terminal functionality
├── websocket-server.ts   # WebSocket server
├── commands.ts           # Terminal commands
└── types/                # TypeScript type definitions
```

## 🚀 How to Run

### Option 1: Full Server (SSH + Email + WebSocket)
```bash
cd backend
npm run dev
```
This runs `index.ts` which includes:
- SSH server on port 2223
- WebSocket server
- HTTP server on port 3001
- Email and Paystack functionality

### Option 2: Email/Sponsorship Only
```bash
cd backend
npm run start
```
This runs `server.ts` which includes:
- HTTP server on port 3001
- Email functionality
- Paystack webhook handling
- Contact form processing

## 🔧 Server Files Explained

### `index.ts` - Main Entry Point
- **Purpose**: Complete server with SSH, WebSocket, and HTTP
- **Ports**:
  - HTTP: 3001
  - SSH: 2223
  - WebSocket: 3001 (same as HTTP)
- **Features**: All functionality combined

### `server.ts` - Email & Sponsorship Server
- **Purpose**: Email and Paystack functionality only
- **Port**: 3001
- **Features**:
  - Contact form email processing
  - Sponsorship notification emails
  - Paystack webhook verification
  - Health check endpoints

### `ssh-server.ts` - SSH Server
- **Purpose**: SSH terminal server
- **Features**:
  - User authentication
  - Terminal sessions
  - SSH key management

### `websocket-server.ts` - WebSocket Server
- **Purpose**: Real-time terminal communication
- **Features**:
  - WebSocket connections
  - Terminal data streaming
  - Connection management

## 📧 Email Features

### Contact Form (`POST /support-email`)
- Processes contact form submissions
- Sends professional email notifications
- Includes contact details and message

### Sponsorship Notifications (`POST /sponsorship-email`)
- Sends sponsorship notification emails
- Beautiful HTML templates
- Includes sponsor details and amount

### Paystack Webhook (`POST /paystack-webhook`)
- Verifies Paystack webhook signatures
- Processes successful payments
- Sends automatic sponsorship notifications

## 🔐 SSH Features

### SSH Server
- **Port**: 2223
- **Authentication**: Username/password
- **Users**: guest/guest, admin/admin
- **Features**: Full terminal access

### WebSocket Terminal
- **Port**: 3001 (same as HTTP)
- **Purpose**: Browser-based terminal
- **Features**: Real-time terminal interaction

## 🌐 API Endpoints

### Email & Sponsorship
```http
POST /support-email          # Contact form emails
POST /sponsorship-email      # Sponsorship notifications
POST /paystack-webhook       # Paystack webhook verification
GET /health                  # Health check
GET /                        # Server info
```

### SSH & WebSocket
```http
SSH: ssh://localhost:2223    # SSH terminal access
WS: ws://localhost:3001      # WebSocket terminal
```

## 🛠️ Development

### Environment Variables
Create `.env` file in `backend/` directory:

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
SSH_PORT=2223
HOST=0.0.0.0
```

### Available Scripts
```bash
npm run dev      # Development mode (index.ts)
npm run start    # Production mode (server.ts)
npm run build    # Build TypeScript
```

## 🚀 Deployment Options

### Option 1: Full Server (Recommended)
- Deploy `index.ts` for complete functionality
- Includes SSH, WebSocket, and email features
- Use for full portfolio experience

### Option 2: Email Only
- Deploy `server.ts` for email/sponsorship only
- Lighter weight, focused on contact and payments
- Use if SSH functionality not needed

## 🔒 Security Notes

1. **SSH Security**:
   - Change default passwords in production
   - Use proper SSH key authentication
   - Limit SSH access to trusted IPs

2. **Email Security**:
   - Use Gmail App Passwords (not regular passwords)
   - Enable 2FA on Gmail account
   - Keep environment variables secure

3. **Paystack Security**:
   - Verify webhook signatures
   - Use HTTPS in production
   - Keep secret keys secure

## 📝 Usage Examples

### Start Full Server
```bash
cd backend
npm run dev
# SSH: ssh guest@localhost -p 2223
# WebSocket: ws://localhost:3001
# HTTP: http://localhost:3001
```

### Start Email Server Only
```bash
cd backend
npm run start
# HTTP: http://localhost:3001
# Email endpoints available
```

### Test Contact Form
```bash
curl -X POST http://localhost:3001/support-email \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "subject": "Test",
    "message": "Hello!"
  }'
```

### Test Health Check
```bash
curl http://localhost:3001/health
```

## 🎯 Summary

The backend is designed to be flexible:
- **Full functionality**: Use `index.ts` for complete SSH + Email + WebSocket
- **Email only**: Use `server.ts` for contact forms and sponsorships
- **Modular**: Each feature is in its own file for easy maintenance

Choose the deployment option that best fits your needs! 🚀
