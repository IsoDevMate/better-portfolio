import { Writable } from 'stream';
import { Socket } from 'net';
import { handleCommand, CommandResponse } from './commands';

// Custom stream to handle WebSocket output
class TerminalStream extends Writable {
  private writeCallback: (data: string) => void;

  constructor(writeCallback: (data: string) => void) {
    super();
    this.writeCallback = writeCallback;
  }

  _write(chunk: any, _encoding: string, callback: (error?: Error | null) => void) {
    try {
      this.writeCallback(chunk.toString());
      callback();
    } catch (error) {
      callback(error as Error);
    }
  }
}

// Interface for terminal session
export interface TerminalSession {
  write: (data: string) => void;
  onData: (data: string) => void;
  onResize: (cols: number, rows: number) => void;
  destroy: () => void;
  cwd: string;
  env: Record<string, string>;
}

// Create a new terminal session
export function createTerminal(
  writeCallback: (data: string) => void,
  onClose?: () => void
): TerminalSession {
  let cwd = process.env.HOME || '/';
  // Convert process.env to a plain object with string values only
  const env = Object.entries(process.env).reduce<Record<string, string>>((acc, [key, value]) => {
    if (value !== undefined) {
      acc[key] = value;
    }
    return acc;
  }, {});
  let isProcessing = false;
  let inputBuffer = '';

  // Create a writable stream for terminal output
  const outputStream = new TerminalStream(writeCallback);

  // Display initial prompt
  writePrompt();

  function writePrompt() {
    outputStream.write(`\r\n${cwd}$ `);
  }

  async function processInput(data: string) {
    if (isProcessing) return;
    isProcessing = true;

    try {
      // Handle special keys (backspace, enter, etc.)
      if (data === '\r' || data === '\n') {
        // Process the command when Enter is pressed
        if (inputBuffer.trim()) {
          outputStream.write('\r\n');
          const response = await handleCommand(inputBuffer, cwd, env);

          // Handle command response
          if (response.type === 'output') {
            outputStream.write(response.output);
          } else if (response.type === 'cd') {
            cwd = response.newDir;
            if (response.output) {
              outputStream.write(response.output);
            }
          }

          inputBuffer = '';
          writePrompt();
        } else {
          // Just a new line for empty input
          writePrompt();
        }
      } else if (data === '\x7F' || data === '\b') {
        // Handle backspace
        if (inputBuffer.length > 0) {
          inputBuffer = inputBuffer.slice(0, -1);
          outputStream.write('\b \b');
        }
      } else if (data.charCodeAt(0) === 3) {
        // Handle Ctrl+C
        outputStream.write('^C\r\n');
        inputBuffer = '';
        writePrompt();
      } else if (data.charCodeAt(0) === 4) {
        // Handle Ctrl+D
        if (inputBuffer.length === 0) {
          outputStream.write('\r\nUse \'exit\' to close the connection\r\n');
          writePrompt();
        }
      } else if (data.charCodeAt(0) >= 32) {
        // Regular character input
        inputBuffer += data;
        outputStream.write(data);
      }
    } catch (error) {
      console.error('Error processing input:', error);
      outputStream.write(`\r\nError: ${error instanceof Error ? error.message : 'Unknown error'}\r\n`);
      writePrompt();
    } finally {
      isProcessing = false;
    }
  }

  return {
    write: (data: string) => {
      outputStream.write(data);
    },

    onData: (data: string) => {
      processInput(data).catch(error => {
        console.error('Unhandled error in onData:', error);
        outputStream.write('\r\nAn unexpected error occurred. Please try again.\r\n');
        writePrompt();
      });
    },

    onResize: (cols: number, rows: number) => {
      // Handle terminal resize if needed
      console.log(`Terminal resized to ${cols}x${rows}`);
    },

    destroy: () => {
      if (onClose) onClose();
    },

    get cwd() {
      return cwd;
    },

    get env() {
      return { ...env };
    }
  };
}

// Create a terminal session from a WebSocket connection
export function createWebSocketTerminal(
  ws: { send: (data: string) => void; on: (event: string, handler: (...args: any[]) => void) => void },
  initialCwd: string = process.env.HOME || '/',
  initialEnv: Record<string, string> = Object.entries(process.env).reduce<Record<string, string>>((acc, [key, value]) => {
    if (value !== undefined) {
      acc[key] = value;
    }
    return acc;
  }, {})
): TerminalSession {
  const writeCallback = (data: string) => {
    try {
      ws.send(JSON.stringify({
        type: 'output',
        data: data
      }));
    } catch (error) {
      console.error('Error sending WebSocket message:', error);
    }
  };

  const terminal = createTerminal(writeCallback, () => {
    // Handle terminal close
    try {
      ws.send(JSON.stringify({
        type: 'close',
        data: 'Terminal session ended'
      }));
    } catch (error) {
      console.error('Error sending close message:', error);
    }
  });

  // Forward WebSocket messages to the terminal
  ws.on('message', (message: string) => {
    try {
      const data = JSON.parse(message);
      if (data.type === 'input') {
        terminal.onData(data.data);
      } else if (data.type === 'resize') {
        terminal.onResize(data.cols, data.rows);
      }
    } catch (error) {
      console.error('Error processing WebSocket message:', error);
    }
  });

  return terminal;
}

// Create a terminal session from an SSH connection
export function createSshTerminal(
  stream: Socket,
  initialCwd: string = process.env.HOME || '/',
  initialEnv: Record<string, string> = Object.entries(process.env).reduce<Record<string, string>>((acc, [key, value]) => {
    if (value !== undefined) {
      acc[key] = value;
    }
    return acc;
  }, {})
): TerminalSession {
  const writeCallback = (data: string) => {
    try {
      stream.write(data);
    } catch (error) {
      console.error('Error writing to SSH stream:', error);
    }
  };

  const terminal = createTerminal(writeCallback, () => {
    // Handle terminal close
    try {
      stream.end();
      stream.destroy();
    } catch (error) {
      console.error('Error closing SSH stream:', error);
    }
  });

  // Forward SSH stream data to the terminal
  stream.on('data', (data: Buffer) => {
    terminal.onData(data.toString('utf-8'));
  });

  // Handle SSH stream close
  stream.on('close', () => {
    terminal.destroy();
  });

  return terminal;
}
