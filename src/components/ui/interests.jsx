// import React from 'react';
// import CardMe from '@/components/ui/cardme';
// import { Badge } from '@/components/ui/badge';

// const Interests = ({ items }) => (
//     <CardMe title="Interests & Activities">
//         <div className="flex flex-wrap gap-2">
//             {items?.map((interest) => (
//                 <Badge key={interest} variant="outline" className="border-gray-600 text-gray-300 text-xs">{interest}</Badge>
//             ))}
//         </div>
//     </CardMe>
// );

// export default Interests;


import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BookOpen, Lightbulb, Coffee, Rocket, Brain, Globe, Heart, Zap, Target, TrendingUp, Puzzle, ArrowLeft, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const InterestsPage = ({ portfolioData }) => {
  const interests = [
    {
      id: 1,
      category: "Coding & Development",
      icon: Code2,
      description: "Building end-to-end solutions with modern web technologies and exploring cutting-edge development practices.",
      highlights: [
        "Full Stack Development with React & Node.js",
        "API Design & GraphQL Architecture",
        "Cloud Architecture on AWS",
        "IoT Integration & Real-time Systems"
      ],
      gradient: "from-emerald-300/20 via-green-400/10 to-teal-300/20"
    },
    {
      id: 2,
      category: "Technical Writing",
      icon: BookOpen,
      description: "Breaking down complex technical concepts into clear, beginner-friendly content that actually helps developers grow.",
      highlights: [
        "Educational Content for Kodaschool",
        "Step-by-step Development Tutorials",
        "API Documentation & Guides",
        "Open Source Contributions"
      ],
      gradient: "from-blue-300/20 via-indigo-400/10 to-purple-300/20"
    },
    {
      id: 3,
      category: "Tech Discovery",
      icon: Lightbulb,
      description: "Always exploring what's next in the tech landscape - from emerging frameworks to innovative development tools.",
      highlights: [
        "Emerging Technologies Research",
        "Developer Tools & Productivity",
        "Industry Trends Analysis",
        "Technology Experimentation"
      ],
      gradient: "from-amber-300/20 via-yellow-400/10 to-orange-300/20"
    }
  ];

  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      impact: "Transformed how I approach skill building and consistency in coding",
      category: "Self-Improvement",
      gradient: "from-green-400/10 to-emerald-400/10"
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      impact: "Shifted my perspective on building sustainable income through tech",
      category: "Finance",
      gradient: "from-blue-400/10 to-cyan-400/10"
    },
    {
      title: "The API-First Transformation",
      author: "Various Authors",
      impact: "Deepened my understanding of modern API design principles",
      category: "Technology",
      gradient: "from-purple-400/10 to-indigo-400/10"
    },
    {
      title: "48 Laws of Power",
      author: "Robert Greene",
      impact: "Strategic thinking and professional navigation insights",
      category: "Strategy",
      gradient: "from-red-400/10 to-pink-400/10"
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      impact: "Appreciation for timeless storytelling and character development",
      category: "Literature",
      gradient: "from-amber-400/10 to-yellow-400/10"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-300/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.div whileHover={{ x: -5 }}>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to Portfolio</span>
              </Link>
            </motion.div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            What I <span className="text-emerald-300">Love</span> Doing
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Beyond the code and keyboards, here's what drives my passion for technology and continuous learning.
          </p>
        </motion.div>

        {/* Main Interests Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {interests.map((interest, index) => {
            const IconComponent = interest.icon;

            return (
              <motion.div
                key={interest.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-emerald-300/30 transition-all duration-500"
              >
                {/* Header with gradient */}
                <div className={`relative h-32 bg-gradient-to-br ${interest.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-emerald-300/30 rounded-xl flex items-center justify-center group-hover:border-emerald-300/50 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-emerald-300/80" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                    {interest.category}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {interest.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {interest.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                        <div className="w-1 h-1 bg-emerald-300/60 rounded-full"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-300/0 via-emerald-300/5 to-emerald-300/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Books Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Books That <span className="text-emerald-300">Shaped</span> My Thinking
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Reading across different domains to build a well-rounded perspective on technology, business, and life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-emerald-300/30 transition-all duration-500"
              >
                {/* Book header */}
                <div className={`relative h-24 bg-gradient-to-br ${book.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>

                  {/* Category badge */}
                  <div className="absolute top-3 right-3">
                    <Badge
                      variant="secondary"
                      className="bg-emerald-300/20 text-emerald-200 border-emerald-300/30 text-xs"
                    >
                      {book.category}
                    </Badge>
                  </div>

                  {/* Book icon */}
                  <div className="absolute bottom-3 left-4">
                    <BookOpen className="w-6 h-6 text-emerald-300/80" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors duration-300">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">by {book.author}</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {book.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center p-8 bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl"
        >
          <Coffee className="w-12 h-12 text-emerald-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Let's Connect Over Shared Interests</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Have a book recommendation, cool tech discovery, or just want to chat about code? I'd love to hear from you!
          </p>
          <motion.a
            href={`mailto:${portfolioData?.contact?.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-300/10 hover:bg-emerald-300/20 border border-emerald-300/30 hover:border-emerald-300/50 rounded-lg text-emerald-300 hover:text-emerald-200 font-medium transition-all duration-300"
          >
            <Coffee className="w-4 h-4" />
            Get In Touch
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default InterestsPage;
