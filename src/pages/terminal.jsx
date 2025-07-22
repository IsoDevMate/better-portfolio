// import React, { useState, useRef, useEffect } from 'react';

// const UserPrompt = () => (
//     <div className="flex items-center">
//         <span className="text-amber-300">user@portfolio</span>
//         <span className="text-white">:</span>
//         <span className="text-blue-400">~$</span>
//     </div>
// );

// const Cursor = () => <span className="bg-lime-300 w-2 h-5 inline-block animate-pulse ml-1" />;

// const createCommandProcessor = (data, switchToGui) => {
//     if (!data) return async () => "Portfolio data not loaded. Please switch to GUI mode and check connection.";

//     const process = async (command) => {
//         const [cmd, ...args] = command.toLowerCase().trim().split(' ');
//         const id = args[0] ? parseInt(args[0]) : null;

//         switch (cmd) {
//             case 'help':
//                 return `Available commands: whoami, skills, experience [id], projects [id], contact, gui, clear`;
//             case 'whoami':
//                 return data.bio;
//             case 'skills':
//                 return data.skills.map(s => `<span class="text-amber-300">${s.category}:</span> ${s.values.join(', ')}`).join('\n');
//             case 'experience':
//                 if (id) {
//                     const item = data.experience.find(e => e.id === id);
//                     return item ? item.description_points.join('\n') : `Experience ID ${id} not found.`;
//                 }
//                 return data.experience.map(e => `${e.id}. ${e.title} @ ${e.company}`).join('\n');
//             case 'projects':
//                 if (id) {
//                     const item = data.projects.find(p => p.id === id);
//                     return item ? item.description : `Project ID ${id} not found.`;
//                 }
//                 return data.projects.map(p => `${p.id}. ${p.name}`).join('\n');
//             case 'contact':
//                 return Object.entries(data.contact).map(([key, value]) => `${key}: ${value}`).join('\n');
//             case 'gui':
//                 switchToGui();
//                 return 'Switching to GUI mode...';
//             case '':
//                 return '';
//             default:
//                 return `sh: command not found: ${command}`;
//         }
//     };
//     return process;
// };

// export default function TerminalPage({ portfolioData, switchToGui }) {
//     const [history, setHistory] = useState([{ type: 'output', text: "Terminal mode active. Type 'help' or 'gui' to switch back." }]);
//     const [input, setInput] = useState('');
//     const [isProcessing, setIsProcessing] = useState(false);
//     const terminalEndRef = useRef(null);
//     const inputRef = useRef(null);
//     const processCommand = createCommandProcessor(portfolioData, switchToGui);

//     useEffect(() => {
//         terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//     }, [history]);

//     useEffect(() => {
//         const focusInput = () => inputRef.current?.focus();
//         window.addEventListener('click', focusInput);
//         focusInput();
//         return () => window.removeEventListener('click', focusInput);
//     }, []);

//     const handleKeyDown = async (e) => {
//         if (e.key === 'Enter' && !isProcessing) {
//             e.preventDefault();
//             const command = input.trim();
//             const newHistory = [...history, { type: 'input', text: command }];

//             if (command.toLowerCase() === 'clear') {
//                 setHistory([]);
//                 setInput('');
//                 return;
//             }

//             setIsProcessing(true);
//             const output = await processCommand(command);
//             if (output) {
//                 newHistory.push({ type: 'output', text: output });
//             }
//             setHistory(newHistory);
//             setIsProcessing(false);
//             setInput('');
//         }
//     };

//     const renderOutput = (item) => {
//         const content = { __html: item.text.replace(/\n/g, '<br />') };
//         return <pre className="whitespace-pre-wrap" dangerouslySetInnerHTML={content} />;
//     };

//     return (
//         <div className="p-4 h-screen overflow-y-auto font-mono bg-[#0D1117]" onClick={() => inputRef.current?.focus()}>
//             <div className="max-w-4xl mx-auto text-base">
//                 {history.map((item, index) => (
//                     <div key={index} className="mb-2 leading-relaxed">
//                         {item.type === 'input' ? (
//                             <div className="flex items-center gap-2">
//                                 <UserPrompt />
//                                 <span className="flex-1 text-gray-300">{item.text}</span>
//                             </div>
//                         ) : renderOutput(item)}
//                     </div>
//                 ))}
//                 {!isProcessing && (
//                     <div className="flex items-center gap-2">
//                         <UserPrompt />
//                         <input
//                             ref={inputRef}
//                             type="text"
//                             value={input}
//                             onChange={(e) => setInput(e.target.value)}
//                             onKeyDown={handleKeyDown}
//                             className="bg-transparent border-none outline-none text-lime-300 flex-1 w-full"
//                             autoComplete="off" autoFocus
//                         />
//                         <Cursor />
//                     </div>
//                 )}
//             </div>
//             <div ref={terminalEndRef} />
//         </div>
//     );
// }



import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X, Send, Mail, Phone, MapPin, Calendar, Award, ExternalLink } from 'lucide-react';

const UserPrompt = () => (
    <div className="flex items-center">
        <span className="text-amber-300">user@portfolio</span>
        <span className="text-white">:</span>
        <span className="text-blue-400">~$</span>
    </div>
);

const Cursor = () => <span className="bg-lime-300 w-2 h-5 inline-block animate-pulse ml-1" />;

// Sample portfolio data for demo
const samplePortfolioData = {
    name: "John Doe",
    title: "Full Stack Developer",
    bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications.",
    contact: {
        email: "john@example.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA",
        linkedin: "linkedin.com/in/johndoe",
        github: "github.com/johndoe"
    },
    about_me: "I'm a dedicated software engineer who loves creating efficient, user-friendly applications. With a strong foundation in both frontend and backend technologies, I enjoy tackling complex problems and delivering high-quality solutions that make a difference.",
    skills: [
        { category: "Frontend", values: ["React", "JavaScript", "TypeScript", "Tailwind CSS"] },
        { category: "Backend", values: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
        { category: "Tools", values: ["Git", "Docker", "AWS", "Figma"] }
    ],
    experience: [
        {
            id: 1,
            title: "Senior Frontend Developer",
            company: "Tech Corp",
            dates: "2022 - Present",
            description_points: [
                "Led development of React-based dashboard serving 10k+ users",
                "Improved application performance by 40% through optimization",
                "Mentored 3 junior developers and conducted code reviews"
            ],
            tags: ["React", "TypeScript", "AWS"]
        },
        {
            id: 2,
            title: "Full Stack Developer",
            company: "StartupXYZ",
            dates: "2020 - 2022",
            description_points: [
                "Built MVP from scratch using MERN stack",
                "Implemented real-time features using WebSocket",
                "Managed database design and API architecture"
            ],
            tags: ["MERN", "WebSocket", "MongoDB"]
        }
    ],
    projects: [
        {
            id: 1,
            name: "E-commerce Platform",
            description: "Full-stack e-commerce solution with payment integration",
            tags: ["React", "Node.js", "Stripe"],
            website_link: "#",
            details_link: "#"
        },
        {
            id: 2,
            name: "Task Management App",
            description: "Real-time collaborative task management application",
            tags: ["Vue.js", "Firebase", "WebSocket"],
            website_link: "#",
            details_link: "#"
        }
    ],
    education: {
        degree: "Bachelor of Science in Computer Science",
        university: "University of Technology",
        dates: "2016 - 2020",
        description: "Focused on software engineering and data structures",
        tags: ["Computer Science", "Software Engineering"]
    },
    certifications: [
        {
            id: 1,
            name: "AWS Certified Developer",
            issuer: "Amazon Web Services",
            date: "2023",
            credential_id: "AWS-123456",
            tags: ["AWS", "Cloud"]
        },
        {
            id: 2,
            name: "React Professional Certificate",
            issuer: "Meta",
            date: "2022",
            credential_id: "META-789012",
            tags: ["React", "Frontend"]
        }
    ]
};

const ContactForm = () => {
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
                setDisplayData({ type: 'contact', content: data.contact });
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
                                    <code className="text-amber-300 font-mono text-sm">{cmd.cmd}</code>
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
                            <p className="text-amber-300 text-sm">{displayData.content.title}</p>
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
                                <h4 className="text-amber-300 font-medium text-sm">{skill.category}</h4>
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
                                            <p className="text-amber-300 text-xs">{exp.company}</p>
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
                            <p className="text-amber-300 text-sm">{displayData.content.company}</p>
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
                                        <span className="text-amber-300 mt-1">•</span>
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
                                        <a href={project.website_link} className="text-amber-300 hover:underline flex items-center gap-1">
                                            <ExternalLink className="w-2 h-2" />
                                            Site
                                        </a>
                                        <a href={project.details_link} className="text-amber-300 hover:underline flex items-center gap-1">
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
                            <a href={displayData.content.website_link} className="flex items-center gap-1 text-amber-300 hover:underline">
                                <ExternalLink className="w-3 h-3" />
                                Website
                            </a>
                            <a href={displayData.content.details_link} className="flex items-center gap-1 text-amber-300 hover:underline">
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
                            <p className="text-amber-300 text-xs">{displayData.content.university}</p>
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
                                            <Award className="w-4 h-4 text-amber-300 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-white text-sm">{cert.name}</h4>
                                                <p className="text-amber-300 text-xs">{cert.issuer}</p>
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
                            <Award className="w-5 h-5 text-amber-300" />
                            <h3 className="text-lg font-semibold text-white">{displayData.content.name}</h3>
                        </div>
                        <div>
                            <p className="text-amber-300 font-medium text-sm">{displayData.content.issuer}</p>
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
                                <Mail className="w-4 h-4 text-amber-300" />
                                <span className="text-gray-300 text-sm">{displayData.content.email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-amber-300" />
                                <span className="text-gray-300 text-sm">{displayData.content.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-amber-300" />
                                <span className="text-gray-300 text-sm">{displayData.content.location}</span>
                            </div>
                        </div>
                        <ContactForm />
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
                        <CardTitle className="text-amber-300 font-mono text-sm">Terminal</CardTitle>
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
                                    {!isProcessing && <Cursor />}
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
