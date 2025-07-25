import { spawn } from 'child_process';
import { promisify } from 'util';
import { exec as execCallback } from 'child_process';
import * as fs from 'fs/promises';
import * as path from 'path';

const exec = promisify(execCallback);

// Command response types
export type CommandResponse = 
  | { type: 'output'; output: string; prompt?: string }
  | { type: 'cd'; output: string; newDir: string; prompt?: string };

// Available commands
type CommandHandler = (args: string[], cwd: string, env: NodeJS.ProcessEnv) => Promise<CommandResponse>;

const commands: Record<string, CommandHandler> = {
  help: async () => ({
    type: 'output',
    output: `
Available commands:
  help     - Show this help message
  about    - About me and my skills
  projects - Show my projects
  contact  - Contact information
  clear    - Clear the terminal
  exit     - Close the connection

For more information about a command, type 'help <command>'
`
  }),

  about: async () => ({
    type: 'output',
    output: `
About Me:
  I'm a passionate developer with experience in building web applications.
  I love working with modern technologies and solving complex problems.

Skills:
  - TypeScript/JavaScript
  - Node.js
  - React
  - Python
  - And more...
`
  }),

  projects: async () => ({
    type: 'output',
    output: `
My Projects:
  1. Project One - A web application for X
  2. Project Two - A mobile app for Y
  3. Project Three - An API service for Z
`
  }),

  contact: async () => ({
    type: 'output',
    output: `
Contact Information:
  Email: your.email@example.com
  GitHub: github.com/yourusername
  LinkedIn: linkedin.com/in/yourprofile
`
  }),

  clear: async () => ({
    type: 'output',
    output: '\x1B[2J\x1B[3J\x1B[H', // ANSI escape codes to clear screen
    prompt: ''
  }),

  exit: async () => ({
    type: 'output',
    output: 'Goodbye!\n',
    prompt: ''
  }),

  // Built-in commands that interact with the file system
  ls: async (args, cwd) => {
    try {
      const target = args[0] || '.';
      const targetPath = path.isAbsolute(target) ? target : path.join(cwd, target);
      const files = await fs.readdir(targetPath);
      
      // Get file stats for each file
      const fileStats = await Promise.all(
        files.map(async (file) => {
          const filePath = path.join(targetPath, file);
          const stats = await fs.stat(filePath);
          return { file, isDir: stats.isDirectory() };
        })
      );
      
      // Format output with colors for directories
      const output = fileStats
        .map(({ file, isDir }) => {
          return isDir ? `\x1b[34m${file}\x1b[0m/` : file;
        })
        .join('\n');
      
      return { type: 'output', output: output + '\n' };
    } catch (error) {
      return { 
        type: 'output', 
        output: `ls: ${error instanceof Error ? error.message : 'Unknown error'}\n` 
      };
    }
  },

  cd: async (args, cwd) => {
    if (!args[0]) {
      // No arguments, go to home directory
      const homeDir = process.env.HOME || '/';
      return { 
        type: 'cd', 
        output: '', 
        newDir: homeDir,
        prompt: `\n${homeDir}$ `
      };
    }

    try {
      const targetDir = path.isAbsolute(args[0]) 
        ? args[0] 
        : path.join(cwd, args[0]);
      
      // Resolve any . or .. in the path
      const resolvedPath = path.resolve(targetDir);
      
      // Check if the directory exists and is accessible
      try {
        const stats = await fs.stat(resolvedPath);
        if (!stats.isDirectory()) {
          return { 
            type: 'output', 
            output: `cd: ${args[0]}: Not a directory\n` 
          };
        }
      } catch (error) {
        return { 
          type: 'output', 
          output: `cd: ${args[0]}: No such file or directory\n` 
        };
      }
      
      return { 
        type: 'cd', 
        output: '', 
        newDir: resolvedPath,
        prompt: `\n${resolvedPath}$ `
      };
    } catch (error) {
      return { 
        type: 'output', 
        output: `cd: ${error instanceof Error ? error.message : 'Unknown error'}\n` 
      };
    }
  },

  pwd: async (_, cwd) => ({
    type: 'output',
    output: `${cwd}\n`
  }),

  // Execute shell commands
  '': async (args, cwd, env) => {
    if (!args[0]) return { type: 'output', output: '' };
    
    try {
      const { stdout, stderr } = await exec(args.join(' '), { 
        cwd, 
        env: { ...process.env, ...env },
        shell: '/bin/bash'
      });
      
      return { 
        type: 'output', 
        output: (stdout || '') + (stderr ? `\n${stderr}\n` : '') 
      };
    } catch (error: any) {
      return { 
        type: 'output', 
        output: `\x1b[31m${error.stderr || error.message}\x1b[0m\n` 
      };
    }
  }
};

// Main command handler
export async function handleCommand(
  input: string, 
  cwd: string, 
  env: NodeJS.ProcessEnv = {}
): Promise<CommandResponse> {
  // Trim and split the input into command and arguments
  const trimmedInput = input.trim();
  if (!trimmedInput) {
    return { type: 'output', output: '' };
  }

  const args = trimmedInput.split(/\s+/);
  const command = args.shift()?.toLowerCase() || '';
  
  // Handle special commands
  if (command === 'exit') {
    return commands.exit([], cwd, env);
  }
  
  // Handle built-in commands
  const handler = commands[command] || commands[''];
  return handler(args, cwd, env);
}

// Helper function to check if a command exists
export function commandExists(command: string): boolean {
  return command in commands;
}
