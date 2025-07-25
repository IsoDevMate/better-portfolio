// import * as ssh2 from 'ssh2';
// import { Socket } from 'net';
// import * as fs from 'fs';
// import * as path from 'path';
// import { execSync } from 'child_process';

// // Use the correct types from ssh2
// type Server = ssh2.Server;
// type Connection = ssh2.Connection;
// type ServerChannel = ssh2.ServerChannel;
// type Session = ssh2.Session;
// type AuthContext = ssh2.AuthContext;
// type ClientInfo = ssh2.ClientInfo;

// // Create a custom ServerChannel type that extends the original
// type CustomServerChannel = ServerChannel & {
//   socket?: Socket & {
//     end: () => void;
//   };
// };

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
//     username: '',
//     password: '', // In production, use hashed passwords!
//     name: '',
//     email: ''
//   },
//   admin: {
//     username: '',
//     password: '', // In production, use hashed passwords!
//     name: '',
//     email: ''
//   }
// };

// // Command handler type
// type CommandHandler = (stream: ServerChannel, args: string[], username: string) => void;

// // Available commands
// const commands: Record<string, CommandHandler> = {
//   help: (stream, args, username) => {
//     const helpText = `
// Available commands:
//   help     - Show this help message
//   about    - Learn about me
//   projects - View my projects
//   contact  - Get in touch
//   clear    - Clear the screen
//   exit     - Disconnect\n`;
//     stream.write(helpText);
//   },

//   about: (stream, args, username) => {
//     const aboutText = `
// About Me:
//   I'm a passionate developer with experience in building web applications
//   and solving complex problems with code. I love learning new technologies
//   and sharing knowledge with others.\n`;
//     stream.write(aboutText);
//   },

//   projects: (stream, args, username) => {
//     const projectsText = `
// My Projects:
//   1. Project One - A web application for X
//   2. Project Two - A mobile app for Y
//   3. Open Source Contributions - Various open source projects\n`;
//     stream.write(projectsText);
//   },

//   contact: (stream, args, username) => {
//     const contactText = `
// Contact Me:
//   Email: your.email@example.com
//   GitHub: github.com/yourusername
//   LinkedIn: linkedin.com/in/yourusername\n`;
//     stream.write(contactText);
//   },

//   clear: (stream, args, username) => {
//     // Clear the screen (ANSI escape sequence)
//     stream.write('\x1B[2J\x1B[0f');
//   }
// };

// // Handle command execution
// function handleCommand(command: string, stream: ServerChannel, username: string) {
//   if (!command) return;

//   const [cmd, ...args] = command.split(' ');
//   const handler = commands[cmd.toLowerCase()];

//   if (handler) {
//     handler(stream, args, username);
//   } else if (cmd.toLowerCase() === 'exit') {
//     stream.end('Goodbye!\r\n');
//     (stream as CustomServerChannel).socket?.end();
//   } else {
//     stream.write(`Command not found: ${cmd}\n`);
//   }
// }

// // Show command prompt
// function showPrompt(stream: ServerChannel) {
//   stream.write('portfolio$ ');
// }

// // More robust key generation that works with SSH2 - Fixed TypeScript errors
// const generateTempKey = (keyPath: string, isRetry: boolean = false): Buffer => {
//   const keyDir = path.dirname(keyPath);
//   if (!fs.existsSync(keyDir)) {
//     fs.mkdirSync(keyDir, { recursive: true });
//   }

//   if (!fs.existsSync(keyPath)) {
//     console.log('Generating new SSH host key...');

//     try {
//       // Method 1: Try using ssh-keygen (most compatible)
//       console.log('Attempting to generate key using ssh-keygen...');
//       execSync(`ssh-keygen -t rsa -b 2048 -f "${keyPath}" -N "" -m PEM`, {
//         stdio: 'pipe' // Don't show output unless there's an error
//       });
//       console.log(`SSH host key generated successfully using ssh-keygen at: ${keyPath}`);
//     } catch (sshKeygenError) {
//       console.log('ssh-keygen not available or failed, trying Node.js crypto...');

//       try {
//         // Method 2: Use Node.js crypto with PKCS#1 format
//         const { generateKeyPairSync } = require('crypto');

//         const { privateKey } = generateKeyPairSync('rsa', {
//           modulusLength: 2048,
//           publicKeyEncoding: {
//             type: 'spki',
//             format: 'pem'
//           },
//           privateKeyEncoding: {
//             type: 'pkcs1', // SSH2 prefers PKCS#1
//             format: 'pem'
//           }
//         });

//         fs.writeFileSync(keyPath, privateKey);
//         console.log(`SSH host key generated using Node.js crypto at: ${keyPath}`);
//       } catch (cryptoError) {
//         console.log('PKCS#1 failed, trying PKCS#8...');

//         try {
//           // Method 3: Fallback to PKCS#8 (sometimes works)
//           const { generateKeyPairSync } = require('crypto');

//           const { privateKey } = generateKeyPairSync('rsa', {
//             modulusLength: 2048,
//             publicKeyEncoding: {
//               type: 'spki',
//               format: 'pem'
//             },
//             privateKeyEncoding: {
//               type: 'pkcs8',
//               format: 'pem'
//             }
//           });

//           fs.writeFileSync(keyPath, privateKey);
//           console.log(`SSH host key generated using PKCS#8 format at: ${keyPath}`);
//         } catch (pkcs8Error) {
//           // Method 4: Use a hardcoded test key (development only!)
//           console.log('All key generation methods failed, using test key (DEVELOPMENT ONLY)');
//           const testKey = `-----BEGIN RSA PRIVATE KEY-----
// MIIEpAIBAAKCAQEAyWGWjWDYdqrKGkE8UhXu9UhXrHjKcN7LdqXq9J7k8E8u8K8Q
// l8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8k
// UhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhX
// rHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHj
// KcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN
// 7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7Ld
// qXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq
// 9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7
// k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E
// 8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8
// K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Q
// l8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8k
// UhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhX
// rHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHj
// KcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN
// 7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7
// -----END RSA PRIVATE KEY-----`;

//           fs.writeFileSync(keyPath, testKey);
//           console.warn('WARNING: Using test key for development. Generate proper key for production!');
//         }
//       }
//     }
//   }

//   console.log(`Loading SSH host key from: ${keyPath}`);
//   try {
//     const keyData = fs.readFileSync(keyPath);
//     const keyString = keyData.toString();

//     // Basic validation
//     if (!keyString.includes('-----BEGIN') || !keyString.includes('-----END')) {
//       throw new Error('Invalid key format - missing PEM markers');
//     }

//     // Check if it looks like a valid RSA key
//     if (!keyString.includes('RSA PRIVATE KEY') && !keyString.includes('PRIVATE KEY')) {
//       throw new Error('Key does not appear to be a valid RSA private key');
//     }

//     console.log('SSH host key loaded and validated successfully');
//     return keyData;
//   } catch (error) {
//     console.error('Error reading SSH key:', error);

//     // Remove the problematic key and try again (but only once to avoid infinite recursion)
//     if (fs.existsSync(keyPath)) {
//       console.log('Removing problematic key file and regenerating...');
//       fs.unlinkSync(keyPath);
//       // Use the isRetry parameter to prevent infinite recursion
//       if (!isRetry) {
//         return generateTempKey(keyPath, true);
//       }
//     }

//     // Handle the error properly with type checking
//     const errorMessage = error instanceof Error ? error.message : String(error);
//     throw new Error(`Failed to generate or load SSH host key: ${errorMessage}`);
//   }
// };

// // Server configuration
// const config: SSHServerConfig = {
//   port: parseInt(process.env.SSH_PORT || '2222'),
//   host: process.env.HOST || '0.0.0.0',
//   hostKeyPath: process.env.SSH_HOST_KEY_PATH || path.join(__dirname, '../ssh/host_key')
// };

// // Generate or load host key
// let hostKey: Buffer;
// try {
//   hostKey = generateTempKey(config.hostKeyPath);
//   console.log('SSH host key setup completed successfully');
// } catch (error) {
//   const errorMessage = error instanceof Error ? error.message : String(error);
//   console.error('Failed to setup SSH host key:', errorMessage);
//   console.error('Please ensure you have ssh-keygen installed or check file permissions');
//   process.exit(1);
// }

// // Create SSH server with minimal configuration
// const sshServer = new ssh2.Server({
//   hostKeys: [hostKey]
// });

// sshServer.on('connection', (client: Connection, info: ClientInfo) => {
//   console.log('New SSH connection from:', info.ip);
//   let username: string = '';

//   // Handle authentication
//   client.on('authentication', (ctx: AuthContext) => {
//     username = ctx.username;
//     const password = ctx.method === 'password' ? ctx.password : null;

//     if (password && users[username] && users[username].password === password) {
//       ctx.accept();
//     } else {
//       ctx.reject();
//     }
//   });

//   // Handle authenticated session
//   client.on('ready', () => {
//     console.log(`Client authenticated: ${username}`);

//     client.on('session', (accept, reject) => {
//       const session = accept();
//       if (!session) return;

//       // Handle shell session
//       session.on('shell', (accept) => {
//         const stream = accept() as CustomServerChannel;
//         if (!stream) return;

//         // Set terminal settings
//         stream.setEncoding('utf8');

//         // Display welcome message and prompt
//         const welcomeMessage = `
//   Welcome to ${users[username]?.name || 'My'}'s Portfolio!
//   Type 'help' to see available commands.\n\n`;

//         stream.write(welcomeMessage);
//         showPrompt(stream);

//         // Handle user input
//         let commandBuffer = '';
//         stream.on('data', (data: Buffer) => {
//           const input = data.toString('utf8');

//           // Handle backspace/delete
//           if (input === '\x7f' || input === '\b') {
//             if (commandBuffer.length > 0) {
//               commandBuffer = commandBuffer.slice(0, -1);
//               stream.write('\b \b');
//             }
//             return;
//           }

//           // Handle enter key
//           if (input === '\r' || input === '\n' || input === '\r\n') {
//             stream.write('\r\n');
//             handleCommand(commandBuffer.trim(), stream, username);
//             commandBuffer = '';
//             showPrompt(stream);
//           } else if (input.length === 1 && input >= ' ' && input <= '~') {
//             // Only append printable ASCII characters
//             commandBuffer += input;
//             stream.write(input);
//           }
//         });

//         // Handle stream end
//         stream.on('end', () => {
//           console.log(`Shell session ended for user: ${username}`);
//         });
//       });
//     });
//   });

//   client.on('end', () => {
//     console.log('Client disconnected');
//   });

//   client.on('error', (err: Error) => {
//     console.error('Client error:', err);
//   });
// });

// // Start the SSH server
// const PORT = config.port;
// sshServer.listen(PORT, config.host, () => {
//   console.log(`SSH server started on ${config.host}:${PORT}`);
//   console.log('Connect using: ssh -p 2222 guest@localhost');
//   console.log('Available users: guest (password123), admin (admin123)');
// });

// // Handle server errors
// sshServer.on('error', (err: Error) => {
//   console.error('SSH Server error:', err);

//   // Provide helpful error messages
//   if (err.message.includes('EADDRINUSE')) {
//     console.error(`Port ${PORT} is already in use. Try stopping other SSH servers or use a different port.`);
//   } else if (err.message.includes('EACCES')) {
//     console.error(`Permission denied. Try using a port number above 1024 or run with sudo.`);
//   }
// });

// // Handle process termination
// process.on('SIGINT', () => {
//   console.log('\nShutting down server...');
//   sshServer.close();
//   process.exit();
// });

// process.on('SIGTERM', () => {
//   console.log('\nReceived SIGTERM, shutting down server...');
//   sshServer.close();
//   process.exit();
// });

// // Unhandled promise rejection handler
// process.on('unhandledRejection', (reason, promise) => {
//   console.error('Unhandled Promise Rejection at:', promise, 'reason:', reason);
// });

// // Uncaught exception handler
// process.on('uncaughtException', (error) => {
//   console.error('Uncaught Exception:', error);
//   process.exit(1);
// });



import * as ssh2 from 'ssh2';
import { Socket } from 'net';
import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

// Use the correct types from ssh2
type Server = ssh2.Server;
type Connection = ssh2.Connection;
type ServerChannel = ssh2.ServerChannel;
type Session = ssh2.Session;
type AuthContext = ssh2.AuthContext;
type ClientInfo = ssh2.ClientInfo;

// Create a custom ServerChannel type that extends the original
type CustomServerChannel = ServerChannel & {
  socket?: Socket & {
    end: () => void;
  };
};

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
    password: 'password123', // In production, use hashed passwords!
    name: 'Guest User',
    email: 'guest@example.com'
  },
  admin: {
    username: 'admin',
    password: 'admin123', // In production, use hashed passwords!
    name: 'Admin User',
    email: 'admin@example.com'
  }
};

// Command handler type
type CommandHandler = (stream: ServerChannel, args: string[], username: string) => void;

// Available commands
const commands: Record<string, CommandHandler> = {
  help: (stream, args, username) => {
    const helpText = `
Available commands:
  help     - Show this help message
  about    - Learn about me
  projects - View my projects
  contact  - Get in touch
  clear    - Clear the screen
  exit     - Disconnect\n`;
    stream.write(helpText);
  },

  about: (stream, args, username) => {
    const aboutText = `
About Me:
  I'm a passionate developer with experience in building web applications
  and solving complex problems with code. I love learning new technologies
  and sharing knowledge with others.\n`;
    stream.write(aboutText);
  },

  projects: (stream, args, username) => {
    const projectsText = `
My Projects:
  1. Project One - A web application for X
  2. Project Two - A mobile app for Y
  3. Open Source Contributions - Various open source projects\n`;
    stream.write(projectsText);
  },

  contact: (stream, args, username) => {
    const contactText = `
Contact Me:
  Email: your.email@example.com
  GitHub: github.com/yourusername
  LinkedIn: linkedin.com/in/yourusername\n`;
    stream.write(contactText);
  },

  clear: (stream, args, username) => {
    // Clear the screen (ANSI escape sequence)
    stream.write('\x1B[2J\x1B[0f');
  }
};

// Handle command execution
function handleCommand(command: string, stream: ServerChannel, username: string) {
  if (!command) return;

  const [cmd, ...args] = command.split(' ');
  const handler = commands[cmd.toLowerCase()];

  if (handler) {
    handler(stream, args, username);
  } else if (cmd.toLowerCase() === 'exit') {
    stream.end('Goodbye!\r\n');
    (stream as CustomServerChannel).socket?.end();
  } else {
    stream.write(`Command not found: ${cmd}\n`);
  }
}

// Show command prompt
function showPrompt(stream: ServerChannel) {
  stream.write('portfolio$ ');
}

// More robust key generation that works with SSH2 - Fixed TypeScript errors
const generateTempKey = (keyPath: string, isRetry: boolean = false): Buffer => {
  const keyDir = path.dirname(keyPath);
  if (!fs.existsSync(keyDir)) {
    fs.mkdirSync(keyDir, { recursive: true });
  }

  if (!fs.existsSync(keyPath)) {
    console.log('Generating new SSH host key...');

    try {
      // Method 1: Try using ssh-keygen (most compatible)
      console.log('Attempting to generate key using ssh-keygen...');
      execSync(`ssh-keygen -t rsa -b 2048 -f "${keyPath}" -N "" -m PEM`, {
        stdio: 'pipe' // Don't show output unless there's an error
      });
      console.log(`SSH host key generated successfully using ssh-keygen at: ${keyPath}`);
    } catch (sshKeygenError) {
      console.log('ssh-keygen not available or failed, trying Node.js crypto...');

      try {
        // Method 2: Use Node.js crypto with PKCS#1 format
        const { generateKeyPairSync } = require('crypto');

        const { privateKey } = generateKeyPairSync('rsa', {
          modulusLength: 2048,
          publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
          },
          privateKeyEncoding: {
            type: 'pkcs1', // SSH2 prefers PKCS#1
            format: 'pem'
          }
        });

        fs.writeFileSync(keyPath, privateKey);
        console.log(`SSH host key generated using Node.js crypto at: ${keyPath}`);
      } catch (cryptoError) {
        console.log('PKCS#1 failed, trying PKCS#8...');

        try {
          // Method 3: Fallback to PKCS#8 (sometimes works)
          const { generateKeyPairSync } = require('crypto');

          const { privateKey } = generateKeyPairSync('rsa', {
            modulusLength: 2048,
            publicKeyEncoding: {
              type: 'spki',
              format: 'pem'
            },
            privateKeyEncoding: {
              type: 'pkcs8',
              format: 'pem'
            }
          });

          fs.writeFileSync(keyPath, privateKey);
          console.log(`SSH host key generated using PKCS#8 format at: ${keyPath}`);
        } catch (pkcs8Error) {
          // Method 4: Use a hardcoded test key (development only!)
          console.log('All key generation methods failed, using test key (DEVELOPMENT ONLY)');
          const testKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAyWGWjWDYdqrKGkE8UhXu9UhXrHjKcN7LdqXq9J7k8E8u8K8Q
l8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8k
UhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhX
rHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHj
KcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN
7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7Ld
qXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq
9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7
k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E
8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8
K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Q
l8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8k
UhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhX
rHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHj
KcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN
7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7LdqXq9J7k8E8u8K8Ql8kUhXrHjKcN7
-----END RSA PRIVATE KEY-----`;

          fs.writeFileSync(keyPath, testKey);
          console.warn('WARNING: Using test key for development. Generate proper key for production!');
        }
      }
    }
  }

  console.log(`Loading SSH host key from: ${keyPath}`);
  try {
    const keyData = fs.readFileSync(keyPath);
    const keyString = keyData.toString();

    // Basic validation
    if (!keyString.includes('-----BEGIN') || !keyString.includes('-----END')) {
      throw new Error('Invalid key format - missing PEM markers');
    }

    // Check if it looks like a valid RSA key
    if (!keyString.includes('RSA PRIVATE KEY') && !keyString.includes('PRIVATE KEY')) {
      throw new Error('Key does not appear to be a valid RSA private key');
    }

    console.log('SSH host key loaded and validated successfully');
    return keyData;
  } catch (error) {
    console.error('Error reading SSH key:', error);

    // Remove the problematic key and try again (but only once to avoid infinite recursion)
    if (fs.existsSync(keyPath)) {
      console.log('Removing problematic key file and regenerating...');
      fs.unlinkSync(keyPath);
      // Use the isRetry parameter to prevent infinite recursion
      if (!isRetry) {
        return generateTempKey(keyPath, true);
      }
    }

    // Handle the error properly with type checking
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to generate or load SSH host key: ${errorMessage}`);
  }
};

// Server configuration
const config: SSHServerConfig = {
  port: parseInt(process.env.SSH_PORT || '2222'),
  host: process.env.HOST || '0.0.0.0',
  hostKeyPath: process.env.SSH_HOST_KEY_PATH || path.join(__dirname, '../ssh/host_key')
};

// Generate or load host key
let hostKey: Buffer;
try {
  hostKey = generateTempKey(config.hostKeyPath);
  console.log('SSH host key setup completed successfully');
} catch (error) {
  const errorMessage = error instanceof Error ? error.message : String(error);
  console.error('Failed to setup SSH host key:', errorMessage);
  console.error('Please ensure you have ssh-keygen installed or check file permissions');
  process.exit(1);
}

// Create SSH server with minimal configuration
const sshServer = new ssh2.Server({
  hostKeys: [hostKey]
});

sshServer.on('connection', (client: Connection, info: ClientInfo) => {
  console.log('New SSH connection from:', info.ip);
  let username: string = '';

  // Handle authentication - Accept anyone without password
  client.on('authentication', (ctx: AuthContext) => {
    username = ctx.username || 'anonymous';
    // Accept any authentication method without validation
    ctx.accept();
  });

  // Handle authenticated session
  client.on('ready', () => {
    console.log(`Client authenticated: ${username}`);

    client.on('session', (accept, reject) => {
      const session = accept();
      if (!session) return;

      // Handle shell session
      session.on('shell', (accept) => {
        const stream = accept() as CustomServerChannel;
        if (!stream) return;

        // Set terminal settings
        stream.setEncoding('utf8');

        // Display welcome message and prompt
        const welcomeMessage = `
  Welcome to My Portfolio Terminal!
  Type 'help' to see available commands.
  Connected as: ${username}\n\n`;

        stream.write(welcomeMessage);
        showPrompt(stream);

        // Handle user input
        let commandBuffer = '';
        stream.on('data', (data: Buffer) => {
          const input = data.toString('utf8');

          // Handle backspace/delete
          if (input === '\x7f' || input === '\b') {
            if (commandBuffer.length > 0) {
              commandBuffer = commandBuffer.slice(0, -1);
              stream.write('\b \b');
            }
            return;
          }

          // Handle enter key
          if (input === '\r' || input === '\n' || input === '\r\n') {
            stream.write('\r\n');
            handleCommand(commandBuffer.trim(), stream, username);
            commandBuffer = '';
            showPrompt(stream);
          } else if (input.length === 1 && input >= ' ' && input <= '~') {
            // Only append printable ASCII characters
            commandBuffer += input;
            stream.write(input);
          }
        });

        // Handle stream end
        stream.on('end', () => {
          console.log(`Shell session ended for user: ${username}`);
        });
      });
    });
  });

  client.on('end', () => {
    console.log('Client disconnected');
  });

  client.on('error', (err: Error) => {
    console.error('Client error:', err);
  });
});

// Start the SSH server
const PORT = config.port;
sshServer.listen(PORT, config.host, () => {
  console.log(`SSH server started on ${config.host}:${PORT}`);
  console.log('Connect using: ssh -p 2222 <any_username>@localhost');
  console.log('No password required - anyone can connect!');
});

// Handle server errors
sshServer.on('error', (err: Error) => {
  console.error('SSH Server error:', err);

  // Provide helpful error messages
  if (err.message.includes('EADDRINUSE')) {
    console.error(`Port ${PORT} is already in use. Try stopping other SSH servers or use a different port.`);
  } else if (err.message.includes('EACCES')) {
    console.error(`Permission denied. Try using a port number above 1024 or run with sudo.`);
  }
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\nShutting down server...');
  sshServer.close();
  process.exit();
});

process.on('SIGTERM', () => {
  console.log('\nReceived SIGTERM, shutting down server...');
  sshServer.close();
  process.exit();
});

// Unhandled promise rejection handler
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Promise Rejection at:', promise, 'reason:', reason);
});

// Uncaught exception handler
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});
