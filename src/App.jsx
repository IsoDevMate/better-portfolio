import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, User, FileText, Code, Mail, Monitor, TerminalSquare } from 'lucide-react';
import HomePage from './pages/home.jsx';
import TerminalPage from './pages/terminal.jsx';
import { Button } from '@/components/ui/button';

import portfolioSchema from './portfolio.json';

const mockPortfolioData = {
  name: "Barack Ouma",
  title: "Full Stack Developer",
  profile_picture_url: "",
  bio: "Passionate full-stack developer with expertise in modern web technologies",
  about_me: "I'm a dedicated developer who loves creating efficient, scalable solutions and learning new technologies.",
  contact: {
    email: "barack.ouma@example.com",
    twitter: "@barack_dev",
    github: "https://github.com/barackdev",
    linkedin: "https://linkedin.com/in/barackdev",
    location: "Ruiru, Kiambu County, KE"
  },
  experience: [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Ltd",
      dates: "2023 - Present",
      description_points: [
        "Developed and maintained React/Node.js applications serving 10k+ users",
        "Implemented GraphQL APIs reducing data transfer by 40%",
        "Led a team of 3 junior developers in agile development practices"
      ],
      tags: ["React", "Node.js", "GraphQL", "Leadership"]
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Innovations",
      dates: "2021 - 2023",
      description_points: [
        "Built responsive web applications using React and Tailwind CSS",
        "Collaborated with UI/UX designers to implement pixel-perfect designs",
        "Optimized application performance resulting in 25% faster load times"
      ],
      tags: ["React", "Tailwind CSS", "Performance", "UI/UX"]
    }
  ],
  projects: [
    {
      id: 1,
      name: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
      website_link: "https://example-ecommerce.com",
      details_link: "https://github.com/barackdev/ecommerce",
      tags: ["React", "Node.js", "PostgreSQL", "E-commerce"]
    },
    {
      id: 2,
      name: "Task Management App",
      description: "Real-time collaboration tool built with React, Socket.io, and MongoDB",
      website_link: "https://taskapp.example.com",
      details_link: "https://github.com/barackdev/taskapp",
      tags: ["React", "Socket.io", "MongoDB", "Real-time"]
    },
    {
      id: 3,
      name: "Portfolio Terminal",
      description: "Interactive terminal-style portfolio with GUI/CLI modes",
      website_link: "https://barackdev.com",
      details_link: "https://github.com/barackdev/portfolio",
      tags: ["React", "Terminal", "Animation", "Portfolio"]
    }
  ],
  skills: [
    {
      category: "Frontend",
      values: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "Backend",
      values: ["Node.js", "Python", "GraphQL", "REST APIs", "PostgreSQL", "MongoDB"]
    },
    {
      category: "DevOps",
      values: ["Docker", "AWS", "Git", "CI/CD", "Linux"]
    }
  ],
  education: {
    degree: "Bachelor of Computer Science",
    university: "University of Nairobi",
    dates: "2018 - 2022",
    description: "Focused on software engineering, algorithms, and web technologies",
    tags: ["Computer Science", "Software Engineering", "Web Development"]
  },
  interests: [
    "Web Development",
    "Machine Learning",
    "Open Source",
    "Tech Mentoring",
    "Photography"
  ]
};

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
