import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  X, Mail, Phone, MapPin, Calendar, Award, ExternalLink,
  Send, Download, FileText, Globe, Github, Linkedin,
  Twitter, Terminal, Cpu, Code, Loader2, Heart, CreditCard
} from 'lucide-react';
import { SponsorModal, SponsorSuccess } from '@/components/ui/sponsor';

const samplePortfolioData = {
  "name": "Barack Ouma",
  "title": "Software Engineer | Backend | AWS Certified",
  "profile_picture_url": "",
  "bio": "Passionate full-stack developer with expertise in modern web technologies",
  "about_me": "I'm a dedicated developer who loves creating efficient, scalable solutions and learning new technologies.",
  "contact": {
    "email": "oumaduro5827@gmail.com",
    "phone": "+254 793 043014",
    "twitter": "https://twitter.com/BarackOuma7",
    "github": "https://github.com/IsoDevMate",
    "linkedin": "https://www.linkedin.com/in/barack-ouma-b37089212/",
    "location": "Nairobi County, Kenya",
    "website": "https://barackoumasite.netlify.app/"
  },
  "experience": [
    {
      "id": 1,
      "title": "FullStack Engineer",
      "company": "Redolesence Ltd",
      "dates": "Nov 2024 - Feb 2025",
      "location": "Nairobi, Kenya",
      "description_points": [
        "Collaborated with the IoT hardware team to design communication schemas and backend interfaces",
        "Reduced Firestore database reads by optimizing backend polling logic and caching strategies",
        "Integrated real-time Push Notifications and WebSocket signals between IoT devices and backend"
      ],
      "tags": ["IoT", "Firebase", "WebSockets", "Node.js"]
    },
    {
      "id": 2,
      "title": "FullStack Engineer",
      "company": "Yafreeka Entertainment Ltd",
      "dates": "Oct 2023 - Feb 2024",
      "location": "Nairobi, Kenya",
      "description_points": [
        "Migrated backend services to Firebase, improving video load speed by 30%",
        "Developed Cloud Functions to automate internal workflows and payment processes",
        "Enhanced application performance through strategic backend optimization"
      ],
      "tags": ["Firebase", "Cloud Functions", "Performance Optimization"]
    }
  ],
  "projects": [
    {
      "id": 1,
      "name": "ComfyBase Event Management System",
      "description": "A comprehensive Smart event management platform designed to simplify event organization, enhance attendee engagement, and provide seamless event experiences. Features real-time interactions, live streaming, interactive note-taking, media sharing, and an awards system.",
      "website_link": "https://final-year-project-swart-phi.vercel.app/",
      "details_link": "",
      "tags": ["React", "Node.js", "MongoDB", "WebRTC", "Real-time", "Event Management", "Live Streaming"]
    },
    {
      "id": 2,
      "name": "ComfyBase Mobile App",
      "description": "Cross-platform mobile application for event management with Flutter. Features interactive note-taking, multimedia support, QR code verification, and seamless cross-platform accessibility for Android, iOS, Web, and Desktop.",
      "website_link": "https://comfybase-plp-7wum.vercel.app/",
      "details_link": "https://github.com/IsoDevMate/comfybase-plp",
      "tags": ["Flutter", "Dart", "Cross-platform", "Mobile Development", "Event Management", "Real-time"]
    }
  ],
  "skills": [
    {
      "category": "Languages",
      "values": ["Java", "TypeScript", "Python", "Node.js"]
    },
    {
      "category": "Frontend",
      "values": ["React.js", "Redux", "TailwindCSS"]
    },
    {
      "category": "Backend",
      "values": ["Nest.js", "REST APIs", "GraphQL", "Docker"]
    },
    {
      "category": "Databases",
      "values": ["MongoDB", "PostgreSQL", "Firestore", "AWS RDS"]
    }
  ],
  "education": {
    "degree": "BSc. Information Technology",
    "university": "Kenyatta University",
    "dates": "2021 - 2025",
    "description": "Specialized in web technologies and software development",
    "tags": ["Computer Science", "Programming"]
  },
  "certifications": [
    {
      "id": 1,
      "name": "AWS Cloud Practitioner",
      "issuer": "Amazon Web Services",
      "date": "Aug 2024",
      "skills": ["AWS", "Cloud Computing"]
    },
    {
      "id": 2,
      "name": "Apollo GraphQL Associate",
      "issuer": "Apollo GraphQL",
      "date": "Feb 2025",
      "skills": ["GraphQL", "API Development"]
    }
  ]
};

const ContactForm = ({ contactData: _contactData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="bg-gray-800 border-gray-700 mt-4">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2 text-base">
          <Mail className="w-4 h-4" />
          Send Message
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm"
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm"
              required
            />
          </div>
          <Input
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm"
            required
          />
          <Textarea
            name="message"
            placeholder="Message..."
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm"
            required
          />
          <Button type="submit" size="sm" className="w-full bg-amber-500 hover:bg-amber-600 text-black">
            <Send className="w-3 h-3 mr-1" />
            Send
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

const UserPrompt = ({ mode }) => (
  <div className="flex items-center">
    <span className="text-emerald-400 font-mono">barack.ouma</span>
    <span className="text-gray-400 font-mono">@</span>
    <span className="text-blue-400 font-mono">portfolio</span>
    <span className="text-white font-mono">:</span>
    <span className="text-purple-400 font-mono">~</span>
    <span className="text-white font-mono">$</span>
    {mode === 'graphql' && (
      <span className="ml-2 text-pink-400 font-mono">(graphql)</span>
    )}
  </div>
);

const Cursor = ({ isTyping = false }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isTyping) {
      setIsVisible(true);
      return;
    }

    const interval = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 530); // Slightly faster blink rate

    return () => clearInterval(interval);
  }, [isTyping]);

  return (
    <span
      className={`bg-lime-400 w-2 h-5 inline-block ml-1 transition-all duration-75 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${isTyping ? 'animate-pulse shadow-lg shadow-lime-400/50' : ''}`}
    />
  );
};

const ModeSelector = ({ currentMode, setMode }) => (
  <div className="flex justify-center mb-4">
    <div className="flex gap-2 bg-gray-800 p-2 rounded-lg border border-gray-700">
      <Button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setMode('simple');
        }}
        variant={currentMode === 'simple' ? 'default' : 'outline'}
        className="text-xs h-8"
        size="sm"
      >
        <Terminal className="w-3 h-3 mr-1" />
        Simple
      </Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setMode('technical');
        }}
        variant={currentMode === 'technical' ? 'default' : 'outline'}
        className="text-xs h-8"
        size="sm"
      >
        <Cpu className="w-3 h-3 mr-1" />
        Technical
      </Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setMode('graphql');
        }}
        variant={currentMode === 'graphql' ? 'default' : 'outline'}
        className="text-xs h-8"
        size="sm"
      >
        <Code className="w-3 h-3 mr-1" />
        GraphQL
      </Button>
    </div>
  </div>
);

const TypewriterOutput = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text.charAt(index));
        setIndex(prev => prev + 1);
      }, 3); // Much faster - reduced from 20ms to 5ms
      return () => clearTimeout(timeout);
    }33
  }, [index, text]);

  return <pre className="whitespace-pre-wrap text-gray-300 font-mono text-sm leading-relaxed">{displayText}</pre>;
};

const WelcomeBanner = () => (
  <div className="text-center mb-6 p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-gray-700">
    <pre className="text-green-400 font-mono text-xs leading-none mb-2">
{`
██████╗  █████╗ ██████╗  █████╗  ██████╗██╗  ██╗     ██████╗ ██╗   ██╗███╗   ███╗ █████╗
██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝██║ ██╔╝    ██╔═══██╗██║   ██║████╗ ████║██╔══██╗
██████╔╝███████║██████╔╝███████║██║     █████╔╝     ██║   ██║██║   ██║██╔████╔██║███████║
██╔══██╗██╔══██║██╔══██╗██╔══██║██║     ██╔═██╗     ██║   ██║██║   ██║██║╚██╔╝██║██╔══██║
██████╔╝██║  ██║██║  ██║██║  ██║╚██████╗██║  ██╗    ╚██████╔╝╚██████╔╝██║ ╚═╝ ██║██║  ██║
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝     ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝
`}
    </pre>
    <div className="text-blue-400 font-mono text-sm mb-1">PORTFOLIO TERMINAL v2.1.0</div>
    <div className="text-gray-400 font-mono text-xs">Welcome to Barack Ouma's Interactive Portfolio</div>
    <div className="text-yellow-400 font-mono text-xs mt-2">Type 'help' to see available commands • 'neofetch' for system info • 'exit' to quit</div>

    {/* Terminal Payment Awareness Banner */}
    <div className="mt-4 p-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg">
      <div className="flex items-center gap-2 text-green-300 text-xs font-mono">
        <span className="text-green-400">💝</span>
        <span className="font-semibold">SPONSORSHIP AVAILABLE!</span>
      </div>
      <p className="text-green-200 text-xs mt-1 font-mono">
        Type <code className="bg-green-700 px-1 rounded">sponsor</code> to support my work • Starting from 49 KES
      </p>
      <p className="text-blue-200 text-xs mt-1 font-mono">
        💡 GraphQL Mode: <code className="bg-blue-700 px-1 rounded">mutation sponsorship 99</code> for payments
      </p>
    </div>
  </div>
);

const createCommandProcessor = (data, setDisplayData, switchToGui, mode, setSponsorAmount, setShowSponsorModal) => {

  // Terminal sponsorship handler
  const handleTerminalSponsorship = async (amount, email) => {
    try {
      // Step 1: Initialize payment
      console.log(`🔄 Initializing payment for ${amount} KES with email ${email}...`);

      const response = await fetch('https://better-portfolio.onrender.com/terminal-sponsor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount,
          email: email,
          name: 'Terminal Sponsor'
        }),
      });

      const result = await response.json();
      console.log('API Response:', result);

      if (result.success) {
        // Step 2: Show payment URL
        console.log(`✅ Payment URL generated!`);
        console.log(`🔗 Reference: ${result.reference}`);

        // Step 3: Open payment URL in new tab
        window.open(result.authorization_url, '_blank');

        // Step 4: Start polling for payment verification
        return `💝 Terminal Sponsorship Initiated
===============================

💰 Amount: ${amount} KES
📧 Email: ${email}
🔗 Reference: ${result.reference}
🌐 Payment URL: ${result.authorization_url}

📋 Instructions:
1. Payment page opened in new tab
2. Complete payment on Paystack
3. Return here to see confirmation

⏳ Checking payment status...
[Press Enter to check status]`;
      } else {
        return `❌ Error from Live API: ${result.error}

Request to: https://better-portfolio.onrender.com/terminal-sponsor
Status: ${response.status}
Amount: ${amount} KES
Email: ${email}

💡 This error comes from your live API on Render.`;
      }
    } catch (error) {
      console.error('Terminal sponsorship error:', error);
      return `❌ Error: Failed to connect to payment API

Request to: https://better-portfolio.onrender.com/terminal-sponsor
Error: ${error.message}

💡 This error comes from your live API on Render.`;
    }
  };

  const process = async (command) => {
    try {
      const [cmd, ...args] = command.toLowerCase().trim().split(' ');
      const id = args[0] ? parseInt(args[0]) : null;
      const flag = args.find(arg => arg.startsWith('-'));

      if (cmd === 'mode') {
        const newMode = args[0];
        if (['simple', 'technical', 'graphql'].includes(newMode)) {
          return `Switching to ${newMode} mode... (Use the buttons above to switch modes)`;
        }
        return `Available modes: simple, technical, graphql`;
      }

      if (mode === 'graphql') {
        switch (cmd) {
          case 'query':
          case 'mutation': {
            const entity = args[0] || 'Portfolio';
            let responseData = {};
            let responseTime = Math.floor(Math.random() * 30) + 20; // Random response time 20-50ms

            // Validate entity names for GraphQL
            const validEntities = ['experience', 'projects', 'skills', 'about', 'portfolio', 'payment', 'sponsorship'];
            const validEntity = validEntities.find(e => e.toLowerCase() === entity.toLowerCase());

            if (!validEntity) {
              return `❌ GraphQL Error: Invalid entity "${entity}"
💡 Valid entities: ${validEntities.join(', ')}

Examples:
• query experience
• query projects
• query skills
• query about
• mutation sponsorship 99 user@example.com`;
            }

            // Handle payment-related GraphQL operations FIRST
            if (validEntity === 'payment' || validEntity === 'sponsorship') {
              const amount = args[1] ? parseInt(args[1]) : null;

              if (cmd === 'mutation' && amount) {
                // Handle sponsorship mutation
                if (amount < 49) {
                  return `❌ GraphQL Error: Minimum sponsorship amount is 49 KES
💡 Custom amounts must be at least 29 KES

Try: mutation sponsorship 49`;
                }

                // Prompt for email address
                const email = args[2] || 'barack.ouma@example.com'; // Default email if not provided

                if (!email || email === 'sponsor@example.com') {
                  return `❌ GraphQL Error: Valid email address required
💡 Usage: mutation sponsorship <amount> <email>

Examples:
• mutation sponsorship 99 user@example.com
• mutation sponsorship 199 john.doe@gmail.com`;
                }

                try {
                  const response = await fetch('https://better-portfolio.onrender.com/graphql', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      query: `
                        mutation CreateSponsorship($amount: Int!, $email: String!) {
                          createSponsorship(amount: $amount, email: $email) {
                            success
                            authorization_url
                            reference
                            amount
                            message
                            error
                          }
                        }
                      `,
                      variables: {
                        amount: amount,
                        email: email
                      }
                    })
                  });

                  const result = await response.json();

                  if (result.data?.createSponsorship?.success) {
                    const paymentData = result.data.createSponsorship;

                    // Open payment URL in new tab
                    window.open(paymentData.authorization_url, '_blank');

                    setDisplayData({
                      type: 'graphql-payment',
                      content: {
                        operation: 'MUTATION',
                        entity: 'sponsorship',
                        query: `mutation CreateSponsorship($amount: Int!) {
  createSponsorship(amount: $amount) {
    success
    authorization_url
    reference
    amount
    message
    error
  }
}`,
                        variables: { amount },
                        responseTime: 150,
                        data: paymentData,
                        timestamp: new Date().toISOString()
                      }
                    });

                    return `GraphQL Sponsorship Mutation:
mutation CreateSponsorship($amount: Int!) {
  createSponsorship(amount: $amount) {
    success
    authorization_url
    reference
    amount
    message
    error
  }
}

Variables: { "amount": ${amount} }

Request to: https://better-portfolio.onrender.com/graphql
Response Time: 150ms
Status: 200 OK

✅ Payment URL generated and opened in new tab
🔗 Reference: ${paymentData.reference}
💰 Amount: ${paymentData.amount} KES

📋 Instructions:
1. Complete payment on Paystack
2. Return here to verify with: query payment ${paymentData.reference}`;
                  } else {
                    const errorMessage = result.data?.createSponsorship?.error || result.errors?.[0]?.message || 'Payment initialization failed';
                    return `❌ GraphQL Error: ${errorMessage}

Request to: https://better-portfolio.onrender.com/graphql
Response Time: 150ms
Status: 400 Bad Request

💡 This error comes from your live API on Render.`;
                  }
                } catch (error) {
                  return `❌ GraphQL Error: Failed to connect to payment API

Request to: https://better-portfolio.onrender.com/graphql
Response Time: N/A
Status: Connection Failed

Error Details: ${error.message}

💡 This error comes from your live API on Render.`;
                }
              } else if (cmd === 'query' && args[1]) {
                // Handle payment verification query
                const reference = args[1];

                try {
                  const response = await fetch('https://better-portfolio.onrender.com/graphql', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      query: `
                        query VerifyPayment($reference: String!) {
                          verifyPayment(reference: $reference) {
                            success
                            data {
                              amount
                              sponsor
                              email
                              status
                              reference
                            }
                            error
                          }
                        }
                      `,
                      variables: {
                        reference: reference
                      }
                    })
                  });

                  const result = await response.json();

                  if (result.data?.verifyPayment?.success) {
                    const verificationData = result.data.verifyPayment.data;

                    setDisplayData({
                      type: 'graphql-verification',
                      content: {
                        operation: 'QUERY',
                        entity: 'payment',
                        query: `query VerifyPayment($reference: String!) {
  verifyPayment(reference: $reference) {
    success
    data {
      amount
      sponsor
      email
      status
      reference
    }
    error
  }
}`,
                        variables: { reference },
                        responseTime: 120,
                        data: verificationData,
                        timestamp: new Date().toISOString()
                      }
                    });

                    return `GraphQL Payment Verification:
query VerifyPayment($reference: String!) {
  verifyPayment(reference: $reference) {
    success
    data {
      amount
      sponsor
      email
      status
      reference
    }
    error
  }
}

Variables: { "reference": "${reference}" }

Request to: https://better-portfolio.onrender.com/graphql
Response Time: 120ms
Status: 200 OK

🎉 Payment Verification Successful!
=====================================

✅ Status: ${verificationData.status}
💰 Amount: ${verificationData.amount} KES
👤 Sponsor: ${verificationData.sponsor}
📧 Email: ${verificationData.email}
🔗 Reference: ${verificationData.reference}

💝 Thank you for your sponsorship!
Your support means the world to me! ❤️`;
                  } else {
                    const errorMessage = result.data?.verifyPayment?.error || result.errors?.[0]?.message || 'Payment verification failed';
                    return `❌ GraphQL Error: ${errorMessage}

Request to: https://better-portfolio.onrender.com/graphql
Response Time: 120ms
Status: 400 Bad Request

💡 This error comes from your live API on Render.`;
                  }
                } catch (error) {
                  return `❌ GraphQL Error: Failed to connect to payment API

Request to: https://better-portfolio.onrender.com/graphql
Response Time: N/A
Status: Connection Failed

Error Details: ${error.message}

💡 This error comes from your live API on Render.`;
                }
              } else {
                return `GraphQL Payment Commands:
• mutation sponsorship <amount> <email> - Create sponsorship payment
• query payment <reference> - Verify payment status

Examples:
• mutation sponsorship 99 user@example.com
• mutation sponsorship 199 john.doe@gmail.com
• query payment graphql_sponsor_1234567890

💡 Note: Email address is required for payment processing

💡 Test Error Handling:
• Try: mutation sponsorship 5 user@example.com (should show minimum amount error)
• Try: mutation sponsorship 49 user@example.com (should work)`;
              }
            }

            // If we reach here, it's not a payment operation, so handle regular queries
            // Simulate different response times based on entity
            switch(validEntity) {
              case 'experience':
                responseData = { experience: data.experience };
                responseTime = Math.floor(Math.random() * 40) + 30;
                break;
              case 'projects':
                responseData = { projects: data.projects };
                responseTime = Math.floor(Math.random() * 50) + 40;
                break;
              case 'skills':
                responseData = { skills: data.skills };
                responseTime = Math.floor(Math.random() * 20) + 10;
                break;
              case 'about':
                responseData = { about: data.about_me };
                responseTime = Math.floor(Math.random() * 10) + 5;
                break;
              default:
                responseData = {
                  portfolio: {
                    name: data.name,
                    title: data.title,
                    email: data.contact?.email,
                    location: data.contact?.location,
                    bio: data.bio
                  }
                };
            }

            // Format the GraphQL query that would have been sent
            const query = `query Get${validEntity.charAt(0).toUpperCase() + validEntity.slice(1)} {
  ${validEntity} {
    ${validEntity === 'experience' ? `
      id
      title
      company
      dates
      description_points
      tags
    ` : validEntity === 'projects' ? `
      id
      name
      description
      tags
      details_link
    ` : validEntity === 'skills' ? `
      category
      values
    ` : validEntity === 'about' ? `
      text
    ` : `
      name
      title
      email
      location
      bio
    `}
  }
}`;

            setDisplayData({
              type: 'graphql-response',
              content: {
                operation: 'QUERY',
                entity: validEntity,
                query,
                responseTime,
                data: responseData,
                timestamp: new Date().toISOString()
              }
            });

            return `GraphQL Query:
${query}

Request to: https://api.portfolio.graphql/v1
Response Time: ${responseTime}ms
Status: 200 OK`;
          }

          case 'schema':
            return `type Portfolio {
  id: ID!
  name: String!
  title: String!
  bio: String
  about: String
  contact: ContactInfo
  experience: [Experience]!
  projects: [Project]!
  skills: [SkillCategory]!
  certifications: [Certification]!
}

type PaymentResponse {
  success: Boolean!
  authorization_url: String
  reference: String
  amount: Int
  message: String
  error: String
}

type PaymentVerification {
  success: Boolean!
  data: PaymentData
  error: String
}

type PaymentData {
  amount: Int
  sponsor: String
  email: String
  status: String
  reference: String
}

type Query {
  verifyPayment(reference: String!): PaymentVerification!
}

type Mutation {
  createSponsorship(amount: Int!, email: String, name: String): PaymentResponse!
}`;

          case 'help':
            setDisplayData({
              type: 'help',
              content: {
                title: 'GraphQL Portfolio Gateway Commands',
                commands: [
                  { cmd: 'query experience', desc: 'Fetch work experience data' },
                  { cmd: 'query projects', desc: 'Get project information' },
                  { cmd: 'query skills', desc: 'Retrieve technical skills' },
                  { cmd: 'query about', desc: 'Get about me information' },
                  { cmd: 'mutation sponsorship <amount>', desc: '💝 Create sponsorship payment (49+ KES)' },
                  { cmd: 'query payment <reference>', desc: 'Verify payment status' },
                  { cmd: 'schema', desc: 'Show complete GraphQL schema' },
                  { cmd: 'explorer', desc: 'Open Apollo Sandbox Explorer' },
                  { cmd: 'sponsor', desc: '💝 Support my work with a donation (49+ KES)' },
                  { cmd: 'check', desc: 'Check payment status with reference' },
                  { cmd: 'mode <type>', desc: 'Switch terminal mode' },
                  { cmd: 'clear', desc: 'Clear terminal' },
                  { cmd: 'exit', desc: 'Exit terminal' }
                ]
              }
            });
            return `GraphQL Portfolio Gateway Commands listed on the right panel.`;

          default:
            return `Command not found in GraphQL mode. Type 'help' for available commands.`;
        }
      }

      if (mode === 'simple') {
        switch (cmd) {
          case 'help':
            setDisplayData({
              type: 'help',
              content: {
                title: 'Simple Mode Commands',
                commands: [
                  { cmd: 'about', desc: 'Learn about me' },
                  { cmd: 'skills', desc: 'View my technical skills' },
                  { cmd: 'work', desc: 'See my work experience' },
                  { cmd: 'projects', desc: 'View my projects' },
                  { cmd: 'education', desc: 'See my education background' },
                  { cmd: 'contact', desc: 'How to contact me' },
                  { cmd: 'neofetch', desc: 'Show system information' },
                  { cmd: 'mode <type>', desc: 'Switch terminal mode (simple/technical/graphql)' },
                  { cmd: 'sponsor', desc: '💝 Support my work with a donation (49+ KES)' },
                  { cmd: 'check', desc: 'Check payment status with reference' },
                  { cmd: 'clear', desc: 'Clear the screen' },
                  { cmd: 'exit', desc: 'Exit terminal' }
                ]
              }
            });
            return 'Available commands listed on the right panel.';

          case 'neofetch': {
            const neofetchOutput = `
      ___           ${data.name}
     (.. |          OS: Portfolio Terminal v2.1.0
     (<> |          Host: Interactive Portfolio Shell
    / __  \\         Kernel: React.js v18
   ( /  \\ /|        Uptime: Professional since 2022
  _/\\ __)/_)        Shell: Portfolio Terminal
  \\/-____\\/         Resolution: Full-stack Developer
                  Terminal: Portfolio Interface
                  Language: TypeScript, JavaScript, Python
                  Location: ${data.contact.location}
                  Status: Available for opportunities
`;
            setDisplayData({
              type: 'neofetch',
              content: { ascii: neofetchOutput, data }
            });
            return neofetchOutput;
          }

          case 'about':
            setDisplayData({ type: 'about', content: { text: data.about_me } });
            return data.about_me;

          case 'skills':
            setDisplayData({ type: 'skills', content: data.skills });
            return data.skills.map(s => `${s.category}: ${s.values.join(', ')}`).join('\n');

          case 'work':
          case 'experience':
            if (id) {
              const item = data.experience?.find(e => e.id === id);
              if (item) {
                setDisplayData({ type: 'experience-detail', content: item });
                return `
${item.title}
${'='.repeat(item.title.length)}

Company: ${item.company}
Location: ${item.location}
Period: ${item.dates}

${item.description_points.map(point => `• ${point}`).join('\n')}

Technologies: ${item.tags?.join(', ')}
`;
              }
              return `Experience not found with ID: ${id}\nUse 'work' to list all experiences.`;
            }

            setDisplayData({ type: 'experience-list', content: data.experience });

            if (!data.experience?.length) {
              return 'No work experience found.';
            }

            return data.experience.map(exp => {
              return `[${exp.id}] ${exp.title}
      at ${exp.company} (${exp.dates.split('·')[0].trim()})
      ${exp.location}
`;
            }).join('\n') + '\nUse \'work <id>\' to view details about a specific position.';

          case 'projects': {
            if (id) {
              const item = data.projects?.find(p => p.id === id);
              if (item) {
                setDisplayData({ type: 'project-detail', content: item });
                return `
${item.name}
${'='.repeat(item.name.length)}

${item.description}

${item.techStack ? 'Technologies: ' + item.techStack.join(', ') : ''}
${item.website ? '\nVisit Website: ' + item.website : ''}
${item.github ? 'View on GitHub: ' + item.github : ''}`;
              }
              return `Project not found with ID: ${id}\nUse 'projects' to list all projects.`;
            }

            // Custom featured projects data
            const featuredProjects = [
              {
                id: 1,
                name: 'ComfyBase Event Management System',
                description: 'A comprehensive Smart event management platform designed to simplify event organization, enhance attendee engagement, and provide seamless event experiences. Features real-time interactions, live streaming, interactive note-taking, media sharing, and an awards system.',
                techStack: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'Real-time', 'Event Management', 'Live Streaming'],
                website: 'https://comfybase-plp-7wum.vercel.app/',
                github: 'https://github.com/IsoDevMate/comfybase-plp',
                date: 'July 2025 - Present'
              },
              {
                id: 2,
                name: 'ComfyBase Mobile App',
                description: 'Cross-platform mobile application for event management with Flutter. Features interactive note-taking, multimedia support, QR code verification, and seamless cross-platform accessibility for Android, iOS, Web, and Desktop.',
                techStack: ['Flutter', 'Dart', 'Cross-platform', 'Mobile Development', 'Event Management', 'Real-time'],
                website: 'https://github.com/IsoDevMate/comfybase-plp',
                github: 'https://github.com/IsoDevMate/comfybase-plp',
                date: 'July 2025 - Present'
              },
              {
                id: 4,
                name: 'Groreels.com UGC Automation Platform',
                description: 'Built an AI-powered platform enabling users to generate and schedule UGC videos, blog posts, and avatars for TikTok, Reels, and YouTube. Engineered key modules including avatar/video generators, content calendar, affiliate system, and auto-posting workflows with integrated analytics and payment handling. Inspired by tools like MakeUGC.ai and Creatify, Groreels helps creators and businesses automate campaigns end-to-end from script to scheduled post.',
                techStack: ['AI', 'Video Generation', 'Content Automation', 'React', 'Node.js'],
                website: 'https://groreels.com',
                date: 'July 2025 - Present'
              },
              {
                id: 3,
                name: 'Portfolio Terminal',
                description: 'Interactive terminal-style portfolio with GUI/CLI modes',
                techStack: ['React', 'Terminal', 'Animation', 'Portfolio', 'ssh'],
                website: 'https://better-portfolio-pi.vercel.app',
                github: 'https://github.com/IsoDevMate/better-portfolio'
              }
            ];

            setDisplayData({ type: 'projects-list', content: featuredProjects });

            return 'Featured Projects\n' +
              '================\n\n' +
              featuredProjects.map(project => {
                const tags = project.techStack ?
                  project.techStack.join(' • ') : '';
                const dateInfo = project.date ? `\n📅 ${project.date}` : '';
                const websiteInfo = project.website ? `\n🌐 ${project.website}` : '';

                return `[${project.id}] 📁 ${project.name}${dateInfo}
${project.description}
🔧 ${tags}${websiteInfo}\n`;
              }).join('\n') +
              '\nUse \'projects <id>\' to view more details about a specific project.';
          }

          case 'education':
            setDisplayData({ type: 'education', content: data.education });
            return `${data.education.degree}\n${data.education.university}\n${data.education.dates}`;

          case 'contact':
            setDisplayData({ type: 'contact', content: data.contact });
            return `Email: ${data.contact.email}\nLocation: ${data.contact.location}\nGitHub: ${data.contact.github}`;

          case 'sponsor': {
            const amount = args[0] ? parseInt(args[0]) : null;
            const email = args[1] || 'barack.ouma@example.com'; // Default email

            if (amount && amount > 0) {
              // Validate minimum amount
              if (amount < 49) {
                return `❌ Error: Minimum sponsorship amount is 49 KES
💡 Custom amounts must be at least 29 KES

Try: sponsor 49`;
              }

              // Validate email
              if (!email || email === 'sponsor@example.com') {
                return `❌ Error: Valid email address required
💡 Usage: sponsor <amount> <email>

Examples:
• sponsor 99 user@example.com
• sponsor 199 john.doe@gmail.com`;
              }

              // Terminal-based sponsorship flow
              return await handleTerminalSponsorship(amount, email);
            }
            return `💝 Sponsorship Portal
==================

Thank you for considering to sponsor my work!

Quick sponsorship options:
• 49   - Buy me a coffee ☕
• 99   - Support my content creation
• 199  - Help with server costs
• 499  - Sponsor a blog post
• 999  - Support open source work
• 1999 - Major project sponsor

💡 Minimum amount: 49 KES | Custom minimum: 29 KES

Or enter any amount you prefer!

Usage: sponsor <amount> <email>
Example: sponsor 99 user@example.com

💡 Note: Email address is required for payment processing

💡 Test Examples:
• sponsor 48 user@example.com (should show minimum amount error from live API)
• sponsor 49 user@example.com (should work and call live API)

Your support helps me create more amazing content and open source projects! ❤️`;
          }

          case 'check': {
            const reference = args[0];
            if (!reference) {
              return `❌ Error: Please provide a payment reference
Usage: check <reference>
Example: check terminal_sponsor_1234567890`;
            }

            try {
              const response = await fetch('https://better-portfolio.onrender.com/verify-payment', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ reference }),
              });

              const result = await response.json();

              if (result.success) {
                const { amount, sponsor, email, status } = result.data;
                return `🎉 Payment Verification Successful!
=====================================

✅ Status: ${status}
💰 Amount: ${amount}
👤 Sponsor: ${sponsor}
📧 Email: ${email}
🔗 Reference: ${reference}

💝 Thank you for your sponsorship!
Your support means the world to me! ❤️

[Payment notification email sent to admin]`;
              } else {
                return `❌ Payment verification failed: ${result.error}`;
              }
            } catch (error) {
              return `❌ Error checking payment: ${error.message}`;
            }
          }

          case 'clear':
            return 'clear';

          case 'exit':
            switchToGui();
            return 'Exiting terminal...';

          default:
            return `Command not found. Type 'help' for available commands.`;
        }
      }

      switch (cmd) {
        case 'help':
        case 'man': {
          const commands = [
            { cmd: 'whoami', desc: 'Display current user information' },
            { cmd: 'id', desc: 'Display user and group IDs' },
            { cmd: 'pwd', desc: 'Print working directory' },
            { cmd: 'ls [-l]', desc: 'List directory contents (use -l for detailed view)' },
            { cmd: 'cat <section>', desc: 'Display content of sections (skills, about, contact)' },
            { cmd: 'catit', desc: 'Display all files in current directory' },
            { cmd: 'find <query>', desc: 'Search through portfolio content' },
            { cmd: 'grep <term>', desc: 'Search for specific terms in portfolio' },
            { cmd: 'ps', desc: 'Show running processes (current projects)' },
            { cmd: 'top', desc: 'Display top skills and technologies' },
            { cmd: 'history', desc: 'Show command history' },
            { cmd: 'env', desc: 'Display environment variables' },
            { cmd: 'uname [-a]', desc: 'System information' },
            { cmd: 'uptime', desc: 'Show system uptime and experience' },
            { cmd: 'which <skill>', desc: 'Locate a skill or technology' },
            { cmd: 'wget <section>', desc: 'Download section information' },
            { cmd: 'curl -X GET /<endpoint>', desc: 'API-style data fetching' },
            { cmd: 'ssh git@github.com', desc: 'Connect to GitHub profile' },
            { cmd: 'ping <service>', desc: 'Check availability of services' },
            { cmd: 'df -h', desc: 'Display skill distribution' },
            { cmd: 'free -h', desc: 'Show available time and capacity' },
            { cmd: 'jobs', desc: 'List current positions and roles' },
            { cmd: 'crontab -l', desc: 'Show scheduled tasks and goals' },
            { cmd: 'alias', desc: 'Show command aliases' },
            { cmd: 'tree', desc: 'Display portfolio structure' },
            { cmd: 'sudo contact', desc: 'Get contact information with privileges' },
            { cmd: 'vim resume.txt', desc: 'View resume in vim-style' },
            { cmd: 'neofetch', desc: 'Display system information banner' },
            { cmd: 'sponsor', desc: '💝 Support my work with a donation (49+ KES)' },
            { cmd: 'check', desc: 'Check payment status with reference' },
            { cmd: 'mode <type>', desc: 'Switch terminal mode' },
            { cmd: 'clear', desc: 'Clear terminal screen' },
            { cmd: 'exit', desc: 'Exit terminal mode' }
          ];

          setDisplayData({
            type: 'help',
            content: {
              title: 'Technical Mode Commands',
              commands: commands
            }
          });

          // Format commands for CLI display
          const maxCmdLength = Math.max(...commands.map(c => c.cmd.length));
          const cliOutput = commands.map(c =>
            `${c.cmd.padEnd(maxCmdLength)}  ${c.desc}`
          ).join('\n');

          return `PORTFOLIO TERMINAL MANUAL

Available commands:
${cliOutput}

Type 'man <command>' for detailed help on specific commands.`;
        }

        case 'whoami':
          setDisplayData({
            type: 'profile',
            content: {
              name: data.name,
              title: data.title,
              bio: data.bio
            }
          });
          return `User Information
================

Username: ${data.name.toLowerCase().replace(' ', '.')}
Name:     ${data.name}
Title:    ${data.title}
Bio:      ${data.bio}`;

        case 'id':
          return `uid=1000(barack.ouma) gid=1000(developers) groups=1000(developers),27(sudo),44(video),46(plugdev),116(lpadmin),126(sambashare),999(docker)`;

        case 'pwd':
          return `/home/barack.ouma/portfolio`;

        case 'ls':
          if (flag === '-l') {
            setDisplayData({ type: 'ls-detailed', content: data });
            return `total 12
drwxr-xr-x 2 barack developers 4096 Aug  3 10:30 experience/
drwxr-xr-x 2 barack developers 4096 Aug  3 10:30 projects/
drwxr-xr-x 2 barack developers 4096 Aug  3 10:30 skills/
-rw-r--r-- 1 barack developers 1024 Aug  3 10:30 about.txt
-rw-r--r-- 1 barack developers 2048 Aug  3 10:30 contact.info
-rw-r--r-- 1 barack developers  512 Aug  3 10:30 education.md
-rw-r--r-- 1 barack developers 1536 Aug  3 10:30 certifications.json`;
          } else {
            setDisplayData({ type: 'ls-simple', content: data });
            return `about.txt       certifications.json  education.md
contact.info    experience/           projects/
skills/`;
          }

        case 'cat': {
          const section = args[0];
          if (section === 'skills') {
            setDisplayData({ type: 'skills', content: data.skills });
            return data.skills.map(s => `[${s.category}]\n${s.values.join(', ')}\n`).join('\n');
          } else if (section === 'about' || section === 'about.txt') {
            setDisplayData({ type: 'about', content: { text: data.about_me } });
            return data.about_me;
          } else if (section === 'contact' || section === 'contact.info') {
            setDisplayData({ type: 'contact', content: data.contact });
            return `Email: ${data.contact.email}
Location: ${data.contact.location}
GitHub: ${data.contact.github}
LinkedIn: ${data.contact.linkedin}
Website: ${data.contact.website}`;
          } else if (section === 'certifications.json') {
            setDisplayData({ type: 'certifications-list', content: data.certifications });
            return JSON.stringify(data.certifications, null, 2);
          }
          return `cat: ${section}: No such file or directory`;
        }

        case 'catit': {
          const allContent = [];
          if (data.about_me) {
            allContent.push('=== about.txt ===\n' + data.about_me);
          }
          if (data.contact) {
            allContent.push('=== contact.info ===\n' +
              `Email: ${data.contact.email}\nLocation: ${data.contact.location}`);
          }
          if (data.skills) {
            allContent.push('=== skills.txt ===\n' +
              data.skills.map(s => `[${s.category}]\n${s.values.join(', ')}`).join('\n\n'));
          }
          if (data.certifications) {
            allContent.push('=== certifications.json ===\n' +
              JSON.stringify(data.certifications, null, 2));
          }

          setDisplayData({ type: 'cat-all', content: allContent });
          return allContent.join('\n\n');
        }

        case 'find': {
          const query = args.join(' ');
          if (!query) return `find: missing argument`;

          const results = [];
          data.experience?.forEach(exp => {
            if (exp.title.toLowerCase().includes(query) ||
                exp.company.toLowerCase().includes(query) ||
                exp.tags.some(tag => tag.toLowerCase().includes(query))) {
              results.push(`./experience/${exp.title.toLowerCase().replace(/\s+/g, '_')}`);
            }
          });
          data.projects?.forEach(proj => {
            if (proj.name.toLowerCase().includes(query) ||
                proj.description.toLowerCase().includes(query) ||
                proj.tags.some(tag => tag.toLowerCase().includes(query))) {
              results.push(`./projects/${proj.name.toLowerCase().replace(/\s+/g, '_')}`);
            }
          });
          data.skills?.forEach(skill => {
            if (skill.category.toLowerCase().includes(query) ||
                skill.values.some(val => val.toLowerCase().includes(query))) {
              results.push(`./skills/${skill.category.toLowerCase()}`);
            }
          });
          if (data.about_me.toLowerCase().includes(query)) {
            results.push('./about.txt');
          }
          if (data.contact.email.toLowerCase().includes(query) ||
              data.contact.location.toLowerCase().includes(query)) {
            results.push('./contact.info');
          }
          if (data.certifications?.some(cert =>
              cert.name.toLowerCase().includes(query) ||
              cert.issuer.toLowerCase().includes(query))) {
            results.push('./certifications.json');
          }

          setDisplayData({
            type: 'find-results',
            content: {
              term: query,
              results
            }
          });

          return results.length > 0 ? results.join('\n') : `find: no matches for '${query}'`;
        }

        case 'grep': {
          const term = args.join(' ');
          if (!term) return `grep: missing search term`;

          const matches = [];
          if (data.about_me.toLowerCase().includes(term)) {
            matches.push(`about.txt: ${data.about_me}`);
          }
          data.experience?.forEach(exp => {
            exp.description_points?.forEach(point => {
              if (point.toLowerCase().includes(term)) {
                matches.push(`experience/${exp.company}: ${point}`);
              }
            });
          });
          return matches.length > 0 ? matches.slice(0, 5).join('\n') : `grep: no matches for '${term}'`;
        }

        case 'ps':
          setDisplayData({ type: 'projects-list', content: data.projects });
          return `  PID TTY      STAT   START   TIME COMMAND
${data.projects?.map((p, i) => `${1000 + i}  pts/0    S+    ${p.id < 3 ? 'Jan01' : 'Feb15'}   0:00 ${p.name.toLowerCase()}`).join('\n')}`;

        case 'top':
          setDisplayData({ type: 'skills', content: data.skills });
          return `top - portfolio overview
Tasks: ${data.skills?.reduce((acc, s) => acc + s.values.length, 0)} total skills
%Cpu(s): 95.2 us (actively developing)

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND
${data.skills?.[0]?.values.slice(0, 5).map((skill, i) => `${1000 + i} barack    20   0   ${100 + i*10}m   ${20 + i*5}m   ${10 + i}m S  ${95 - i*5}.${i}   ${5 + i}.0   ${i}:${30 + i} ${skill.toLowerCase()}`).join('\n')}`;

        case 'history':
          return `    1  whoami
    2  ls -l
    3  cat skills
    4  find react
    5  ps
    6  top
    7  history`;

        case 'env':
          return `USER=barack.ouma
HOME=/home/barack.ouma
SHELL=/bin/bash
PROFESSION=software_engineer
LOCATION=nairobi_kenya
SPECIALIZATION=backend_development
AWS_CERTIFIED=true
FAVORITE_TECH=react,node,python
GITHUB_USERNAME=IsoDevMate`;

        case 'uname':
          if (flag === '-a') {
            return `Portfolio 5.4.0-portfolioOS #1 SMP Barack-Kernel x86_64 x86_64 x86_64 PortfolioOS/Ubuntu`;
          }
          return `PortfolioOS`;

        case 'uptime':
          return `10:30:42 up 3 years, 2 months, 15 days, 6:42, 1 user, load average: 0.85, 0.92, 1.01
Professional experience: 3+ years in software development
Active coding streak: 847 days`;

        case 'which': {
          const skill = args[0];
          if (!skill) return `which: missing argument`;

          const found = data.skills?.find(s =>
            s.values.some(v => v.toLowerCase().includes(skill))
          );
          return found ? `/usr/local/bin/${skill}` : `which: no ${skill} in PATH`;
        }

        case 'wget': {
          const wgetSection = args[0];
          if (wgetSection === 'resume' || wgetSection === 'cv') {
            return `--2025-08-03 10:30:42--  https://portfolio.barack-ouma.com/resume.pdf
Resolving portfolio.barack-ouma.com... 192.168.1.100
Connecting to portfolio.barack-ouma.com:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 245760 (240K) [application/pdf]
Saving to: 'barack_ouma_resume.pdf'

barack_ouma_resume.pdf    100%[===================>] 240.00K  1.20MB/s    in 0.2s

2025-08-03 10:30:43 (1.20 MB/s) - 'barack_ouma_resume.pdf' saved [245760/245760]`;
          }
          return `wget: missing URL`;
        }

        case 'curl':
          if (args[0] === '-X' && args[1] === 'GET') {
            const endpoint = args[2];
            if (endpoint === '/api/experience') {
              setDisplayData({ type: 'experience-list', content: data.experience });
              return `HTTP/1.1 200 OK\nContent-Type: application/json\n\n${JSON.stringify(data.experience, null, 2)}`;
            } else if (endpoint === '/api/skills') {
              setDisplayData({ type: 'skills', content: data.skills });
              return `HTTP/1.1 200 OK\nContent-Type: application/json\n\n${JSON.stringify(data.skills, null, 2)}`;
            }
          }
          return `curl: invalid syntax. Try: curl -X GET /api/experience`;

        case 'ssh':
          if (args[0] === 'git@github.com') {
            window.open(data.contact.github, '_blank');
            return `PTY allocation request failed on channel 0
Hi IsoDevMate! You've successfully authenticated to GitHub.
Opening GitHub profile...`;
          }
          return `ssh: connection failed`;

        case 'ping': {
          const service = args[0];
          if (service === 'github.com') {
            return `PING github.com (140.82.112.3): 56 data bytes
64 bytes from 140.82.112.3: icmp_seq=0 ttl=64 time=12.345 ms
64 bytes from 140.82.112.3: icmp_seq=1 ttl=64 time=11.234 ms
--- github.com ping statistics ---
2 packets transmitted, 2 packets received, 0.0% packet loss`;
          }
          return `ping: ${service}: Name or service not known`;
        }

        case 'df':
          if (flag === '-h') {
            return `Filesystem      Size  Used Avail Use% Mounted on
/dev/skills     100G   75G   25G  75% /usr/local/skills
/dev/experience  50G   35G   15G  70% /var/experience
/dev/projects    30G   20G   10G  67% /home/projects
/dev/learning   ∞     ∞     ∞    0% /tmp/continuous_learning`;
          }
          return `df: missing -h flag for human readable format`;

        case 'free':
          if (flag === '-h') {
            return `              total        used        free      shared
Mem:           16Gi        12Gi        4Gi       2Gi
Available time: 40h/week    Used: 35h/week    Free: 5h/week
Creativity:    ∞           High        ∞         ∞`;
          }
          return `free: use -h for human readable format`;

        case 'jobs':
          setDisplayData({ type: 'experience-list', content: data.experience });
          return `[1]+  Running    FullStack Engineer at Redolesence Ltd
[2]   Running    FullStack Engineer at Yafreeka Entertainment Ltd
[3]   Stopped    Software Engineering Trainee at Power Learn Project`;

        case 'crontab':
          if (flag === '-l') {
            return `# Barack's scheduled tasks
0 9 * * 1-5 /usr/bin/code # Start coding at 9 AM weekdays
0 12 * * * /usr/bin/coffee # Daily coffee break
0 18 * * * /usr/bin/git-commit # Daily code commit
0 20 * * * /usr/bin/learn-new-tech # Evening learning
0 0 * * 0 /usr/bin/weekly-review # Weekly progress review`;
          }
          return `crontab: use -l to list scheduled tasks`;

        case 'alias':
          return `alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'
alias code='vim'
alias python='python3'
alias ..='cd ..'
alias ...='cd ../..'
alias grep='grep --color=auto'
alias projects='ls ~/projects'
alias skills='cat ~/skills.txt'`;

        case 'tree':
          setDisplayData({ type: 'tree', content: data });
          return `/home/barack.ouma/portfolio
├── experience/
│   ├── redolesence/
│   └── yafreeka/
├── projects/
│   ├── groreels/
│   └── aviator/
├── skills/
│   ├── frontend/
│   ├── backend/
│   ├── databases/
│   └── languages/
├── about.txt
├── contact.info
├── education.md
└── certifications.json

8 directories, 4 files`;

        case 'sudo':
          if (args[0] === 'contact') {
            setDisplayData({ type: 'contact', content: data.contact });
            return `[sudo] password for barack: ****
Access granted. Contact information unlocked.

📧 Email: ${data.contact.email}
📍 Location: ${data.contact.location}
🐙 GitHub: ${data.contact.github}
💼 LinkedIn: ${data.contact.linkedin}
🌐 Website: ${data.contact.website}`;
          }
          return `sudo: ${args.join(' ')}: command not found`;

        case 'sponsor': {
          const amount = args[0] ? parseInt(args[0]) : null;
          const email = args[1] || 'barack.ouma@example.com'; // Default email

          if (amount && amount > 0) {
            // Validate minimum amount
            if (amount < 49) {
              return `❌ Error: Minimum sponsorship amount is 49 KES
💡 Custom amounts must be at least 29 KES

Try: sponsor 49`;
            }

            // Validate email
            if (!email || email === 'sponsor@example.com') {
              return `❌ Error: Valid email address required
💡 Usage: sponsor <amount> <email>

Examples:
• sponsor 99 user@example.com
• sponsor 199 john.doe@gmail.com`;
            }

            // Terminal-based sponsorship flow
            return await handleTerminalSponsorship(amount, email);
          }
          return `💝 Sponsorship Portal
==================

Thank you for considering to sponsor my work!

Quick sponsorship options:
• 49   - Buy me a coffee ☕
• 99   - Support my content creation
• 199  - Help with server costs
• 499  - Sponsor a blog post
• 999  - Support open source work
• 1999 - Major project sponsor

💡 Minimum amount: 49 KES | Custom minimum: 29 KES

Or enter any amount you prefer!

Usage: sponsor <amount> <email>
Example: sponsor 99 user@example.com

💡 Note: Email address is required for payment processing

Your support helps me create more amazing content and open source projects! ❤️`;
        }

        case 'check': {
          const reference = args[0];
          if (!reference) {
            return `❌ Error: Please provide a payment reference
Usage: check <reference>
Example: check terminal_sponsor_1234567890`;
          }

          try {
            const response = await fetch('https://better-portfolio.onrender.com/verify-payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ reference }),
            });

            const result = await response.json();

            if (result.success) {
              const { amount, sponsor, email, status } = result.data;
              return `🎉 Payment Verification Successful!
=====================================

✅ Status: ${status}
💰 Amount: ${amount}
👤 Sponsor: ${sponsor}
📧 Email: ${email}
🔗 Reference: ${reference}

💝 Thank you for your sponsorship!
Your support means the world to me! ❤️

[Payment notification email sent to admin]`;
            } else {
              return `❌ Payment verification failed: ${result.error}`;
            }
          } catch (error) {
            return `❌ Error checking payment: ${error.message}`;
          }
        }



        case 'vim':
          if (args[0] === 'resume.txt' || args[0] === 'resume') {
            setDisplayData({ type: 'vim-resume', content: data });
            return `"resume.txt" 45L, 2048C

~ VIM - Barack Ouma Resume ~
:q to quit, :w to save

NAME: ${data.name}
TITLE: ${data.title}
EMAIL: ${data.contact.email}
LOCATION: ${data.contact.location}

EXPERIENCE:
${data.experience?.map(exp => `• ${exp.title} @ ${exp.company} (${exp.dates})`).join('\n')}

SKILLS:
${data.skills?.map(s => `${s.category}: ${s.values.join(', ')}`).join('\n')}

:wq (save and quit)`;
          }
          return `vim: ${args[0]}: No such file or directory`;

        case 'neofetch': {
          const neofetchOutput = `
      ___           ${data.name}
     (.. |          OS: Portfolio Terminal v2.1.0
     (<> |          Host: Interactive Portfolio Shell
    / __  \\         Kernel: React.js v18
   ( /  \\ /|        Uptime: Professional since 2022
  _/\\ __)/_)        Shell: Portfolio Terminal
  \\/-____\\/         Resolution: Full-stack Developer
                  Terminal: Portfolio Interface
                  Language: TypeScript, JavaScript, Python
                  Location: ${data.contact.location}
                  Status: Available for opportunities
`;
          setDisplayData({
            type: 'neofetch',
            content: { ascii: neofetchOutput, data }
          });
          return neofetchOutput;
        }

        case 'experience':
          if (id) {
            const item = data.experience?.find(e => e.id === id);
            if (item) {
              setDisplayData({ type: 'experience-detail', content: item });
              return `${item.title} @ ${item.company}\n${item.dates}\n\n${item.description_points.join('\n')}`;
            }
            return `Experience ID ${id} not found.`;
          }
          setDisplayData({ type: 'experience-list', content: data.experience });
          return data.experience?.map(e => `${e.id}. ${e.title} @ ${e.company}`).join('\n') || 'No experience data';

        case 'projects': {
          if (id) {
            // Use the same featured projects data as simple mode
            const featuredProjects = [
              {
                id: 1,
                name: 'ComfyBase Event Management System',
                description: 'A comprehensive Smart event management platform designed to simplify event organization, enhance attendee engagement, and provide seamless event experiences. Features real-time interactions, live streaming, interactive note-taking, media sharing, and an awards system.',
                techStack: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'Real-time', 'Event Management', 'Live Streaming'],
                website: 'https://comfybase-plp-7wum.vercel.app/',
                github: 'https://github.com/IsoDevMate/comfybase-plp',
                date: 'July 2025 - Present'
              },
              {
                id: 2,
                name: 'ComfyBase Mobile App',
                description: 'Cross-platform mobile application for event management with Flutter. Features interactive note-taking, multimedia support, QR code verification, and seamless cross-platform accessibility for Android, iOS, Web, and Desktop.',
                techStack: ['Flutter', 'Dart', 'Cross-platform', 'Mobile Development', 'Event Management', 'Real-time'],
                website: 'https://github.com/IsoDevMate/comfybase-plp',
                github: 'https://github.com/IsoDevMate/comfybase-plp',
                date: 'July 2025 - Present'
              },
              {
                id: 4,
                name: 'Groreels.com UGC Automation Platform',
                description: 'Built an AI-powered platform enabling users to generate and schedule UGC videos, blog posts, and avatars for TikTok, Reels, and YouTube. Engineered key modules including avatar/video generators, content calendar, affiliate system, and auto-posting workflows with integrated analytics and payment handling. Inspired by tools like MakeUGC.ai and Creatify, Groreels helps creators and businesses automate campaigns end-to-end from script to scheduled post.',
                techStack: ['AI', 'Video Generation', 'Content Automation', 'React', 'Node.js'],
                website: 'https://groreels.com',
                date: 'July 2025 - Present'
              },
              {
                id: 3,
                name: 'Portfolio Terminal',
                description: 'Interactive terminal-style portfolio with GUI/CLI modes',
                techStack: ['React', 'Terminal', 'Animation', 'Portfolio', 'ssh'],
                website: 'https://better-portfolio-pi.vercel.app',
                github: 'https://github.com/IsoDevMate/better-portfolio'
              }
            ];

            const item = featuredProjects.find(p => p.id === id);
            if (item) {
              setDisplayData({ type: 'project-detail', content: item });
              return `${item.name}\n${item.description}\n${item.techStack.join(', ')}`;
            }
            return `Project ID ${id} not found.`;
          }

          // Use the same featured projects data as simple mode
          const featuredProjects = [
            {
              id: 1,
              name: 'ComfyBase Event Management System',
              description: 'A comprehensive Smart event management platform designed to simplify event organization, enhance attendee engagement, and provide seamless event experiences. Features real-time interactions, live streaming, interactive note-taking, media sharing, and an awards system.',
              techStack: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'Real-time', 'Event Management', 'Live Streaming'],
              website: 'https://comfybase-plp-7wum.vercel.app/',
              github: 'https://github.com/IsoDevMate/comfybase-plp',
              date: 'July 2025 - Present'
            },
            {
              id: 2,
              name: 'ComfyBase Mobile App',
              description: 'Cross-platform mobile application for event management with Flutter. Features interactive note-taking, multimedia support, QR code verification, and seamless cross-platform accessibility for Android, iOS, Web, and Desktop.',
              techStack: ['Flutter', 'Dart', 'Cross-platform', 'Mobile Development', 'Event Management', 'Real-time'],
              website: 'https://github.com/IsoDevMate/comfybase-plp',
              github: 'https://github.com/IsoDevMate/comfybase-plp',
              date: 'July 2025 - Present'
            },
            {
              id: 4,
              name: 'Groreels.com UGC Automation Platform',
              description: 'Built an AI-powered platform enabling users to generate and schedule UGC videos, blog posts, and avatars for TikTok, Reels, and YouTube. Engineered key modules including avatar/video generators, content calendar, affiliate system, and auto-posting workflows with integrated analytics and payment handling. Inspired by tools like MakeUGC.ai and Creatify, Groreels helps creators and businesses automate campaigns end-to-end from script to scheduled post.',
              techStack: ['AI', 'Video Generation', 'Content Automation', 'React', 'Node.js'],
              website: 'https://groreels.com',
              date: 'July 2025 - Present'
            },
            {
              id: 3,
              name: 'Portfolio Terminal',
              description: 'Interactive terminal-style portfolio with GUI/CLI modes',
              techStack: ['React', 'Terminal', 'Animation', 'Portfolio', 'ssh'],
              website: 'https://better-portfolio-pi.vercel.app',
              github: 'https://github.com/IsoDevMate/better-portfolio'
            }
          ];

          setDisplayData({ type: 'projects-list', content: featuredProjects });
          return 'Featured Projects\n' +
            '================\n\n' +
            featuredProjects.map(project => {
              const tags = project.techStack ?
                project.techStack.join(' • ') : '';
              const dateInfo = project.date ? `\n📅 ${project.date}` : '';
              const websiteInfo = project.website ? `\n🌐 ${project.website}` : '';

              return `[${project.id}] 📁 ${project.name}${dateInfo}
${project.description}
🔧 ${tags}${websiteInfo}\n`;
            }).join('\n') +
            '\nUse \'projects <id>\' to view more details about a specific project.';
        }

        case 'education':
          setDisplayData({ type: 'education', content: data.education });
          return `${data.education?.degree}\n${data.education?.university}\n${data.education?.dates}`;

        case 'certifications':
          setDisplayData({ type: 'certifications-list', content: data.certifications });
          return data.certifications?.map(c => `${c.id || 1}. ${c.name}`).join('\n') || 'No certifications data';

        case 'contact':
          setDisplayData({ type: 'contact', content: data.contact });
          return `Email: ${data.contact.email}\nLocation: ${data.contact.location}\nGitHub: ${data.contact.github}`;

        case 'about':
          setDisplayData({ type: 'about', content: { text: data.about_me } });
          return data.about_me;

        case 'gui':
          switchToGui();
          return 'Switching to GUI mode...';

        case 'clear':
          return 'clear';

        case 'exit':
        case 'quit':
          switchToGui();
          return 'Exiting terminal...';

        case '':
          return '';

        default:
          return `bash: ${command}: command not found

Did you mean one of these?
  whoami    ls       cat      find     grep
  ps        top      history  env      uname
  sponsor   clear    exit

Type 'help' or 'man' for a full list of available commands.`;
      }
    } catch (error) {
      console.error('Command processing error:', error);
      return `Error: ${error.message}\nTry 'help' for available commands`;
    }
  };
  return process;
};

const DisplayPanel = ({ displayData, mode, scrollRef }) => {
  if (!displayData) {
    return (
      <Card className="bg-gray-900 border-gray-700 h-full w-full">
        <CardContent className="p-6 flex items-center justify-center h-full">
          <div className="text-center text-gray-400">
            <div className="text-4xl mb-3">💻</div>
            <h3 className="text-lg font-medium mb-2 text-gray-200">
              {mode === 'simple' ? 'Interactive Portfolio' :
               mode === 'technical' ? 'Terminal Interface' : 'GraphQL Gateway'}
            </h3>
            <p className="text-sm">
              {mode === 'simple' ? 'Type commands to explore' :
               mode === 'technical' ? 'Execute commands to navigate' : 'Query the portfolio data'}
            </p>
            <p className="text-xs mt-2 text-gray-500">
              {mode === 'simple' ? 'Try: help, about, skills, neofetch' :
               mode === 'technical' ? 'Try: whoami, ls -l, cat skills, neofetch' : 'Try: query experience, schema'}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  switch (displayData.type) {
    case 'help':
      return (
        <div className="h-full flex flex-col">
          <h3 className="text-lg font-bold text-white font-mono mb-4">{displayData.content.title}</h3>
          <div className="flex-1 overflow-y-auto pr-2" ref={scrollRef}>
            <div className="grid grid-cols-1 gap-2">
              {displayData.content.commands.map((cmd, index) => (
                <div key={index} className="border-l-2 border-green-400 pl-3 py-1 bg-gray-800 rounded-r">
                  <code className="text-green-400 font-mono text-sm font-bold">{cmd.cmd}</code>
                  <p className="text-gray-300 text-xs mt-1">{cmd.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'neofetch':
      return (
        <div className="h-full flex flex-col">
          <h3 className="text-lg font-bold text-white font-mono mb-4">System Information</h3>
          <div className="flex-1 overflow-y-auto pr-2" ref={scrollRef}>
            <div className="bg-gray-800 p-4 rounded border border-gray-700">
              <pre className="text-green-400 font-mono text-xs whitespace-pre-wrap">
                {displayData.content.ascii}
              </pre>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                <div className="bg-gray-700 p-2 rounded">
                  <span className="text-blue-400 font-mono">GitHub:</span>
                  <a href={displayData.content.data.contact.github} className="text-green-400 ml-2 hover:underline">
                    IsoDevMate
                  </a>
                </div>
                <div className="bg-gray-700 p-2 rounded">
                  <span className="text-blue-400 font-mono">LinkedIn:</span>
                  <a href={displayData.content.data.contact.linkedin} className="text-green-400 ml-2 hover:underline">
                    Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'tree':
      return (
        <div className="h-full flex flex-col">
          <h3 className="text-lg font-bold text-white font-mono mb-4">Portfolio Structure</h3>
          <div className="flex-1 overflow-y-auto pr-2" ref={scrollRef}>
            <div className="bg-gray-800 p-4 rounded border border-gray-700">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-blue-400 font-bold text-sm font-mono">📁 experience/</h4>
                  {displayData.content.experience?.map((exp, i) => (
                    <div key={i} className="pl-4 text-gray-300 text-xs font-mono">
                      ├── {exp.company.toLowerCase().replace(/\s+/g, '-')}/
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <h4 className="text-blue-400 font-bold text-sm font-mono">📁 projects/</h4>
                  {displayData.content.projects?.map((proj, i) => (
                    <div key={i} className="pl-4 text-gray-300 text-xs font-mono">
                      ├── {proj.name.toLowerCase().replace(/\s+/g, '-')}/
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'vim-resume':
      return (
        <div className="h-full flex flex-col">
          <h3 className="text-lg font-bold text-white font-mono mb-4">VIM - Resume Editor</h3>
          <div className="flex-1 overflow-y-auto pr-2" ref={scrollRef}>
            <div className="bg-black border border-green-400 rounded p-4">
              <div className="text-green-400 font-mono text-xs mb-2">
                -- INSERT MODE -- | :wq to save and quit | :q! to quit without saving
              </div>
              <pre className="text-green-200 font-mono text-xs whitespace-pre-wrap">
{`=== BARACK OUMA - RESUME ===

CONTACT:
Email: ${displayData.content.contact.email}
Location: ${displayData.content.contact.location}
GitHub: ${displayData.content.contact.github}

EXPERIENCE:
${displayData.content.experience?.map(exp =>
`- ${exp.title} @ ${exp.company}
  Duration: ${exp.dates}
  Technologies: ${exp.tags.join(', ')}`
).join('\n\n')}

SKILLS:
${displayData.content.skills?.map(skill =>
`${skill.category}: ${skill.values.join(', ')}`
).join('\n')}

EDUCATION:
${displayData.content.education?.degree}
${displayData.content.education?.university}
${displayData.content.education?.dates}
`}
              </pre>
            </div>
          </div>
        </div>
      );

    case 'profile':
      return (
        <div className="h-full flex flex-col">
          <div className="flex-1 overflow-y-auto pr-2" ref={scrollRef}>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-black">
                {displayData.content.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-xl font-bold text-white font-mono">{displayData.content.name}</h3>
              <p className="text-green-400 text-sm font-mono">{displayData.content.title}</p>
            </div>
            <p className="text-gray-300 text-sm text-center leading-relaxed mt-4">{displayData.content.bio}</p>
          </div>
        </div>
      );

    case 'graphql-response':
    case 'graphql-payment':
    case 'graphql-verification':
      return (
        <div className="h-full flex flex-col" ref={scrollRef}>
          <div className="flex items-center justify-between border-b border-gray-700 pb-2 mb-4">
            <h3 className="text-lg font-bold text-white font-mono">
              GraphQL {displayData.content.operation} - {displayData.content.entity}
              {displayData.type === 'graphql-payment' && (
                <Badge variant="outline" className="ml-2 text-green-400 border-green-400 text-xs">
                  💝 Payment
                </Badge>
              )}
              {displayData.type === 'graphql-verification' && (
                <Badge variant="outline" className="ml-2 text-blue-400 border-blue-400 text-xs">
                  ✅ Verification
                </Badge>
              )}
            </h3>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-green-400 border-green-400 text-xs">
                {displayData.content.responseTime}ms
              </Badge>
              <span className="text-xs text-gray-400">
                {new Date(displayData.content.timestamp).toLocaleTimeString()}
              </span>
            </div>
          </div>

          <div className="flex-1 flex flex-col overflow-hidden space-y-4">
            <div className="bg-gray-900 rounded-md overflow-hidden border border-gray-700">
              <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-purple-300 font-mono text-sm">Request</span>
                  <Badge variant="outline" className="text-green-400 border-green-400 text-xs">
                    {displayData.content.responseTime}ms
                  </Badge>
                </div>
              </div>
              <div className="p-4 overflow-auto max-h-64">
                <pre className="text-gray-300 text-xs font-mono">
                  <code className="text-purple-400"># Query</code>
                  <div className="text-green-300 mt-1">
                    {displayData.content.query.split('\n').map((line, i) => (
                      <div key={i} className="whitespace-pre">{line}</div>
                    ))}
                  </div>
                </pre>
              </div>
            </div>

            <div className="bg-gray-900 rounded-md overflow-hidden border border-gray-700 flex-1 flex flex-col">
              <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-purple-300 font-mono text-sm">Response</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-green-400 border-green-400 text-xs">
                      200 OK
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="p-4 overflow-auto flex-1">
                <div className="space-y-4">
                  <div>
                    <div className="text-green-400 text-xs font-mono mb-1">Data</div>
                    <pre className="bg-black p-3 rounded text-green-200 text-xs overflow-x-auto">
                      {JSON.stringify(displayData.content.data, null, 2)}
                    </pre>
                  </div>

                  <div>
                    <div className="text-green-400 text-xs font-mono mb-1">Extensions</div>
                    <pre className="bg-black p-3 rounded text-gray-300 text-xs overflow-x-auto">
                      {JSON.stringify({
                        responseTime: `${displayData.content.responseTime}ms`,
                        cacheControl: {
                          version: 1,
                          hints: [
                            {
                              path: [displayData.content.entity],
                              maxAge: 60
                            }
                          ]
                        }
                      }, null, 2)}
                    </pre>
                  </div>
                </div>
              </div>
              <div className="px-4 py-2 bg-gray-800 border-t border-gray-700 text-xs text-gray-400 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  <span>Request completed in {displayData.content.responseTime}ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'skills':
      return (
        <div className="h-full flex flex-col">
          <h3 className="text-lg font-bold text-white font-mono mb-4">Technical Skills</h3>
          <div className="flex-1 overflow-y-auto pr-2" ref={scrollRef}>
            {displayData.content.map((skill, index) => (
              <div key={index} className="space-y-2 mb-4">
                <h4 className="text-green-400 font-bold text-sm font-mono">{skill.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.values.map((value, i) => (
                    <Badge key={i} variant="secondary" className="bg-gray-800 text-gray-300 text-xs border border-gray-600 hover:border-green-400 transition-colors font-mono">
                      {value}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'ls-detailed':
    case 'ls-simple':
      return (
        <div className="h-full flex flex-col">
          <h3 className="text-lg font-bold text-white font-mono mb-4">Directory Contents</h3>
          <div className="flex-1 overflow-y-auto pr-2" ref={scrollRef}>
            <div className="space-y-2 font-mono text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 p-3 rounded border border-gray-700">
                  <h4 className="text-blue-400 font-bold mb-2">📁 experience/</h4>
                  <p className="text-gray-400 text-xs">{displayData.content.experience?.length || 0} positions</p>
                </div>
                <div className="bg-gray-800 p-3 rounded border border-gray-700">
                  <h4 className="text-blue-400 font-bold mb-2">📁 projects/</h4>
                  <p className="text-gray-400 text-xs">{displayData.content.projects?.length || 0} repositories</p>
                </div>
                <div className="bg-gray-800 p-3 rounded border border-gray-700">
                  <h4 className="text-green-400 font-bold mb-2">📄 about.txt</h4>
                  <p className="text-gray-400 text-xs">About me</p>
                </div>
                <div className="bg-gray-800 p-3 rounded border border-gray-700">
                  <h4 className="text-green-400 font-bold mb-2">📄 contact.info</h4>
                  <p className="text-gray-400 text-xs">Contact details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'experience-list':
      return (
        <div className="h-full flex flex-col">
          <h3 className="text-lg font-bold text-white font-mono mb-4">Work Experience</h3>
          <div className="flex-1 overflow-y-auto pr-2" ref={scrollRef}>
            <div className="space-y-3">
              {displayData.content.map((exp) => (
                <div key={exp.id} className="border border-gray-700 rounded-lg p-4 hover:border-green-400 transition-colors bg-gray-800">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-bold text-white font-mono">{exp.title}</h4>
                      <p className="text-green-400 text-sm font-mono">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs font-mono">
                      ID: {exp.id}
                    </Badge>
                  </div>
                  <p className="text-gray-400 text-xs font-mono mb-3 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {exp.dates}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {exp.tags.slice(0, 4).map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs font-mono">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'experience-detail':
      return (
        <div className="h-full flex flex-col">
          <div className="flex-1 overflow-y-auto pr-2" ref={scrollRef}>
            <div>
              <h3 className="text-lg font-bold text-white font-mono">{displayData.content.title}</h3>
              <p className="text-green-400 text-sm font-mono">{displayData.content.company}</p>
              <p className="text-gray-400 text-xs flex items-center gap-1 mt-1 font-mono">
                <Calendar className="w-3 h-3" />
                {displayData.content.dates}
              </p>
            </div>
            <div className="mt-4">
              <h4 className="text-white font-bold mb-3 text-sm font-mono">Responsibilities:</h4>
              <ul className="space-y-2">
                {displayData.content.description_points.map((point, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-green-400 mt-1 font-mono">▸</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {displayData.content.tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="bg-gray-800 text-gray-300 text-xs border border-gray-600 font-mono">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      );

    case 'projects-list':
      return (
        <div className="h-full flex flex-col">
          <h3 className="text-lg font-bold text-white font-mono mb-4">Projects</h3>
          <div className="flex-1 overflow-y-auto pr-2" ref={scrollRef}>
            <div className="space-y-3">
              {displayData.content.map((project) => (
                <div key={project.id} className="border border-gray-700 rounded-lg p-4 hover:border-green-400 transition-colors bg-gray-800">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-white font-mono">{project.name}</h4>
                    <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs font-mono">
                      PID: {project.id}
                    </Badge>
                  </div>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {(project.techStack || project.tags || []).slice(0, 4).map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs font-mono">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {(project.github || project.details_link) && (
                    <a href={project.github || project.details_link} className="text-green-400 hover:underline flex items-center gap-1 text-xs font-mono">
                      <Github className="w-3 h-3" />
                      Source Code
                    </a>
                  )}
                  {project.website && (
                    <a href={project.website} className="text-blue-400 hover:underline flex items-center gap-1 text-xs font-mono ml-3">
                      <ExternalLink className="w-3 h-3" />
                      Live Demo
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'project-detail':
      return (
        <div className="h-full flex flex-col">
          <div className="flex-1 overflow-y-auto pr-2" ref={scrollRef}>
            <h3 className="text-lg font-bold text-white font-mono mb-4">{displayData.content.name}</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">{displayData.content.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {(displayData.content.techStack || displayData.content.tags || []).map((tag, i) => (
                <Badge key={i} variant="secondary" className="bg-gray-800 text-gray-300 text-xs border border-gray-600 font-mono">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex gap-3">
              {(displayData.content.github || displayData.content.details_link) && (
                <a href={displayData.content.github || displayData.content.details_link} className="flex items-center gap-2 text-green-400 hover:underline font-mono text-sm">
                  <Github className="w-4 h-4" />
                  View Source Code
                </a>
              )}
              {displayData.content.website && (
                <a href={displayData.content.website} className="flex items-center gap-2 text-blue-400 hover:underline font-mono text-sm">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      );

    case 'education':
      return (
        <div className="h-full flex flex-col">
          <h3 className="text-lg font-bold text-white font-mono mb-4">Education</h3>
          <div className="flex-1 overflow-y-auto pr-2" ref={scrollRef}>
            <div className="border border-gray-700 rounded-lg p-4 bg-gray-800">
              <h4 className="font-bold text-white font-mono">{displayData.content.degree}</h4>
              <p className="text-green-400 text-sm font-mono">{displayData.content.university}</p>
              <p className="text-gray-400 text-xs flex items-center gap-1 mt-1 font-mono">
                <Calendar className="w-3 h-3" />
                {displayData.content.dates}
              </p>
              <p className="text-gray-300 text-sm mt-3 leading-relaxed">{displayData.content.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {displayData.content.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs font-mono">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      );

    case 'contact':
      return (
        <div className="h-full flex flex-col">
          <h3 className="text-lg font-bold text-white font-mono mb-4">Contact</h3>
          <div className="flex-1 overflow-y-auto pr-2" ref={scrollRef}>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-800 rounded border border-gray-700">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-gray-300 font-mono">{displayData.content.email}</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-800 rounded border border-gray-700">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300 font-mono">{displayData.content.phone}</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-800 rounded border border-gray-700">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-gray-300 font-mono">{displayData.content.location}</span>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <a href={displayData.content.github} className="flex items-center gap-3 p-3 bg-gray-800 rounded border border-gray-700 hover:border-green-400 transition-colors">
                  <Github className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300 font-mono">GitHub</span>
                </a>
                <a href={displayData.content.linkedin} className="flex items-center gap-3 p-3 bg-gray-800 rounded border border-gray-700 hover:border-green-400 transition-colors">
                  <Linkedin className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300 font-mono">LinkedIn</span>
                </a>
                {displayData.content.website && (
                  <a href={displayData.content.website} className="flex items-center gap-3 p-3 bg-gray-800 rounded border border-gray-700 hover:border-green-400 transition-colors">
                    <Globe className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300 font-mono">Website</span>
                  </a>
                )}
              </div>
            </div>
            <ContactForm contactData={displayData.content} />
          </div>
        </div>
      );

    case 'about':
      return (
        <div className="h-full flex flex-col">
          <h3 className="text-lg font-bold text-white font-mono mb-4">About Me</h3>
          <div className="flex-1 overflow-y-auto pr-2" ref={scrollRef}>
            <div className="bg-gray-800 p-4 rounded border border-gray-700">
              <p className="text-gray-300 text-sm leading-relaxed">{displayData.content.text}</p>
            </div>
          </div>
        </div>
      );

    case 'certifications-list':
      return (
        <div className="h-full flex flex-col">
          <h3 className="text-lg font-bold text-white font-mono mb-4">Certifications</h3>
          <div className="flex-1 overflow-y-auto pr-2" ref={scrollRef}>
            <div className="space-y-3">
              {displayData.content.map((cert) => (
                <div key={cert.id} className="border border-gray-700 rounded-lg p-4 hover:border-green-400 transition-colors bg-gray-800">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-bold text-white font-mono">{cert.name}</h4>
                      <p className="text-green-400 text-sm font-mono">{cert.issuer}</p>
                    </div>
                    <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs font-mono">
                      {cert.date}
                    </Badge>
                  </div>
                  {cert.skills && (
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs font-mono">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'cat-all':
      return (
        <div className="h-full flex flex-col">
          <h3 className="text-lg font-bold text-white font-mono mb-4">All Files Content</h3>
          <div className="flex-1 overflow-y-auto pr-2" ref={scrollRef}>
            <div className="space-y-6">
              {displayData.content.map((content, i) => (
                <div key={i} className="bg-gray-800 p-4 rounded border border-gray-700">
                  <pre className="text-gray-300 font-mono text-sm whitespace-pre-wrap">{content}</pre>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'find-results':
      return (
        <div className="h-full flex flex-col">
          <h3 className="text-lg font-bold text-white font-mono mb-4">
            Search Results for: <span className="text-green-400">"{displayData.content.term}"</span>
          </h3>
          <div className="flex-1 overflow-y-auto pr-2" ref={scrollRef}>
            <div className="bg-gray-800 p-4 rounded border border-gray-700">
              <ul className="space-y-2">
                {displayData.content.results.map((result, i) => (
                  <li key={i} className="text-gray-300 font-mono text-sm">
                    <span className="text-green-400">▸</span> {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="h-full flex flex-col">
          <div className="flex-1 overflow-y-auto pr-2" ref={scrollRef}>
            <div className="text-center text-gray-400">
              <p className="text-sm font-mono">Unknown command output</p>
            </div>
          </div>
        </div>
      );
  }
};

export default function EnhancedTerminal({ portfolioData = samplePortfolioData, switchToGui }) {
  const [mode, setMode] = useState('simple');
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [displayData, setDisplayData] = useState(null);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showSponsorModal, setShowSponsorModal] = useState(false);
  const [showSponsorSuccess, setShowSponsorSuccess] = useState(false);
  const [sponsorAmount, setSponsorAmount] = useState(0);
  const [showPaymentCheckPrompt, setShowPaymentCheckPrompt] = useState(false);
  const [lastPaymentReference, setLastPaymentReference] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);
  const [displayScrollRef, setDisplayScrollRef] = useState(null);
  const typingTimeoutRef = useRef(null);

  const processCommand = createCommandProcessor(
    portfolioData,
    setDisplayData,
    switchToGui || (() => console.log('Switching to GUI mode')),
    mode,
    setSponsorAmount,
    setShowSponsorModal
  );

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (displayScrollRef) {
      displayScrollRef.scrollTop = displayScrollRef.scrollHeight;
    }
  }, [history, displayData]);

  useEffect(() => {
    const focusInput = () => {
      if (inputRef.current) {
        inputRef.current.focus();
        // Ensure cursor is at the end
        const length = inputRef.current.value.length;
        inputRef.current.setSelectionRange(length, length);
      }
    };

    const handleClick = (e) => {
      // Focus input on any click in the terminal area
      if (e.target.closest('.terminal-panel')) {
        focusInput();
      }
    };

    const handleKeyDown = (e) => {
      // Focus input on any key press anywhere on the page when terminal is active
      if (!e.target.matches('input') && !e.target.matches('textarea') && !e.target.matches('select')) {
        focusInput();
      }
    };

    const handleMouseMove = (e) => {
      // Focus input when mouse moves over terminal area
      if (e.target.closest('.terminal-panel') && !isInputFocused) {
        focusInput();
      }
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousemove', handleMouseMove);
    focusInput();

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousemove', handleMouseMove);
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, [isInputFocused]);

  useEffect(() => {
    setHistory([
      {
        type: 'output',
        text: mode === 'simple' ?
          "Welcome! Type 'help' for available commands or 'exit' to quit.\n💡 Tip: Click anywhere in the terminal or press any key to start typing." :
          mode === 'technical' ?
          "Terminal ready. Type 'help' for commands, 'gui' to switch modes.\n💡 Tip: Click anywhere in the terminal or press any key to start typing." :
          "GraphQL Gateway active. Type 'help' for GraphQL commands.\n💡 Tip: Click anywhere in the terminal or press any key to start typing."
      }
    ]);
    setDisplayData(null);
  }, [mode]);

  // Check for payment reference from callback page
  useEffect(() => {
    const storedReference = localStorage.getItem('lastPaymentReference');
    if (storedReference) {
      setLastPaymentReference(storedReference);
      setShowPaymentCheckPrompt(true);
      localStorage.removeItem('lastPaymentReference');
    }
  }, []);

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter' && !isProcessing) {
      e.preventDefault();
      const command = input.trim();

      if (!command) return;

      if (showWelcome) {
        setShowWelcome(false);
      }

      const newHistory = [...history, { type: 'input', text: command }];

      setCommandHistory(prev => [...prev.slice(-19), command]);
      setHistoryIndex(-1);

      if (command.toLowerCase() === 'clear') {
        setHistory([{
          type: 'output',
          text: mode === 'simple' ?
            "Welcome! Type 'help' for available commands or 'exit' to quit." :
            mode === 'technical' ?
            "Terminal ready. Type 'help' for commands, 'gui' to switch modes." :
            "GraphQL Gateway active. Type 'help' for GraphQL commands."
        }]);
        setInput('');
        setDisplayData(null);
        setShowWelcome(true);
        return;
      }

      setIsProcessing(true);
      setHistory(newHistory);
      setInput('');

      setTimeout(async () => {
        const output = await processCommand(command);
        if (output) {
          setHistory(prev => [...prev, { type: 'output', text: output, streaming: true }]);
        }
        setIsProcessing(false);
      }, 100);

    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const commands = mode === 'simple' ?
        ['help', 'about', 'skills', 'work', 'projects', 'education', 'contact', 'neofetch', 'exit'] :
        mode === 'technical' ?
        ['whoami', 'ls', 'cat', 'find', 'ps', 'top', 'history', 'ssh', 'curl', 'neofetch', 'exit'] :
        ['query', 'mutation', 'schema', 'explorer', 'help'];
      const matches = commands.filter(cmd => cmd.startsWith(input.toLowerCase()));
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    } else if (e.key === 'Escape') {
      if (switchToGui) {
        switchToGui();
      }
    }
  };

  const renderOutput = (item) => {
    if (item.streaming) {
      return <TypewriterOutput text={item.text} />;
    }
    return <pre className="whitespace-pre-wrap text-gray-300 font-mono text-sm leading-relaxed">{item.text}</pre>;
  };

  return (
    <div className="h-screen bg-[#0a0a0a] flex flex-col relative">
      <Button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (switchToGui) {
            switchToGui();
          }
        }}
        className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white font-mono"
        size="sm"
      >
        <X className="w-4 h-4 mr-1" />
        Exit
      </Button>

      <div className="p-4">
        <ModeSelector currentMode={mode} setMode={setMode} />
        {showWelcome && <WelcomeBanner />}


      </div>

      <div className="flex-1 flex p-4 pt-0">
        <div className="w-1/2 pr-2 terminal-panel">
          <Card className="bg-[#0a0a0a] border-gray-800 h-full">
            <CardHeader className="pb-2 border-b border-gray-800">
              <CardTitle className="text-green-400 font-mono text-sm flex items-center gap-2">
                <span className={isInputFocused ? 'animate-pulse' : ''}>●</span> barack@portfolio-terminal
                <span className="ml-auto text-xs text-gray-500">
                  {mode} mode
                </span>
                {isInputFocused && (
                  <span className="text-xs text-green-400 ml-2">ready</span>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className={`p-4 h-full overflow-y-auto font-mono text-sm transition-colors duration-200 relative ${
              isInputFocused ? 'bg-[#0a0a0a]' : 'bg-[#0a0a0a]'
            } ${isInputFocused ? 'ring-1 ring-green-400/20' : ''}`}>
              {/* Invisible input field covering the entire terminal area */}
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  setIsTyping(e.target.value.length > 0);

                  // Clear previous timeout
                  if (typingTimeoutRef.current) {
                    clearTimeout(typingTimeoutRef.current);
                  }

                  // Set new timeout to stop typing indicator after 1 second of no input
                  if (e.target.value.length > 0) {
                    typingTimeoutRef.current = setTimeout(() => {
                      setIsTyping(false);
                    }, 1000);
                  } else {
                    setIsTyping(false);
                  }
                }}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
                className="absolute inset-0 w-full h-full bg-transparent border-none outline-none text-transparent cursor-text z-10 hover:cursor-text"
                disabled={isProcessing}
                spellCheck="false"
                autoComplete="off"
                autoCapitalize="off"
                style={{ caretColor: 'transparent' }}
              />
              <div className="pb-20">
                {history.map((item, index) => (
                  <div key={index} className="mb-2">
                    {item.type === 'input' ? (
                      <div className="flex items-center gap-2">
                        <UserPrompt mode={mode} />
                        <span className="text-white font-mono">{item.text}</span>
                      </div>
                    ) : (
                      <div className="ml-0">
                        {renderOutput(item)}
                      </div>
                    )}
                  </div>
                ))}
                {isProcessing && (
                  <div className="flex items-center gap-2 text-gray-400">
                    <span className="animate-spin">⠋</span>
                    <span className="font-mono text-sm">Processing...</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <UserPrompt mode={mode} />
                  <div className="flex-1 flex items-center">
                    <span className="text-white font-mono">{input}</span>
                    {!isProcessing && <Cursor isTyping={isTyping || isInputFocused} />}
                  </div>
                </div>
              </div>
              <div ref={terminalEndRef} />
            </CardContent>
          </Card>
        </div>

        <div className="w-1/2 pl-2">
          <Card className="bg-gray-900 border-gray-700 h-full">
            <CardContent className="p-4 h-full overflow-hidden">
              <DisplayPanel displayData={displayData} mode={mode} scrollRef={setDisplayScrollRef} />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Sponsorship Modals */}
      <SponsorModal
        isOpen={showSponsorModal}
        onClose={() => setShowSponsorModal(false)}
        onSponsor={(amount) => {
          setSponsorAmount(amount);
          setShowSponsorModal(false);
          setShowSponsorSuccess(true);
        }}
      />

      {showSponsorSuccess && (
        <SponsorSuccess
          amount={sponsorAmount}
          onClose={() => setShowSponsorSuccess(false)}
        />
      )}

      {/* Payment Check Prompt */}
      {showPaymentCheckPrompt && lastPaymentReference && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 max-w-md w-full">
            <div className="text-center mb-4">
              <h3 className="text-white font-semibold text-lg mb-2">Check Payment Status?</h3>
              <p className="text-gray-300 text-sm">
                Would you like to verify your payment status?
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={async () => {
                  setShowPaymentCheckPrompt(false);
                  // Auto-execute check command
                  const checkCommand = `check ${lastPaymentReference}`;
                  setInput(checkCommand);
                  // Trigger command execution
                  const newHistory = [...history, { type: 'input', text: checkCommand }];
                  setHistory(newHistory);
                  setInput('');

                  setTimeout(async () => {
                    const output = await processCommand(checkCommand);
                    if (output) {
                      setHistory(prev => [...prev, { type: 'output', text: output, streaming: true }]);
                    }
                  }, 100);
                }}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white"
              >
                Yes, check status
              </Button>
              <Button
                onClick={() => setShowPaymentCheckPrompt(false)}
                variant="outline"
                className="flex-1 border-gray-500 text-gray-300 hover:bg-gray-700"
              >
                No, thanks
              </Button>
            </div>
            <div className="mt-3 text-xs text-gray-400 text-center">
              Reference: {lastPaymentReference}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
