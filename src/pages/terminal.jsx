// // // // import React, { useState, useRef, useEffect } from 'react';
// // // // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // // // import { Badge } from '@/components/ui/badge';
// // // // import { Button } from '@/components/ui/button';
// // // // import {  X,Mail, Phone, MapPin, Calendar, Award, ExternalLink
// // // // } from 'lucide-react';
// // // // import ContactForm from './contactform';

// // // // const UserPrompt = () => (
// // // //     <div className="flex items-center">
// // // //         <span className="text-emerald-300">barack.ouma~/dev/null@portfolio</span>
// // // //         <span className="text-white">:</span>
// // // //         <span className="text-blue-400">~$</span>
// // // //     </div>
// // // // );

// // // // const Cursor = () => <span className="bg-lime-300 w-2 h-5 inline-block animate-pulse ml-1" />;


// // // // const samplePortfolioData = {
// // // //     "name": "Barack Ouma",
// // // //     "title": "Software Engineer | Backend | AWS Certified",
// // // //     "profile_picture_url": "",
// // // //     "bio": "Passionate full-stack developer with expertise in modern web technologies",
// // // //     "about_me": "I'm a dedicated developer who loves creating efficient, scalable solutions and learning new technologies.",
// // // //     "contact": {
// // // //       "email": "barack.ouma@example.com",
// // // //       "twitter": "https://twitter.com/BarackOuma7",
// // // //       "github": "https://github.com/IsoDevMate",
// // // //       "linkedin": "https://www.linkedin.com/in/barack-ouma-b37089212/",
// // // //       "location": "Nairobi County, Kenya",
// // // //       "website": "https://barackoumasite.netlify.app/"
// // // //     },
// // // //     "experience": [

// // // //       {
// // // //         "id": 1,
// // // //         "title": "Technical Writer",
// // // //         "company": "Kodaschool",
// // // //         "dates": "Oct 2024 - Present · 10 mos",
// // // //         "location": "Nairobi County, Kenya · Remote",
// // // //         "description_points": [
// // // //           "Write technical blogs that contribute to educational and beginner-friendly content focused on programming",
// // // //           "Write clear, beginner-friendly guides on backend technologies such as TypeScript, Node.js, Java, and AWS services"
// // // //         ],
// // // //         "tags": ["Technical Documentation", "TypeScript", "Node.js", "Java", "AWS"]
// // // //       },
// // // //       {
// // // //         "id": 2,
// // // //         "title": "Software Engineering Trainee",
// // // //         "company": "Power Learn Project",
// // // //         "dates": "Feb 2025 - Present · 6 mos",
// // // //         "location": "Nairobi County, Kenya · On-site",
// // // //         "description_points": [
// // // //           "Participated in an intensive software development training program focusing on web technologies (HTML, CSS), Python, and JavaScript",
// // // //           "Currently advancing to specialized mobile development with Dart and Flutter modules",
// // // //           "Web development fundamentals (HTML, CSS, responsive design)",
// // // //           "Python programming and Django framework",
// // // //           "JavaScript fundamentals and application",
// // // //           "Currently focusing on Dart programming language and Flutter for cross-platform mobile development",
// // // //           "Data structures and algorithms"
// // // //         ],
// // // //         "tags": ["HTML", "CSS", "Python", "JavaScript", "Dart", "Flutter", "Django"]
// // // //       },
// // // //       {
// // // //         "id": 3,
// // // //         "title": "Full Stack Engineer",
// // // //         "company": "Bee Multiscents",
// // // //         "dates": "Nov 2024 - Feb 2025 · 4 mos",
// // // //         "location": "Nairobi, Kenya · Hybrid",
// // // //         "description_points": [
// // // //           "Developed and managed the full-stack architecture of a dynamic, IoT-integrated fragrance system",
// // // //           "Built a responsive UI and admin dashboard using React.js, Firebase, and Node.js",
// // // //           "Developed a backend system to support dynamic pages, content management, and seamless IoT device interactions",
// // // //           "Integrated Cloudflare for enhanced security, performance, and DDoS protection",
// // // //           "Engineered a backend solution enabling remote control of smart diffusers via a secure dashboard",
// // // //           "Worked with the IoT team to develop APIs for real-time scent customization and automation",
// // // //           "Ensured smooth data synchronization between the dashboard, backend, and IoT devices"
// // // //         ],
// // // //         "tags": ["React", "Firebase", "Node.js", "IoT", "Cloudflare", "API Development"]
// // // //       },
// // // //       {
// // // //         "id": 4,
// // // //         "title": "Full Stack Engineer",
// // // //         "company": "Yafreeka",
// // // //         "dates": "Oct 2023 - Feb 2024 · 5 mos",
// // // //         "location": "Nairobi County, Kenya · Remote",
// // // //         "description_points": [
// // // //           "Implemented the payments page and Y Studio using React",
// // // //           "Led the migration from MongoDB to Firebase to address video fetching challenges",
// // // //           "Gained hands-on experience writing cloud functions in Firebase",
// // // //           "Contributed to both frontend and backend development, improving system performance",
// // // //           "Collaborated with cross-functional teams to deliver features on time"
// // // //         ],
// // // //         "tags": ["React", "Firebase", "MongoDB", "Cloud Functions"]
// // // //       }
// // // //     ],
// // // //     "projects": [
// // // //       {
// // // //         "id": 3,
// // // //         "name": "AVIATOR",
// // // //         "description": "Aviator Game Client - A real-time online betting game built with React, TypeScript, and Redux. Players bet on a virtual airplane's flight duration, aiming to cash out before it flies away",
// // // //         "website_link": "",
// // // //         "details_link": "https://github.com/IsoDevMate/AVIATOR",
// // // //         "tags": ["TypeScript", "React", "Redux", "Game Development","Distributed Systems", "Backend","green-blue deployments"]
// // // //       },
// // // //       {
// // // //         "id": 4,
// // // //         "name": "MPESA-DARAJA-WITH-TRPC",
// // // //         "description": "Seamlessly integrate M-Pesa payments into web applications with type-safe APIs and zero guesswork. From checkout to confirmation in seconds — because your customers deserve payments that just work",
// // // //         "website_link": "",
// // // //         "details_link": "https://github.com/IsoDevMate/MPESA-DARAJA-WITH-TRPC",
// // // //         "tags": ["TypeScript", "MPesa", "tRPC", "Payment Integration"]
// // // //       },
// // // //       {
// // // //         "id": 3,
// // // //         "name": "Portfolio Terminal",
// // // //         "description": "Interactive terminal-style portfolio with GUI/CLI modes",
// // // //         "website_link": "https://barackdev.com",
// // // //         "details_link": "https://github.com/IsoDevMate/better-portfolio",
// // // //         "tags": ["React", "Terminal", "Animation", "Portfolio","ssh"]
// // // //       }
// // // //     ],
// // // //     "skills": [
// // // //       {
// // // //         "category": "Frontend",
// // // //         "values": ["React", "HTML", "CSS", "JavaScript", "Dart", "Flutter"]
// // // //       },
// // // //       {
// // // //         "category": "Backend",
// // // //         "values": ["Node.js", "Python", "Django", "Firebase", "GraphQL", "MongoDB"]
// // // //       },
// // // //       {
// // // //         "category": "Cloud & DevOps",
// // // //         "values": ["AWS", "Cloudflare", "CI/CD", "Linux", "Docker"]
// // // //       },
// // // //       {
// // // //         "category": "Other",
// // // //         "values": ["Technical Documentation", "IoT", "API Development"]
// // // //       }
// // // //     ],
// // // //     "education": {
// // // //       "degree": "Bachelor's degree, Information Technology",
// // // //       "university": "Kenyatta University",
// // // //       "dates": null,
// // // //       "description": "Cascading Style Sheets (CSS), Python (Programming Language) and related technologies",
// // // //       "tags": ["Information Technology", "Computer Science"]
// // // //     },
// // // //     "certifications": [
// // // //       {
// // // //         "name": "AWS Database Migration Service",
// // // //         "issuer": "Amazon Web Services (AWS)",
// // // //         "date": "May 2025",
// // // //         "skills": ["Amazon Relational Database Service (RDS)", "Amazon Database Migration Service"]
// // // //       },
// // // //       {
// // // //         "name": "Configuring and Deploying VPCs with Multiple Subnets",
// // // //         "issuer": "Amazon Web Services (AWS)",
// // // //         "date": "May 2025",
// // // //         "skills": ["AWS Networking"]
// // // //       },
// // // //       {
// // // //         "name": "Graph Developer - Associate",
// // // //         "issuer": "Apollo GraphQL",
// // // //         "date": "Feb 2025",
// // // //         "skills": ["Apollo GraphQL", "GraphQL", "Node.js"]
// // // //       },
// // // //       {
// // // //         "name": "Google Cloud Skills Badges",
// // // //         "issuer": "Google Cloud Skills Boost",
// // // //         "date": "2024",
// // // //         "skills": ["PostgreSQL", "Databases", "Load Balancing", "Cloud Infrastructure", "Cloud Storage"]
// // // //       },
// // // //       {
// // // //         "name": "AWS re/Start Graduate",
// // // //         "issuer": "Amazon Web Services (AWS)",
// // // //         "date": "Aug 2024",
// // // //         "skills": ["Amazon Web Services (AWS)"]
// // // //       }
// // // //     ],
// // // //     "honors": [
// // // //       {
// // // //         "name": "GDSC-Core Team Member-(Android) - KU",
// // // //         "issuer": "GDSC - KU",
// // // //         "date": "Jul 2024",
// // // //         "description": "As a GDSC Core Member and Android Lead at Kenyatta University, played a crucial role in fostering a vibrant community of student developers."
// // // //       }
// // // //     ],
// // // //     "recommendations": [
// // // //       {
// // // //         "name": "Mr. Kibet",
// // // //         "position": "CEO at REDOLENCE LIVING LIMITED (BEE MULTISCENTS)",
// // // //         "date": "March 4, 2025",
// // // //         "content": "Highly recommend Barrack Ouma for his exceptional contributions at Bee Multiscent. As a key member of our development team, Barrack played a crucial role in designing and managing the full-stack architecture of our IoT-integrated fragrance system. His expertise in React.js, Firebase, Node.js, and Cloudflare security ensured a seamless and secure user experience."
// // // //       }
// // // //     ],
// // // //     "interests": [
// // // //       "Web Development",
// // // //       "Cloud Computing",
// // // //       "IoT",
// // // //       "Technical Writing",
// // // //       "Mobile Development"
// // // //     ]
// // // //   }


// // // // // const ContactForm = () => {
// // // // //     const [formData, setFormData] = useState({
// // // // //         name: '',
// // // // //         email: '',
// // // // //         subject: '',
// // // // //         message: ''
// // // // //     });

// // // // //     const handleSubmit = (e) => {
// // // // //         e.preventDefault();
// // // // //         console.log('Form submitted:', formData);
// // // // //         alert('Message sent! (This is a demo)');
// // // // //         setFormData({ name: '', email: '', subject: '', message: '' });
// // // // //     };

// // // // //     const handleChange = (e) => {
// // // // //         setFormData(prev => ({
// // // // //             ...prev,
// // // // //             [e.target.name]: e.target.value
// // // // //         }));
// // // // //     };

// // // // //     return (
// // // // //         <Card className="bg-gray-800 border-gray-700 mt-4">
// // // // //             <CardHeader>
// // // // //                 <CardTitle className="text-white flex items-center gap-2 text-base">
// // // // //                     <Mail className="w-4 h-4" />
// // // // //                     Send Message
// // // // //                 </CardTitle>
// // // // //             </CardHeader>
// // // // //             <CardContent>
// // // // //                 <form onSubmit={handleSubmit} className="space-y-3">
// // // // //                     <div className="grid grid-cols-2 gap-3">
// // // // //                         <Input
// // // // //                             name="name"
// // // // //                             placeholder="Name"
// // // // //                             value={formData.name}
// // // // //                             onChange={handleChange}
// // // // //                             className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm"
// // // // //                             required
// // // // //                         />
// // // // //                         <Input
// // // // //                             name="email"
// // // // //                             type="email"
// // // // //                             placeholder="Email"
// // // // //                             value={formData.email}
// // // // //                             onChange={handleChange}
// // // // //                             className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm"
// // // // //                             required
// // // // //                         />
// // // // //                     </div>
// // // // //                     <Input
// // // // //                         name="subject"
// // // // //                         placeholder="Subject"
// // // // //                         value={formData.subject}
// // // // //                         onChange={handleChange}
// // // // //                         className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm"
// // // // //                         required
// // // // //                     />
// // // // //                     <Textarea
// // // // //                         name="message"
// // // // //                         placeholder="Message..."
// // // // //                         rows={3}
// // // // //                         value={formData.message}
// // // // //                         onChange={handleChange}
// // // // //                         className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm"
// // // // //                         required
// // // // //                     />
// // // // //                     <Button type="submit" size="sm" className="w-full bg-amber-500 hover:bg-amber-600 text-black">
// // // // //                         <Send className="w-3 h-3 mr-1" />
// // // // //                         Send
// // // // //                     </Button>
// // // // //                 </form>
// // // // //             </CardContent>
// // // // //         </Card>
// // // // //     );
// // // // // };

// // // // const createCommandProcessor = (data, setDisplayData, switchToGui) => {
// // // //     if (!data) return async () => "Portfolio data not loaded.";

// // // //     const process = async (command) => {
// // // //         const [cmd, ...args] = command.toLowerCase().trim().split(' ');
// // // //         const id = args[0] ? parseInt(args[0]) : null;

// // // //         switch (cmd) {
// // // //             case 'help':
// // // //                 setDisplayData({
// // // //                     type: 'help',
// // // //                     content: {
// // // //                         title: 'Available Commands',
// // // //                         commands: [
// // // //                             { cmd: 'whoami', desc: 'Display basic information about me' },
// // // //                             { cmd: 'skills', desc: 'Show technical skills and expertise' },
// // // //                             { cmd: 'experience [id]', desc: 'List all experience or show details' },
// // // //                             { cmd: 'projects [id]', desc: 'List all projects or show details' },
// // // //                             { cmd: 'education', desc: 'Display education background' },
// // // //                             { cmd: 'certifications [id]', desc: 'Show certifications or details' },
// // // //                             { cmd: 'contact', desc: 'Display contact information' },
// // // //                             { cmd: 'about', desc: 'Show detailed about me section' },
// // // //                             { cmd: 'gui', desc: 'Switch to GUI mode' },
// // // //                             { cmd: 'clear', desc: 'Clear terminal screen' },
// // // //                             { cmd: 'exit', desc: 'Exit terminal mode' }
// // // //                         ]
// // // //                     }
// // // //                 });
// // // //                 return 'Available commands listed on the right panel. Use [id] to get details.';

// // // //             case 'whoami':
// // // //                 setDisplayData({
// // // //                     type: 'profile',
// // // //                     content: {
// // // //                         name: data.name,
// // // //                         title: data.title,
// // // //                         bio: data.bio
// // // //                     }
// // // //                 });
// // // //                 return `${data.name} - ${data.title}`;

// // // //             case 'skills':
// // // //                 setDisplayData({
// // // //                     type: 'skills',
// // // //                     content: data.skills
// // // //                 });
// // // //                 return data.skills.map(s => `${s.category}: ${s.values.join(', ')}`).join('\n');

// // // //             case 'experience':
// // // //                 if (id) {
// // // //                     const item = data.experience.find(e => e.id === id);
// // // //                     if (item) {
// // // //                         setDisplayData({ type: 'experience-detail', content: item });
// // // //                         return `${item.title} @ ${item.company} - Details shown on right panel`;
// // // //                     }
// // // //                     return `Experience ID ${id} not found.`;
// // // //                 }
// // // //                 setDisplayData({ type: 'experience-list', content: data.experience });
// // // //                 return data.experience.map(e => `${e.id}. ${e.title} @ ${e.company}`).join('\n');

// // // //             case 'projects':
// // // //                 if (id) {
// // // //                     const item = data.projects.find(p => p.id === id);
// // // //                     if (item) {
// // // //                         setDisplayData({ type: 'project-detail', content: item });
// // // //                         return `${item.name} - Details shown on right panel`;
// // // //                     }
// // // //                     return `Project ID ${id} not found.`;
// // // //                 }
// // // //                 setDisplayData({ type: 'projects-list', content: data.projects });
// // // //                 return data.projects.map(p => `${p.id}. ${p.name}`).join('\n');

// // // //             case 'education':
// // // //                 setDisplayData({ type: 'education', content: data.education });
// // // //                 return `${data.education.degree} - ${data.education.university}`;

// // // //             case 'certifications':
// // // //                 if (id) {
// // // //                     const item = data.certifications.find(c => c.id === id);
// // // //                     if (item) {
// // // //                         setDisplayData({ type: 'certification-detail', content: item });
// // // //                         return `${item.name} - Details shown on right panel`;
// // // //                     }
// // // //                     return `Certification ID ${id} not found.`;
// // // //                 }
// // // //                 setDisplayData({ type: 'certifications-list', content: data.certifications });
// // // //                 return data.certifications.map(c => `${c.id}. ${c.name}`).join('\n');

// // // //                 case 'contact':
// // // //                     setDisplayData({
// // // //                       type: 'contact',
// // // //                       content: {
// // // //                         email: data.contact.email,
// // // //                         phone: data.contact.phone,
// // // //                         location: data.contact.location,
// // // //                         twitter: data.contact.twitter,
// // // //                         github: data.contact.github,
// // // //                         linkedin: data.contact.linkedin
// // // //                       }
// // // //                     });
// // // //                     return 'Contact information and form shown on right panel';
// // // //             case 'about':
// // // //                 setDisplayData({ type: 'about', content: { text: data.about_me } });
// // // //                 return 'About me section shown on right panel';

// // // //             case 'gui':
// // // //                 switchToGui();
// // // //                 return 'Switching to GUI mode...';

// // // //             case 'exit':
// // // //                 switchToGui();
// // // //                 return 'Exiting terminal...';

// // // //             case '':
// // // //                 return '';

// // // //             default:
// // // //                 return `Command not found: ${command}. Type 'help' for available commands.`;
// // // //         }
// // // //     };
// // // //     return process;
// // // // };

// // // // const DisplayPanel = ({ displayData }) => {
// // // //     if (!displayData) {
// // // //         return (
// // // //             <Card className="bg-gray-800 border-gray-700 h-full">
// // // //                 <CardContent className="p-6 flex items-center justify-center h-full">
// // // //                     <div className="text-center text-gray-400">
// // // //                         <div className="text-4xl mb-3">💻</div>
// // // //                         <h3 className="text-lg font-medium mb-2">Welcome to Terminal</h3>
// // // //                         <p className="text-sm">Type commands to see details here</p>
// // // //                         <p className="text-xs mt-2 text-gray-500">Try: help, whoami, skills</p>
// // // //                     </div>
// // // //                 </CardContent>
// // // //             </Card>
// // // //         );
// // // //     }

// // // //     const renderContent = () => {
// // // //         switch (displayData.type) {
// // // //             case 'help':
// // // //                 return (
// // // //                     <div className="space-y-4">
// // // //                         <h3 className="text-lg font-semibold text-white">{displayData.content.title}</h3>
// // // //                         <div className="space-y-2">
// // // //                             {displayData.content.commands.map((cmd, index) => (
// // // //                                 <div key={index} className="border-l-2 border-amber-300 pl-3 py-1">
// // // //                                     <code className="text-emerald-300 font-mono text-sm">{cmd.cmd}</code>
// // // //                                     <p className="text-gray-300 text-xs mt-1">{cmd.desc}</p>
// // // //                                 </div>
// // // //                             ))}
// // // //                         </div>
// // // //                     </div>
// // // //                 );

// // // //             case 'profile':
// // // //                 return (
// // // //                     <div className="space-y-4">
// // // //                         <div className="text-center">
// // // //                             <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mx-auto mb-3 flex items-center justify-center text-xl font-bold text-black">
// // // //                                 {displayData.content.name.split(' ').map(n => n[0]).join('')}
// // // //                             </div>
// // // //                             <h3 className="text-lg font-bold text-white">{displayData.content.name}</h3>
// // // //                             <p className="text-emerald-300 text-sm">{displayData.content.title}</p>
// // // //                         </div>
// // // //                         <p className="text-gray-300 text-sm text-center">{displayData.content.bio}</p>
// // // //                     </div>
// // // //                 );

// // // //             case 'skills':
// // // //                 return (
// // // //                     <div className="space-y-3">
// // // //                         <h3 className="text-lg font-semibold text-white">Skills</h3>
// // // //                         {displayData.content.map((skill, index) => (
// // // //                             <div key={index} className="space-y-2">
// // // //                                 <h4 className="text-emerald-300 font-medium text-sm">{skill.category}</h4>
// // // //                                 <div className="flex flex-wrap gap-1">
// // // //                                     {skill.values.map((value, i) => (
// // // //                                         <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
// // // //                                             {value}
// // // //                                         </Badge>
// // // //                                     ))}
// // // //                                 </div>
// // // //                             </div>
// // // //                         ))}
// // // //                     </div>
// // // //                 );

// // // //             case 'experience-list':
// // // //                 return (
// // // //                     <div className="space-y-3">
// // // //                         <h3 className="text-lg font-semibold text-white">Experience</h3>
// // // //                         <div className="space-y-3">
// // // //                             {displayData.content.map((exp) => (
// // // //                                 <div key={exp.id} className="border border-gray-700 rounded-lg p-3 hover:border-amber-300 transition-colors">
// // // //                                     <div className="flex items-start justify-between mb-1">
// // // //                                         <div>
// // // //                                             <h4 className="font-semibold text-white text-sm">{exp.title}</h4>
// // // //                                             <p className="text-emerald-300 text-xs">{exp.company}</p>
// // // //                                         </div>
// // // //                                         <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
// // // //                                             #{exp.id}
// // // //                                         </Badge>
// // // //                                     </div>
// // // //                                     <p className="text-gray-400 text-xs mb-2">{exp.dates}</p>
// // // //                                     <div className="flex flex-wrap gap-1">
// // // //                                         {exp.tags.slice(0, 3).map((tag, i) => (
// // // //                                             <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
// // // //                                                 {tag}
// // // //                                             </Badge>
// // // //                                         ))}
// // // //                                     </div>
// // // //                                 </div>
// // // //                             ))}
// // // //                         </div>
// // // //                     </div>
// // // //                 );

// // // //             case 'experience-detail':
// // // //                 return (
// // // //                     <div className="space-y-3">
// // // //                         <div>
// // // //                             <h3 className="text-lg font-semibold text-white">{displayData.content.title}</h3>
// // // //                             <p className="text-emerald-300 text-sm">{displayData.content.company}</p>
// // // //                             <p className="text-gray-400 text-xs flex items-center gap-1 mt-1">
// // // //                                 <Calendar className="w-3 h-3" />
// // // //                                 {displayData.content.dates}
// // // //                             </p>
// // // //                         </div>
// // // //                         <div>
// // // //                             <h4 className="text-white font-medium mb-2 text-sm">Key Responsibilities:</h4>
// // // //                             <ul className="space-y-1">
// // // //                                 {displayData.content.description_points.map((point, i) => (
// // // //                                     <li key={i} className="text-gray-300 text-xs flex items-start gap-2">
// // // //                                         <span className="text-emerald-300 mt-1">•</span>
// // // //                                         <span>{point}</span>
// // // //                                     </li>
// // // //                                 ))}
// // // //                             </ul>
// // // //                         </div>
// // // //                         <div className="flex flex-wrap gap-1">
// // // //                             {displayData.content.tags.map((tag, i) => (
// // // //                                 <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
// // // //                                     {tag}
// // // //                                 </Badge>
// // // //                             ))}
// // // //                         </div>
// // // //                     </div>
// // // //                 );

// // // //             case 'projects-list':
// // // //                 return (
// // // //                     <div className="space-y-3">
// // // //                         <h3 className="text-lg font-semibold text-white">Projects</h3>
// // // //                         <div className="space-y-3">
// // // //                             {displayData.content.map((project) => (
// // // //                                 <div key={project.id} className="border border-gray-700 rounded-lg p-3 hover:border-amber-300 transition-colors">
// // // //                                     <div className="flex items-start justify-between mb-1">
// // // //                                         <h4 className="font-semibold text-white text-sm">{project.name}</h4>
// // // //                                         <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
// // // //                                             #{project.id}
// // // //                                         </Badge>
// // // //                                     </div>
// // // //                                     <p className="text-gray-300 text-xs mb-2">{project.description}</p>
// // // //                                     <div className="flex flex-wrap gap-1 mb-2">
// // // //                                         {project.tags.slice(0, 3).map((tag, i) => (
// // // //                                             <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
// // // //                                                 {tag}
// // // //                                             </Badge>
// // // //                                         ))}
// // // //                                     </div>
// // // //                                     <div className="flex gap-2 text-xs">
// // // //                                         <a href={project.website_link} className="text-emerald-300 hover:underline flex items-center gap-1">
// // // //                                             <ExternalLink className="w-2 h-2" />
// // // //                                             Site
// // // //                                         </a>
// // // //                                         <a href={project.details_link} className="text-emerald-300 hover:underline flex items-center gap-1">
// // // //                                             <ExternalLink className="w-2 h-2" />
// // // //                                             Details
// // // //                                         </a>
// // // //                                     </div>
// // // //                                 </div>
// // // //                             ))}
// // // //                         </div>
// // // //                     </div>
// // // //                 );

// // // //             case 'project-detail':
// // // //                 return (
// // // //                     <div className="space-y-3">
// // // //                         <h3 className="text-lg font-semibold text-white">{displayData.content.name}</h3>
// // // //                         <p className="text-gray-300 text-sm">{displayData.content.description}</p>
// // // //                         <div className="flex flex-wrap gap-1">
// // // //                             {displayData.content.tags.map((tag, i) => (
// // // //                                 <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
// // // //                                     {tag}
// // // //                                 </Badge>
// // // //                             ))}
// // // //                         </div>
// // // //                         <div className="flex gap-3 text-sm">
// // // //                             <a href={displayData.content.website_link} className="flex items-center gap-1 text-emerald-300 hover:underline">
// // // //                                 <ExternalLink className="w-3 h-3" />
// // // //                                 Website
// // // //                             </a>
// // // //                             <a href={displayData.content.details_link} className="flex items-center gap-1 text-emerald-300 hover:underline">
// // // //                                 <ExternalLink className="w-3 h-3" />
// // // //                                 Details
// // // //                             </a>
// // // //                         </div>
// // // //                     </div>
// // // //                 );

// // // //             case 'education':
// // // //                 return (
// // // //                     <div className="space-y-3">
// // // //                         <h3 className="text-lg font-semibold text-white">Education</h3>
// // // //                         <div className="border border-gray-700 rounded-lg p-3">
// // // //                             <h4 className="font-semibold text-white text-sm">{displayData.content.degree}</h4>
// // // //                             <p className="text-emerald-300 text-xs">{displayData.content.university}</p>
// // // //                             <p className="text-gray-400 text-xs flex items-center gap-1 mt-1">
// // // //                                 <Calendar className="w-3 h-3" />
// // // //                                 {displayData.content.dates}
// // // //                             </p>
// // // //                             <p className="text-gray-300 text-xs mt-2">{displayData.content.description}</p>
// // // //                             <div className="flex flex-wrap gap-1 mt-2">
// // // //                                 {displayData.content.tags.map((tag, i) => (
// // // //                                     <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
// // // //                                         {tag}
// // // //                                     </Badge>
// // // //                                 ))}
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 );

// // // //             case 'certifications-list':
// // // //                 return (
// // // //                     <div className="space-y-3">
// // // //                         <h3 className="text-lg font-semibold text-white">Certifications</h3>
// // // //                         <div className="space-y-3">
// // // //                             {displayData.content.map((cert) => (
// // // //                                 <div key={cert.id} className="border border-gray-700 rounded-lg p-3 hover:border-amber-300 transition-colors">
// // // //                                     <div className="flex items-start justify-between mb-1">
// // // //                                         <div className="flex items-start gap-2">
// // // //                                             <Award className="w-4 h-4 text-emerald-300 mt-0.5 flex-shrink-0" />
// // // //                                             <div>
// // // //                                                 <h4 className="font-semibold text-white text-sm">{cert.name}</h4>
// // // //                                                 <p className="text-emerald-300 text-xs">{cert.issuer}</p>
// // // //                                             </div>
// // // //                                         </div>
// // // //                                         <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
// // // //                                             #{cert.id}
// // // //                                         </Badge>
// // // //                                     </div>
// // // //                                     <p className="text-gray-400 text-xs ml-6">{cert.date}</p>
// // // //                                     <div className="flex flex-wrap gap-1 mt-2 ml-6">
// // // //                                         {cert.tags.map((tag, i) => (
// // // //                                             <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
// // // //                                                 {tag}
// // // //                                             </Badge>
// // // //                                         ))}
// // // //                                     </div>
// // // //                                 </div>
// // // //                             ))}
// // // //                         </div>
// // // //                     </div>
// // // //                 );

// // // //             case 'certification-detail':
// // // //                 return (
// // // //                     <div className="space-y-3">
// // // //                         <div className="flex items-center gap-2">
// // // //                             <Award className="w-5 h-5 text-emerald-300" />
// // // //                             <h3 className="text-lg font-semibold text-white">{displayData.content.name}</h3>
// // // //                         </div>
// // // //                         <div>
// // // //                             <p className="text-emerald-300 font-medium text-sm">{displayData.content.issuer}</p>
// // // //                             <p className="text-gray-400 text-xs">Issued: {displayData.content.date}</p>
// // // //                             <p className="text-gray-400 text-xs">ID: {displayData.content.credential_id}</p>
// // // //                         </div>
// // // //                         <div className="flex flex-wrap gap-1">
// // // //                             {displayData.content.tags.map((tag, i) => (
// // // //                                 <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
// // // //                                     {tag}
// // // //                                 </Badge>
// // // //                             ))}
// // // //                         </div>
// // // //                     </div>
// // // //                 );

// // // //             case 'contact':
// // // //                 return (
// // // //                     <div className="space-y-3">
// // // //                         <h3 className="text-lg font-semibold text-white">Contact</h3>
// // // //                         <div className="space-y-2">
// // // //                             <div className="flex items-center gap-2">
// // // //                                 <Mail className="w-4 h-4 text-emerald-300" />
// // // //                                 <span className="text-gray-300 text-sm">{displayData.content.email}</span>
// // // //                             </div>
// // // //                             <div className="flex items-center gap-2">
// // // //                                 <Phone className="w-4 h-4 text-emerald-300" />
// // // //                                 <span className="text-gray-300 text-sm">{displayData.content.phone}</span>
// // // //                             </div>
// // // //                             <div className="flex items-center gap-2">
// // // //                                 <MapPin className="w-4 h-4 text-emerald-300" />
// // // //                                 <span className="text-gray-300 text-sm">{displayData.content.location}</span>
// // // //                             </div>
// // // //                         </div>
// // // //                         <ContactForm contactData={displayData.content} />
// // // //                     </div>
// // // //                 );

// // // //             case 'about':
// // // //                 return (
// // // //                     <div className="space-y-3">
// // // //                         <h3 className="text-lg font-semibold text-white">About Me</h3>
// // // //                         <p className="text-gray-300 text-sm leading-relaxed">{displayData.content.text}</p>
// // // //                     </div>
// // // //                 );

// // // //             default:
// // // //                 return (
// // // //                     <div className="text-center text-gray-400">
// // // //                         <p className="text-sm">Unknown command output</p>
// // // //                     </div>
// // // //                 );
// // // //         }
// // // //     };

// // // //     return (
// // // //         <Card className="bg-gray-800 border-gray-700 h-full">
// // // //             <CardContent className="p-4 h-full overflow-y-auto">
// // // //                 {renderContent()}
// // // //             </CardContent>
// // // //         </Card>
// // // //     );
// // // // };

// // // // export default function EnhancedTerminal({ portfolioData = samplePortfolioData, switchToGui }) {
// // // //     const [history, setHistory] = useState([
// // // //         { type: 'output', text: "Enhanced Terminal active. Type 'help' for commands or 'exit' to quit." }
// // // //     ]);
// // // //     const [input, setInput] = useState('');
// // // //     const [isProcessing, setIsProcessing] = useState(false);
// // // //     const [displayData, setDisplayData] = useState(null);
// // // //     const terminalEndRef = useRef(null);
// // // //     const inputRef = useRef(null);

// // // //     const processCommand = createCommandProcessor(
// // // //         portfolioData,
// // // //         setDisplayData,
// // // //         switchToGui || (() => console.log('Switching to GUI mode'))
// // // //     );

// // // //     useEffect(() => {
// // // //         terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
// // // //     }, [history]);

// // // //     useEffect(() => {
// // // //         const focusInput = () => inputRef.current?.focus();
// // // //         const handleClick = (e) => {
// // // //             if (e.target.closest('.terminal-panel')) {
// // // //                 focusInput();
// // // //             }
// // // //         };
// // // //         window.addEventListener('click', handleClick);
// // // //         focusInput();
// // // //         return () => window.removeEventListener('click', handleClick);
// // // //     }, []);

// // // //     const handleKeyDown = async (e) => {
// // // //         if (e.key === 'Enter' && !isProcessing) {
// // // //             e.preventDefault();
// // // //             const command = input.trim();
// // // //             const newHistory = [...history, { type: 'input', text: command }];

// // // //             if (command.toLowerCase() === 'clear') {
// // // //                 setHistory([]);
// // // //                 setInput('');
// // // //                 setDisplayData(null);
// // // //                 return;
// // // //             }

// // // //             setIsProcessing(true);
// // // //             const output = await processCommand(command);
// // // //             if (output) {
// // // //                 newHistory.push({ type: 'output', text: output });
// // // //             }
// // // //             setHistory(newHistory);
// // // //             setIsProcessing(false);
// // // //             setInput('');
// // // //         } else if (e.key === 'Escape') {
// // // //             if (switchToGui) {
// // // //                 switchToGui();
// // // //             }
// // // //         }
// // // //     };

// // // //     const renderOutput = (item) => {
// // // //         return <pre className="whitespace-pre-wrap text-gray-300">{item.text}</pre>;
// // // //     };

// // // //     return (
// // // //         <div className="h-screen bg-[#0D1117] flex relative">
// // // //             <Button
// // // //                 onClick={switchToGui || (() => console.log('Exit clicked'))}
// // // //                 className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white"
// // // //                 size="sm"
// // // //             >
// // // //                 <X className="w-4 h-4 mr-1" />
// // // //                 Exit
// // // //             </Button>

// // // //             <div className="w-1/2 p-4 terminal-panel">
// // // //                 <Card className="bg-[#0D1117] border-gray-700 h-full">
// // // //                     <CardHeader className="pb-2">
// // // //                         <CardTitle className="text-emerald-300 font-mono text-sm">Terminal</CardTitle>
// // // //                     </CardHeader>
// // // //                     <CardContent className="p-4 h-full overflow-y-auto font-mono text-sm">
// // // //                         <div className="pb-20">
// // // //                             {history.map((item, index) => (
// // // //                                 <div key={index} className="mb-1">
// // // //                                     {item.type === 'input' ? (
// // // //                                         <div className="flex items-center gap-2">
// // // //                                             <UserPrompt />
// // // //                                             <span className="text-white">{item.text}</span>
// // // //                                         </div>
// // // //                                     ) : (
// // // //                                         renderOutput(item)
// // // //                                     )}
// // // //                                 </div>
// // // //                             ))}
// // // //                             <div className="flex items-center gap-2">
// // // //                                 <UserPrompt />
// // // //                                 <div className="flex-1 flex items-center">
// // // //                                     <input
// // // //                                         ref={inputRef}
// // // //                                         type="text"
// // // //                                         value={input}
// // // //                                         onChange={(e) => setInput(e.target.value)}
// // // //                                         onKeyDown={handleKeyDown}
// // // //                                         className="bg-transparent border-none outline-none text-white flex-1"
// // // //                                         disabled={isProcessing}
// // // //                                         spellCheck="false"
// // // //                                         autoComplete="off"
// // // //                                         autoCapitalize="off"
// // // //                                     />
// // // //                                     {<Cursor />}
// // // //                                 </div>
// // // //                             </div>
// // // //                         </div>
// // // //                         <div ref={terminalEndRef} />
// // // //                     </CardContent>
// // // //                 </Card>
// // // //             </div>

// // // //             <div className="w-1/2 p-4">
// // // //                 <DisplayPanel displayData={displayData} />
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // }



// // import React, { useState, useRef, useEffect } from 'react';
// // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // import { Badge } from '@/components/ui/badge';
// // import { Button } from '@/components/ui/button';
// // import { Input } from '@/components/ui/input';
// // import { Textarea } from '@/components/ui/textarea';
// // import { X, Mail, Phone, MapPin, Calendar, Award, ExternalLink, Send, Download, FileText, Globe, Github, Linkedin, Twitter } from 'lucide-react';

// // const samplePortfolioData = {
// //     "name": "Barack Ouma",
// //     "title": "Software Engineer | Backend | AWS Certified",
// //     "profile_picture_url": "",
// //     "bio": "Passionate full-stack developer with expertise in modern web technologies",
// //     "about_me": "I'm a dedicated developer who loves creating efficient, scalable solutions and learning new technologies.",
// //     "contact": {
// //       "email": "barack.ouma@example.com",
// //       "twitter": "https://twitter.com/BarackOuma7",
// //       "github": "https://github.com/IsoDevMate",
// //       "linkedin": "https://www.linkedin.com/in/barack-ouma-b37089212/",
// //       "location": "Nairobi County, Kenya",
// //       "website": "https://barackoumasite.netlify.app/"
// //     },
// //     "experience": [
// //       {
// //         "id": 1,
// //         "title": "Technical Writer",
// //         "company": "Kodaschool",
// //         "dates": "Oct 2024 - Present · 10 mos",
// //         "location": "Nairobi County, Kenya · Remote",
// //         "description_points": [
// //           "Write technical blogs that contribute to educational and beginner-friendly content focused on programming",
// //           "Write clear, beginner-friendly guides on backend technologies such as TypeScript, Node.js, Java, and AWS services"
// //         ],
// //         "tags": ["Technical Documentation", "TypeScript", "Node.js", "Java", "AWS"]
// //       }
// //     ],
// //     "projects": [
// //       {
// //         "id": 3,
// //         "name": "AVIATOR",
// //         "description": "Aviator Game Client - A real-time online betting game built with React, TypeScript, and Redux. Players bet on a virtual airplane's flight duration, aiming to cash out before it flies away",
// //         "website_link": "",
// //         "details_link": "https://github.com/IsoDevMate/AVIATOR",
// //         "tags": ["TypeScript", "React", "Redux", "Game Development","Distributed Systems", "Backend","green-blue deployments"]
// //       }
// //     ],
// //     "skills": [
// //       {
// //         "category": "Frontend",
// //         "values": ["React", "HTML", "CSS", "JavaScript", "Dart", "Flutter"]
// //       },
// //       {
// //         "category": "Backend",
// //         "values": ["Node.js", "Python", "Django", "Firebase", "GraphQL", "MongoDB"]
// //       }
// //     ],
// //     "education": {
// //       "degree": "Bachelor's degree, Information Technology",
// //       "university": "Kenyatta University",
// //       "dates": null,
// //       "description": "Cascading Style Sheets (CSS), Python (Programming Language) and related technologies",
// //       "tags": ["Information Technology", "Computer Science"]
// //     },
// //     "certifications": [
// //       {
// //         "id": 1,
// //         "name": "AWS Database Migration Service",
// //         "issuer": "Amazon Web Services (AWS)",
// //         "date": "May 2025",
// //         "skills": ["Amazon Relational Database Service (RDS)", "Amazon Database Migration Service"]
// //       }
// //     ]
// // };

// // const ContactForm = ({ contactData }) => {
// //     const [formData, setFormData] = useState({
// //         name: '',
// //         email: '',
// //         subject: '',
// //         message: ''
// //     });

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         console.log('Form submitted:', formData);
// //         alert('Message sent! (This is a demo)');
// //         setFormData({ name: '', email: '', subject: '', message: '' });
// //     };

// //     const handleChange = (e) => {
// //         setFormData(prev => ({
// //             ...prev,
// //             [e.target.name]: e.target.value
// //         }));
// //     };

// //     return (
// //         <Card className="bg-gray-800 border-gray-700 mt-4">
// //             <CardHeader>
// //                 <CardTitle className="text-white flex items-center gap-2 text-base">
// //                     <Mail className="w-4 h-4" />
// //                     Send Message
// //                 </CardTitle>
// //             </CardHeader>
// //             <CardContent>
// //                 <form onSubmit={handleSubmit} className="space-y-3">
// //                     <div className="grid grid-cols-2 gap-3">
// //                         <Input
// //                             name="name"
// //                             placeholder="Name"
// //                             value={formData.name}
// //                             onChange={handleChange}
// //                             className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm"
// //                             required
// //                         />
// //                         <Input
// //                             name="email"
// //                             type="email"
// //                             placeholder="Email"
// //                             value={formData.email}
// //                             onChange={handleChange}
// //                             className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm"
// //                             required
// //                         />
// //                     </div>
// //                     <Input
// //                         name="subject"
// //                         placeholder="Subject"
// //                         value={formData.subject}
// //                         onChange={handleChange}
// //                         className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm"
// //                         required
// //                     />
// //                     <Textarea
// //                         name="message"
// //                         placeholder="Message..."
// //                         rows={3}
// //                         value={formData.message}
// //                         onChange={handleChange}
// //                         className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm"
// //                         required
// //                     />
// //                     <Button type="submit" size="sm" className="w-full bg-amber-500 hover:bg-amber-600 text-black">
// //                         <Send className="w-3 h-3 mr-1" />
// //                         Send
// //                     </Button>
// //                 </form>
// //             </CardContent>
// //         </Card>
// //     );
// // };

// // const UserPrompt = () => (
// //     <div className="flex items-center">
// //         <span className="text-emerald-400 font-mono">barack.ouma</span>
// //         <span className="text-gray-400 font-mono">@</span>
// //         <span className="text-blue-400 font-mono">portfolio</span>
// //         <span className="text-white font-mono">:</span>
// //         <span className="text-purple-400 font-mono">~</span>
// //         <span className="text-white font-mono">$</span>
// //     </div>
// // );

// // const Cursor = () => <span className="bg-lime-400 w-2 h-5 inline-block animate-pulse ml-1" />;

// // // Typewriter effect hook
// // const useTypewriter = (text, speed = 30) => {
// //     const [displayText, setDisplayText] = useState('');
// //     const [isComplete, setIsComplete] = useState(false);

// //     useEffect(() => {
// //         if (!text) return;

// //         setDisplayText('');
// //         setIsComplete(false);
// //         let i = 0;

// //         const timer = setInterval(() => {
// //             if (i < text.length) {
// //                 setDisplayText(text.slice(0, i + 1));
// //                 i++;
// //             } else {
// //                 setIsComplete(true);
// //                 clearInterval(timer);
// //             }
// //         }, speed);

// //         return () => clearInterval(timer);
// //     }, [text, speed]);

// //     return [displayText, isComplete];
// // };

// // const TypewriterOutput = ({ text, onComplete }) => {
// //     const [displayText, isComplete] = useTypewriter(text, 20);

// //     useEffect(() => {
// //         if (isComplete && onComplete) {
// //             onComplete();
// //         }
// //     }, [isComplete, onComplete]);

// //     return <pre className="whitespace-pre-wrap text-gray-300 font-mono text-sm leading-relaxed">{displayText}</pre>;
// // };

// // const createCommandProcessor = (data, setDisplayData, switchToGui) => {
// //     if (!data) return async () => "Portfolio data not loaded.";

// //     const process = async (command) => {
// //         const [cmd, ...args] = command.toLowerCase().trim().split(' ');
// //         const id = args[0] ? parseInt(args[0]) : null;
// //         const flag = args.find(arg => arg.startsWith('-'));

// //         switch (cmd) {
// //             case 'help':
// //             case 'man':
// //                 const helpContent = {
// //                     title: 'Available Commands',
// //                     commands: [
// //                         { cmd: 'whoami', desc: 'Display current user information' },
// //                         { cmd: 'id', desc: 'Display user and group IDs' },
// //                         { cmd: 'pwd', desc: 'Print working directory' },
// //                         { cmd: 'ls [-l]', desc: 'List directory contents (use -l for detailed view)' },
// //                         { cmd: 'cat <section>', desc: 'Display content of sections (skills, about, contact)' },
// //                         { cmd: 'find <query>', desc: 'Search through portfolio content' },
// //                         { cmd: 'grep <term>', desc: 'Search for specific terms in portfolio' },
// //                         { cmd: 'ps', desc: 'Show running processes (current projects)' },
// //                         { cmd: 'top', desc: 'Display top skills and technologies' },
// //                         { cmd: 'history', desc: 'Show command history' },
// //                         { cmd: 'env', desc: 'Display environment variables' },
// //                         { cmd: 'uname [-a]', desc: 'System information' },
// //                         { cmd: 'uptime', desc: 'Show system uptime and experience' },
// //                         { cmd: 'which <skill>', desc: 'Locate a skill or technology' },
// //                         { cmd: 'wget <section>', desc: 'Download section information' },
// //                         { cmd: 'curl -X GET /<endpoint>', desc: 'API-style data fetching' },
// //                         { cmd: 'ssh git@github.com', desc: 'Connect to GitHub profile' },
// //                         { cmd: 'ping <service>', desc: 'Check availability of services' },
// //                         { cmd: 'df -h', desc: 'Display skill distribution' },
// //                         { cmd: 'free -h', desc: 'Show available time and capacity' },
// //                         { cmd: 'jobs', desc: 'List current positions and roles' },
// //                         { cmd: 'crontab -l', desc: 'Show scheduled tasks and goals' },
// //                         { cmd: 'alias', desc: 'Show command aliases' },
// //                         { cmd: 'tree', desc: 'Display portfolio structure' },
// //                         { cmd: 'sudo contact', desc: 'Get contact information with privileges' },
// //                         { cmd: 'vim resume.txt', desc: 'View resume in vim-style' },
// //                         { cmd: 'theme', desc: 'Change terminal theme' },
// //                         { cmd: 'mode', desc: 'Switch terminal mode (simple/technical/graphql)' },
// //                         { cmd: 'gui', desc: 'Switch to GUI mode' },
// //                         { cmd: 'clear', desc: 'Clear terminal screen' },
// //                         { cmd: 'exit', desc: 'Exit terminal mode' }
// //                     ]
// //                 };

// //                 setDisplayData({
// //                     type: 'help',
// //                     content: helpContent
// //                 });

// //                 // Return a promise that resolves with the full help text for streaming
// //                 return new Promise(async (resolve) => {
// //                     let helpText = `\n${helpContent.title}\n${'='.repeat(helpContent.title.length)}\n\n`;

// //                     // Group commands by category
// //                     const categories = {
// //                         'Navigation': ['ls', 'cd', 'pwd', 'find', 'grep', 'tree'],
// //                         'Information': ['whoami', 'id', 'uname', 'uptime', 'which', 'env'],
// //                         'Portfolio': ['cat', 'ps', 'top', 'jobs', 'crontab', 'alias'],
// //                         'Network': ['wget', 'curl', 'ssh', 'ping'],
// //                         'System': ['df', 'free', 'history', 'clear'],
// //                         'UI': ['theme', 'mode', 'gui', 'exit']
// //                     };

// //                     // Build categorized help text
// //                     for (const [category, cmds] of Object.entries(categories)) {
// //                         helpText += `\n${category}:\n`;
// //                         const categoryCommands = helpContent.commands.filter(cmd =>
// //                             cmds.some(c => c === cmd.cmd.split(' ')[0])
// //                         );

// //                         const maxCmdLength = Math.max(...categoryCommands.map(c => c.cmd.length));

// //                         for (const cmd of categoryCommands) {
// //                             const padding = ' '.repeat(maxCmdLength - cmd.cmd.length + 2);
// //                             helpText += `  ${cmd.cmd}${padding}${cmd.desc}\n`;
// //                         }
// //                     }

// //                     helpText += '\nType `man <command>` for more info on a specific command.\n';

// //                     await typeText(helpText, (partialText) => {
// //                         if (setOutputHistory) {
// //                             setOutputHistory(prev => {
// //                                 const newHistory = [...prev];
// //                                 const lastItem = newHistory[newHistory.length - 1];
// //                                 if (lastItem && lastItem.type === 'typing') {
// //                                     lastItem.content = partialText;
// //                                 } else {
// //                                     newHistory.push({ type: 'typing', content: partialText });
// //                                 }
// //                                 return newHistory;
// //                             });
// //                         }
// //                     }, 1);

// //                     resolve('Help information displayed above');
// //                 });
// //                 return `PORTFOLIO TERMINAL MANUAL

// // NAME
// //     portfolio-terminal - Interactive portfolio navigation system

// // SYNOPSIS
// //     command [options] [arguments]

// // DESCRIPTION
// //     A Linux-style terminal interface for exploring Barack Ouma's professional portfolio.
// //     All standard Unix commands have been adapted for portfolio navigation.

// // GETTING STARTED
// //     Try these commands to explore:
// //     • whoami          - See who you're learning about
// //     • ls -l           - List all available sections
// //     • cat skills      - View technical skills
// //     • find react      - Search for React experience
// //     • ps              - See active projects

// // Use 'man <command>' for detailed help on specific commands.
// // Type 'clear' to clear screen, 'exit' to quit.`;

// //             case 'whoami':
// //                 setDisplayData({
// //                     type: 'profile',
// //                     content: {
// //                         name: data.name,
// //                         title: data.title,
// //                         bio: data.bio
// //                     }
// //                 });
// //                 // Return a promise that resolves with the full text for streaming
// //                 return new Promise(async (resolve) => {
// //                     const fullText = `\nUser Information\n${'='.repeat(15)}\n\n` +
// //                         `Username: ${data.name.toLowerCase().replace(' ', '.')}\n` +
// //                         `Name:     ${data.name}\n` +
// //                         `Title:    ${data.title}\n` +
// //                         `Bio:      ${data.bio}\n`;

// //                     await typeText(fullText, (partialText) => {
// //                         if (setOutputHistory) {
// //                             setOutputHistory(prev => {
// //                                 const newHistory = [...prev];
// //                                 const lastItem = newHistory[newHistory.length - 1];
// //                                 if (lastItem && lastItem.type === 'typing') {
// //                                     lastItem.content = partialText;
// //                                 } else {
// //                                     newHistory.push({ type: 'typing', content: partialText });
// //                                 }
// //                                 return newHistory;
// //                             });
// //                         }
// //                     });

// //                     resolve(`User information displayed for ${data.name}`);
// //                 });

// //             case 'id':
// //                 return `uid=1000(barack.ouma) gid=1000(developers) groups=1000(developers),27(sudo),44(video),46(plugdev),116(lpadmin),126(sambashare),999(docker)`;

// //             case 'pwd':
// //                 return `/home/barack.ouma/portfolio`;

// //             case 'ls':
// //                 if (flag === '-l') {
// //                     setDisplayData({ type: 'ls-detailed', content: data });
// //                     return `total 12
// // drwxr-xr-x 2 barack developers 4096 Aug  3 10:30 experience/
// // drwxr-xr-x 2 barack developers 4096 Aug  3 10:30 projects/
// // drwxr-xr-x 2 barack developers 4096 Aug  3 10:30 skills/
// // -rw-r--r-- 1 barack developers 1024 Aug  3 10:30 about.txt
// // -rw-r--r-- 1 barack developers 2048 Aug  3 10:30 contact.info
// // -rw-r--r-- 1 barack developers  512 Aug  3 10:30 education.md
// // -rw-r--r-- 1 barack developers 1536 Aug  3 10:30 certifications.json`;
// //                 } else {
// //                     setDisplayData({ type: 'ls-simple', content: data });
// //                     return `about.txt       certifications.json  education.md
// // contact.info    experience/           projects/
// // skills/`;
// //                 }

// //             case 'cat':
// //                 const section = args[0];
// //                 if (section === 'skills') {
// //                     setDisplayData({ type: 'skills', content: data.skills });
// //                     return data.skills.map(s => `[${s.category}]\n${s.values.join(', ')}\n`).join('\n');
// //                 } else if (section === 'about' || section === 'about.txt') {
// //                     setDisplayData({ type: 'about', content: { text: data.about_me } });
// //                     return data.about_me;
// //                 } else if (section === 'contact' || section === 'contact.info') {
// //                     setDisplayData({ type: 'contact', content: data.contact });
// //                     return `Email: ${data.contact.email}
// // Location: ${data.contact.location}
// // GitHub: ${data.contact.github}
// // LinkedIn: ${data.contact.linkedin}
// // Website: ${data.contact.website}`;
// //                 }
// //                 return `cat: ${section}: No such file or directory`;

// //             case 'find':
// //                 const query = args.join(' ');
// //                 if (!query) return `find: missing argument`;

// //                 const results = [];
// //                 // Search in experience
// //                 data.experience?.forEach(exp => {
// //                     if (exp.title.toLowerCase().includes(query) ||
// //                         exp.company.toLowerCase().includes(query) ||
// //                         exp.tags.some(tag => tag.toLowerCase().includes(query))) {
// //                         results.push(`./experience/${exp.title.toLowerCase().replace(/\s+/g, '_')}`);
// //                     }
// //                 });
// //                 // Search in skills
// //                 data.skills?.forEach(skill => {
// //                     if (skill.values.some(val => val.toLowerCase().includes(query))) {
// //                         results.push(`./skills/${skill.category.toLowerCase()}`);
// //                     }
// //                 });

// //                 return results.length > 0 ? results.join('\n') : `find: no matches for '${query}'`;

// //             case 'grep':
// //                 const term = args.join(' ');
// //                 if (!term) return `grep: missing search term`;

// //                 const matches = [];
// //                 // Search through all text content
// //                 if (data.about_me.toLowerCase().includes(term)) {
// //                     matches.push(`about.txt: ${data.about_me}`);
// //                 }
// //                 data.experience?.forEach(exp => {
// //                     exp.description_points?.forEach(point => {
// //                         if (point.toLowerCase().includes(term)) {
// //                             matches.push(`experience/${exp.company}: ${point}`);
// //                         }
// //                     });
// //                 });

// //                 return matches.length > 0 ? matches.slice(0, 5).join('\n') : `grep: no matches for '${term}'`;

// //             case 'ps':
// //             case 'ps aux':
// //                 setDisplayData({ type: 'projects-list', content: data.projects });
// //                 return `  PID TTY      STAT   START   TIME COMMAND
// // ${data.projects?.map((p, i) => `${1000 + i}  pts/0    S+    ${p.id < 3 ? 'Jan01' : 'Feb15'}   0:00 ${p.name.toLowerCase()}`).join('\n')}`;

// //             case 'top':
// //                 setDisplayData({ type: 'skills', content: data.skills });
// //                 return `top - portfolio overview
// // Tasks: ${data.skills?.reduce((acc, s) => acc + s.values.length, 0)} total skills
// // %Cpu(s): 95.2 us (actively developing)

// //   PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND
// // ${data.skills?.[0]?.values.slice(0, 5).map((skill, i) => `${1000 + i} barack    20   0   ${100 + i*10}m   ${20 + i*5}m   ${10 + i}m S  ${95 - i*5}.${i}   ${5 + i}.0   ${i}:${30 + i} ${skill.toLowerCase()}`).join('\n')}`;

// //             case 'history':
// //                 return `    1  whoami
// //     2  ls -l
// //     3  cat skills
// //     4  find react
// //     5  ps
// //     6  top
// //     7  history`;

// //             case 'env':
// //                 return `USER=barack.ouma
// // HOME=/home/barack.ouma
// // SHELL=/bin/bash
// // PROFESSION=software_engineer
// // LOCATION=nairobi_kenya
// // SPECIALIZATION=backend_development
// // AWS_CERTIFIED=true
// // FAVORITE_TECH=react,node,python
// // GITHUB_USERNAME=IsoDevMate`;

// //             case 'uname':
// //                 if (flag === '-a') {
// //                     return `Portfolio 5.4.0-portfolioOS #1 SMP Barack-Kernel x86_64 x86_64 x86_64 PortfolioOS/Ubuntu`;
// //                 }
// //                 return `PortfolioOS`;

// //             case 'uptime':
// //                 return `10:30:42 up 3 years, 2 months, 15 days, 6:42, 1 user, load average: 0.85, 0.92, 1.01
// // Professional experience: 3+ years in software development
// // Active coding streak: 847 days`;

// //             case 'which':
// //                 const skill = args[0];
// //                 if (!skill) return `which: missing argument`;

// //                 const found = data.skills?.find(s =>
// //                     s.values.some(v => v.toLowerCase().includes(skill))
// //                 );
// //                 return found ? `/usr/local/bin/${skill}` : `which: no ${skill} in PATH`;

// //             case 'wget':
// //                 const wgetSection = args[0];
// //                 if (wgetSection === 'resume' || wgetSection === 'cv') {
// //                     return `--2025-08-03 10:30:42--  https://portfolio.barack-ouma.com/resume.pdf
// // Resolving portfolio.barack-ouma.com... 192.168.1.100
// // Connecting to portfolio.barack-ouma.com:443... connected.
// // HTTP request sent, awaiting response... 200 OK
// // Length: 245760 (240K) [application/pdf]
// // Saving to: 'barack_ouma_resume.pdf'

// // barack_ouma_resume.pdf    100%[===================>] 240.00K  1.20MB/s    in 0.2s

// // 2025-08-03 10:30:43 (1.20 MB/s) - 'barack_ouma_resume.pdf' saved [245760/245760]`;
// //                 }
// //                 return `wget: missing URL`;

// //             case 'curl':
// //                 if (args[0] === '-X' && args[1] === 'GET') {
// //                     const endpoint = args[2];
// //                     if (endpoint === '/api/experience') {
// //                         setDisplayData({ type: 'experience-list', content: data.experience });
// //                         return `HTTP/1.1 200 OK\nContent-Type: application/json\n\n${JSON.stringify(data.experience, null, 2)}`;
// //                     } else if (endpoint === '/api/skills') {
// //                         setDisplayData({ type: 'skills', content: data.skills });
// //                         return `HTTP/1.1 200 OK\nContent-Type: application/json\n\n${JSON.stringify(data.skills, null, 2)}`;
// //                     }
// //                 }
// //                 return `curl: invalid syntax. Try: curl -X GET /api/experience`;

// //             case 'ssh':
// //                 if (args[0] === 'git@github.com') {
// //                     window.open(data.contact.github, '_blank');
// //                     return `PTY allocation request failed on channel 0
// // Hi IsoDevMate! You've successfully authenticated to GitHub.
// // Opening GitHub profile...`;
// //                 }
// //                 return `ssh: connection failed`;

// //             case 'ping':
// //                 const service = args[0];
// //                 if (service === 'github.com') {
// //                     return `PING github.com (140.82.112.3): 56 data bytes
// // 64 bytes from 140.82.112.3: icmp_seq=0 ttl=64 time=12.345 ms
// // 64 bytes from 140.82.112.3: icmp_seq=1 ttl=64 time=11.234 ms
// // --- github.com ping statistics ---
// // 2 packets transmitted, 2 packets received, 0.0% packet loss`;
// //                 }
// //                 return `ping: ${service}: Name or service not known`;

// //             case 'df':
// //                 if (flag === '-h') {
// //                     return `Filesystem      Size  Used Avail Use% Mounted on
// // /dev/skills     100G   75G   25G  75% /usr/local/skills
// // /dev/experience  50G   35G   15G  70% /var/experience
// // /dev/projects    30G   20G   10G  67% /home/projects
// // /dev/learning   ∞     ∞     ∞    0% /tmp/continuous_learning`;
// //                 }
// //                 return `df: missing -h flag for human readable format`;

// //             case 'free':
// //                 if (flag === '-h') {
// //                     return `              total        used        free      shared
// // Mem:           16Gi        12Gi        4Gi       2Gi
// // Available time: 40h/week    Used: 35h/week    Free: 5h/week
// // Creativity:    ∞           High        ∞         ∞`;
// //                 }
// //                 return `free: use -h for human readable format`;

// //             case 'jobs':
// //                 setDisplayData({ type: 'experience-list', content: data.experience });
// //                 return `[1]+  Running    Technical Writer at Kodaschool
// // [2]   Running    Software Engineering Trainee at Power Learn Project
// // [3]   Stopped    Full Stack Engineer at Bee Multiscents
// // [4]   Stopped    Full Stack Engineer at Yafreeka`;

// //             case 'crontab':
// //                 if (flag === '-l') {
// //                     return `# Barack's scheduled tasks
// // 0 9 * * 1-5 /usr/bin/code # Start coding at 9 AM weekdays
// // 0 12 * * * /usr/bin/coffee # Daily coffee break
// // 0 18 * * * /usr/bin/git-commit # Daily code commit
// // 0 20 * * * /usr/bin/learn-new-tech # Evening learning
// // 0 0 * * 0 /usr/bin/weekly-review # Weekly progress review`;
// //                 }
// //                 return `crontab: use -l to list scheduled tasks`;

// //             case 'alias':
// //                 return `alias ll='ls -alF'
// // alias la='ls -A'
// // alias l='ls -CF'
// // alias code='vim'
// // alias python='python3'
// // alias ..='cd ..'
// // alias ...='cd ../..'
// // alias grep='grep --color=auto'
// // alias projects='ls ~/projects'
// // alias skills='cat ~/skills.txt'`;

// //             case 'tree':
// //                 setDisplayData({ type: 'tree', content: data });
// //                 return `/home/barack.ouma/portfolio
// // ├── experience/
// // │   ├── kodaschool/
// // │   ├── power-learn-project/
// // │   ├── bee-multiscents/
// // │   └── yafreeka/
// // ├── projects/
// // │   ├── aviator/
// // │   ├── mpesa-daraja-trpc/
// // │   └── portfolio-terminal/
// // ├── skills/
// // │   ├── frontend/
// // │   ├── backend/
// // │   ├── cloud-devops/
// // │   └── other/
// // ├── about.txt
// // ├── contact.info
// // ├── education.md
// // └── certifications.json

// // 8 directories, 4 files`;

// //             case 'sudo':
// //                 if (args[0] === 'contact') {
// //                     setDisplayData({ type: 'contact', content: data.contact });
// //                     return `[sudo] password for barack: ****
// // Access granted. Contact information unlocked.

// // 📧 Email: ${data.contact.email}
// // 📍 Location: ${data.contact.location}
// // 🐙 GitHub: ${data.contact.github}
// // 💼 LinkedIn: ${data.contact.linkedin}
// // 🌐 Website: ${data.contact.website}`;
// //                 }
// //                 return `sudo: ${args.join(' ')}: command not found`;

// //             case 'vim':
// //                 if (args[0] === 'resume.txt' || args[0] === 'resume') {
// //                     setDisplayData({ type: 'vim-resume', content: data });
// //                     return `"resume.txt" 45L, 2048C

// // ~ VIM - Barack Ouma Resume ~
// // :q to quit, :w to save

// // NAME: ${data.name}
// // TITLE: ${data.title}
// // EMAIL: ${data.contact.email}
// // LOCATION: ${data.contact.location}

// // EXPERIENCE:
// // ${data.experience?.map(exp => `• ${exp.title} @ ${exp.company} (${exp.dates})`).join('\n')}

// // SKILLS:
// // ${data.skills?.map(s => `${s.category}: ${s.values.join(', ')}`).join('\n')}

// // :wq (save and quit)`;
// //                 }
// //                 return `vim: ${args[0]}: No such file or directory`;

// //             case 'experience':
// //                 if (id) {
// //                     const item = data.experience?.find(e => e.id === id);
// //                     if (item) {
// //                         setDisplayData({ type: 'experience-detail', content: item });
// //                         return `${item.title} @ ${item.company} - Details shown on right panel`;
// //                     }
// //                     return `Experience ID ${id} not found.`;
// //                 }
// //                 setDisplayData({ type: 'experience-list', content: data.experience });
// //                 return data.experience?.map(e => `${e.id}. ${e.title} @ ${e.company}`).join('\n') || 'No experience data';

// //             case 'projects':
// //                 if (id) {
// //                     const item = data.projects?.find(p => p.id === id);
// //                     if (item) {
// //                         setDisplayData({ type: 'project-detail', content: item });
// //                         return `${item.name} - Details shown on right panel`;
// //                     }
// //                     return `Project ID ${id} not found.`;
// //                 }
// //                 setDisplayData({ type: 'projects-list', content: data.projects });
// //                 return data.projects?.map(p => `${p.id}. ${p.name}`).join('\n') || 'No projects data';

// //             case 'education':
// //                 setDisplayData({ type: 'education', content: data.education });
// //                 return `${data.education?.degree} - ${data.education?.university}`;

// //             case 'certifications':
// //                 setDisplayData({ type: 'certifications-list', content: data.certifications });
// //                 return data.certifications?.map(c => `${c.id || 1}. ${c.name}`).join('\n') || 'No certifications data';

// //             case 'contact':
// //                 setDisplayData({ type: 'contact', content: data.contact });
// //                 return 'Contact information and form shown on right panel';

// //             case 'about':
// //                 setDisplayData({ type: 'about', content: { text: data.about_me } });
// //                 // Return a promise that resolves with the full text for streaming
// //                 return new Promise(async (resolve) => {
// //                     const fullText = `\n${data.name}'s Profile\n${'='.repeat(20)}\n\n${data.about_me}\n\n`;
// //                     await typeText(fullText, (partialText) => {
// //                         if (setOutputHistory) {
// //                             setOutputHistory(prev => {
// //                                 const newHistory = [...prev];
// //                                 const lastItem = newHistory[newHistory.length - 1];
// //                                 if (lastItem && lastItem.type === 'typing') {
// //                                     lastItem.content = partialText;
// //                                 } else {
// //                                     newHistory.push({ type: 'typing', content: partialText });
// //                                 }
// //                                 return newHistory;
// //                             });
// //                         }
// //                     });
// //                     resolve('About me section shown above and on the right panel');
// //                 });

// //             case 'gui':
// //                 switchToGui();
// //                 return 'Switching to GUI mode...';

// //             case 'exit':
// //             case 'quit':
// //                 switchToGui();
// //                 return 'Exiting terminal...';

// //             case '':
// //                 return '';

// //             default:
// //                 return `bash: ${command}: command not found

// // Did you mean one of these?
// //   whoami    ls       cat      find     grep
// //   ps        top      history  env      uname

// // Type 'help' or 'man' for a full list of available commands.`;
// //         }
// //     };
// //     return process;
// // };

// // const DisplayPanel = ({ displayData }) => {
// //     if (!displayData) {
// //         return (
// //             <Card className="bg-gray-900 border-gray-700 h-full">
// //                 <CardContent className="p-6 flex items-center justify-center h-full">
// //                     <div className="text-center text-gray-400">
// //                         <div className="text-4xl mb-3">💻</div>
// //                         <h3 className="text-lg font-medium mb-2 text-gray-200">Terminal Portfolio</h3>
// //                         <p className="text-sm">Execute commands to explore details</p>
// //                         <p className="text-xs mt-2 text-gray-500">Try: whoami, ls -l, cat skills, find react</p>
// //                     </div>
// //                 </CardContent>
// //             </Card>
// //         );
// //     }

// //     const renderContent = () => {
// //         switch (displayData.type) {
// //             case 'help':
// //                 return (
// //                     <div className="space-y-4">
// //                         <h3 className="text-lg font-bold text-white font-mono">{displayData.content.title}</h3>
// //                         <div className="grid grid-cols-1 gap-2 max-h-96 overflow-y-auto">
// //                             {displayData.content.commands.map((cmd, index) => (
// //                                 <div key={index} className="border-l-2 border-green-400 pl-3 py-1 bg-gray-800 rounded-r">
// //                                     <code className="text-green-400 font-mono text-sm font-bold">{cmd.cmd}</code>
// //                                     <p className="text-gray-300 text-xs mt-1">{cmd.desc}</p>
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </div>
// //                 );

// //             case 'profile':
// //                 return (
// //                     <div className="space-y-4">
// //                         <div className="text-center">
// //                             <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-black">
// //                                 {displayData.content.name.split(' ').map(n => n[0]).join('')}
// //                             </div>
// //                             <h3 className="text-xl font-bold text-white font-mono">{displayData.content.name}</h3>
// //                             <p className="text-green-400 text-sm font-mono">{displayData.content.title}</p>
// //                         </div>
// //                         <p className="text-gray-300 text-sm text-center leading-relaxed">{displayData.content.bio}</p>
// //                     </div>
// //                 );

// //             case 'skills':
// //                 return (
// //                     <div className="space-y-4">
// //                         <h3 className="text-lg font-bold text-white font-mono">Technical Skills</h3>
// //                         {displayData.content.map((skill, index) => (
// //                             <div key={index} className="space-y-2">
// //                                 <h4 className="text-green-400 font-bold text-sm font-mono">{skill.category}</h4>
// //                                 <div className="flex flex-wrap gap-2">
// //                                     {skill.values.map((value, i) => (
// //                                         <Badge key={i} variant="secondary" className="bg-gray-800 text-gray-300 text-xs border border-gray-600 hover:border-green-400 transition-colors font-mono">
// //                                             {value}
// //                                         </Badge>
// //                                     ))}
// //                                 </div>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 );

// //             case 'ls-detailed':
// //             case 'ls-simple':
// //                 return (
// //                     <div className="space-y-4">
// //                         <h3 className="text-lg font-bold text-white font-mono">Directory Listing</h3>
// //                         <div className="space-y-2 font-mono text-sm">
// //                             <div className="grid grid-cols-2 gap-4">
// //                                 <div className="bg-gray-800 p-3 rounded border border-gray-700">
// //                                     <h4 className="text-blue-400 font-bold mb-2">📁 experience/</h4>
// //                                     <p className="text-gray-400 text-xs">{displayData.content.experience?.length || 0} positions</p>
// //                                 </div>
// //                                 <div className="bg-gray-800 p-3 rounded border border-gray-700">
// //                                     <h4 className="text-blue-400 font-bold mb-2">📁 projects/</h4>
// //                                     <p className="text-gray-400 text-xs">{displayData.content.projects?.length || 0} repositories</p>
// //                                 </div>
// //                                 <div className="bg-gray-800 p-3 rounded border border-gray-700">
// //                                     <h4 className="text-blue-400 font-bold mb-2">📁 skills/</h4>
// //                                     <p className="text-gray-400 text-xs">{displayData.content.skills?.length || 0} categories</p>
// //                                 </div>
// //                                 <div className="bg-gray-800 p-3 rounded border border-gray-700">
// //                                     <h4 className="text-green-400 font-bold mb-2">📄 contact.info</h4>
// //                                     <p className="text-gray-400 text-xs">Contact details</p>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 );

// //             case 'experience-list':
// //                 return (
// //                     <div className="space-y-4">
// //                         <h3 className="text-lg font-bold text-white font-mono">Work Experience</h3>
// //                         <div className="space-y-3">
// //                             {displayData.content.map((exp) => (
// //                                 <div key={exp.id} className="border border-gray-700 rounded-lg p-4 hover:border-green-400 transition-colors bg-gray-800">
// //                                     <div className="flex items-start justify-between mb-2">
// //                                         <div>
// //                                             <h4 className="font-bold text-white font-mono">{exp.title}</h4>
// //                                             <p className="text-green-400 text-sm font-mono">{exp.company}</p>
// //                                         </div>
// //                                         <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs font-mono">
// //                                             ID: {exp.id}
// //                                         </Badge>
// //                                     </div>
// //                                     <p className="text-gray-400 text-xs font-mono mb-3 flex items-center gap-1">
// //                                         <Calendar className="w-3 h-3" />
// //                                         {exp.dates}
// //                                     </p>
// //                                     <div className="flex flex-wrap gap-1">
// //                                         {exp.tags.slice(0, 4).map((tag, i) => (
// //                                             <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs font-mono">
// //                                                 {tag}
// //                                             </Badge>
// //                                         ))}
// //                                     </div>
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </div>
// //                 );

// //             case 'experience-detail':
// //                 return (
// //                     <div className="space-y-4">
// //                         <div>
// //                             <h3 className="text-lg font-bold text-white font-mono">{displayData.content.title}</h3>
// //                             <p className="text-green-400 text-sm font-mono">{displayData.content.company}</p>
// //                             <p className="text-gray-400 text-xs flex items-center gap-1 mt-1 font-mono">
// //                                 <Calendar className="w-3 h-3" />
// //                                 {displayData.content.dates}
// //                             </p>
// //                             <p className="text-gray-400 text-xs flex items-center gap-1 font-mono">
// //                                 <MapPin className="w-3 h-3" />
// //                                 {displayData.content.location}
// //                             </p>
// //                         </div>
// //                         <div>
// //                             <h4 className="text-white font-bold mb-3 text-sm font-mono">Responsibilities:</h4>
// //                             <ul className="space-y-2">
// //                                 {displayData.content.description_points.map((point, i) => (
// //                                     <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
// //                                         <span className="text-green-400 mt-1 font-mono">▸</span>
// //                                         <span className="leading-relaxed">{point}</span>
// //                                     </li>
// //                                 ))}
// //                             </ul>
// //                         </div>
// //                         <div className="flex flex-wrap gap-2">
// //                             {displayData.content.tags.map((tag, i) => (
// //                                 <Badge key={i} variant="secondary" className="bg-gray-800 text-gray-300 text-xs border border-gray-600 font-mono">
// //                                     {tag}
// //                                 </Badge>
// //                             ))}
// //                         </div>
// //                     </div>
// //                 );

// //             case 'projects-list':
// //                 return (
// //                     <div className="space-y-4">
// //                         <h3 className="text-lg font-bold text-white font-mono">Active Projects</h3>
// //                         <div className="space-y-3">
// //                             {displayData.content.map((project) => (
// //                                 <div key={project.id} className="border border-gray-700 rounded-lg p-4 hover:border-green-400 transition-colors bg-gray-800">
// //                                     <div className="flex items-start justify-between mb-2">
// //                                         <h4 className="font-bold text-white font-mono">{project.name}</h4>
// //                                         <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs font-mono">
// //                                             PID: {project.id}
// //                                         </Badge>
// //                                     </div>
// //                                     <p className="text-gray-300 text-sm mb-3 leading-relaxed">{project.description}</p>
// //                                     <div className="flex flex-wrap gap-1 mb-3">
// //                                         {project.tags.slice(0, 4).map((tag, i) => (
// //                                             <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs font-mono">
// //                                                 {tag}
// //                                             </Badge>
// //                                         ))}
// //                                     </div>
// //                                     <div className="flex gap-3 text-xs">
// //                                         {project.website_link && (
// //                                             <a href={project.website_link} className="text-green-400 hover:underline flex items-center gap-1 font-mono">
// //                                                 <Globe className="w-3 h-3" />
// //                                                 Live Site
// //                                             </a>
// //                                         )}
// //                                         <a href={project.details_link} className="text-green-400 hover:underline flex items-center gap-1 font-mono">
// //                                             <Github className="w-3 h-3" />
// //                                             Source
// //                                         </a>
// //                                     </div>
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </div>
// //                 );

// //             case 'project-detail':
// //                 return (
// //                     <div className="space-y-4">
// //                         <h3 className="text-lg font-bold text-white font-mono">{displayData.content.name}</h3>
// //                         <p className="text-gray-300 text-sm leading-relaxed">{displayData.content.description}</p>
// //                         <div className="flex flex-wrap gap-2">
// //                             {displayData.content.tags.map((tag, i) => (
// //                                 <Badge key={i} variant="secondary" className="bg-gray-800 text-gray-300 text-xs border border-gray-600 font-mono">
// //                                     {tag}
// //                                 </Badge>
// //                             ))}
// //                         </div>
// //                         <div className="flex gap-4 text-sm">
// //                             {displayData.content.website_link && (
// //                                 <a href={displayData.content.website_link} className="flex items-center gap-2 text-green-400 hover:underline font-mono">
// //                                     <Globe className="w-4 h-4" />
// //                                     Live Demo
// //                                 </a>
// //                             )}
// //                             <a href={displayData.content.details_link} className="flex items-center gap-2 text-green-400 hover:underline font-mono">
// //                                 <Github className="w-4 h-4" />
// //                                 Source Code
// //                             </a>
// //                         </div>
// //                     </div>
// //                 );

// //             case 'education':
// //                 return (
// //                     <div className="space-y-4">
// //                         <h3 className="text-lg font-bold text-white font-mono">Education</h3>
// //                         <div className="border border-gray-700 rounded-lg p-4 bg-gray-800">
// //                             <h4 className="font-bold text-white font-mono">{displayData.content.degree}</h4>
// //                             <p className="text-green-400 text-sm font-mono">{displayData.content.university}</p>
// //                             {displayData.content.dates && (
// //                                 <p className="text-gray-400 text-xs flex items-center gap-1 mt-1 font-mono">
// //                                     <Calendar className="w-3 h-3" />
// //                                     {displayData.content.dates}
// //                                 </p>
// //                             )}
// //                             <p className="text-gray-300 text-sm mt-3 leading-relaxed">{displayData.content.description}</p>
// //                             <div className="flex flex-wrap gap-2 mt-3">
// //                                 {displayData.content.tags.map((tag, i) => (
// //                                     <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs font-mono">
// //                                         {tag}
// //                                     </Badge>
// //                                 ))}
// //                             </div>
// //                         </div>
// //                     </div>
// //                 );

// //             case 'certifications-list':
// //                 return (
// //                     <div className="space-y-4">
// //                         <h3 className="text-lg font-bold text-white font-mono">Certifications</h3>
// //                         <div className="space-y-3">
// //                             {displayData.content.map((cert, index) => (
// //                                 <div key={cert.id || index} className="border border-gray-700 rounded-lg p-4 hover:border-green-400 transition-colors bg-gray-800">
// //                                     <div className="flex items-start justify-between mb-2">
// //                                         <div className="flex items-start gap-3">
// //                                             <Award className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
// //                                             <div>
// //                                                 <h4 className="font-bold text-white font-mono">{cert.name}</h4>
// //                                                 <p className="text-green-400 text-sm font-mono">{cert.issuer}</p>
// //                                             </div>
// //                                         </div>
// //                                     </div>
// //                                     <p className="text-gray-400 text-xs ml-8 font-mono">{cert.date}</p>
// //                                     <div className="flex flex-wrap gap-1 mt-3 ml-8">
// //                                         {cert.skills?.map((skill, i) => (
// //                                             <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs font-mono">
// //                                                 {skill}
// //                                             </Badge>
// //                                         ))}
// //                                     </div>
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </div>
// //                 );

// //             case 'contact':
// //                 return (
// //                     <div className="space-y-4">
// //                         <h3 className="text-lg font-bold text-white font-mono">Contact Information</h3>
// //                         <div className="space-y-3">
// //                             <div className="flex items-center gap-3 p-3 bg-gray-800 rounded border border-gray-700">
// //                                 <Mail className="w-5 h-5 text-green-400" />
// //                                 <span className="text-gray-300 font-mono">{displayData.content.email}</span>
// //                             </div>
// //                             <div className="flex items-center gap-3 p-3 bg-gray-800 rounded border border-gray-700">
// //                                 <MapPin className="w-5 h-5 text-green-400" />
// //                                 <span className="text-gray-300 font-mono">{displayData.content.location}</span>
// //                             </div>
// //                             <div className="grid grid-cols-1 gap-2">
// //                                 <a href={displayData.content.github} className="flex items-center gap-3 p-3 bg-gray-800 rounded border border-gray-700 hover:border-green-400 transition-colors">
// //                                     <Github className="w-5 h-5 text-green-400" />
// //                                     <span className="text-gray-300 font-mono">GitHub Profile</span>
// //                                 </a>
// //                                 <a href={displayData.content.linkedin} className="flex items-center gap-3 p-3 bg-gray-800 rounded border border-gray-700 hover:border-green-400 transition-colors">
// //                                     <Linkedin className="w-5 h-5 text-green-400" />
// //                                     <span className="text-gray-300 font-mono">LinkedIn Profile</span>
// //                                 </a>
// //                                 {displayData.content.twitter && (
// //                                     <a href={displayData.content.twitter} className="flex items-center gap-3 p-3 bg-gray-800 rounded border border-gray-700 hover:border-green-400 transition-colors">
// //                                         <Twitter className="w-5 h-5 text-green-400" />
// //                                         <span className="text-gray-300 font-mono">Twitter Profile</span>
// //                                     </a>
// //                                 )}
// //                                 {displayData.content.website && (
// //                                     <a href={displayData.content.website} className="flex items-center gap-3 p-3 bg-gray-800 rounded border border-gray-700 hover:border-green-400 transition-colors">
// //                                         <Globe className="w-5 h-5 text-green-400" />
// //                                         <span className="text-gray-300 font-mono">Personal Website</span>
// //                                     </a>
// //                                 )}
// //                             </div>
// //                         </div>
// //                         <ContactForm contactData={displayData.content} />
// //                     </div>
// //                 );

// //             case 'about':
// //                 return (
// //                     <div className="space-y-4">
// //                         <h3 className="text-lg font-bold text-white font-mono">About Me</h3>
// //                         <div className="bg-gray-800 p-4 rounded border border-gray-700">
// //                             <p className="text-gray-300 text-sm leading-relaxed">{displayData.content.text}</p>
// //                         </div>
// //                     </div>
// //                 );

// //             case 'tree':
// //                 return (
// //                     <div className="space-y-4">
// //                         <h3 className="text-lg font-bold text-white font-mono">Portfolio Structure</h3>
// //                         <div className="bg-gray-800 p-4 rounded border border-gray-700 font-mono text-sm">
// //                             <div className="text-green-400">
// //                                 <div>📁 /home/barack.ouma/portfolio</div>
// //                                 <div className="ml-4">├── 📁 experience/</div>
// //                                 {displayData.content.experience?.map((exp, i) => (
// //                                     <div key={exp.id} className="ml-8 text-gray-300">
// //                                         {i === displayData.content.experience.length - 1 ? '└──' : '├──'} {exp.company.toLowerCase().replace(/\s+/g, '-')}/
// //                                     </div>
// //                                 ))}
// //                                 <div className="ml-4">├── 📁 projects/</div>
// //                                 {displayData.content.projects?.map((proj, i) => (
// //                                     <div key={proj.id} className="ml-8 text-gray-300">
// //                                         {i === displayData.content.projects.length - 1 ? '└──' : '├──'} {proj.name.toLowerCase().replace(/\s+/g, '-')}/
// //                                     </div>
// //                                 ))}
// //                                 <div className="ml-4">├── 📁 skills/</div>
// //                                 {displayData.content.skills?.map((skill, i) => (
// //                                     <div key={i} className="ml-8 text-gray-300">
// //                                         {i === displayData.content.skills.length - 1 ? '└──' : '├──'} {skill.category.toLowerCase()}/
// //                                     </div>
// //                                 ))}
// //                                 <div className="ml-4">├── 📄 about.txt</div>
// //                                 <div className="ml-4">├── 📄 contact.info</div>
// //                                 <div className="ml-4">├── 📄 education.md</div>
// //                                 <div className="ml-4">└── 📄 certifications.json</div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 );

// //             case 'vim-resume':
// //                 return (
// //                     <div className="space-y-4">
// //                         <h3 className="text-lg font-bold text-white font-mono">VIM - resume.txt</h3>
// //                         <div className="bg-black p-4 rounded border-2 border-green-400 font-mono text-sm">
// //                             <div className="text-green-400 mb-2">~ VIM 8.2 - Barack Ouma Resume ~</div>
// //                             <div className="text-white space-y-1">
// //                                 <div className="text-yellow-400">NAME:</div>
// //                                 <div className="ml-4">{displayData.content.name}</div>
// //                                 <div className="text-yellow-400">TITLE:</div>
// //                                 <div className="ml-4">{displayData.content.title}</div>
// //                                 <div className="text-yellow-400">CONTACT:</div>
// //                                 <div className="ml-4">Email: {displayData.content.contact.email}</div>
// //                                 <div className="ml-4">Location: {displayData.content.contact.location}</div>
// //                                 <div className="text-yellow-400">EXPERIENCE:</div>
// //                                 {displayData.content.experience?.map((exp, i) => (
// //                                     <div key={exp.id} className="ml-4">• {exp.title} @ {exp.company}</div>
// //                                 ))}
// //                                 <div className="text-yellow-400">SKILLS:</div>
// //                                 {displayData.content.skills?.map((skill, i) => (
// //                                     <div key={i} className="ml-4">{skill.category}: {skill.values.join(', ')}</div>
// //                                 ))}
// //                                 <div className="mt-4 text-green-400">:wq (save and quit)</div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 );

// //             default:
// //                 return (
// //                     <div className="text-center text-gray-400">
// //                         <p className="text-sm font-mono">Unknown command output</p>
// //                     </div>
// //                 );
// //         }
// //     };

// //     return (
// //         <Card className="bg-gray-900 border-gray-700 h-full">
// //             <CardContent className="p-4 h-full overflow-y-auto">
// //                 {renderContent()}
// //             </CardContent>
// //         </Card>
// //     );
// // };

// // export default function EnhancedTerminal({ portfolioData = samplePortfolioData, switchToGui }) {
// //     const [history, setHistory] = useState([
// //         { type: 'output', text: "Barack's Portfolio Terminal v2.1.0 (Ubuntu 22.04.3 LTS)\nCopyright (c) 2025 Barack Ouma. All rights reserved.\n\nWelcome to the enhanced terminal interface!\nType 'help' or 'man' for available commands, 'gui' to switch modes.\n\nLast login: Sun Aug 3 10:30:42 2025 from localhost" }
// //     ]);
// //     const [input, setInput] = useState('');
// //     const [isProcessing, setIsProcessing] = useState(false);
// //     const [displayData, setDisplayData] = useState(null);
// //     const [commandHistory, setCommandHistory] = useState([]);
// //     const [historyIndex, setHistoryIndex] = useState(-1);
// //     const terminalEndRef = useRef(null);
// //     const inputRef = useRef(null);

// //     const processCommand = createCommandProcessor(
// //         portfolioData,
// //         setDisplayData,
// //         switchToGui || (() => console.log('Switching to GUI mode'))
// //     );

// //     useEffect(() => {
// //         terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
// //     }, [history]);

// //     useEffect(() => {
// //         const focusInput = () => inputRef.current?.focus();
// //         const handleClick = (e) => {
// //             if (e.target.closest('.terminal-panel')) {
// //                 focusInput();
// //             }
// //         };
// //         window.addEventListener('click', handleClick);
// //         focusInput();
// //         return () => window.removeEventListener('click', handleClick);
// //     }, []);

// //     const handleKeyDown = async (e) => {
// //         if (e.key === 'Enter' && !isProcessing) {
// //             e.preventDefault();
// //             const command = input.trim();

// //             if (!command) return;

// //             const newHistory = [...history, { type: 'input', text: command }];
// //             setCommandHistory(prev => [...prev.slice(-19), command]); // Keep last 20 commands
// //             setHistoryIndex(-1);

// //             if (command.toLowerCase() === 'clear') {
// //                 setHistory([]);
// //                 setInput('');
// //                 setDisplayData(null);
// //                 return;
// //             }

// //             setIsProcessing(true);
// //             setHistory(newHistory);
// //             setInput('');

// //             // Add slight delay to show input first
// //             setTimeout(async () => {
// //                 const output = await processCommand(command);
// //                 if (output) {
// //                     setHistory(prev => [...prev, { type: 'output', text: output, streaming: true }]);
// //                 }
// //                 setIsProcessing(false);
// //             }, 100);

// //         } else if (e.key === 'ArrowUp') {
// //             e.preventDefault();
// //             if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
// //                 const newIndex = historyIndex + 1;
// //                 setHistoryIndex(newIndex);
// //                 setInput(commandHistory[commandHistory.length - 1 - newIndex]);
// //             }
// //         } else if (e.key === 'ArrowDown') {
// //             e.preventDefault();
// //             if (historyIndex > 0) {
// //                 const newIndex = historyIndex - 1;
// //                 setHistoryIndex(newIndex);
// //                 setInput(commandHistory[commandHistory.length - 1 - newIndex]);
// //             } else if (historyIndex === 0) {
// //                 setHistoryIndex(-1);
// //                 setInput('');
// //             }
// //         } else if (e.key === 'Tab') {
// //             e.preventDefault();
// //             // Basic tab completion
// //             const commands = ['help', 'whoami', 'ls', 'cat', 'find', 'grep', 'ps', 'top', 'history', 'clear', 'exit', 'gui'];
// //             const matches = commands.filter(cmd => cmd.startsWith(input.toLowerCase()));
// //             if (matches.length === 1) {
// //                 setInput(matches[0]);
// //             }
// //         } else if (e.key === 'Escape') {
// //             if (switchToGui) {
// //                 switchToGui();
// //             }
// //         }
// //     };

// //     const renderOutput = (item) => {
// //         if (item.streaming) {
// //             return <TypewriterOutput text={item.text} />;
// //         }
// //         return <pre className="whitespace-pre-wrap text-gray-300 font-mono text-sm leading-relaxed">{item.text}</pre>;
// //     };

// //     return (
// //         <div className="h-screen bg-[#0a0a0a] flex relative">
// //             <Button
// //                 onClick={switchToGui || (() => console.log('Exit clicked'))}
// //                 className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white font-mono"
// //                 size="sm"
// //             >
// //                 <X className="w-4 h-4 mr-1" />
// //                 Exit
// //             </Button>

// //             <div className="w-1/2 p-4 terminal-panel">
// //                 <Card className="bg-[#0a0a0a] border-gray-800 h-full">
// //                     <CardHeader className="pb-2 border-b border-gray-800">
// //                         <CardTitle className="text-green-400 font-mono text-sm flex items-center gap-2">
// //                             <span>●</span> barack@portfolio-terminal
// //                         </CardTitle>
// //                     </CardHeader>
// //                     <CardContent className="p-4 h-full overflow-y-auto font-mono text-sm">
// //                         <div className="pb-20">
// //                             {history.map((item, index) => (
// //                                 <div key={index} className="mb-2">
// //                                     {item.type === 'input' ? (
// //                                         <div className="flex items-center gap-2">
// //                                             <UserPrompt />
// //                                             <span className="text-white font-mono">{item.text}</span>
// //                                         </div>
// //                                     ) : (
// //                                         <div className="ml-0">
// //                                             {renderOutput(item)}
// //                                         </div>
// //                                     )}
// //                                 </div>
// //                             ))}
// //                             {isProcessing && (
// //                                 <div className="flex items-center gap-2 text-gray-400">
// //                                     <span className="animate-spin">⠋</span>
// //                                     <span className="font-mono text-sm">Processing...</span>
// //                                 </div>
// //                             )}
// //                             <div className="flex items-center gap-2">
// //                                 <UserPrompt />
// //                                 <div className="flex-1 flex items-center">
// //                                     <input
// //                                         ref={inputRef}
// //                                         type="text"
// //                                         value={input}
// //                                         onChange={(e) => setInput(e.target.value)}
// //                                         onKeyDown={handleKeyDown}
// //                                         className="bg-transparent border-none outline-none text-white flex-1 font-mono"
// //                                         disabled={isProcessing}
// //                                         spellCheck="false"
// //                                         autoComplete="off"
// //                                         autoCapitalize="off"
// //                                     />
// //                                     {!isProcessing && <Cursor />}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div ref={terminalEndRef} />
// //                     </CardContent>
// //                 </Card>
// //             </div>

// //             <div className="w-1/2 p-4">
// //                 <DisplayPanel displayData={displayData} />
// //             </div>
// //         </div>
// //     );
// // }


// import React, { useState, useRef, useEffect } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import {
//   X, Mail, Phone, MapPin, Calendar, Award, ExternalLink,
//   Send, Download, FileText, Globe, Github, Linkedin,
//   Twitter, Terminal, Cpu, Code, Loader2
// } from 'lucide-react';

// const samplePortfolioData = {
//   "name": "Barack Ouma",
//   "title": "Software Engineer | Backend | AWS Certified",
//   "profile_picture_url": "",
//   "bio": "Passionate full-stack developer with expertise in modern web technologies",
//   "about_me": "I'm a dedicated developer who loves creating efficient, scalable solutions and learning new technologies.",
//   "contact": {
//     "email": "oumaduro5827@gmail.com",
//     "phone": "+254 793 043014",
//     "twitter": "https://twitter.com/BarackOuma7",
//     "github": "https://github.com/IsoDevMate",
//     "linkedin": "https://www.linkedin.com/in/barack-ouma-b37089212/",
//     "location": "Nairobi County, Kenya",
//     "website": "https://barackoumasite.netlify.app/"
//   },
//   "experience": [
//     {
//       "id": 1,
//       "title": "FullStack Engineer",
//       "company": "Redolesence Ltd",
//       "dates": "Nov 2024 - Feb 2025",
//       "location": "Nairobi, Kenya",
//       "description_points": [
//         "Collaborated with the IoT hardware team to design communication schemas and backend interfaces",
//         "Reduced Firestore database reads by optimizing backend polling logic and caching strategies",
//         "Integrated real-time Push Notifications and WebSocket signals between IoT devices and backend"
//       ],
//       "tags": ["IoT", "Firebase", "WebSockets", "Node.js"]
//     },
//     {
//       "id": 2,
//       "title": "FullStack Engineer",
//       "company": "Yafreeka Entertainment Ltd",
//       "dates": "Oct 2023 - Feb 2024",
//       "location": "Nairobi, Kenya",
//       "description_points": [
//         "Migrated backend services to Firebase, improving video load speed by 30%",
//         "Developed Cloud Functions to automate internal workflows and payment processes",
//         "Enhanced application performance through strategic backend optimization"
//       ],
//       "tags": ["Firebase", "Cloud Functions", "Performance Optimization"]
//     }
//   ],
//   "projects": [
//     {
//       "id": 1,
//       "name": "Groreels.com UGC Platform",
//       "description": "AI-powered platform for generating and scheduling UGC content for social media",
//       "website_link": "",
//       "details_link": "",
//       "tags": ["AI", "Content Generation", "Automation"]
//     },
//     {
//       "id": 2,
//       "name": "AVIATOR Game Client",
//       "description": "Real-time online betting game built with React, TypeScript, and Redux",
//       "website_link": "",
//       "details_link": "https://github.com/IsoDevMate/AVIATOR",
//       "tags": ["TypeScript", "React", "Game Development"]
//     }
//   ],
//   "skills": [
//     {
//       "category": "Languages",
//       "values": ["Java", "TypeScript", "Python", "Node.js"]
//     },
//     {
//       "category": "Frontend",
//       "values": ["React.js", "Redux", "TailwindCSS"]
//     },
//     {
//       "category": "Backend",
//       "values": ["Nest.js", "REST APIs", "GraphQL", "Docker"]
//     },
//     {
//       "category": "Databases",
//       "values": ["MongoDB", "PostgreSQL", "Firestore", "AWS RDS"]
//     }
//   ],
//   "education": {
//     "degree": "BSc. Information Technology",
//     "university": "Kenyatta University",
//     "dates": "2021 - 2025",
//     "description": "Specialized in web technologies and software development",
//     "tags": ["Computer Science", "Programming"]
//   },
//   "certifications": [
//     {
//       "id": 1,
//       "name": "AWS Cloud Practitioner",
//       "issuer": "Amazon Web Services",
//       "date": "Aug 2024",
//       "skills": ["AWS", "Cloud Computing"]
//     },
//     {
//       "id": 2,
//       "name": "Apollo GraphQL Associate",
//       "issuer": "Apollo GraphQL",
//       "date": "Feb 2025",
//       "skills": ["GraphQL", "API Development"]
//     }
//   ]
// };

// const ContactForm = ({ contactData }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     alert('Message sent! (This is a demo)');
//     setFormData({ name: '', email: '', subject: '', message: '' });
//   };

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   return (
//     <Card className="bg-gray-800 border-gray-700 mt-4">
//       <CardHeader>
//         <CardTitle className="text-white flex items-center gap-2 text-base">
//           <Mail className="w-4 h-4" />
//           Send Message
//         </CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSubmit} className="space-y-3">
//           <div className="grid grid-cols-2 gap-3">
//             <Input
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm"
//               required
//             />
//             <Input
//               name="email"
//               type="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm"
//               required
//             />
//           </div>
//           <Input
//             name="subject"
//             placeholder="Subject"
//             value={formData.subject}
//             onChange={handleChange}
//             className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm"
//             required
//           />
//           <Textarea
//             name="message"
//             placeholder="Message..."
//             rows={3}
//             value={formData.message}
//             onChange={handleChange}
//             className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm"
//             required
//           />
//           <Button type="submit" size="sm" className="w-full bg-amber-500 hover:bg-amber-600 text-black">
//             <Send className="w-3 h-3 mr-1" />
//             Send
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };

// const UserPrompt = ({ mode }) => (
//   <div className="flex items-center">
//     <span className="text-emerald-400 font-mono">barack.ouma</span>
//     <span className="text-gray-400 font-mono">@</span>
//     <span className="text-blue-400 font-mono">portfolio</span>
//     <span className="text-white font-mono">:</span>
//     <span className="text-purple-400 font-mono">~</span>
//     <span className="text-white font-mono">$</span>
//     {mode === 'graphql' && (
//       <span className="ml-2 text-pink-400 font-mono">(graphql)</span>
//     )}
//   </div>
// );

// const Cursor = () => <span className="bg-lime-400 w-2 h-5 inline-block animate-pulse ml-1" />;

// const ModeSelector = ({ currentMode, setMode }) => (
//   <div className="absolute top-4 left-4 z-10 flex gap-2">
//     <Button
//       onClick={() => setMode('simple')}
//       variant={currentMode === 'simple' ? 'default' : 'outline'}
//       className="text-xs h-8"
//       size="sm"
//     >
//       <Terminal className="w-3 h-3 mr-1" />
//       Simple
//     </Button>
//     <Button
//       onClick={() => setMode('technical')}
//       variant={currentMode === 'technical' ? 'default' : 'outline'}
//       className="text-xs h-8"
//       size="sm"
//     >
//       <Cpu className="w-3 h-3 mr-1" />
//       Technical
//     </Button>
//     <Button
//       onClick={() => setMode('graphql')}
//       variant={currentMode === 'graphql' ? 'default' : 'outline'}
//       className="text-xs h-8"
//       size="sm"
//     >
//       <Code className="w-3 h-3 mr-1" />
//       GraphQL
//     </Button>
//   </div>
// );

// const TypewriterOutput = ({ text }) => {
//   const [displayText, setDisplayText] = useState('');
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (index < text.length) {
//       const timeout = setTimeout(() => {
//         setDisplayText(prev => prev + text.charAt(index));
//         setIndex(prev => prev + 1);
//       }, 20);
//       return () => clearTimeout(timeout);
//     }
//   }, [index, text]);

//   return <pre className="whitespace-pre-wrap text-gray-300 font-mono text-sm leading-relaxed">{displayText}</pre>;
// };

// const createCommandProcessor = (data, setDisplayData, switchToGui, mode) => {
//   if (!data) return async () => "Portfolio data not loaded.";

//   // Helper method to generate GraphQL responses
//   const getGraphQLResponse = (entity, operation, portfolioData) => {
//     const responses = {
//       experience: {
//         id: "exp-1",
//         title: portfolioData.experience?.[0]?.title || "Software Engineer",
//         company: portfolioData.experience?.[0]?.company || "Tech Company",
//         dates: portfolioData.experience?.[0]?.dates || "2022-Present"
//       },
//       projects: {
//         id: "proj-1",
// name: portfolioData.projects?.[0]?.name || "Project X",
//         description: portfolioData.projects?.[0]?.description || "A cool project"
//       },
//       skills: {
//         categories: portfolioData.skills?.map(skill => ({
//           name: skill.category,
//           items: skill.values
//         })) || []
//       },
//       about: {
//         text: portfolioData.about_me || "No about information available",
//         lastUpdated: new Date().toISOString()
//       }
//     };

//     return {
//       data: {
//         [`${operation}${entity}`]: responses[entity] || {
//           status: "SUCCESS",
//           message: `${operation} operation completed`,
//           timestamp: new Date().toISOString()
//         }
//       },
//       extensions: {
//         subgraphs: {
//           [entity]: {
//             responseTime: `${Math.floor(Math.random() * 50) + 20}ms`,
//             version: "1.2.0"
//           }
//         },
//         federation: {
//           serviceName: `${entity}-service`,
//           queryPlan: `{
//             Sequence {
//               Fetch(service: "${entity}-service") {
//                 {
//                   ${entity} {
//                     id
//                     ${Object.keys(responses[entity] || {}).join('\n')}
//                   }
//                 }
//               }
//             }
//           }`
//         }
//       }
//     };
//   };

//   const process = async (command) => {
//     const [cmd, ...args] = command.toLowerCase().trim().split(' ');
//     const id = args[0] ? parseInt(args[0]) : null;
//     const flag = args.find(arg => arg.startsWith('-'));

//     // Handle mode switching commands first
//     if (cmd === 'mode') {
//       const newMode = args[0];
//       if (['simple', 'technical', 'graphql'].includes(newMode)) {
//         return `Switching to ${newMode} mode... (Use the buttons above to switch modes)`;
//       }
//       return `Available modes: simple, technical, graphql`;
//     }

//     // GraphQL mode specific commands
//     if (mode === 'graphql') {
//       switch (cmd) {
//         case 'query':
//         case 'mutation':
//           const operation = cmd === 'query' ? 'get' : 'update';
//           const entity = args[0] || 'Portfolio';

//           // Simulate GraphQL federated gateway response with subgraph resolution
//           setDisplayData({
//             type: 'graphql-response',
//             content: {
//               operation: cmd.toUpperCase(),
//               entity,
//               steps: [
//                 'Receiving query from client',
//                 'Parsing GraphQL query',
//                 'Validating query against schema',
//                 'Identifying required subgraphs',
//                 `Querying ${entity} subgraph`,
//                 'Normalizing responses',
//                 'Merging data from subgraphs',
//                 'Returning federated response'
//               ],
//               data: getGraphQLResponse(entity, operation, data)
//             }
//           });

//           return `🔍 Querying federated gateway for ${entity} data...
// 📡 Contacting subgraphs...`;

//         case 'schema':
//           return `type Portfolio {
//   id: ID!
//   name: String!
//   title: String!
//   bio: String
//   about: String
//   contact: ContactInfo
//   experience: [Experience]!
//   projects: [Project]!
//   skills: [SkillCategory]!
//   education: Education
//   certifications: [Certification]!
// }

// type ContactInfo {
//   email: String!
//   phone: String
//   location: String!
//   github: String!
//   linkedin: String!
//   website: String
// }`;

//         case 'explorer':
//           window.open('https://studio.apollographql.com/sandbox/explorer', '_blank');
//           return `Opening Apollo Sandbox Explorer...`;

//         case 'help':
//           return `GraphQL Portfolio Gateway Commands:

// 🔹 Query Operations:
// - query experience   - Fetch work experience data
// - query projects     - Get project information
// - query skills       - Retrieve technical skills
// - query about        - Get about me information

// 🔹 Schema Operations:
// - schema             - Show complete GraphQL schema
// - explorer           - Open Apollo Sandbox Explorer

// 🔹 System:
// - mode <type>        - Switch terminal mode
// - clear              - Clear terminal
// - exit               - Exit terminal

// Example:
//   query experience
//   query projects
//   schema`;

//         default:
//           return `Command not found in GraphQL mode. Type 'help' for available commands.`;
//       }
//     }

//     // Simple mode commands (less technical)
//     if (mode === 'simple') {
//       switch (cmd) {
//         case 'help':
//           return `Available commands:
// - about       - Learn about me
// - skills      - View my technical skills
// - work        - See my work experience
// - projects    - View my projects
// - education   - See my education background
// - contact     - How to contact me
// - mode <type> - Switch terminal mode (simple/technical/graphql)
// - clear       - Clear the screen
// - exit        - Exit terminal`;

//         case 'about':
//           setDisplayData({ type: 'about', content: { text: data.about_me } });
//           return 'Showing about me section';

//         case 'skills':
//           setDisplayData({ type: 'skills', content: data.skills });
//           return 'Displaying technical skills';

//         case 'work':
//         case 'experience':
//           if (id) {
//             const item = data.experience?.find(e => e.id === id);
//             if (item) {
//               setDisplayData({ type: 'experience-detail', content: item });
//               return `Showing details for: ${item.title}`;
//             }
//             return `Experience not found`;
//           }
//           setDisplayData({ type: 'experience-list', content: data.experience });
//           return 'Listing work experience';

//         case 'projects':
//           if (id) {
//             const item = data.projects?.find(p => p.id === id);
//             if (item) {
//               setDisplayData({ type: 'project-detail', content: item });
//               return `Showing project: ${item.name}`;
//             }
//             return `Project not found`;
//           }
//           setDisplayData({ type: 'projects-list', content: data.projects });
//           return 'Listing projects';

//         case 'education':
//           setDisplayData({ type: 'education', content: data.education });
//           return 'Showing education background';

//         case 'contact':
//           setDisplayData({ type: 'contact', content: data.contact });
//           return 'Showing contact information';

//         case 'clear':
//           return 'clear'; // Handled by parent component

//         case 'exit':
//           switchToGui();
//           return 'Exiting terminal...';

//         default:
//           return `Command not found. Type 'help' for available commands.`;
//       }
//     }

//     // Technical mode commands (full Linux-like experience)
//     switch (cmd) {
//       case 'help':
//       case 'man':
//         setDisplayData({
//           type: 'help',
//           content: {
//             title: 'Available Commands',
//             commands: [
//               { cmd: 'whoami', desc: 'Display current user information' },
//               { cmd: 'ls [-l]', desc: 'List directory contents' },
//               { cmd: 'cat <file>', desc: 'Display file contents' },
//               { cmd: 'find <query>', desc: 'Search portfolio content' },
//               { cmd: 'ps', desc: 'Show running processes (projects)' },
//               { cmd: 'top', desc: 'Display top skills' },
//               { cmd: 'history', desc: 'Show command history' },
//               { cmd: 'ssh git@github.com', desc: 'Connect to GitHub' },
//               { cmd: 'curl -X GET /api/<endpoint>', desc: 'API-style data fetching' },
//               { cmd: 'mode <type>', desc: 'Switch terminal mode' },
//               { cmd: 'clear', desc: 'Clear terminal screen' },
//               { cmd: 'exit', desc: 'Exit terminal mode' }
//             ]
//           }
//         });
//         return `PORTFOLIO TERMINAL MANUAL

// Type 'man <command>' for detailed help on specific commands.`;

//       case 'whoami':
//         setDisplayData({
//           type: 'profile',
//           content: {
//             name: data.name,
//             title: data.title,
//             bio: data.bio
//           }
//         });
//         return data.name.toLowerCase().replace(' ', '.');

//       case 'ls':
//         if (flag === '-l') {
//           setDisplayData({ type: 'ls-detailed', content: data });
//           return `total 8
// drwxr-xr-x 2 barack developers 4096 Aug  3 10:30 experience/
// drwxr-xr-x 2 barack developers 4096 Aug  3 10:30 projects/
// -rw-r--r-- 1 barack developers 1024 Aug  3 10:30 about.txt
// -rw-r--r-- 1 barack developers 2048 Aug  3 10:30 contact.info`;
//         }
//         setDisplayData({ type: 'ls-simple', content: data });
//         return `about.txt    contact.info
// experience/  projects/`;

//       case 'cat':
//         const section = args[0];
//         if (section === 'skills') {
//           setDisplayData({ type: 'skills', content: data.skills });
//           return data.skills.map(s => `[${s.category}]\n${s.values.join(', ')}\n`).join('\n');
//         } else if (section === 'about') {
//           setDisplayData({ type: 'about', content: { text: data.about_me } });
//           return data.about_me;
//         } else if (section === 'contact') {
//           setDisplayData({ type: 'contact', content: data.contact });
//           return `Email: ${data.contact.email}\nGitHub: ${data.contact.github}`;
//         }
//         return `cat: ${section}: No such file or directory`;

//       case 'find':
//         const query = args.join(' ');
//         if (!query) return `find: missing argument`;
//         const results = [];
//         data.experience?.forEach(exp => {
//           if (exp.title.toLowerCase().includes(query) || exp.company.toLowerCase().includes(query)) {
//             results.push(`./experience/${exp.id}_${exp.company.toLowerCase()}`);
//           }
//         });
//         return results.length > 0 ? results.join('\n') : `find: no matches for '${query}'`;

//       case 'ps':
//         setDisplayData({ type: 'projects-list', content: data.projects });
//         return `  PID TTY      STAT   TIME COMMAND
// ${data.projects?.map((p, i) => `${1000 + i}  pts/0    S+     0:00 ${p.name.toLowerCase()}`).join('\n')}`;

//       case 'top':
//         setDisplayData({ type: 'skills', content: data.skills });
//         return `top - portfolio overview
// Tasks: ${data.skills?.reduce((acc, s) => acc + s.values.length, 0)} total skills
// %Cpu(s): 95.2 us (actively developing)

//   PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND
// ${data.skills?.[0]?.values.slice(0, 5).map((skill, i) => `${1000 + i} barack    20   0   ${100 + i*10}m   ${20 + i*5}m   ${10 + i}m S  ${95 - i*5}.${i}   ${5 + i}.0   ${i}:${30 + i} ${skill.toLowerCase()}`).join('\n')}`;

//       case 'history':
//         return `    1  whoami
//     2  ls -l
//     3  cat skills
//     4  find react
//     5  ps
//     6  top
//     7  history`;

//       case 'ssh':
//         if (args[0] === 'git@github.com') {
//           window.open(data.contact.github, '_blank');
//           return `Connecting to GitHub...\nOpening profile in browser`;
//         }
//         return `ssh: Could not resolve hostname ${args[0]}`;

//       case 'curl':
//         if (args[0] === '-X' && args[1] === 'GET') {
//           const endpoint = args[2];
//           if (endpoint === '/api/experience') {
//             setDisplayData({ type: 'experience-list', content: data.experience });
//             return `HTTP/1.1 200 OK\nContent-Type: application/json\n\n${JSON.stringify(data.experience.slice(0, 2), null, 2)}`;
//           }
//         }
//         return `curl: try 'curl -X GET /api/experience'`;

//       case 'experience':
//         if (id) {
//           const item = data.experience?.find(e => e.id === id);
//           if (item) {
//             setDisplayData({ type: 'experience-detail', content: item });
//             return `${item.title} @ ${item.company}`;
//           }
//           return `experience: ${id}: not found`;
//         }
//         setDisplayData({ type: 'experience-list', content: data.experience });
//         return data.experience?.map(e => `${e.id}. ${e.title} @ ${e.company}`).join('\n');

//       case 'projects':
//         if (id) {
//           const item = data.projects?.find(p => p.id === id);
//           if (item) {
//             setDisplayData({ type: 'project-detail', content: item });
//             return `${item.name}`;
//           }
//           return `projects: ${id}: not found`;
//         }
//         setDisplayData({ type: 'projects-list', content: data.projects });
//         return data.projects?.map(p => `${p.id}. ${p.name}`).join('\n');

//       case 'education':
//         setDisplayData({ type: 'education', content: data.education });
//         return `${data.education.degree} - ${data.education.university}`;

//       case 'contact':
//         setDisplayData({ type: 'contact', content: data.contact });
//         return `Contact information shown`;

//       case 'about':
//         setDisplayData({ type: 'about', content: { text: data.about_me } });
//         return 'About me section shown';

//       case 'clear':
//         return 'clear';

//       case 'exit':
//         switchToGui();
//         return 'Exiting terminal...';

//       default:
//         return `${cmd}: command not found\nType 'help' for available commands.`;
//     }
//   };
//   return process;
// };

// const DisplayPanel = ({ displayData, mode }) => {
//   if (!displayData) {
//     return (
//       <Card className="bg-gray-900 border-gray-700 h-full">
//         <CardContent className="p-6 flex items-center justify-center h-full">
//           <div className="text-center text-gray-400">
//             <div className="text-4xl mb-3">💻</div>
//             <h3 className="text-lg font-medium mb-2 text-gray-200">
//               {mode === 'simple' ? 'Interactive Portfolio' :
//                mode === 'technical' ? 'Terminal Interface' : 'GraphQL Gateway'}
//             </h3>
//             <p className="text-sm">
//               {mode === 'simple' ? 'Type commands to explore' :
//                mode === 'technical' ? 'Execute commands to navigate' : 'Query the portfolio data'}
//             </p>
//             <p className="text-xs mt-2 text-gray-500">
//               {mode === 'simple' ? 'Try: help, about, skills' :
//                mode === 'technical' ? 'Try: whoami, ls -l, cat skills' : 'Try: query experience, schema'}
//             </p>
//           </div>
//         </CardContent>
//       </Card>
//     );
//   }

//   switch (displayData.type) {
//     case 'help':
//       return (
//         <div className="space-y-4">
//           <h3 className="text-lg font-bold text-white font-mono">{displayData.content.title}</h3>
//           <div className="grid grid-cols-1 gap-2 max-h-96 overflow-y-auto">
//             {displayData.content.commands.map((cmd, index) => (
//               <div key={index} className="border-l-2 border-green-400 pl-3 py-1 bg-gray-800 rounded-r">
//                 <code className="text-green-400 font-mono text-sm font-bold">{cmd.cmd}</code>
//                 <p className="text-gray-300 text-xs mt-1">{cmd.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       );

//     case 'profile':
//       return (
//         <div className="space-y-4">
//           <div className="text-center">
//             <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-black">
//               {displayData.content.name.split(' ').map(n => n[0]).join('')}
//             </div>
//             <h3 className="text-xl font-bold text-white font-mono">{displayData.content.name}</h3>
//             <p className="text-green-400 text-sm font-mono">{displayData.content.title}</p>
//           </div>
//           <p className="text-gray-300 text-sm text-center leading-relaxed">{displayData.content.bio}</p>
//         </div>
//       );

//     case 'graphql-response':
//       return (
//         <div className="space-y-4">
//           <h3 className="text-lg font-bold text-white font-mono">
//             GraphQL {displayData.content.operation} - {displayData.content.entity}
//           </h3>

//           <div className="bg-gray-800 p-4 rounded border border-purple-400">
//             <div className="text-purple-300 font-mono text-sm mb-4">
//               Federation Steps:
//             </div>

//             <div className="space-y-2 mb-4">
//               {displayData.content.steps.map((step, index) => (
//                 <div key={index} className="flex items-center gap-2">
//                   <div className={`w-4 h-4 rounded-full flex items-center justify-center
//                     ${index < 4 ? 'bg-green-500' : 'bg-blue-500'}`}>
//                     {index < 4 ? '✓' : index === 4 ? '1' : index === 5 ? '2' : '3'}
//                   </div>
//                   <span className="text-gray-300 text-sm font-mono">{step}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="text-green-300 font-mono text-sm mb-2">
//               Subgraph Response:
//             </div>
//             <pre className="p-3 bg-black rounded text-green-200 font-mono text-xs overflow-x-auto">
//               {JSON.stringify(displayData.content.data.data, null, 2)}
//             </pre>

//             <div className="mt-4 text-blue-300 font-mono text-sm mb-2">
//               Federation Metadata:
//             </div>
//             <pre className="p-3 bg-black rounded text-blue-200 font-mono text-xs overflow-x-auto">
//               {JSON.stringify(displayData.content.data.extensions, null, 2)}
//             </pre>
//           </div>
//         </div>
//       );

//     case 'skills':
//       return (
//         <div className="space-y-4">
//           <h3 className="text-lg font-bold text-white font-mono">Technical Skills</h3>
//           {displayData.content.map((skill, index) => (
//             <div key={index} className="space-y-2">
//               <h4 className="text-green-400 font-bold text-sm font-mono">{skill.category}</h4>
//               <div className="flex flex-wrap gap-2">
//                 {skill.values.map((value, i) => (
//                   <Badge key={i} variant="secondary" className="bg-gray-800 text-gray-300 text-xs border border-gray-600 hover:border-green-400 transition-colors font-mono">
//                     {value}
//                   </Badge>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       );

//     case 'ls-detailed':
//     case 'ls-simple':
//       return (
//         <div className="space-y-4">
//           <h3 className="text-lg font-bold text-white font-mono">Directory Contents</h3>
//           <div className="space-y-2 font-mono text-sm">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="bg-gray-800 p-3 rounded border border-gray-700">
//                 <h4 className="text-blue-400 font-bold mb-2">📁 experience/</h4>
//                 <p className="text-gray-400 text-xs">{displayData.content.experience?.length || 0} positions</p>
//               </div>
//               <div className="bg-gray-800 p-3 rounded border border-gray-700">
//                 <h4 className="text-blue-400 font-bold mb-2">📁 projects/</h4>
//                 <p className="text-gray-400 text-xs">{displayData.content.projects?.length || 0} repositories</p>
//               </div>
//               <div className="bg-gray-800 p-3 rounded border border-gray-700">
//                 <h4 className="text-green-400 font-bold mb-2">📄 about.txt</h4>
//                 <p className="text-gray-400 text-xs">About me</p>
//               </div>
//               <div className="bg-gray-800 p-3 rounded border border-gray-700">
//                 <h4 className="text-green-400 font-bold mb-2">📄 contact.info</h4>
//                 <p className="text-gray-400 text-xs">Contact details</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       );

//     case 'experience-list':
//       return (
//         <div className="space-y-4">
//           <h3 className="text-lg font-bold text-white font-mono">Work Experience</h3>
//           <div className="space-y-3">
//             {displayData.content.map((exp) => (
//               <div key={exp.id} className="border border-gray-700 rounded-lg p-4 hover:border-green-400 transition-colors bg-gray-800">
//                 <div className="flex items-start justify-between mb-2">
//                   <div>
//                     <h4 className="font-bold text-white font-mono">{exp.title}</h4>
//                     <p className="text-green-400 text-sm font-mono">{exp.company}</p>
//                   </div>
//                   <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs font-mono">
//                     ID: {exp.id}
//                   </Badge>
//                 </div>
//                 <p className="text-gray-400 text-xs font-mono mb-3 flex items-center gap-1">
//                   <Calendar className="w-3 h-3" />
//                   {exp.dates}
//                 </p>
//                 <div className="flex flex-wrap gap-1">
//                   {exp.tags.slice(0, 4).map((tag, i) => (
//                     <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs font-mono">
//                       {tag}
//                     </Badge>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       );

//     case 'experience-detail':
//       return (
//         <div className="space-y-4">
//           <div>
//             <h3 className="text-lg font-bold text-white font-mono">{displayData.content.title}</h3>
//             <p className="text-green-400 text-sm font-mono">{displayData.content.company}</p>
//             <p className="text-gray-400 text-xs flex items-center gap-1 mt-1 font-mono">
//               <Calendar className="w-3 h-3" />
//               {displayData.content.dates}
//             </p>
//           </div>
//           <div>
//             <h4 className="text-white font-bold mb-3 text-sm font-mono">Responsibilities:</h4>
//             <ul className="space-y-2">
//               {displayData.content.description_points.map((point, i) => (
//                 <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
//                   <span className="text-green-400 mt-1 font-mono">▸</span>
//                   <span className="leading-relaxed">{point}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             {displayData.content.tags.map((tag, i) => (
//               <Badge key={i} variant="secondary" className="bg-gray-800 text-gray-300 text-xs border border-gray-600 font-mono">
//                 {tag}
//               </Badge>
//             ))}
//           </div>
//         </div>
//       );

//     case 'projects-list':
//       return (
//         <div className="space-y-4">
//           <h3 className="text-lg font-bold text-white font-mono">Projects</h3>
//           <div className="space-y-3">
//             {displayData.content.map((project) => (
//               <div key={project.id} className="border border-gray-700 rounded-lg p-4 hover:border-green-400 transition-colors bg-gray-800">
//                 <div className="flex items-start justify-between mb-2">
//                   <h4 className="font-bold text-white font-mono">{project.name}</h4>
//                   <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs font-mono">
//                     PID: {project.id}
//                   </Badge>
//                 </div>
//                 <p className="text-gray-300 text-sm mb-3 leading-relaxed">{project.description}</p>
//                 <div className="flex flex-wrap gap-1 mb-3">
//                   {project.tags.slice(0, 4).map((tag, i) => (
//                     <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs font-mono">
//                       {tag}
//                     </Badge>
//                   ))}
//                 </div>
//                 {project.details_link && (
//                   <a href={project.details_link} className="text-green-400 hover:underline flex items-center gap-1 text-xs font-mono">
//                     <Github className="w-3 h-3" />
//                     Source Code
//                   </a>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       );

//     case 'project-detail':
//       return (
//         <div className="space-y-4">
//           <h3 className="text-lg font-bold text-white font-mono">{displayData.content.name}</h3>
//           <p className="text-gray-300 text-sm leading-relaxed">{displayData.content.description}</p>
//           <div className="flex flex-wrap gap-2">
//             {displayData.content.tags.map((tag, i) => (
//               <Badge key={i} variant="secondary" className="bg-gray-800 text-gray-300 text-xs border border-gray-600 font-mono">
//                 {tag}
//               </Badge>
//             ))}
//           </div>
//           {displayData.content.details_link && (
//             <a href={displayData.content.details_link} className="flex items-center gap-2 text-green-400 hover:underline font-mono text-sm">
//               <Github className="w-4 h-4" />
//               View Source Code
//             </a>
//           )}
//         </div>
//       );

//     case 'education':
//       return (
//         <div className="space-y-4">
//           <h3 className="text-lg font-bold text-white font-mono">Education</h3>
//           <div className="border border-gray-700 rounded-lg p-4 bg-gray-800">
//             <h4 className="font-bold text-white font-mono">{displayData.content.degree}</h4>
//             <p className="text-green-400 text-sm font-mono">{displayData.content.university}</p>
//             <p className="text-gray-400 text-xs flex items-center gap-1 mt-1 font-mono">
//               <Calendar className="w-3 h-3" />
//               {displayData.content.dates}
//             </p>
//             <p className="text-gray-300 text-sm mt-3 leading-relaxed">{displayData.content.description}</p>
//             <div className="flex flex-wrap gap-2 mt-3">
//               {displayData.content.tags.map((tag, i) => (
//                 <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs font-mono">
//                   {tag}
//                 </Badge>
//               ))}
//             </div>
//           </div>
//         </div>
//       );

//     case 'contact':
//       return (
//         <div className="space-y-4">
//           <h3 className="text-lg font-bold text-white font-mono">Contact</h3>
//           <div className="space-y-3">
//             <div className="flex items-center gap-3 p-3 bg-gray-800 rounded border border-gray-700">
//               <Mail className="w-5 h-5 text-green-400" />
//               <span className="text-gray-300 font-mono">{displayData.content.email}</span>
//             </div>
//             <div className="flex items-center gap-3 p-3 bg-gray-800 rounded border border-gray-700">
//               <Phone className="w-5 h-5 text-green-400" />
//               <span className="text-gray-300 font-mono">{displayData.content.phone}</span>
//             </div>
//             <div className="flex items-center gap-3 p-3 bg-gray-800 rounded border border-gray-700">
//               <MapPin className="w-5 h-5 text-green-400" />
//               <span className="text-gray-300 font-mono">{displayData.content.location}</span>
//             </div>
//             <div className="grid grid-cols-1 gap-2">
//               <a href={displayData.content.github} className="flex items-center gap-3 p-3 bg-gray-800 rounded border border-gray-700 hover:border-green-400 transition-colors">
//                 <Github className="w-5 h-5 text-green-400" />
//                 <span className="text-gray-300 font-mono">GitHub</span>
//               </a>
//               <a href={displayData.content.linkedin} className="flex items-center gap-3 p-3 bg-gray-800 rounded border border-gray-700 hover:border-green-400 transition-colors">
//                 <Linkedin className="w-5 h-5 text-green-400" />
//                 <span className="text-gray-300 font-mono">LinkedIn</span>
//               </a>
//               {displayData.content.website && (
//                 <a href={displayData.content.website} className="flex items-center gap-3 p-3 bg-gray-800 rounded border border-gray-700 hover:border-green-400 transition-colors">
//                   <Globe className="w-5 h-5 text-green-400" />
//                   <span className="text-gray-300 font-mono">Website</span>
//                 </a>
//               )}
//             </div>
//           </div>
//           <ContactForm contactData={displayData.content} />
//         </div>
//       );

//     case 'about':
//       return (
//         <div className="space-y-4">
//           <h3 className="text-lg font-bold text-white font-mono">About Me</h3>
//           <div className="bg-gray-800 p-4 rounded border border-gray-700">
//             <p className="text-gray-300 text-sm leading-relaxed">{displayData.content.text}</p>
//           </div>
//         </div>
//       );

//     // GraphQL response case handled above

//     default:
//       return (
//         <div className="text-center text-gray-400">
//           <p className="text-sm font-mono">Unknown command output</p>
//         </div>
//       );
//   }
// };

// export default function EnhancedTerminal({ portfolioData = samplePortfolioData, switchToGui }) {
//   const [mode, setMode] = useState('simple');
//   const [history, setHistory] = useState([
//     {
//       type: 'output',
//       text: mode === 'simple' ?
//         "Welcome to Barack's Portfolio!\nType 'help' for available commands or 'exit' to quit." :
//         mode === 'technical' ?
//         "Barack's Portfolio Terminal v2.1.0\nType 'help' for commands, 'gui' to switch modes." :
//         "GraphQL Portfolio Gateway\nType 'help' for GraphQL commands or use the explorer"
//     }
//   ]);
//   const [input, setInput] = useState('');
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [displayData, setDisplayData] = useState(null);
//   const [commandHistory, setCommandHistory] = useState([]);
//   const [historyIndex, setHistoryIndex] = useState(-1);
//   const terminalEndRef = useRef(null);
//   const inputRef = useRef(null);

//   const processCommand = createCommandProcessor(
//     portfolioData,
//     setDisplayData,
//     switchToGui || (() => console.log('Switching to GUI mode')),
//     mode
//   );

//   useEffect(() => {
//     terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [history]);

//   useEffect(() => {
//     const focusInput = () => inputRef.current?.focus();
//     const handleClick = (e) => {
//       if (e.target.closest('.terminal-panel')) {
//         focusInput();
//       }
//     };
//     window.addEventListener('click', handleClick);
//     focusInput();
//     return () => window.removeEventListener('click', handleClick);
//   }, []);

//   useEffect(() => {
//     // Update welcome message when mode changes
//     setHistory([{
//       type: 'output',
//       text: mode === 'simple' ?
//         "Welcome to Barack's Portfolio!\nType 'help' for available commands or 'exit' to quit." :
//         mode === 'technical' ?
//         "Barack's Portfolio Terminal v2.1.0\nType 'help' for commands, 'gui' to switch modes." :
//         "GraphQL Portfolio Gateway\nType 'help' for GraphQL commands or use the explorer"
//     }]);
//     setDisplayData(null);
//   }, [mode]);

//   const handleKeyDown = async (e) => {
//     if (e.key === 'Enter' && !isProcessing) {
//       e.preventDefault();
//       const command = input.trim();
//       const newHistory = [...history, { type: 'input', text: command }];

//       if (!command) return;

//       setCommandHistory(prev => [...prev.slice(-19), command]);
//       setHistoryIndex(-1);

//       if (command.toLowerCase() === 'clear') {
//         setHistory([{
//           type: 'output',
//           text: mode === 'simple' ?
//             "Welcome to Barack's Portfolio!\nType 'help' for available commands or 'exit' to quit." :
//             mode === 'technical' ?
//             "Barack's Portfolio Terminal v2.1.0\nType 'help' for commands, 'gui' to switch modes." :
//             "GraphQL Portfolio Gateway\nType 'help' for GraphQL commands or use the explorer"
//         }]);
//         setInput('');
//         setDisplayData(null);
//         return;
//       }

//       setIsProcessing(true);
//       setHistory(newHistory);
//       setInput('');

//       setTimeout(async () => {
//         const output = await processCommand(command);
//         if (output) {
//           setHistory(prev => [...prev, { type: 'output', text: output, streaming: true }]);
//         }
//         setIsProcessing(false);
//       }, 100);

//     } else if (e.key === 'ArrowUp') {
//       e.preventDefault();
//       if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
//         const newIndex = historyIndex + 1;
//         setHistoryIndex(newIndex);
//         setInput(commandHistory[commandHistory.length - 1 - newIndex]);
//       }
//     } else if (e.key === 'ArrowDown') {
//       e.preventDefault();
//       if (historyIndex > 0) {
//         const newIndex = historyIndex - 1;
//         setHistoryIndex(newIndex);
//         setInput(commandHistory[commandHistory.length - 1 - newIndex]);
//       } else if (historyIndex === 0) {
//         setHistoryIndex(-1);
//         setInput('');
//       }
//     } else if (e.key === 'Tab') {
//       e.preventDefault();
//       const commands = mode === 'simple' ?
//         ['help', 'about', 'skills', 'work', 'projects', 'education', 'contact', 'exit'] :
//         mode === 'technical' ?
//         ['whoami', 'ls', 'cat', 'find', 'ps', 'top', 'history', 'ssh', 'curl', 'exit'] :
//         ['query', 'mutation', 'schema', 'explorer', 'help'];
//       const matches = commands.filter(cmd => cmd.startsWith(input.toLowerCase()));
//       if (matches.length === 1) {
//         setInput(matches[0]);
//       }
//     } else if (e.key === 'Escape') {
//       if (switchToGui) {
//         switchToGui();
//       }
//     }
//   };

//   const renderOutput = (item) => {
//     if (item.streaming) {
//       return <TypewriterOutput text={item.text} />;
//     }
//     return <pre className="whitespace-pre-wrap text-gray-300 font-mono text-sm leading-relaxed">{item.text}</pre>;
//   };

//   return (
//     <div className="h-screen bg-[#0a0a0a] flex relative">
//       <ModeSelector currentMode={mode} setMode={setMode} />

//       <Button
//         onClick={switchToGui || (() => console.log('Exit clicked'))}
//         className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white font-mono"
//         size="sm"
//       >
//         <X className="w-4 h-4 mr-1" />
//         Exit
//       </Button>

//       <div className="w-1/2 p-4 terminal-panel">
//         <Card className="bg-[#0a0a0a] border-gray-800 h-full">
//           <CardHeader className="pb-2 border-b border-gray-800">
//             <CardTitle className="text-green-400 font-mono text-sm flex items-center gap-2">
//               <span>●</span> barack@portfolio-terminal
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="p-4 h-full overflow-y-auto font-mono text-sm">
//             <div className="pb-20">
//               {history.map((item, index) => (
//                 <div key={index} className="mb-2">
//                   {item.type === 'input' ? (
//                     <div className="flex items-center gap-2">
//                       <UserPrompt mode={mode} />
//                       <span className="text-white font-mono">{item.text}</span>
//                     </div>
//                   ) : (
//                     <div className="ml-0">
//                       {renderOutput(item)}
//                     </div>
//                   )}
//                 </div>
//               ))}
//               {isProcessing && (
//                 <div className="flex items-center gap-2 text-gray-400">
//                   <span className="animate-spin">⠋</span>
//                   <span className="font-mono text-sm">Processing...</span>
//                 </div>
//               )}
//               <div className="flex items-center gap-2">
//                 <UserPrompt mode={mode} />
//                 <div className="flex-1 flex items-center">
//                   <input
//                     ref={inputRef}
//                     type="text"
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     onKeyDown={handleKeyDown}
//                     className="bg-transparent border-none outline-none text-white flex-1 font-mono"
//                     disabled={isProcessing}
//                     spellCheck="false"
//                     autoComplete="off"
//                     autoCapitalize="off"
//                   />
//                   {!isProcessing && <Cursor />}
//                 </div>
//               </div>
//             </div>
//             <div ref={terminalEndRef} />
//           </CardContent>
//         </Card>
//       </div>

//       <div className="w-1/2 p-4">
//         <DisplayPanel displayData={displayData} mode={mode} />
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  X, Mail, Phone, MapPin, Calendar, Award, ExternalLink,
  Send, Download, FileText, Globe, Github, Linkedin,
  Twitter, Terminal, Cpu, Code, Loader2
} from 'lucide-react';

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
      "name": "Groreels.com UGC Platform",
      "description": "AI-powered platform for generating and scheduling UGC content for social media",
      "website_link": "",
      "details_link": "",
      "tags": ["AI", "Content Generation", "Automation"]
    },
    {
      "id": 2,
      "name": "AVIATOR Game Client",
      "description": "Real-time online betting game built with React, TypeScript, and Redux",
      "website_link": "",
      "details_link": "https://github.com/IsoDevMate/AVIATOR",
      "tags": ["TypeScript", "React", "Game Development"]
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

const ContactForm = ({ contactData }) => {
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

const Cursor = () => <span className="bg-lime-400 w-2 h-5 inline-block animate-pulse ml-1" />;

const ModeSelector = ({ currentMode, setMode }) => (
  <div className="flex justify-center mb-4">
    <div className="flex gap-2 bg-gray-800 p-2 rounded-lg border border-gray-700">
      <Button
        onClick={() => setMode('simple')}
        variant={currentMode === 'simple' ? 'default' : 'outline'}
        className="text-xs h-8"
        size="sm"
      >
        <Terminal className="w-3 h-3 mr-1" />
        Simple
      </Button>
      <Button
        onClick={() => setMode('technical')}
        variant={currentMode === 'technical' ? 'default' : 'outline'}
        className="text-xs h-8"
        size="sm"
      >
        <Cpu className="w-3 h-3 mr-1" />
        Technical
      </Button>
      <Button
        onClick={() => setMode('graphql')}
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
      }, 20);
      return () => clearTimeout(timeout);
    }
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
  </div>
);

const createCommandProcessor = (data, setDisplayData, switchToGui, mode) => {
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
          case 'mutation':
            const entity = args[0] || 'Portfolio';
            let responseData = {};
            let responseTime = Math.floor(Math.random() * 30) + 20; // Random response time 20-50ms

            // Simulate different response times based on entity
            switch(entity.toLowerCase()) {
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
            const query = `query Get${entity.charAt(0).toUpperCase() + entity.slice(1)} {
  ${entity} {
    ${entity === 'experience' ? `
      id
      title
      company
      dates
      description_points
      tags
    ` : entity === 'projects' ? `
      id
      name
      description
      tags
      details_link
    ` : entity === 'skills' ? `
      category
      values
    ` : entity === 'about' ? `
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
                entity,
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
                  { cmd: 'schema', desc: 'Show complete GraphQL schema' },
                  { cmd: 'explorer', desc: 'Open Apollo Sandbox Explorer' },
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
                  { cmd: 'clear', desc: 'Clear the screen' },
                  { cmd: 'exit', desc: 'Exit terminal' }
                ]
              }
            });
            return 'Available commands listed on the right panel.';

          case 'neofetch':
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

          case 'projects':
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
                id: 4,
                name: 'Groreels.com UGC Automation Platform',
                description: 'Built an AI-powered platform enabling users to generate and schedule UGC videos, blog posts, and avatars for TikTok, Reels, and YouTube. Engineered key modules including avatar/video generators, content calendar, affiliate system, and auto-posting workflows with integrated analytics and payment handling. Inspired by tools like MakeUGC.ai and Creatify, Groreels helps creators and businesses automate campaigns end-to-end from script to scheduled post.',
                techStack: ['AI', 'Video Generation', 'Content Automation', 'React', 'Node.js'],
                website: 'https://groreels.com',
                date: 'July 2025 - Present'
              },
              {
                id: 5,
                name: 'ComfyBase',
                description: 'A comprehensive Smart event management platform designed to simplify event organization, enhance attendee engagement, and provide seamless event experiences. It integrates cutting-edge technology to offer identity verification, live streaming, interactive note-taking, media sharing, and an awards system to recognize well-put notes',
                techStack: ['Event Management', 'WebRTC', 'MERN Stack', 'Real-time'],
                website: 'https://final-year-project-swart-phi.vercel.app',
                github: 'https://github.com/username/comfybase'
              },
              {
                id: 1,
                name: 'AVIATOR',
                description: 'Aviator Game Client - A real-time online betting game built with React, TypeScript, and Redux. Players bet on a virtual airplane\'s flight duration, aiming to cash out before it flies away',
                techStack: ['TypeScript', 'React', 'Redux', 'Game Development', 'Distributed Systems', 'Backend', 'green-blue deployments'],
                website: 'https://aviator-game.example.com',
                github: 'https://github.com/username/aviator-game'
              },
              {
                id: 2,
                name: 'MPESA-DARAJA-WITH-TRPC',
                description: 'Seamlessly integrate M-Pesa payments into web applications with type-safe APIs and zero guesswork. From checkout to confirmation in seconds — because your customers deserve payments that just work',
                techStack: ['TypeScript', 'MPesa', 'tRPC', 'Payment Integration'],
                website: 'https://mpesa-trpc.example.com',
                github: 'https://github.com/username/mpesa-daraja-trpc'
              },
              {
                id: 3,
                name: 'Portfolio Terminal',
                description: 'Interactive terminal-style portfolio with GUI/CLI modes',
                techStack: ['React', 'Terminal', 'Animation', 'Portfolio', 'ssh'],
                website: 'https://portfolio-terminal.example.com',
                github: 'https://github.com/username/portfolio-terminal'
              },

            ];

            setDisplayData({ type: 'projects-list', content: featuredProjects });

            return 'Featured Projects\n' +
              '================\n\n' +
              featuredProjects.map(project => {
                const tags = project.techStack ?
                  project.techStack.map(tag => `\x1b[36m${tag}\x1b[0m`).join(' • ') : '';
                const dateInfo = project.date ? `\n\x1b[33m${project.date}\x1b[0m` : '';
                const websiteInfo = project.website ? `\n\x1b[34m${project.website}\x1b[0m` : '';

                return `\x1b[1m${project.name}\x1b[0m${dateInfo}
${project.description}
${tags}${websiteInfo}\n`;
              }).join('\n') +
              '\nUse \'projects <id>\' to view more details about a specific project.';

          case 'education':
            setDisplayData({ type: 'education', content: data.education });
            return `${data.education.degree}\n${data.education.university}\n${data.education.dates}`;

          case 'contact':
            setDisplayData({ type: 'contact', content: data.contact });
            return `Email: ${data.contact.email}\nLocation: ${data.contact.location}\nGitHub: ${data.contact.github}`;

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
        case 'man':
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

        case 'cat':
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

        case 'catit':
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

        case 'find':
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

        case 'grep':
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

        case 'which':
          const skill = args[0];
          if (!skill) return `which: missing argument`;

          const found = data.skills?.find(s =>
            s.values.some(v => v.toLowerCase().includes(skill))
          );
          return found ? `/usr/local/bin/${skill}` : `which: no ${skill} in PATH`;

        case 'wget':
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

        case 'ping':
          const service = args[0];
          if (service === 'github.com') {
            return `PING github.com (140.82.112.3): 56 data bytes
64 bytes from 140.82.112.3: icmp_seq=0 ttl=64 time=12.345 ms
64 bytes from 140.82.112.3: icmp_seq=1 ttl=64 time=11.234 ms
--- github.com ping statistics ---
2 packets transmitted, 2 packets received, 0.0% packet loss`;
          }
          return `ping: ${service}: Name or service not known`;

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

        case 'neofetch':
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

        case 'projects':
          if (id) {
            const item = data.projects?.find(p => p.id === id);
            if (item) {
              setDisplayData({ type: 'project-detail', content: item });
              return `${item.name}\n${item.description}\n${item.tags.join(', ')}`;
            }
            return `Project ID ${id} not found.`;
          }
          setDisplayData({ type: 'projects-list', content: data.projects });
          return data.projects?.map(p => `${p.id}. ${p.name}`).join('\n') || 'No projects data';

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
        <CardContent className="p-6 flex items-center justify-center h-full" ref={scrollRef}>
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
        <div className="space-y-4" ref={scrollRef}>
          <h3 className="text-lg font-bold text-white font-mono">{displayData.content.title}</h3>
          <div className="grid grid-cols-1 gap-2 max-h-96 overflow-y-auto">
            {displayData.content.commands.map((cmd, index) => (
              <div key={index} className="border-l-2 border-green-400 pl-3 py-1 bg-gray-800 rounded-r">
                <code className="text-green-400 font-mono text-sm font-bold">{cmd.cmd}</code>
                <p className="text-gray-300 text-xs mt-1">{cmd.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'neofetch':
      return (
        <div className="space-y-4" ref={scrollRef}>
          <h3 className="text-lg font-bold text-white font-mono">System Information</h3>
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
      );

    case 'tree':
      return (
        <div className="space-y-4" ref={scrollRef}>
          <h3 className="text-lg font-bold text-white font-mono">Portfolio Structure</h3>
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
      );

    case 'vim-resume':
      return (
        <div className="space-y-4" ref={scrollRef}>
          <h3 className="text-lg font-bold text-white font-mono">VIM - Resume Editor</h3>
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
      );

    case 'profile':
      return (
        <div className="space-y-4" ref={scrollRef}>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-black">
              {displayData.content.name.split(' ').map(n => n[0]).join('')}
            </div>
            <h3 className="text-xl font-bold text-white font-mono">{displayData.content.name}</h3>
            <p className="text-green-400 text-sm font-mono">{displayData.content.title}</p>
          </div>
          <p className="text-gray-300 text-sm text-center leading-relaxed">{displayData.content.bio}</p>
        </div>
      );

    case 'graphql-response':
      return (
        <div className="h-full flex flex-col" ref={scrollRef}>
          <div className="flex items-center justify-between border-b border-gray-700 pb-2 mb-4">
            <h3 className="text-lg font-bold text-white font-mono">
              GraphQL {displayData.content.operation} - {displayData.content.entity}
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
        <div className="space-y-4" ref={scrollRef}>
          <h3 className="text-lg font-bold text-white font-mono">Technical Skills</h3>
          {displayData.content.map((skill, index) => (
            <div key={index} className="space-y-2">
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
      );

    case 'ls-detailed':
    case 'ls-simple':
      return (
        <div className="space-y-4" ref={scrollRef}>
          <h3 className="text-lg font-bold text-white font-mono">Directory Contents</h3>
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
      );

    case 'experience-list':
      return (
        <div className="space-y-4" ref={scrollRef}>
          <h3 className="text-lg font-bold text-white font-mono">Work Experience</h3>
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
      );

    case 'experience-detail':
      return (
        <div className="space-y-4" ref={scrollRef}>
          <div>
            <h3 className="text-lg font-bold text-white font-mono">{displayData.content.title}</h3>
            <p className="text-green-400 text-sm font-mono">{displayData.content.company}</p>
            <p className="text-gray-400 text-xs flex items-center gap-1 mt-1 font-mono">
              <Calendar className="w-3 h-3" />
              {displayData.content.dates}
            </p>
          </div>
          <div>
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
          <div className="flex flex-wrap gap-2">
            {displayData.content.tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="bg-gray-800 text-gray-300 text-xs border border-gray-600 font-mono">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      );

    case 'projects-list':
      return (
        <div className="space-y-4" ref={scrollRef}>
          <h3 className="text-lg font-bold text-white font-mono">Projects</h3>
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
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs font-mono">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {project.details_link && (
                  <a href={project.details_link} className="text-green-400 hover:underline flex items-center gap-1 text-xs font-mono">
                    <Github className="w-3 h-3" />
                    Source Code
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      );

    case 'project-detail':
      return (
        <div className="space-y-4" ref={scrollRef}>
          <h3 className="text-lg font-bold text-white font-mono">{displayData.content.name}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{displayData.content.description}</p>
          <div className="flex flex-wrap gap-2">
            {displayData.content.tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="bg-gray-800 text-gray-300 text-xs border border-gray-600 font-mono">
                {tag}
              </Badge>
            ))}
          </div>
          {displayData.content.details_link && (
            <a href={displayData.content.details_link} className="flex items-center gap-2 text-green-400 hover:underline font-mono text-sm">
              <Github className="w-4 h-4" />
              View Source Code
            </a>
          )}
        </div>
      );

    case 'education':
      return (
        <div className="space-y-4" ref={scrollRef}>
          <h3 className="text-lg font-bold text-white font-mono">Education</h3>
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
      );

    case 'contact':
      return (
        <div className="space-y-4" ref={scrollRef}>
          <h3 className="text-lg font-bold text-white font-mono">Contact</h3>
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
      );

    case 'about':
      return (
        <div className="space-y-4" ref={scrollRef}>
          <h3 className="text-lg font-bold text-white font-mono">About Me</h3>
          <div className="bg-gray-800 p-4 rounded border border-gray-700">
            <p className="text-gray-300 text-sm leading-relaxed">{displayData.content.text}</p>
          </div>
        </div>
      );

    case 'certifications-list':
      return (
        <div className="space-y-4" ref={scrollRef}>
          <h3 className="text-lg font-bold text-white font-mono">Certifications</h3>
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
      );

    case 'cat-all':
      return (
        <div className="space-y-6" ref={scrollRef}>
          {displayData.content.map((content, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded border border-gray-700">
              <pre className="text-gray-300 font-mono text-sm whitespace-pre-wrap">{content}</pre>
            </div>
          ))}
        </div>
      );

    case 'find-results':
      return (
        <div className="space-y-4" ref={scrollRef}>
          <h3 className="text-lg font-bold text-white font-mono">
            Search Results for: <span className="text-green-400">"{displayData.content.term}"</span>
          </h3>
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
      );

    default:
      return (
        <div className="text-center text-gray-400" ref={scrollRef}>
          <p className="text-sm font-mono">Unknown command output</p>
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
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);
  const [displayScrollRef, setDisplayScrollRef] = useState(null);

  const processCommand = createCommandProcessor(
    portfolioData,
    setDisplayData,
    switchToGui || (() => console.log('Switching to GUI mode')),
    mode
  );

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (displayScrollRef) {
      displayScrollRef.scrollTop = displayScrollRef.scrollHeight;
    }
  }, [history, displayData]);

  useEffect(() => {
    const focusInput = () => inputRef.current?.focus();
    const handleClick = (e) => {
      if (e.target.closest('.terminal-panel')) {
        focusInput();
      }
    };
    window.addEventListener('click', handleClick);
    focusInput();
    return () => window.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    setHistory([
      {
        type: 'output',
        text: mode === 'simple' ?
          "Welcome! Type 'help' for available commands or 'exit' to quit." :
          mode === 'technical' ?
          "Terminal ready. Type 'help' for commands, 'gui' to switch modes." :
          "GraphQL Gateway active. Type 'help' for GraphQL commands."
      }
    ]);
    setDisplayData(null);
  }, [mode]);

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
        onClick={switchToGui || (() => console.log('Exit clicked'))}
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
                <span>●</span> barack@portfolio-terminal
                <span className="ml-auto text-xs text-gray-500">
                  {mode} mode
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 h-full overflow-y-auto font-mono text-sm">
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
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="bg-transparent border-none outline-none text-white flex-1 font-mono"
                      disabled={isProcessing}
                      spellCheck="false"
                      autoComplete="off"
                      autoCapitalize="off"
                    />
                    {!isProcessing && <Cursor />}
                  </div>
                </div>
              </div>
              <div ref={terminalEndRef} />
            </CardContent>
          </Card>
        </div>

        <div className="w-1/2 pl-2">
          <DisplayPanel displayData={displayData} mode={mode} scrollRef={setDisplayScrollRef} />
        </div>
      </div>
    </div>
  );
}
