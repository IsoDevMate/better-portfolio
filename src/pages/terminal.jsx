import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {  X,Mail, Phone, MapPin, Calendar, Award, ExternalLink
} from 'lucide-react';
import ContactForm from './contactform';

const UserPrompt = () => (
    <div className="flex items-center">
        <span className="text-emerald-300">barack.ouma~/dev/null@portfolio</span>
        <span className="text-white">:</span>
        <span className="text-blue-400">~$</span>
    </div>
);

const Cursor = () => <span className="bg-lime-300 w-2 h-5 inline-block animate-pulse ml-1" />;


const samplePortfolioData = {
    "name": "Barack Ouma",
    "title": "Software Engineer | Backend | AWS Certified",
    "profile_picture_url": "",
    "bio": "Passionate full-stack developer with expertise in modern web technologies",
    "about_me": "I'm a dedicated developer who loves creating efficient, scalable solutions and learning new technologies.",
    "contact": {
      "email": "barack.ouma@example.com",
      "twitter": "https://twitter.com/BarackOuma7",
      "github": "https://github.com/IsoDevMate",
      "linkedin": "https://www.linkedin.com/in/barack-ouma-b37089212/",
      "location": "Nairobi County, Kenya",
      "website": "https://barackoumasite.netlify.app/"
    },
    "experience": [

      {
        "id": 1,
        "title": "Technical Writer",
        "company": "Kodaschool",
        "dates": "Oct 2024 - Present · 10 mos",
        "location": "Nairobi County, Kenya · Remote",
        "description_points": [
          "Write technical blogs that contribute to educational and beginner-friendly content focused on programming",
          "Write clear, beginner-friendly guides on backend technologies such as TypeScript, Node.js, Java, and AWS services"
        ],
        "tags": ["Technical Documentation", "TypeScript", "Node.js", "Java", "AWS"]
      },
      {
        "id": 2,
        "title": "Software Engineering Trainee",
        "company": "Power Learn Project",
        "dates": "Feb 2025 - Present · 6 mos",
        "location": "Nairobi County, Kenya · On-site",
        "description_points": [
          "Participated in an intensive software development training program focusing on web technologies (HTML, CSS), Python, and JavaScript",
          "Currently advancing to specialized mobile development with Dart and Flutter modules",
          "Web development fundamentals (HTML, CSS, responsive design)",
          "Python programming and Django framework",
          "JavaScript fundamentals and application",
          "Currently focusing on Dart programming language and Flutter for cross-platform mobile development",
          "Data structures and algorithms"
        ],
        "tags": ["HTML", "CSS", "Python", "JavaScript", "Dart", "Flutter", "Django"]
      },
      {
        "id": 3,
        "title": "Full Stack Engineer",
        "company": "Bee Multiscents",
        "dates": "Nov 2024 - Feb 2025 · 4 mos",
        "location": "Nairobi, Kenya · Hybrid",
        "description_points": [
          "Developed and managed the full-stack architecture of a dynamic, IoT-integrated fragrance system",
          "Built a responsive UI and admin dashboard using React.js, Firebase, and Node.js",
          "Developed a backend system to support dynamic pages, content management, and seamless IoT device interactions",
          "Integrated Cloudflare for enhanced security, performance, and DDoS protection",
          "Engineered a backend solution enabling remote control of smart diffusers via a secure dashboard",
          "Worked with the IoT team to develop APIs for real-time scent customization and automation",
          "Ensured smooth data synchronization between the dashboard, backend, and IoT devices"
        ],
        "tags": ["React", "Firebase", "Node.js", "IoT", "Cloudflare", "API Development"]
      },
      {
        "id": 4,
        "title": "Full Stack Engineer",
        "company": "Yafreeka",
        "dates": "Oct 2023 - Feb 2024 · 5 mos",
        "location": "Nairobi County, Kenya · Remote",
        "description_points": [
          "Implemented the payments page and Y Studio using React",
          "Led the migration from MongoDB to Firebase to address video fetching challenges",
          "Gained hands-on experience writing cloud functions in Firebase",
          "Contributed to both frontend and backend development, improving system performance",
          "Collaborated with cross-functional teams to deliver features on time"
        ],
        "tags": ["React", "Firebase", "MongoDB", "Cloud Functions"]
      }
    ],
    "projects": [
      {
        "id": 3,
        "name": "AVIATOR",
        "description": "Aviator Game Client - A real-time online betting game built with React, TypeScript, and Redux. Players bet on a virtual airplane's flight duration, aiming to cash out before it flies away",
        "website_link": "",
        "details_link": "https://github.com/IsoDevMate/AVIATOR",
        "tags": ["TypeScript", "React", "Redux", "Game Development","Distributed Systems", "Backend","green-blue deployments"]
      },
      {
        "id": 4,
        "name": "MPESA-DARAJA-WITH-TRPC",
        "description": "Seamlessly integrate M-Pesa payments into web applications with type-safe APIs and zero guesswork. From checkout to confirmation in seconds — because your customers deserve payments that just work",
        "website_link": "",
        "details_link": "https://github.com/IsoDevMate/MPESA-DARAJA-WITH-TRPC",
        "tags": ["TypeScript", "MPesa", "tRPC", "Payment Integration"]
      },
      {
        "id": 3,
        "name": "Portfolio Terminal",
        "description": "Interactive terminal-style portfolio with GUI/CLI modes",
        "website_link": "https://barackdev.com",
        "details_link": "https://github.com/IsoDevMate/better-portfolio",
        "tags": ["React", "Terminal", "Animation", "Portfolio","ssh"]
      }
    ],
    "skills": [
      {
        "category": "Frontend",
        "values": ["React", "HTML", "CSS", "JavaScript", "Dart", "Flutter"]
      },
      {
        "category": "Backend",
        "values": ["Node.js", "Python", "Django", "Firebase", "GraphQL", "MongoDB"]
      },
      {
        "category": "Cloud & DevOps",
        "values": ["AWS", "Cloudflare", "CI/CD", "Linux", "Docker"]
      },
      {
        "category": "Other",
        "values": ["Technical Documentation", "IoT", "API Development"]
      }
    ],
    "education": {
      "degree": "Bachelor's degree, Information Technology",
      "university": "Kenyatta University",
      "dates": null,
      "description": "Cascading Style Sheets (CSS), Python (Programming Language) and related technologies",
      "tags": ["Information Technology", "Computer Science"]
    },
    "certifications": [
      {
        "name": "AWS Database Migration Service",
        "issuer": "Amazon Web Services (AWS)",
        "date": "May 2025",
        "skills": ["Amazon Relational Database Service (RDS)", "Amazon Database Migration Service"]
      },
      {
        "name": "Configuring and Deploying VPCs with Multiple Subnets",
        "issuer": "Amazon Web Services (AWS)",
        "date": "May 2025",
        "skills": ["AWS Networking"]
      },
      {
        "name": "Graph Developer - Associate",
        "issuer": "Apollo GraphQL",
        "date": "Feb 2025",
        "skills": ["Apollo GraphQL", "GraphQL", "Node.js"]
      },
      {
        "name": "Google Cloud Skills Badges",
        "issuer": "Google Cloud Skills Boost",
        "date": "2024",
        "skills": ["PostgreSQL", "Databases", "Load Balancing", "Cloud Infrastructure", "Cloud Storage"]
      },
      {
        "name": "AWS re/Start Graduate",
        "issuer": "Amazon Web Services (AWS)",
        "date": "Aug 2024",
        "skills": ["Amazon Web Services (AWS)"]
      }
    ],
    "honors": [
      {
        "name": "GDSC-Core Team Member-(Android) - KU",
        "issuer": "GDSC - KU",
        "date": "Jul 2024",
        "description": "As a GDSC Core Member and Android Lead at Kenyatta University, played a crucial role in fostering a vibrant community of student developers."
      }
    ],
    "recommendations": [
      {
        "name": "Mr. Kibet",
        "position": "CEO at REDOLENCE LIVING LIMITED (BEE MULTISCENTS)",
        "date": "March 4, 2025",
        "content": "Highly recommend Barrack Ouma for his exceptional contributions at Bee Multiscent. As a key member of our development team, Barrack played a crucial role in designing and managing the full-stack architecture of our IoT-integrated fragrance system. His expertise in React.js, Firebase, Node.js, and Cloudflare security ensured a seamless and secure user experience."
      }
    ],
    "interests": [
      "Web Development",
      "Cloud Computing",
      "IoT",
      "Technical Writing",
      "Mobile Development"
    ]
  }


// const ContactForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//     });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form submitted:', formData);
//         alert('Message sent! (This is a demo)');
//         setFormData({ name: '', email: '', subject: '', message: '' });
//     };

//     const handleChange = (e) => {
//         setFormData(prev => ({
//             ...prev,
//             [e.target.name]: e.target.value
//         }));
//     };

//     return (
//         <Card className="bg-gray-800 border-gray-700 mt-4">
//             <CardHeader>
//                 <CardTitle className="text-white flex items-center gap-2 text-base">
//                     <Mail className="w-4 h-4" />
//                     Send Message
//                 </CardTitle>
//             </CardHeader>
//             <CardContent>
//                 <form onSubmit={handleSubmit} className="space-y-3">
//                     <div className="grid grid-cols-2 gap-3">
//                         <Input
//                             name="name"
//                             placeholder="Name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm"
//                             required
//                         />
//                         <Input
//                             name="email"
//                             type="email"
//                             placeholder="Email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm"
//                             required
//                         />
//                     </div>
//                     <Input
//                         name="subject"
//                         placeholder="Subject"
//                         value={formData.subject}
//                         onChange={handleChange}
//                         className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm"
//                         required
//                     />
//                     <Textarea
//                         name="message"
//                         placeholder="Message..."
//                         rows={3}
//                         value={formData.message}
//                         onChange={handleChange}
//                         className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm"
//                         required
//                     />
//                     <Button type="submit" size="sm" className="w-full bg-amber-500 hover:bg-amber-600 text-black">
//                         <Send className="w-3 h-3 mr-1" />
//                         Send
//                     </Button>
//                 </form>
//             </CardContent>
//         </Card>
//     );
// };

const createCommandProcessor = (data, setDisplayData, switchToGui) => {
    if (!data) return async () => "Portfolio data not loaded.";

    const process = async (command) => {
        const [cmd, ...args] = command.toLowerCase().trim().split(' ');
        const id = args[0] ? parseInt(args[0]) : null;

        switch (cmd) {
            case 'help':
                setDisplayData({
                    type: 'help',
                    content: {
                        title: 'Available Commands',
                        commands: [
                            { cmd: 'whoami', desc: 'Display basic information about me' },
                            { cmd: 'skills', desc: 'Show technical skills and expertise' },
                            { cmd: 'experience [id]', desc: 'List all experience or show details' },
                            { cmd: 'projects [id]', desc: 'List all projects or show details' },
                            { cmd: 'education', desc: 'Display education background' },
                            { cmd: 'certifications [id]', desc: 'Show certifications or details' },
                            { cmd: 'contact', desc: 'Display contact information' },
                            { cmd: 'about', desc: 'Show detailed about me section' },
                            { cmd: 'gui', desc: 'Switch to GUI mode' },
                            { cmd: 'clear', desc: 'Clear terminal screen' },
                            { cmd: 'exit', desc: 'Exit terminal mode' }
                        ]
                    }
                });
                return 'Available commands listed on the right panel. Use [id] to get details.';

            case 'whoami':
                setDisplayData({
                    type: 'profile',
                    content: {
                        name: data.name,
                        title: data.title,
                        bio: data.bio
                    }
                });
                return `${data.name} - ${data.title}`;

            case 'skills':
                setDisplayData({
                    type: 'skills',
                    content: data.skills
                });
                return data.skills.map(s => `${s.category}: ${s.values.join(', ')}`).join('\n');

            case 'experience':
                if (id) {
                    const item = data.experience.find(e => e.id === id);
                    if (item) {
                        setDisplayData({ type: 'experience-detail', content: item });
                        return `${item.title} @ ${item.company} - Details shown on right panel`;
                    }
                    return `Experience ID ${id} not found.`;
                }
                setDisplayData({ type: 'experience-list', content: data.experience });
                return data.experience.map(e => `${e.id}. ${e.title} @ ${e.company}`).join('\n');

            case 'projects':
                if (id) {
                    const item = data.projects.find(p => p.id === id);
                    if (item) {
                        setDisplayData({ type: 'project-detail', content: item });
                        return `${item.name} - Details shown on right panel`;
                    }
                    return `Project ID ${id} not found.`;
                }
                setDisplayData({ type: 'projects-list', content: data.projects });
                return data.projects.map(p => `${p.id}. ${p.name}`).join('\n');

            case 'education':
                setDisplayData({ type: 'education', content: data.education });
                return `${data.education.degree} - ${data.education.university}`;

            case 'certifications':
                if (id) {
                    const item = data.certifications.find(c => c.id === id);
                    if (item) {
                        setDisplayData({ type: 'certification-detail', content: item });
                        return `${item.name} - Details shown on right panel`;
                    }
                    return `Certification ID ${id} not found.`;
                }
                setDisplayData({ type: 'certifications-list', content: data.certifications });
                return data.certifications.map(c => `${c.id}. ${c.name}`).join('\n');

                case 'contact':
                    setDisplayData({
                      type: 'contact',
                      content: {
                        email: data.contact.email,
                        phone: data.contact.phone,
                        location: data.contact.location,
                        twitter: data.contact.twitter,
                        github: data.contact.github,
                        linkedin: data.contact.linkedin
                      }
                    });
                    return 'Contact information and form shown on right panel';
            case 'about':
                setDisplayData({ type: 'about', content: { text: data.about_me } });
                return 'About me section shown on right panel';

            case 'gui':
                switchToGui();
                return 'Switching to GUI mode...';

            case 'exit':
                switchToGui();
                return 'Exiting terminal...';

            case '':
                return '';

            default:
                return `Command not found: ${command}. Type 'help' for available commands.`;
        }
    };
    return process;
};

const DisplayPanel = ({ displayData }) => {
    if (!displayData) {
        return (
            <Card className="bg-gray-800 border-gray-700 h-full">
                <CardContent className="p-6 flex items-center justify-center h-full">
                    <div className="text-center text-gray-400">
                        <div className="text-4xl mb-3">💻</div>
                        <h3 className="text-lg font-medium mb-2">Welcome to Terminal</h3>
                        <p className="text-sm">Type commands to see details here</p>
                        <p className="text-xs mt-2 text-gray-500">Try: help, whoami, skills</p>
                    </div>
                </CardContent>
            </Card>
        );
    }

    const renderContent = () => {
        switch (displayData.type) {
            case 'help':
                return (
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">{displayData.content.title}</h3>
                        <div className="space-y-2">
                            {displayData.content.commands.map((cmd, index) => (
                                <div key={index} className="border-l-2 border-amber-300 pl-3 py-1">
                                    <code className="text-emerald-300 font-mono text-sm">{cmd.cmd}</code>
                                    <p className="text-gray-300 text-xs mt-1">{cmd.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'profile':
                return (
                    <div className="space-y-4">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mx-auto mb-3 flex items-center justify-center text-xl font-bold text-black">
                                {displayData.content.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <h3 className="text-lg font-bold text-white">{displayData.content.name}</h3>
                            <p className="text-emerald-300 text-sm">{displayData.content.title}</p>
                        </div>
                        <p className="text-gray-300 text-sm text-center">{displayData.content.bio}</p>
                    </div>
                );

            case 'skills':
                return (
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">Skills</h3>
                        {displayData.content.map((skill, index) => (
                            <div key={index} className="space-y-2">
                                <h4 className="text-emerald-300 font-medium text-sm">{skill.category}</h4>
                                <div className="flex flex-wrap gap-1">
                                    {skill.values.map((value, i) => (
                                        <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                                            {value}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case 'experience-list':
                return (
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">Experience</h3>
                        <div className="space-y-3">
                            {displayData.content.map((exp) => (
                                <div key={exp.id} className="border border-gray-700 rounded-lg p-3 hover:border-amber-300 transition-colors">
                                    <div className="flex items-start justify-between mb-1">
                                        <div>
                                            <h4 className="font-semibold text-white text-sm">{exp.title}</h4>
                                            <p className="text-emerald-300 text-xs">{exp.company}</p>
                                        </div>
                                        <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                                            #{exp.id}
                                        </Badge>
                                    </div>
                                    <p className="text-gray-400 text-xs mb-2">{exp.dates}</p>
                                    <div className="flex flex-wrap gap-1">
                                        {exp.tags.slice(0, 3).map((tag, i) => (
                                            <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
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
                    <div className="space-y-3">
                        <div>
                            <h3 className="text-lg font-semibold text-white">{displayData.content.title}</h3>
                            <p className="text-emerald-300 text-sm">{displayData.content.company}</p>
                            <p className="text-gray-400 text-xs flex items-center gap-1 mt-1">
                                <Calendar className="w-3 h-3" />
                                {displayData.content.dates}
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-medium mb-2 text-sm">Key Responsibilities:</h4>
                            <ul className="space-y-1">
                                {displayData.content.description_points.map((point, i) => (
                                    <li key={i} className="text-gray-300 text-xs flex items-start gap-2">
                                        <span className="text-emerald-300 mt-1">•</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-wrap gap-1">
                            {displayData.content.tags.map((tag, i) => (
                                <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>
                );

            case 'projects-list':
                return (
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">Projects</h3>
                        <div className="space-y-3">
                            {displayData.content.map((project) => (
                                <div key={project.id} className="border border-gray-700 rounded-lg p-3 hover:border-amber-300 transition-colors">
                                    <div className="flex items-start justify-between mb-1">
                                        <h4 className="font-semibold text-white text-sm">{project.name}</h4>
                                        <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                                            #{project.id}
                                        </Badge>
                                    </div>
                                    <p className="text-gray-300 text-xs mb-2">{project.description}</p>
                                    <div className="flex flex-wrap gap-1 mb-2">
                                        {project.tags.slice(0, 3).map((tag, i) => (
                                            <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                    <div className="flex gap-2 text-xs">
                                        <a href={project.website_link} className="text-emerald-300 hover:underline flex items-center gap-1">
                                            <ExternalLink className="w-2 h-2" />
                                            Site
                                        </a>
                                        <a href={project.details_link} className="text-emerald-300 hover:underline flex items-center gap-1">
                                            <ExternalLink className="w-2 h-2" />
                                            Details
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'project-detail':
                return (
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">{displayData.content.name}</h3>
                        <p className="text-gray-300 text-sm">{displayData.content.description}</p>
                        <div className="flex flex-wrap gap-1">
                            {displayData.content.tags.map((tag, i) => (
                                <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                        <div className="flex gap-3 text-sm">
                            <a href={displayData.content.website_link} className="flex items-center gap-1 text-emerald-300 hover:underline">
                                <ExternalLink className="w-3 h-3" />
                                Website
                            </a>
                            <a href={displayData.content.details_link} className="flex items-center gap-1 text-emerald-300 hover:underline">
                                <ExternalLink className="w-3 h-3" />
                                Details
                            </a>
                        </div>
                    </div>
                );

            case 'education':
                return (
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">Education</h3>
                        <div className="border border-gray-700 rounded-lg p-3">
                            <h4 className="font-semibold text-white text-sm">{displayData.content.degree}</h4>
                            <p className="text-emerald-300 text-xs">{displayData.content.university}</p>
                            <p className="text-gray-400 text-xs flex items-center gap-1 mt-1">
                                <Calendar className="w-3 h-3" />
                                {displayData.content.dates}
                            </p>
                            <p className="text-gray-300 text-xs mt-2">{displayData.content.description}</p>
                            <div className="flex flex-wrap gap-1 mt-2">
                                {displayData.content.tags.map((tag, i) => (
                                    <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                );

            case 'certifications-list':
                return (
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">Certifications</h3>
                        <div className="space-y-3">
                            {displayData.content.map((cert) => (
                                <div key={cert.id} className="border border-gray-700 rounded-lg p-3 hover:border-amber-300 transition-colors">
                                    <div className="flex items-start justify-between mb-1">
                                        <div className="flex items-start gap-2">
                                            <Award className="w-4 h-4 text-emerald-300 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-white text-sm">{cert.name}</h4>
                                                <p className="text-emerald-300 text-xs">{cert.issuer}</p>
                                            </div>
                                        </div>
                                        <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                                            #{cert.id}
                                        </Badge>
                                    </div>
                                    <p className="text-gray-400 text-xs ml-6">{cert.date}</p>
                                    <div className="flex flex-wrap gap-1 mt-2 ml-6">
                                        {cert.tags.map((tag, i) => (
                                            <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'certification-detail':
                return (
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-emerald-300" />
                            <h3 className="text-lg font-semibold text-white">{displayData.content.name}</h3>
                        </div>
                        <div>
                            <p className="text-emerald-300 font-medium text-sm">{displayData.content.issuer}</p>
                            <p className="text-gray-400 text-xs">Issued: {displayData.content.date}</p>
                            <p className="text-gray-400 text-xs">ID: {displayData.content.credential_id}</p>
                        </div>
                        <div className="flex flex-wrap gap-1">
                            {displayData.content.tags.map((tag, i) => (
                                <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>
                );

            case 'contact':
                return (
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">Contact</h3>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-emerald-300" />
                                <span className="text-gray-300 text-sm">{displayData.content.email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-emerald-300" />
                                <span className="text-gray-300 text-sm">{displayData.content.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-emerald-300" />
                                <span className="text-gray-300 text-sm">{displayData.content.location}</span>
                            </div>
                        </div>
                        <ContactForm contactData={displayData.content} />
                    </div>
                );

            case 'about':
                return (
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">About Me</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{displayData.content.text}</p>
                    </div>
                );

            default:
                return (
                    <div className="text-center text-gray-400">
                        <p className="text-sm">Unknown command output</p>
                    </div>
                );
        }
    };

    return (
        <Card className="bg-gray-800 border-gray-700 h-full">
            <CardContent className="p-4 h-full overflow-y-auto">
                {renderContent()}
            </CardContent>
        </Card>
    );
};

export default function EnhancedTerminal({ portfolioData = samplePortfolioData, switchToGui }) {
    const [history, setHistory] = useState([
        { type: 'output', text: "Enhanced Terminal active. Type 'help' for commands or 'exit' to quit." }
    ]);
    const [input, setInput] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [displayData, setDisplayData] = useState(null);
    const terminalEndRef = useRef(null);
    const inputRef = useRef(null);

    const processCommand = createCommandProcessor(
        portfolioData,
        setDisplayData,
        switchToGui || (() => console.log('Switching to GUI mode'))
    );

    useEffect(() => {
        terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

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

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter' && !isProcessing) {
            e.preventDefault();
            const command = input.trim();
            const newHistory = [...history, { type: 'input', text: command }];

            if (command.toLowerCase() === 'clear') {
                setHistory([]);
                setInput('');
                setDisplayData(null);
                return;
            }

            setIsProcessing(true);
            const output = await processCommand(command);
            if (output) {
                newHistory.push({ type: 'output', text: output });
            }
            setHistory(newHistory);
            setIsProcessing(false);
            setInput('');
        } else if (e.key === 'Escape') {
            if (switchToGui) {
                switchToGui();
            }
        }
    };

    const renderOutput = (item) => {
        return <pre className="whitespace-pre-wrap text-gray-300">{item.text}</pre>;
    };

    return (
        <div className="h-screen bg-[#0D1117] flex relative">
            <Button
                onClick={switchToGui || (() => console.log('Exit clicked'))}
                className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white"
                size="sm"
            >
                <X className="w-4 h-4 mr-1" />
                Exit
            </Button>

            <div className="w-1/2 p-4 terminal-panel">
                <Card className="bg-[#0D1117] border-gray-700 h-full">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-emerald-300 font-mono text-sm">Terminal</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 h-full overflow-y-auto font-mono text-sm">
                        <div className="pb-20">
                            {history.map((item, index) => (
                                <div key={index} className="mb-1">
                                    {item.type === 'input' ? (
                                        <div className="flex items-center gap-2">
                                            <UserPrompt />
                                            <span className="text-white">{item.text}</span>
                                        </div>
                                    ) : (
                                        renderOutput(item)
                                    )}
                                </div>
                            ))}
                            <div className="flex items-center gap-2">
                                <UserPrompt />
                                <div className="flex-1 flex items-center">
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        className="bg-transparent border-none outline-none text-white flex-1"
                                        disabled={isProcessing}
                                        spellCheck="false"
                                        autoComplete="off"
                                        autoCapitalize="off"
                                    />
                                    {<Cursor />}
                                </div>
                            </div>
                        </div>
                        <div ref={terminalEndRef} />
                    </CardContent>
                </Card>
            </div>

            <div className="w-1/2 p-4">
                <DisplayPanel displayData={displayData} />
            </div>
        </div>
    );
}
