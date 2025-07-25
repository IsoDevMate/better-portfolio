import * as ssh2 from 'ssh2';
import { Server as SshServer, ServerChannel, Session, AuthContext, ClientInfo } from 'ssh2';
import { createSshTerminal } from './terminal';
import * as fs from 'fs/promises';
import * as path from 'path';
import * as crypto from 'crypto';
import { execSync } from 'child_process';

// User type definition
interface User {
  username: string;
  password: string;
  name: string;
  email: string;
}

// SSH Server configuration
interface SSHServerConfig {
  port: number;
  host: string;
  hostKeyPath: string;
}

// User database type
interface UserDatabase {
  [username: string]: User;
}

// This is a simple in-memory user database
const users: UserDatabase = {
  guest: {
    username: 'guest',
    password: 'guest', // In production, use hashed passwords!
    name: 'Guest User',
    email: 'guest@example.com'
  },
  admin: {
    username: 'admin',
    password: 'admin', // In production, use hashed passwords!
    name: 'Administrator',
    email: 'admin@example.com'
  }
};

// Generate or load SSH host key
async function loadOrGenerateHostKey(keyPath: string): Promise<Buffer> {
  try {
    // Try to read existing key
    return await fs.readFile(keyPath);
  } catch (error) {
    console.log('Generating new SSH host key...');
    return generateTempKey(keyPath);
  }
}

// Generate a temporary SSH key
async function generateTempKey(keyPath: string, isRetry: boolean = false): Promise<Buffer> {
  try {
    // First try using ssh-keygen if available
    try {
      execSync('which ssh-keygen');
      execSync(`ssh-keygen -t rsa -b 4096 -f ${keyPath} -N "" -q`);
      console.log(`SSH host key generated using ssh-keygen at: ${keyPath}`);
      return await fs.readFile(keyPath);
    } catch (sshKeygenError) {
      console.log('ssh-keygen not available, falling back to Node.js crypto...');
      
      // Fall back to Node.js crypto
      const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 4096,
        publicKeyEncoding: {
          type: 'pkcs1',
          format: 'pem'
        },
        privateKeyEncoding: {
          type: 'pkcs1',
          format: 'pem'
        }
      });
      
      // Write the private key to file
      await fs.writeFile(keyPath, privateKey);
      console.log(`SSH host key generated using Node.js crypto at: ${keyPath}`);
      return Buffer.from(privateKey);
    }
  } catch (error) {
    console.error('Failed to generate SSH host key:', error);
    
    if (!isRetry) {
      // Try one more time
      console.log('Retrying key generation...');
      return generateTempKey(keyPath, true);
    }
    
    throw new Error('Failed to generate SSH host key after multiple attempts');
  }
}

// Start the SSH server
export async function startSshServer(port: number, host: string = '0.0.0.0'): Promise<void> {
  const keyPath = path.join(process.cwd(), 'ssh_host_rsa_key');
  
  try {
    // Load or generate host key
    const hostKey = await loadOrGenerateHostKey(keyPath);
    
    // Create SSH server
    const sshServer = new SshServer({
      hostKeys: [hostKey],
      // Only allow these key exchange, cipher, and MAC algorithms
      algorithms: {
        kex: [
          'ecdh-sha2-nistp256',
          'ecdh-sha2-nistp384',
          'ecdh-sha2-nistp521',
          'diffie-hellman-group-exchange-sha256',
          'diffie-hellman-group14-sha1'
        ],
        cipher: [
          'aes128-ctr',
          'aes192-ctr',
          'aes256-ctr',
          'aes128-gcm',
          'aes128-gcm@openssh.com',
          'aes256-gcm',
          'aes256-gcm@openssh.com'
        ],
        hmac: [
          'hmac-sha2-256',
          'hmac-sha2-512',
          'hmac-sha1'
        ]
      },
      // Disable deprecated algorithms
      // @ts-ignore - types are incomplete
      preferredSignatureAlgorithms: [
        'rsa-sha2-512',
        'rsa-sha2-256',
        'ssh-rsa'
      ]
    }, (client) => {
      console.log('Client connected');
      
      let username: string | null = null;
      
      // Handle authentication
      client.on('authentication', (ctx: AuthContext) => {
        // For development, accept any username/password
        // In production, implement proper authentication
        username = ctx.username;
        
        if (ctx.method === 'password') {
          if (users[username] && users[username].password === ctx.password) {
            ctx.accept();
          } else {
            ctx.reject();
          }
        } else if (ctx.method === 'none') {
          // Allow passwordless login for development
          ctx.accept();
        } else {
          ctx.reject(['password']);
        }
      });
      
      // Handle client ready event
      client.on('ready', () => {
        console.log(`Client authenticated: ${username}`);
        
        // Handle session
        client.on('session', (accept) => {
          const session = accept();
          
          // Handle shell requests
          session.on('shell', (accept) => {
            const stream = accept();
            if (!stream) return;
            
            // Create a terminal session
            const terminal = createSshTerminal(stream);
            
            // Handle data from the client
            stream.on('data', (data: Buffer) => {
              terminal.onData(data.toString('utf-8'));
            });
            
            // Handle client disconnect
            stream.on('close', () => {
              console.log(`Client disconnected: ${username}`);
              terminal.destroy();
            });
          });
        });
      });
      
      // Handle errors
      client.on('error', (err) => {
        console.error('SSH client error:', err);
      });
    });
    
    // Start listening
    sshServer.listen(port, host, () => {
      console.log(`SSH server listening on ${host}:${port}`);
    });
    
    // Handle server errors
    sshServer.on('error', (err) => {
      console.error('SSH server error:', err);
    });
    
    return sshServer;
    
  } catch (error) {
    console.error('Failed to start SSH server:', error);
    throw error;
  }
}

// Export types
export type { User, UserDatabase, SSHServerConfig };
