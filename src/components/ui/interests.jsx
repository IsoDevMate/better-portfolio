// // import React from 'react';
// // import CardMe from '@/components/ui/cardme';
// // import { Badge } from '@/components/ui/badge';

// // const Interests = ({ items }) => (
// //     <CardMe title="Interests & Activities">
// //         <div className="flex flex-wrap gap-2">
// //             {items?.map((interest) => (
// //                 <Badge key={interest} variant="outline" className="border-gray-600 text-gray-300 text-xs">{interest}</Badge>
// //             ))}
// //         </div>
// //     </CardMe>
// // );

// // export default Interests;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { Code2, BookOpen, Lightbulb, Coffee, Rocket, Brain, Globe, Heart, Zap, Target, TrendingUp, Puzzle, ArrowLeft, ExternalLink } from 'lucide-react';
// import { Badge } from '@/components/ui/badge';
// import { Link } from 'react-router-dom';

// const InterestsPage = ({ portfolioData }) => {
//   const interests = [
//     {
//       id: 1,
//       category: "Coding & Development",
//       icon: Code2,
//       description: "Building end-to-end solutions with modern web technologies and exploring cutting-edge development practices.",
//       highlights: [
//         "Full Stack Development with React & Node.js",
//         "API Design & GraphQL Architecture",
//         "Cloud Architecture on AWS",
//         "IoT Integration & Real-time Systems"
//       ],
//       gradient: "from-emerald-300/20 via-green-400/10 to-teal-300/20"
//     },
//     {
//       id: 2,
//       category: "Technical Writing",
//       icon: BookOpen,
//       description: "Breaking down complex technical concepts into clear, beginner-friendly content that actually helps developers grow.",
//       highlights: [
//         "Educational Content for Kodaschool",
//         "Step-by-step Development Tutorials",
//         "API Documentation & Guides",
//         "Open Source Contributions"
//       ],
//       gradient: "from-blue-300/20 via-indigo-400/10 to-purple-300/20"
//     },
//     {
//       id: 3,
//       category: "Tech Discovery",
//       icon: Lightbulb,
//       description: "Always exploring what's next in the tech landscape - from emerging frameworks to innovative development tools.",
//       highlights: [
//         "Emerging Technologies Research",
//         "Developer Tools & Productivity",
//         "Industry Trends Analysis",
//         "Technology Experimentation"
//       ],
//       gradient: "from-amber-300/20 via-yellow-400/10 to-orange-300/20"
//     }
//   ];

//   const books = [
//     {
//       title: "Atomic Habits",
//       author: "James Clear",
//       impact: "Transformed how I approach skill building and consistency in coding",
//       category: "Self-Improvement",
//       gradient: "from-green-400/10 to-emerald-400/10"
//     },
//     {
//       title: "Rich Dad Poor Dad",
//       author: "Robert Kiyosaki",
//       impact: "Shifted my perspective on building sustainable income through tech",
//       category: "Finance",
//       gradient: "from-blue-400/10 to-cyan-400/10"
//     },
//     {
//       title: "The API-First Transformation",
//       author: "Various Authors",
//       impact: "Deepened my understanding of modern API design principles",
//       category: "Technology",
//       gradient: "from-purple-400/10 to-indigo-400/10"
//     },
//     {
//       title: "48 Laws of Power",
//       author: "Robert Greene",
//       impact: "Strategic thinking and professional navigation insights",
//       category: "Strategy",
//       gradient: "from-red-400/10 to-pink-400/10"
//     },
//     {
//       title: "Pride and Prejudice",
//       author: "Jane Austen",
//       impact: "Appreciation for timeless storytelling and character development",
//       category: "Literature",
//       gradient: "from-amber-400/10 to-yellow-400/10"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]">
//       {/* Background effects */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-300/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <div className="flex items-center justify-center gap-4 mb-8">
//             <motion.div whileHover={{ x: -5 }}>
//               <Link
//                 to="/"
//                 className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition-colors duration-200"
//               >
//                 <ArrowLeft className="w-4 h-4" />
//                 <span className="text-sm">Back to Portfolio</span>
//               </Link>
//             </motion.div>
//           </div>

//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
//             What I <span className="text-emerald-300">Love</span> Doing
//           </h1>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//             Beyond the code and keyboards, here's what drives my passion for technology and continuous learning.
//           </p>
//         </motion.div>

//         {/* Main Interests Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
//           {interests.map((interest, index) => {
//             const IconComponent = interest.icon;

//             return (
//               <motion.div
//                 key={interest.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-emerald-300/30 transition-all duration-500"
//               >
//                 {/* Header with gradient */}
//                 <div className={`relative h-32 bg-gradient-to-br ${interest.gradient} overflow-hidden`}>
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>

//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-16 h-16 border-2 border-emerald-300/30 rounded-xl flex items-center justify-center group-hover:border-emerald-300/50 transition-colors duration-300">
//                       <IconComponent className="w-8 h-8 text-emerald-300/80" />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
//                     {interest.category}
//                   </h3>

//                   <p className="text-gray-300 text-sm leading-relaxed mb-6">
//                     {interest.description}
//                   </p>

//                   {/* Highlights */}
//                   <div className="space-y-2">
//                     {interest.highlights.map((highlight, idx) => (
//                       <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
//                         <div className="w-1 h-1 bg-emerald-300/60 rounded-full"></div>
//                         <span>{highlight}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Hover glow effect */}
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-300/0 via-emerald-300/5 to-emerald-300/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Books Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           className="mb-20"
//         >
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               Books That <span className="text-emerald-300">Shaped</span> My Thinking
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Reading across different domains to build a well-rounded perspective on technology, business, and life.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {books.map((book, index) => (
//               <motion.div
//                 key={book.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-emerald-300/30 transition-all duration-500"
//               >
//                 {/* Book header */}
//                 <div className={`relative h-24 bg-gradient-to-br ${book.gradient} overflow-hidden`}>
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>

//                   {/* Category badge */}
//                   <div className="absolute top-3 right-3">
//                     <Badge
//                       variant="secondary"
//                       className="bg-emerald-300/20 text-emerald-200 border-emerald-300/30 text-xs"
//                     >
//                       {book.category}
//                     </Badge>
//                   </div>

//                   {/* Book icon */}
//                   <div className="absolute bottom-3 left-4">
//                     <BookOpen className="w-6 h-6 text-emerald-300/80" />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-5">
//                   <h3 className="font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors duration-300">
//                     {book.title}
//                   </h3>
//                   <p className="text-sm text-gray-400 mb-3">by {book.author}</p>
//                   <p className="text-sm text-gray-300 leading-relaxed">
//                     {book.impact}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 1.2 }}
//           className="text-center p-8 bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl"
//         >
//           <Coffee className="w-12 h-12 text-emerald-300 mx-auto mb-4" />
//           <h3 className="text-2xl font-bold text-white mb-4">Let's Connect Over Shared Interests</h3>
//           <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
//             Have a book recommendation, cool tech discovery, or just want to chat about code? I'd love to hear from you!
//           </p>
//           <motion.a
//             href={`mailto:${portfolioData?.contact?.email}`}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-300/10 hover:bg-emerald-300/20 border border-emerald-300/30 hover:border-emerald-300/50 rounded-lg text-emerald-300 hover:text-emerald-200 font-medium transition-all duration-300"
//           >
//             <Coffee className="w-4 h-4" />
//             Get In Touch
//             <ExternalLink className="w-4 h-4" />
//           </motion.a>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default InterestsPage;



// import React from 'react';
// import { motion } from 'framer-motion';
// import { Code2, BookOpen, Lightbulb, Coffee, Rocket, Brain, Globe, Heart, Zap, Target, TrendingUp, Puzzle, ArrowLeft, ExternalLink } from 'lucide-react';
// import { Badge } from '@/components/ui/badge';
// import { Link } from 'react-router-dom';

// // Import book cover images (assuming they're in your assets folder)
// import atomicHabitsCover from '../../assets/atomic_habits.jpg';
// import richDadCover from '../../assets/rich.webp';
// import apiFirstCover from '../../assets/API_First.webp';
// import powerLawsCover from '../../assets/48laws.webp';
// import pridePrejudiceCover from '../../assets/Pride-and-Prejudice.webp';
// import dataintesiveapps from '../../assets/dda.jpeg';

// const InterestsPage = ({ portfolioData }) => {
//   const learningJourney = [
//     {
//       title: "Dependency Injection",
//       description: "Mastered through building Spring Boot applications and seeing its power in NestJS",
//       icon: Puzzle,
//       color: "text-purple-400"
//     },
//     {
//       title: "API Design",
//       description: "Deep dive into REST, GraphQL (including federation), and tRPC patterns",
//       icon: Code2,
//       color: "text-emerald-400"
//     },
//     {
//       title: "SOLID Principles",
//       description: "Applied in TypeScript/Java projects leading to more maintainable code",
//       icon: Brain,
//       color: "text-blue-400"
//     },
//     {
//       title: "Financial Literacy",
//       description: "Transformed my approach to income and investments after Rich Dad Poor Dad",
//       icon: TrendingUp,
//       color: "text-yellow-400"
//     },
//     {
//       title: "Piano",
//       description: "New passion where I apply the same deliberate practice approach as with coding",
//       icon: Heart,
//       color: "text-pink-400"
//     },
//     {
//       title: "Atomic Habits",
//       description: "System for continuous improvement applied to both tech skills and personal growth",
//       icon: Zap,
//       color: "text-green-400"
//     }
//   ];

//   const books = [
//     {
//       title: "Atomic Habits",
//       author: "James Clear",
//       impact: "Transformed how I approach skill building and consistency in coding",
//       category: "Self-Improvement",
//       cover: atomicHabitsCover,
//       gradient: "from-green-400/10 to-emerald-400/10"
//     },
//     {
//       title: "Rich Dad Poor Dad",
//       author: "Robert Kiyosaki",
//       impact: "Shifted my perspective on building sustainable income through tech",
//       category: "Finance",
//       cover: richDadCover,
//       gradient: "from-blue-400/10 to-cyan-400/10"
//     },
//     {
//       title: "The API-First Transformation",
//       author: "Various Authors",
//       impact: "Deepened my understanding of modern API design principles",
//       category: "Technology",
//       cover: apiFirstCover,
//       gradient: "from-purple-400/10 to-indigo-400/10"
//     },
//     {
//       title: "48 Laws of Power",
//       author: "Robert Greene",
//       impact: "Strategic thinking and professional navigation insights",
//       category: "Strategy",
//       cover: powerLawsCover,
//       gradient: "from-red-400/10 to-pink-400/10"
//     },
//     {
//       title: "Pride and Prejudice",
//       author: "Jane Austen",
//       impact: "Appreciation for timeless storytelling and character development",
//       category: "Literature",
//       cover: pridePrejudiceCover,
//       gradient: "from-amber-400/10 to-yellow-400/10"
//     }
//   ];

//   const dailyRoutine = [
//     {
//       time: "Morning",
//       activities: [
//         "Code review & planning",
//         "Reading technical articles",
//         "Piano practice"
//       ],
//       icon: Globe,
//       color: "text-amber-400"
//     },
//     {
//       time: "Afternoon",
//       activities: [
//         "Deep work sessions",
//         "Building projects",
//         "Writing documentation"
//       ],
//       icon: Target,
//       color: "text-blue-400"
//     },
//     {
//       time: "Evening",
//       activities: [
//         "Reflection journal",
//         "Light technical reading",
//         "Skill maintenance"
//       ],
//       icon: Heart,
//       color: "text-purple-400"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]">
//       {/* Background effects */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-300/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <div className="flex items-center justify-center gap-4 mb-8">
//             <motion.div whileHover={{ x: -5 }}>
//               <Link
//                 to="/"
//                 className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition-colors duration-200"
//               >
//                 <ArrowLeft className="w-4 h-4" />
//                 <span className="text-sm">Back to Portfolio</span>
//               </Link>
//             </motion.div>
//           </div>

//           <motion.h1
//             className="text-5xl md:text-6xl font-bold text-white mb-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             My <span className="text-emerald-300">Learning</span> Universe
//           </motion.h1>
//           <motion.p
//             className="text-xl text-gray-400 max-w-3xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             Beyond code - the concepts, habits, and systems that shape my approach to technology and life.
//           </motion.p>
//         </motion.div>

//         {/* Learning Journey */}
//         <motion.section
//           className="mb-20"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               Core <span className="text-emerald-300">Concepts</span> I'm Passionate About
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               These are the technical and philosophical concepts that currently shape my thinking and work.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {learningJourney.map((item, index) => {
//               const Icon = item.icon;
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-emerald-300/30 p-6 transition-all duration-500"
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className={`p-3 rounded-lg bg-gray-800/50 ${item.color} bg-opacity-20`}>
//                       <Icon className="w-6 h-6" />
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
//                         {item.title}
//                       </h3>
//                       <p className="text-sm text-gray-300 leading-relaxed">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-300/0 via-emerald-300/5 to-emerald-300/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </motion.section>

//         {/* Daily Routine */}
//         <motion.section
//           className="mb-20"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               Daily <span className="text-emerald-300">Rhythms</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               How I structure my day to balance deep work, learning, and personal growth.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {dailyRoutine.map((timeBlock, index) => {
//               const Icon = timeBlock.icon;
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-emerald-300/30 p-6 transition-all duration-500"
//                 >
//                   <div className="flex flex-col h-full">
//                     <div className="flex items-center gap-3 mb-4">
//                       <div className={`p-2 rounded-lg ${timeBlock.color} bg-opacity-20`}>
//                         <Icon className="w-5 h-5" />
//                       </div>
//                       <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
//                         {timeBlock.time}
//                       </h3>
//                     </div>
//                     <ul className="space-y-3 flex-grow">
//                       {timeBlock.activities.map((activity, i) => (
//                         <li key={i} className="flex items-start gap-2">
//                           <div className="w-1.5 h-1.5 mt-2 rounded-full bg-emerald-300/60"></div>
//                           <span className="text-sm text-gray-300">{activity}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-300/0 via-emerald-300/5 to-emerald-300/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </motion.section>

        // {/* Books Section */}
        // <motion.section
        //   initial={{ opacity: 0 }}
        //   whileInView={{ opacity: 1 }}
        //   viewport={{ once: true }}
        //   transition={{ duration: 0.8, delay: 0.4 }}
        //   className="mb-20"
        // >
        //   <div className="text-center mb-12">
        //     <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        //       Books That <span className="text-emerald-300">Shaped</span> My Thinking
        //     </h2>
        //     <p className="text-gray-400 max-w-2xl mx-auto">
        //       Reading across different domains to build a well-rounded perspective on technology, business, and life.
        //     </p>
        //   </div>

        //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        //     {books.map((book, index) => (
        //       <motion.div
        //         key={book.title}
        //         initial={{ opacity: 0, scale: 0.95 }}
        //         whileInView={{ opacity: 1, scale: 1 }}
        //         viewport={{ once: true }}
        //         transition={{ duration: 0.5, delay: index * 0.1 }}
        //         className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-emerald-300/30 transition-all duration-300 hover:-translate-y-1"
        //       >
        //         {/* Book cover */}
        //         <div className="h-48 overflow-hidden">
        //           <img
        //             src={book.cover}
        //             alt={book.title}
        //             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        //           />
        //           <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
        //         </div>

        //         {/* Content */}
        //         <div className="p-4">
        //           <h3 className="font-medium text-white text-sm mb-1 group-hover:text-emerald-300 transition-colors duration-300 line-clamp-1">
        //             {book.title}
        //           </h3>
        //           <p className="text-xs text-gray-400 mb-2">by {book.author}</p>
        //           <p className="text-xs text-gray-300 leading-relaxed line-clamp-2">
        //             {book.impact}
        //           </p>
        //         </div>

        //         {/* Category badge */}
        //         <div className="absolute top-3 right-3">
        //           <Badge
        //             variant="secondary"
        //             className="bg-emerald-300/20 text-emerald-200 border-emerald-300/30 text-xs"
        //           >
        //             {book.category}
        //           </Badge>
        //         </div>
        //       </motion.div>
        //     ))}
        //   </div>
        // </motion.section>

        // {/* Call to Action */}
        // <motion.div
        //   initial={{ opacity: 0, y: 30 }}
        //   whileInView={{ opacity: 1, y: 0 }}
        //   viewport={{ once: true }}
        //   transition={{ duration: 0.6, delay: 0.6 }}
        //   className="text-center p-8 bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl"
        // >
        //   <Coffee className="w-12 h-12 text-emerald-300 mx-auto mb-4" />
        //   <h3 className="text-2xl font-bold text-white mb-4">Let's Connect Over Shared Interests</h3>
        //   <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
        //     Have a book recommendation, want to discuss dependency injection patterns, or just chat about tech? I'd love to hear from you!
        //   </p>
        //   <motion.a
        //     href={`mailto:${portfolioData?.contact?.email}`}
        //     whileHover={{ scale: 1.05 }}
        //     whileTap={{ scale: 0.95 }}
        //     className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-300/10 hover:bg-emerald-300/20 border border-emerald-300/30 hover:border-emerald-300/50 rounded-lg text-emerald-300 hover:text-emerald-200 font-medium transition-all duration-300"
        //   >
        //     <Coffee className="w-4 h-4" />
        //     Get In Touch
        //     <ExternalLink className="w-4 h-4" />
        //   </motion.a>
        // </motion.div>
//       </div>
//     </div>
//   );
// };

// export default InterestsPage;

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, BookOpen, Coffee, Rocket, Brain, ArrowLeft, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

// Import book cover images
import atomicHabitsCover from '../../assets/atomic_habits.jpg';
import richDadCover from '../../assets/rich.webp';
import apiFirstCover from '../../assets/API_First.webp';
import powerLawsCover from '../../assets/48laws.webp';
import pridePrejudiceCover from '../../assets/Pride-and-Prejudice.webp';
import dataintesiveapps from '../../assets/dda.jpeg';
import DI from '../../assets/ioc-and-mapper-in-c-1-638.webp';

const InterestsPage = ({ portfolioData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef();

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === passions.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const passions = [
    {
      id: 1,
      title: "Dependency Injection",
      description: "Mastering Spring Boot's DI patterns and applying them in NestJS for cleaner, more testable code",
      icon: Rocket,
      color: "text-purple-400",
      image: DI
    },
    {
      id: 2,
      title: "API Design",
      description: "Exploring REST, GraphQL federation, and tRPC patterns for optimal API architecture",
      icon: Code2,
      color: "text-emerald-400",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      title: "SOLID Principles",
      description: "Applying these foundational OOP principles in TypeScript/Java for maintainable systems",
      icon: Brain,
      color: "text-blue-400",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 4,
      title: "Financial Literacy",
      description: "Implementing lessons from Rich Dad Poor Dad into my tech career and investments",
      icon: BookOpen,
      color: "text-yellow-400",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 5,
      title: "Continuous Learning",
      description: "Using Atomic Habits principles to systematically improve my technical skills",
      icon: Rocket,
      color: "text-green-400",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      impact: "Transformed my approach to skill building and consistency",
      category: "Self-Improvement",
      cover: atomicHabitsCover
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      impact: "Changed my perspective on building wealth through tech",
      category: "Finance",
      cover: richDadCover
    },
    {
      title: "The API-First Transformation",
      author: "Various Authors",
      impact: "Deepened my API design and architecture knowledge",
      category: "Technology",
      cover: apiFirstCover
    },
    {
      title: "48 Laws of Power",
      author: "Robert Greene",
      impact: "Improved my strategic thinking in professional settings",
      category: "Strategy",
      cover: powerLawsCover
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      impact: "Appreciation for classic literature and storytelling",
      category: "Literature",
      cover: pridePrejudiceCover
    },
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      impact: "Fundamentally changed how I design distributed systems",
      category: "Technology",
      cover: dataintesiveapps
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-300/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
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

          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            My <span className="text-emerald-300">Passions</span> & Interests
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            The concepts, technologies, and philosophies that drive my work and learning
          </motion.p>
        </motion.div>

        {/* Passion Carousel */}
        <motion.section
          className="mb-24 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technical <span className="text-emerald-300">Passions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Areas I'm deeply invested in and constantly exploring
            </p>
          </div>

          <div className="relative h-[32rem] w-full overflow-hidden rounded-2xl">
            <div className="absolute inset-0 flex">
              {passions.map((passion, index) => {
                const distance = Math.abs(index - activeIndex);
                const scale = distance === 0 ? 1 : 1 - (distance * 0.2);
                const opacity = distance === 0 ? 1 : 0.7 - (distance * 0.3);
                const zIndex = passions.length - distance;
                const xPos = (index - activeIndex) * 40;
                const Icon = passion.icon;

                return (
                  <motion.div
                    key={passion.id}
                    className={`absolute inset-0 bg-gray-900 rounded-2xl overflow-hidden ${index === activeIndex ? 'cursor-default' : 'cursor-pointer'}`}
                    style={{
                      scale,
                      opacity,
                      zIndex,
                      x: `${xPos}%`,
                      backgroundImage: `url(${passion.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      width: '85%',
                      left: '7.5%',
                      boxShadow: index === activeIndex ? '0 25px 50px -12px rgba(16, 185, 129, 0.25)' : 'none',
                      willChange: 'transform, opacity' // Optimize for animations
                    }}
                    initial={false} // Prevent initial animation flash
                    animate={{
                      scale,
                      opacity,
                      x: `${xPos}%`
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 25,
                      mass: 0.5
                    }}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg ${passion.color} bg-opacity-20`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{passion.title}</h3>
                      </div>
                      <p className="text-gray-300 max-w-lg">{passion.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {passions.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-emerald-400 w-6' : 'bg-gray-600'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.section>

        {/* Books Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24 relative"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Books That <span className="text-emerald-300">Shaped</span> Me
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Foundational reading that has influenced my technical and personal growth
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-8">
              {books.map((book, index) => (
                <motion.div
                  key={book.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-emerald-300/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-white text-sm mb-1 group-hover:text-emerald-300 transition-colors duration-300 line-clamp-1">
                      {book.title}
                    </h3>
                    <p className="text-xs text-gray-400 mb-2">by {book.author}</p>
                    <Badge
                      variant="secondary"
                      className="bg-emerald-300/10 text-emerald-200 border-emerald-300/20 text-xs"
                    >
                      {book.category}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center p-8 bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl mb-16"
        >
          <Coffee className="w-12 h-12 text-emerald-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Let's Connect Over Shared Interests</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Have a book recommendation, want to discuss dependency injection patterns, or just chat about tech? I'd love to hear from you!
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
