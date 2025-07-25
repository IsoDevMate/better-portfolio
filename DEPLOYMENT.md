# Deployment Guide for Terminal Portfolio

This guide will walk you through deploying your terminal portfolio to a production environment.

## Prerequisites

1. **VPS or Cloud Server**
   - Recommended providers: DigitalOcean, Linode, AWS EC2, or Google Cloud
   - Minimum specs: 1GB RAM, 1 vCPU, 25GB SSD
   - Ubuntu 20.04/22.04 LTS or Debian 10/11

2. **Domain Name (Optional but Recommended)**
   - Register a domain (e.g., yourname.dev)
   - Point the domain to your server's IP address

## Server Setup

### 1. Initial Server Configuration

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install essential packages
sudo apt install -y git curl wget build-essential

# Install Node.js 18.x (using nvm is recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18

# Install PM2 process manager
npm install -g pm2

# Install Nginx
sudo apt install -y nginx

# Configure firewall
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw allow 3001  # WebSocket server
sudo ufw allow 2222  # SSH server (if enabled)
sudo ufw enable
```

### 2. Deploy Application

```bash
# Create deployment directory
sudo mkdir -p /var/www/terminal-portfolio
sudo chown $USER:$USER /var/www/terminal-portfolio

# Clone your repository
cd /var/www/terminal-portfolio
git clone <your-repository-url> .

# Install dependencies
cd backend
npm install --production
cd ../frontend
npm install
npm run build

# Create production .env file
cd ../backend
cp .env.example .env
nano .env  # Edit with your configuration
```

### 3. Configure Nginx

Create a new Nginx configuration file:

```bash
sudo nano /etc/nginx/sites-available/terminal-portfolio
```

Add the following configuration (replace `yourdomain.com` with your actual domain):

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    # Redirect HTTP to HTTPS
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;

    # SSL configuration
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    
    # SSL settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    ssl_session_timeout 1d;
    ssl_session_cache shared:SSL:10m;
    ssl_session_tickets off;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

    # Root directory
    root /var/www/terminal-portfolio/frontend/dist;
    index index.html;

    # Handle API requests
    location /api/ {
        proxy_pass http://localhost:3001/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # WebSocket support
    location /ws {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }

    # Serve static files
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Enable the site and test Nginx configuration:

```bash
sudo ln -s /etc/nginx/sites-available/terminal-portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 4. Set Up SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtain SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Set up automatic renewal
sudo systemctl status certbot.timer
```

### 5. Start the Application with PM2

```bash
# Start the backend server
cd /var/www/terminal-portfolio/backend
pm2 start npm --name "terminal-backend" -- start

# Save PM2 process list
pm2 save

# Set up PM2 to start on boot
pm2 startup
# Run the command provided by the above command

# Save the PM2 process list again
pm2 save
```

### 6. Configure SSH Access (Optional)

If you want to enable direct SSH access to your terminal:

```bash
# Install OpenSSH server if not already installed
sudo apt install -y openssh-server

# Configure SSH to run on a different port (optional but recommended)
sudo nano /etc/ssh/sshd_config
# Change Port 22 to Port 2222 (or any other port)
# Add: AllowUsers yourusername

# Restart SSH service
sudo systemctl restart sshd
```

## Post-Deployment Tasks

1. **Set Up Automatic Updates**
   ```bash
   sudo apt install -y unattended-upgrades
   sudo dpkg-reconfigure -plow unattended-upgrades
   ```

2. **Set Up Monitoring**
   ```bash
   # Install monitoring tools
   sudo apt install -y htop nmon
   
   # Monitor logs
   sudo journalctl -u nginx -f
   pm2 logs
   ```

3. **Backup Your Server**
   - Set up regular backups of your application and database
   - Consider using your cloud provider's backup solution

## Updating the Application

When you make changes to your application:

```bash
# Navigate to your project directory
cd /var/www/terminal-portfolio

# Pull the latest changes
git pull

# Rebuild the frontend
cd frontend
npm install
npm run build

# Restart the backend
cd ../backend
npm install --production
pm2 restart terminal-backend
```
## Security Considerations

1. **Firewall Rules**
   - Only open necessary ports (22, 80, 443, 3001, 2222)
   - Use UFW (Uncomplicated Firewall) to manage rules

2. **SSH Security**
   - Disable root login
   - Use SSH keys instead of passwords
   - Change the default SSH port
   - Use fail2ban to prevent brute force attacks

3. **Application Security**
   - Keep all dependencies updated
   - Use environment variables for sensitive data
   - Implement rate limiting
   - Regularly check for security updates

## Troubleshooting

1. **Check Logs**
   ```bash
   # Nginx error logs
   sudo tail -f /var/log/nginx/error.log
   
   # Application logs
   pm2 logs terminal-backend
   ```

2. **Check Ports**
   ```bash
   sudo netstat -tulnp
   ```

3. **Check Service Status**
   ```bash
   sudo systemctl status nginx
   pm2 status
   ```

## Conclusion

Your terminal portfolio is now deployed and accessible at your domain name. The application includes:

- A responsive web interface
- WebSocket-based terminal emulator
- Optional SSH access
- Secure HTTPS connection
- Process management with PM2

For additional security, consider setting up:
- A Web Application Firewall (WAF)
- DDoS protection
- Regular security audits
