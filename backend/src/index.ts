#!/usr/bin/env node

import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import express from 'express';
import { startSshServer } from './ssh-server';
import { setupWebSocketServer } from './websocket-server';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get directory name in a way that works with both ES modules and CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3001;
const HOST = process.env.HOST || '0.0.0.0';
const SSH_PORT = process.env.SSH_PORT ? parseInt(process.env.SSH_PORT) : 2223; // Changed from 2222 to 2223

// Create Express app
const app = express();
const server = createServer(app);

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../dist')));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Handle SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

// Start the HTTP server
server.listen(PORT, HOST, () => {
  console.log(`HTTP server running on http://${HOST}:${PORT}`);
});

// Start WebSocket server
const wss = new WebSocketServer({ server });
setupWebSocketServer(wss);
console.log(`WebSocket server running on ws://${HOST}:${PORT}`);

// Start SSH server
startSshServer(SSH_PORT, HOST);
console.log(`SSH server running on port ${SSH_PORT}`);

// Handle graceful shutdown
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // Don't exit immediately, let the server continue running
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Don't exit immediately, let the server continue running
});

// Graceful shutdown function
function gracefulShutdown() {
  console.log('Shutting down gracefully...');
  
  // Close the HTTP server
  server.close((err) => {
    if (err) {
      console.error('Error closing HTTP server:', err);
    } else {
      console.log('HTTP server closed');
    }
    
    // Close the WebSocket server
    wss.close((err) => {
      if (err) {
        console.error('Error closing WebSocket server:', err);
      } else {
        console.log('WebSocket server closed');
      }
      
      // Exit the process
      process.exit(0);
    });
  });
}
