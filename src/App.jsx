import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, User, FileText, Code, Mail, Monitor, TerminalSquare, Download, X, Menu, Home } from 'lucide-react';
import HomePage from './pages/home.jsx';
import BlogsPage from '@/components/ui/blogs';
import TerminalPage from './pages/terminal.jsx';
import TerminalWS from './components/terminal/TerminalWS';
import InterestsPage from '@/components/ui/interests';
import TerminalPaymentCallback from './pages/terminal-payment-callback.jsx';
import { Button } from '@/components/ui/button';

const mockPortfolioData = {
  "name": "Barack Ouma",
  "title": "Software Engineer | Backend | AWS Certified",
  "profile_picture_url": "",
  "bio": "Passionate full-stack developer with expertise in modern web technologies",
  "about_me": "I'm a dedicated developer who loves creating efficient, scalable solutions and learning new technologies.",
  "contact": {
    "email": "oumaoduor5827@gmail.com",
    "twitter": "https://twitter.com/BarackOuma7",
    "github": "https://github.com/IsoDevMate",
    "linkedin": "https://www.linkedin.com/in/barack-ouma-b37089212/",
    "location": "Nairobi County, Kenya",
    "website": "https://barack-ouma-portfolio.vercel.app"
  },
  "blogs": [
    {
      "id": 1,
      "title": "Building Scalable React Applications with TypeScript",
      "description": "Learn how to structure large-scale React applications using TypeScript, exploring advanced patterns, best practices, and performance optimization techniques that I've learned from building production applications.",
      "url": "https://example.com/blog/react-typescript-scalable",
      "published_date": "Dec 15, 2024",
      "read_time": 8,
      "platform": "Kodaschool",
      "tags": ["React", "TypeScript", "Architecture", "Performance"]
    },
    {
      "id": 2,
      "title": "AWS Lambda Functions: From Zero to Production",
      "description": "A comprehensive guide to building, deploying, and monitoring AWS Lambda functions. Covers everything from basic setup to advanced patterns like event-driven architecture and cold start optimization.",
      "url": "https://example.com/blog/aws-lambda-guide",
      "published_date": "Nov 28, 2024",
      "read_time": 12,
      "platform": "Kodaschool",
      "tags": ["AWS", "Lambda", "Serverless", "Node.js"]
    },
      {
    "id": 1,
    "title": "How to Seamlessly Roll Auth into Your React App using Firebase Authentication",
    "description": "Learn how to implement production-ready authentication in minutes with Firebase, eliminating the need to build auth servers from scratch.",
    "url": "https://kodaschool.com/blog/how-to-seamlessly-roll-auth-into-your-react-app-using-firebase-authentication",
    "published_date": "Jul 15, 2025",
    "read_time": 8,
    "platform": "Kodaschool",
    "tags": ["React", "Firebase", "Authentication", "BaaS"]
  },
  {
    "id": 2,
    "title": "What is Inversion of Control?",
    "description": "Exploring how IoC flips traditional program structure to create more testable and maintainable code in Node.js applications.",
    "url": "https://kodaschool.com/blog/inversion-of-control",
    "published_date": "Jul 10, 2025",
    "read_time": 10,
    "platform": "Kodaschool",
    "tags": ["Node.js", "Dependency Injection", "Testing", "Architecture"]
  },
  {
    "id": 3,
    "title": "Master Any Framework: The Mindset Shift That Actually Works",
    "description": "The secret sauce big teams use to adopt NestJS, Spring, or GraphQL quickly and wield new languages confidently.",
    "url": "https://dev.to/isodevmate/master-any-framework-the-mindset-shift-that-actually-works-1234",
    "published_date": "Jul 8, 2025",
    "read_time": 12,
    "platform": "Dev.to",
    "tags": ["Learning", "Frameworks", "NestJS", "Spring"]
  },
  {
    "id": 4,
    "title": "What Makes Buffers, Streams and Files Different?",
    "description": "Understanding the core differences between buffers, streams and files and when to use each in real-world coding.",
    "url": "https://kodaschool.com/blog/what-makes-buffers-and-files-different",
    "published_date": "Jul 4, 2025",
    "read_time": 9,
    "platform": "Kodaschool",
    "tags": ["Node.js", "Buffers", "Streams", "Files"]
  },
  {
    "id": 5,
    "title": "MPesa Daraja 2.0 + tRPC",
    "description": "A type-safe alternative to integrate with Daraja 2.0 that simplifies STK push, reduces bugs, and improves developer experience.",
    "url": "https://kodaschool.com/blog/Intergration-mpesa-daraja-and-daraja-2.0",
    "published_date": "Mar 10, 2025",
    "read_time": 15,
    "platform": "Kodaschool",
    "tags": ["MPesa", "tRPC", "Payments", "TypeScript"]
  },
  {
    "id": 6,
    "title": "NestJS Tutorial for Beginners: Complete Guide",
    "description": "Comprehensive guide to getting started with NestJS, covering core concepts and best practices for building scalable applications.",
    "url": "https://kodaschool.com/blog/nestjs-tutorial-beginners-complete-guide",
    "published_date": "Feb 28, 2025",
    "read_time": 20,
    "platform": "Kodaschool",
    "tags": ["NestJS", "Node.js", "Backend", "TypeScript"]
  },
    {
      "id": 3,
      "title": "The Future of IoT: Building Smart Systems with React and Firebase",
      "description": "Exploring how modern web technologies can be used to create intuitive dashboards for IoT devices. Real-world examples from my experience building smart fragrance systems.",
      "url": "https://example.com/blog/iot-react-firebase",
      "published_date": "Oct 22, 2024",
      "read_time": 10,
      "platform": "Medium",
      "tags": ["IoT", "React", "Firebase", "Smart Systems"]
    },
    {
      "id": 4,
      "title": "Understanding GraphQL: A Practical Approach",
      "description": "Deep dive into GraphQL fundamentals, from basic queries to advanced schema design. Includes practical examples and performance considerations for production applications.",
      "url": "https://example.com/blog/graphql-practical-guide",
      "published_date": "Sep 10, 2024",
      "read_time": 15,
      "platform": "Dev.to",
      "tags": ["GraphQL", "API Design", "Apollo", "Backend"]
    }
  ],
  "experience": [
    {
      "id": 6,
      "title": "Software Engineer I",
      "company": "Groreels",
      "dates": "Dec 2024 - Nov 2025 · 1 yr",
      "location": "Remote",
      "description_points": [
        "Researched and evaluated AI video tools (HeyGen, Pika, Stable Diffusion, Arcads, MakeUGC.ai), reducing UGC generation costs by 60%",
        "Built an AI UGC video generator integrating HeyGen influencer avatars for automated, personalized video content",
        "Implemented secure OAuth authentication for TikTok, Instagram, and YouTube APIs with robust token lifecycle management",
        "Developed auto-posting workflows, cross-platform scheduling, and real-time analytics dashboards for campaign performance",
        "Designed a drag-and-drop content calendar for multi-platform campaign orchestration",
        "Created a super-user portal with tenant-aware user management, platform-wide analytics, and role-based access control",
        "Integrated Paystack with tiered subscription plans (Starter, Growth, Scale) and automated billing",
        "Built an affiliate system with referral tracking, commission management, and partner performance reporting"
      ],
      "tags": ["AI", "Video Generation", "Next.js", "NestJS", "TikTok API", "Instagram API", "YouTube API", "Paystack", "SaaS", "OAuth"]
    },
    {
      "id": 5,
      "title": "Full Stack Engineer",
      "company": "Organic Bloom (Contract)",
      "dates": "Oct 2025 - Dec 2025 · 3 mos",
      "location": "Nairobi County, Kenya · Remote",
      "description_points": [
        "Designed and deployed the Organic Bloom online store with a Next.js storefront and NestJS services powering product discovery, checkout, and fulfillment",
        "Implemented a resilient inventory engine with background jobs for stock reconciliation, SKU analytics, and automated restock alerts",
        "Integrated secure payment flows (PCI DSS aligned) with tokenized cards, fraud rules, and instant transaction webhooks",
        "Built an executive-ready admin dashboard for order management, live analytics, and merchandising workflows",
        "Drove a 120% lift in online sales in the first month by pairing UX experiments with aggressive performance tuning",
        "Applied performance budgets, route-level code splitting, and lazy resource loading to keep Core Web Vitals in the green",
        "Built authentication, session hardening, and granular authorization for shoppers, support, and admin personas",
        "Set up GitHub Actions-powered CI/CD, blue/green deployments, and observability pipelines for the production stack"
      ],
      "tags": ["Next.js", "NestJS", "PostgreSQL", "Redis", "Payment Integration", "PCI DSS", "CI/CD", "AWS"]
    },
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
      "name": "ComfyBase Event Management System",
      "description": "A comprehensive Smart event management platform designed to simplify event organization, enhance attendee engagement, and provide seamless event experiences. Features real-time interactions, live streaming, interactive note-taking, media sharing, and an awards system.",
      "website_link": "https://final-year-project-swart-phi.vercel.app",
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
      "id": 3,
      "name": "Portfolio Terminal",
      "description": "Interactive terminal-style portfolio with GUI/CLI modes",
      "website_link": "https://better-portfolio-pi.vercel.app",
      "details_link": "https://better-portfolio-pi.vercel.app",
      "tags": ["React", "Terminal", "Animation", "Portfolio","ssh"]
    }
  ],
  "skills": [
    {
      "category": "Frontend",
      "values": ["React", "TypeScript", "Dart", "Flutter"]
    },
    {
      "category": "Backend",
      "values": ["Nestjs", "Java", "Firebase", "GraphQL", "NOSQL","Message Queues(BULLMQ)"]
    },
    {
      "category": "Cloud & DevOps",
      "values": ["AWS", "Cloudflare", "CI/CD", "Linux", "Docker"]
    },
    {
      "category": "Other",
      "values": ["Technical Documentation", "API Development"]
    }
  ],
  "education": {
    "degree": "Bachelor's degree, Information Technology",
    "university": "Kenyatta University",
    "dates": null,
    "description": "Cascading Style Sheets (CSS), Python (Programming Language) and related technologies",
    "tags": ["Information Technology"]
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
    "Dependency Injection,CQRS,PubSub,CDNs,TDD,",
    "Cloud Computing",
    "Technical Writing",
    "Mobile Development"
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
      className="w-8 h-8 border-2 border-[#10B981] border-t-transparent rounded-full"
    />
    <span className="ml-3 text-[#10B981]">Loading portfolio...</span>
  </motion.div>
);

const AnimatedHeader = ({ portfolioData, mode, onModeToggle }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

 useEffect(() => {
    window.scrollTo(0, 0, 'smooth');
  }, []);
  return (
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
          className="font-bold text-lg text-[#10B981]"
        >
          <Link to="/" className="hover:text-[#34D399] transition-colors duration-200">
            {portfolioData?.name}.dev
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="hidden md:flex items-center gap-6 text-sm"
        >
          <NavLink to="/" isActive={isHomePage}>
            Home
          </NavLink>
          <NavLink to="/blogs" isActive={location.pathname === '/blogs'}>
            Blogs
          </NavLink>
          <NavLink to="/interests" isActive={location.pathname === '/interests'}>
            Interests
          </NavLink>
        </motion.nav>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <a
            href="https://drive.google.com/uc?export=download&id=1oV6w5w6oPMtN3zaqCidjTDXQfMhjIhv8"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-emerald-300/20 hover:bg-emerald-300/10 text-emerald-300 hover:text-white transition-colors duration-200"
          >
            <Download className="w-4 h-4" />
            <span>Resume</span>
          </a>

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

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute left-0 right-0 bg-[#111111] shadow-lg border-t border-gray-800 z-40"
          >
            <div className="px-4 py-3 space-y-3">
              <MobileNavLink to="/" isActive={isHomePage}>
                <Home className="w-5 h-5 mr-3" /> Home
              </MobileNavLink>
              <MobileNavLink to="/blogs" isActive={location.pathname === '/blogs'}>
                <FileText className="w-5 h-5 mr-3" /> Blogs
              </MobileNavLink>
              <MobileNavLink to="/interests" isActive={location.pathname === '/interests'}>
                <Code className="w-5 h-5 mr-3" /> Interests
              </MobileNavLink>

              <a
                href="https://drive.google.com/uc?export=download&id=1oV6w5w6oPMtN3zaqCidjTDXQfMhjIhv8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-full px-4 py-3 text-left text-gray-300 hover:bg-gray-800 rounded-lg transition-colors duration-200"
              >
                <Download className="w-5 h-5 mr-3" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

// Reusable NavLink component for desktop
const NavLink = ({ to, children, isActive }) => (
  <Link
    to={to}
    className={`hover:text-[#10B981] transition-colors duration-200 ${
      isActive ? 'text-[#10B981]' : 'text-gray-300'
    }`}
  >
    {children}
  </Link>
);

// Reusable MobileNavLink component
const MobileNavLink = ({ to, children, isActive }) => (
  <Link
    to={to}
    className={`flex items-center w-full px-4 py-3 text-left rounded-lg transition-colors duration-200 ${
      isActive
        ? 'text-[#10B981] bg-emerald-900/20'
        : 'text-gray-300 hover:bg-gray-800'
    }`}
  >
    {children}
  </Link>
);

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

function AppContent() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [mode, setMode] = useState('gui');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
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
  const toggleMode = () => {
    setMode(prevMode => {
      if (prevMode === 'gui') return 'terminal';
      if (prevMode === 'terminal') return 'ws-terminal';
      return 'gui';
    });
  };

  return (
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
              ) : mode === 'ws-terminal' ? (
                <motion.div
                  key="ws-terminal"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-screen"
                >
                  <TerminalWS onClose={switchToGui} />
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
                  <PageTransition>
                    <Routes>
                      <Route
                        path="/"
                        element={<HomePage portfolioData={portfolioData} />}
                      />
                      <Route
                        path="/blogs"
                        element={<BlogsPage portfolioData={portfolioData} />}
                      />
                      <Route
                        path="/interests"
                        element={<InterestsPage portfolioData={portfolioData} />}
                      />
                      <Route
                        path="/terminal-payment-callback"
                        element={<TerminalPaymentCallback />}
                      />
                    </Routes>
                  </PageTransition>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function App() {
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
          --primary: #10B981;
          --primary-light: #34D399;
          --primary-dark: #059669;
          --card-bg: #1a1a1a;
        }
      `}</style>

      <Router>
        <AppContent />
      </Router>
    </>
  );
}

export default App;
