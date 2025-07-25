import express, { Request, Response } from 'express';
import { createServer, Server as HttpServer } from 'http';
import { WebSocket, WebSocketServer } from 'ws';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createWebSocketTerminal } from './terminal';

// Extend WebSocket type to include _socket property
declare module 'ws' {
  interface WebSocket {
    _socket: {
      remoteAddress?: string;
    };
  }
}

// Get directory name in a way that works with both ES modules and CommonJS
const getDirName = (url: string) => {
  const __filename = fileURLToPath(url);
  return dirname(__filename);
};

// Define WebSocket message types
interface TerminalInputMessage {
  type: 'input';
  data: string;
}

interface TerminalResizeMessage {
  type: 'resize';
  cols: number;
  rows: number;
}

type TerminalMessage = TerminalInputMessage | TerminalResizeMessage;

// Create Express app
const app = express();
const server: HttpServer = createServer(app);
const wss = new WebSocketServer({ server });

// Track connected clients
const clients = new Set<WebSocket>();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../dist')));

// WebSocket connection handler
wss.on('connection', (ws: WebSocket) => {
  console.log('New WebSocket connection');
  clients.add(ws);
  
  // Initialize a new terminal session for this connection
  const terminal = initTerminalSession(ws);
  
  // Handle incoming messages from the client
  ws.on('message', (message: string) => {
    try {
      const data = JSON.parse(message) as TerminalMessage;
      console.log('Received:', data);
      
      // Handle different types of messages from the client
      switch (data.type) {
        case 'input':
          // Forward input to the terminal session
          terminal.onData(data.data);
          break;
          
        case 'resize':
          console.log(`Terminal resized to ${data.cols}x${data.rows}`);
          terminal.onResize(data.cols, data.rows);
          break;
          
        default:
          console.warn('Unknown message type:', (data as any).type);
          ws.send(JSON.stringify({
            type: 'output',
            data: `Unknown message type: ${(data as any).type}\r\n$ `
          }));
      }
    } catch (error) {
      console.error('Error processing message:', error);
      ws.send(JSON.stringify({
        type: 'output',
        data: 'Error: Invalid message format\r\n$ '
      }));
    }
  });
  
  // Handle client disconnection
  ws.on('close', () => {
    console.log('Client disconnected');
    cleanupTerminalSession(ws);
    clients.delete(ws);
  });
  
  // Handle errors
  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
    cleanupTerminalSession(ws);
    clients.delete(ws);
  });
});

// Map to store terminal instances for each WebSocket connection
const terminalSessions = new Map<WebSocket, ReturnType<typeof createWebSocketTerminal>>();

// Initialize a new terminal session for a WebSocket connection
function initTerminalSession(ws: WebSocket) {
  // Create a new terminal session for this WebSocket
  const terminal = createWebSocketTerminal(ws as any);
  terminalSessions.set(ws, terminal);
  
  // Send welcome message
  const welcomeMsg = `
  Welcome to the Portfolio Terminal
  ==============================
  Type 'help' to see available commands
  Connected from ${ws._socket?.remoteAddress || 'unknown'}
  Current directory: ${terminal.cwd}
  
  $ `;
  
  ws.send(JSON.stringify({
    type: 'output',
    data: welcomeMsg
  }));
  
  return terminal;
}

// Clean up terminal session when connection closes
function cleanupTerminalSession(ws: WebSocket) {
  const terminal = terminalSessions.get(ws);
  if (terminal) {
    terminal.destroy();
    terminalSessions.delete(ws);
  }
}

// Health check endpoint
app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', clients: clients.size });
});

// Serve the React app for all other routes
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

// Error handling middleware
app.use((err: Error, _req: Request, res: Response, _next: Function) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || '0.0.0.0';

server.listen(Number(PORT), HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
  console.log(`WebSocket server running on ws://${HOST}:${PORT}`);
  console.log(`Health check: http://${HOST}:${PORT}/health`);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('Shutting down server...');
  
  // Close all WebSocket connections
  clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.close(1001, 'Server shutting down');
    }
  });
  
  // Close the HTTP server
  server.close(() => {
    console.log('Server stopped');
    process.exit(0);
  });
});
