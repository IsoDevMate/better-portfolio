import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, User, FileText, Code, Mail, Monitor, TerminalSquare } from 'lucide-react';
import HomePage from './pages/home.jsx';
import TerminalPage from './pages/terminal.jsx';
import { Button } from '@/components/ui/button';

const mockPortfolioData = {
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
      "id": 1,
      "name": "E-commerce Platform",
      "description": "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
      "website_link": "https://example-ecommerce.com",
      "details_link": "https://github.com/barackdev/ecommerce",
      "tags": ["React", "Node.js", "PostgreSQL", "E-commerce"]
    },
    {
      "id": 2,
      "name": "Task Management App",
      "description": "Real-time collaboration tool built with React, Socket.io, and MongoDB",
      "website_link": "https://taskapp.example.com",
      "details_link": "https://github.com/barackdev/taskapp",
      "tags": ["React", "Socket.io", "MongoDB", "Real-time"]
    },
    {
      "id": 3,
      "name": "Portfolio Terminal",
      "description": "Interactive terminal-style portfolio with GUI/CLI modes",
      "website_link": "https://barackdev.com",
      "details_link": "https://github.com/barackdev/portfolio",
      "tags": ["React", "Terminal", "Animation", "Portfolio"]
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

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen bg-[#111111] flex items-center justify-center"
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      className="w-8 h-8 border-2 border-[#00D9FF] border-t-transparent rounded-full"
    />
    <span className="ml-3 text-[#00D9FF]">Loading portfolio...</span>
  </motion.div>
);

const AnimatedHeader = ({ portfolioData, mode, onModeToggle }) => (
  <motion.header
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="bg-[#111111] text-white p-4 sticky top-0 z-50 shadow-md border-b border-gray-800"
  >
    <div className="mx-auto max-w-5xl flex justify-between items-center">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="font-bold text-lg text-[#00D9FF]"
      >
        {portfolioData?.name}.dev
      </motion.div>

      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Button
          variant="outline"
          className="bg-transparent border-gray-600 hover:bg-gray-800 hover:text-white transition-all duration-300"
          onClick={onModeToggle}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center"
          >
            {mode === 'gui' ? (
              <>
                <TerminalSquare className="w-4 h-4 mr-2" />
                Terminal Mode
              </>
            ) : (
              <>
                <User className="w-4 h-4 mr-2" />
                GUI Mode
              </>
            )}
          </motion.div>
        </Button>
      </motion.div>
    </div>
  </motion.header>
);

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [mode, setMode] = useState('gui'); // 'gui' or 'terminal'
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        // Simulate loading time
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Use mock data that follows the JSON schema structure
        setPortfolioData(mockPortfolioData);
      } catch (error) {
        console.error("Failed to load portfolio data:", error);
        setPortfolioData(mockPortfolioData);
      }
      setLoading(false);
    };

    loadData();
  }, []);

  const switchToGui = () => setMode('gui');
  const toggleMode = () => setMode(mode === 'gui' ? 'terminal' : 'gui');

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&family=Inter:wght@400;500;700;900&display=swap');

        body, #root {
          font-family: 'Inter', sans-serif;
          background-color: #111111;
          color: #E6EDF3;
        }
        .font-mono {
          font-family: 'Fira Code', monospace;
        }

        :root {
          --background: #111111;
          --primary: #00D9FF;
          --card-bg: #1a1a1a;
        }
      `}</style>

      <div className="min-h-screen bg-[#111111] text-white">
        <AnimatePresence mode="wait">
          {loading ? (
            <LoadingScreen key="loading" />
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full min-h-screen"
            >
              <AnimatePresence mode="wait">
                {mode === 'terminal' ? (
                  <motion.div
                    key="terminal"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="min-h-screen"
                  >
                    <TerminalPage
                      portfolioData={portfolioData}
                      switchToGui={switchToGui}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="gui"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AnimatedHeader
                      portfolioData={portfolioData}
                      mode={mode}
                      onModeToggle={toggleMode}
                    />
                    <HomePage portfolioData={portfolioData} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
