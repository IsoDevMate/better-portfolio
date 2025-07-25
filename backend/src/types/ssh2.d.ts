declare module 'ssh2' {
  import { EventEmitter } from 'events';
  import { Duplex } from 'stream';

  export interface AuthContext {
    username: string;
    method: string;
    password?: string;
    publicKey?: Buffer;
    signature?: Buffer;
    blob?: Buffer;
    accept(): void;
    reject(artialSuccess?: boolean): void;
  }

  export interface ServerChannel extends Duplex {
    rows?: number;
    cols?: number;
    width?: number;
    height?: number;
    modes?: object;

    // Additional properties that might be available
    isTTY?: boolean;
    setRawMode?(mode: boolean): void;

    // Socket reference (if available)
    socket?: any;

    // Standard stream methods
    write(chunk: any, encoding?: string): boolean;
    end(chunk?: any, encoding?: string): void;
  }

  export interface Session extends EventEmitter {
    on(event: 'shell', listener: (accept: (reject?: boolean) => ServerChannel | undefined) => void): this;
    on(event: 'exec', listener: (accept: (reject?: boolean) => ServerChannel | undefined, reject: () => boolean, info: ExecInfo) => void): this;
    on(event: 'sftp', listener: (accept: (reject?: boolean) => any, reject: () => boolean) => void): this;
    on(event: 'subsystem', listener: (accept: (reject?: boolean) => ServerChannel | undefined, reject: () => boolean, info: { name: string }) => void): this;
    on(event: 'window-change', listener: (accept: (reject?: boolean) => ServerChannel | undefined, reject: () => boolean, info: { rows: number; cols: number; width: number; height: number }) => void): this;
    on(event: 'pty', listener: (accept: (reject?: boolean) => void, reject: () => boolean, info: any) => void): this;
    on(event: 'env', listener: (accept: (reject?: boolean) => void, reject: () => boolean, info: { key: string; val: string }) => void): this;
    on(event: 'signal', listener: (accept: (reject?: boolean) => void, reject: () => boolean, info: { name: string }) => void): this;
    on(event: 'auth-agent', listener: (accept: (reject?: boolean) => any, reject: () => boolean) => void): this;
  }

  export interface Client extends EventEmitter {
    connect(config: ClientConfig): void;
    end(): void;
    destroy(): void;

    on(event: 'banner', listener: (message: string, language: string) => void): this;
    on(event: 'ready', listener: () => void): this;
    on(event: 'tcp connection', listener: (details: any, accept: () => any, reject: () => void) => void): this;
    on(event: 'x11', listener: (details: any, accept: () => any, reject: () => void) => void): this;
    on(event: 'keyboard-interactive', listener: (name: string, instructions: string, instructionsLang: string, prompts: any[], finish: (responses: string[]) => void) => void): this;
    on(event: 'change password', listener: (message: string, language: string, done: (password: string) => void) => void): this;
    on(event: 'continue', listener: () => void): this;
    on(event: 'error', listener: (err: Error) => void): this;
    on(event: 'end', listener: () => void): this;
    on(event: 'close', listener: (hadError: boolean) => void): this;

    shell(window?: any, options?: any, callback?: (err: Error | undefined, stream?: ServerChannel) => void): void;
    exec(command: string, options?: any, callback?: (err: Error | undefined, stream?: ServerChannel) => void): void;
    sftp(callback: (err: Error | undefined, sftp?: any) => void): void;
    subsys(subsystem: string, callback: (err: Error | undefined, stream?: ServerChannel) => void): void;
    forwardIn(bindAddr: string, bindPort: number, callback: (err: Error | undefined, port?: number) => void): void;
    unforwardIn(bindAddr: string, bindPort: number, callback: (err: Error | undefined) => void): void;
    forwardOut(srcIP: string, srcPort: number, dstIP: string, dstPort: number, callback: (err: Error | undefined, stream?: ServerChannel) => void): void;
  }

  export interface Server extends EventEmitter {
    listen(port: number, hostname?: string, callback?: () => void): this;
    close(callback?: () => void): this;

    on(event: 'connection', listener: (client: Connection, info: ClientInfo) => void): this;
    on(event: 'error', listener: (err: Error) => void): this;
  }

  export interface Connection extends EventEmitter {
    username?: string;

    on(event: 'authentication', listener: (ctx: AuthContext) => void): this;
    on(event: 'ready', listener: () => void): this;
    on(event: 'session', listener: (accept: (reject?: boolean) => Session | undefined, reject: () => boolean) => void): this;
    on(event: 'tcpip', listener: (accept: () => any, reject: () => boolean, info: any) => void): this;
    on(event: 'openssh.streamlocal', listener: (accept: () => any, reject: () => boolean, info: any) => void): this;
    on(event: 'request', listener: (accept: (reject?: boolean) => void, reject: () => boolean, name: string, info: any) => void): this;
    on(event: 'rekey', listener: () => void): this;
    on(event: 'continue', listener: () => void): this;
    on(event: 'error', listener: (err: Error) => void): this;
    on(event: 'end', listener: () => void): this;
    on(event: 'close', listener: () => void): this;

    end(): void;
    x11(srcIP: string, srcPort: number, callback: (err: Error | undefined, stream?: ServerChannel) => void): void;
    forwardOut(dstIP: string, dstPort: number, srcIP: string, srcPort: number, callback: (err: Error | undefined, stream?: ServerChannel) => void): void;
    openssh_forwardOutStreamLocal(socketPath: string, callback: (err: Error | undefined, stream?: ServerChannel) => void): void;
    rekey(callback?: (err: Error | undefined) => void): void;
  }

  export interface ClientInfo {
    ip: string;
    family: string;
    port: number;
    header: {
      identRaw: string;
      versions: {
        protocol: string;
        software: string;
      };
      comments?: string;
    };
  }

  export interface ServerConfig {
    hostKeys: Buffer[];
    greeting?: string;
    banner?: string;
    ident?: string;
    maxPacketSize?: number;
    highWaterMark?: number;
    algorithms?: {
      kex?: string[];
      cipher?: string[];
      serverHostKey?: string[];
      hmac?: string[];
      compress?: string[];
    };
    debug?: (message: string) => void;
  }

  export interface ClientConfig {
    host?: string;
    port?: number;
    forceIPv4?: boolean;
    forceIPv6?: boolean;
    hostHash?: string;
    hostVerifier?: (keyHash: string, callback: (valid: boolean) => void) => boolean;
    username?: string;
    password?: string;
    agent?: string;
    agentForward?: boolean;
    privateKey?: string | Buffer;
    passphrase?: string;
    localHostname?: string;
    localUsername?: string;
    tryKeyboard?: boolean;
    keepaliveInterval?: number;
    keepaliveCountMax?: number;
    readyTimeout?: number;
    sock?: any;
    strictVendor?: boolean;
    algorithms?: {
      kex?: string[];
      cipher?: string[];
      serverHostKey?: string[];
      hmac?: string[];
      compress?: string[];
    };
    compress?: boolean | string;
    debug?: (message: string) => void;
  }

  export interface ExecInfo {
    command: string;
  }

  // Export the classes
  export class Server {
    constructor(config: ServerConfig, connectionListener?: (client: Connection, info: ClientInfo) => void);
    listen(port: number, hostname?: string, callback?: () => void): this;
    close(callback?: () => void): this;
    on(event: string, listener: (...args: any[]) => void): this;
  }

  export class Client {
    constructor();
    connect(config: ClientConfig): void;
    end(): void;
    destroy(): void;
    on(event: string, listener: (...args: any[]) => void): this;
  }

  // Utility functions
  export const utils: {
    genPublicKey(pubKey: Buffer): Buffer;
    parseKey(keyData: string | Buffer, passphrase?: string): any;
  };
}
