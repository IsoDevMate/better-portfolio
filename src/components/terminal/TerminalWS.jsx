import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const UserPrompt = () => (
  <div className="flex items-center">
    <span className="text-amber-300">user@portfolio</span>
    <span className="text-white">:</span>
    <span className="text-blue-400">~$</span>
  </div>
);

const Cursor = () => <span className="bg-lime-300 w-2 h-5 inline-block animate-pulse ml-1" />;

const TerminalWS = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(['Welcome to the terminal. Connecting...']);
  const [ws, setWs] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  // Connect to WebSocket server
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3001');
    
    socket.onopen = () => {
      console.log('Connected to WebSocket server');
      setIsConnected(true);
      setOutput(prev => [...prev, 'Connected to terminal server. Type a command to get started.']);
    };
    
    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'output') {
          setOutput(prev => [...prev, data.data]);
        }
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };
    
    socket.onclose = () => {
      console.log('Disconnected from WebSocket server');
      setIsConnected(false);
      setOutput(prev => [...prev, 'Disconnected from server. Refresh to reconnect.']);
    };
    
    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
      setOutput(prev => [...prev, 'Connection error. Please try again later.']);
    };
    
    setWs(socket);
    
    return () => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.close();
      }
    };
  }, []);

  // Auto-scroll to bottom when output changes
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  // Focus input when component mounts
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || !isConnected || !ws) return;
    
    // Add user input to output
    setOutput(prev => [...prev, `$ ${input}`]);
    
    // Send command to server
    ws.send(JSON.stringify({
      type: 'command',
      command: input
    }));
    
    // Clear input
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setOutput([]);
    } else if (e.key === 'c' && e.ctrlKey) {
      // Handle Ctrl+C
      e.preventDefault();
      setOutput(prev => [...prev, '^C']);
      setInput('');
    }
  };

  return (
    <div className="h-screen bg-[#0D1117] flex flex-col p-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-full mr-2 ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
          <span className="text-gray-400 text-sm">
            {isConnected ? 'Connected' : 'Disconnected'}
          </span>
        </div>
        <Button
          onClick={onClose}
          className="bg-red-600 hover:bg-red-700 text-white"
          size="sm"
        >
          <X className="w-4 h-4 mr-1" />
          Close
        </Button>
      </div>
      
      <Card className="flex-1 flex flex-col bg-[#0D1117] border-gray-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-amber-300 font-mono text-sm">Terminal</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 p-4 overflow-y-auto font-mono text-sm">
          <div className="space-y-1">
            {output.map((line, index) => (
              <div key={index} className="text-gray-200 whitespace-pre-wrap">
                {line}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>
          
          <form onSubmit={handleSubmit} className="mt-2 flex items-center">
            <UserPrompt />
            <div className="flex-1 flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent border-none outline-none text-white flex-1 ml-1"
                disabled={!isConnected}
                spellCheck="false"
                autoComplete="off"
                autoCapitalize="off"
              />
              {isConnected && <Cursor />}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default TerminalWS;
