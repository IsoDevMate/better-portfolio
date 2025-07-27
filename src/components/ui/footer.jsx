// import React from 'react';
// import { motion } from 'framer-motion';
// import { Github, Linkedin, Twitter, Mail, MapPin, Heart, Coffee, Code, Sparkles } from 'lucide-react';

// const Footer = ({ portfolioData }) => {
//   const socialLinks = [
//     {
//       key: 'github',
//       icon: Github,
//       url: portfolioData?.contact?.github,
//       label: 'GitHub'
//     },
//     {
//       key: 'linkedin',
//       icon: Linkedin,
//       url: portfolioData?.contact?.linkedin,
//       label: 'LinkedIn'
//     },
//     {
//       key: 'twitter',
//       icon: Twitter,
//       url: portfolioData?.contact?.twitter,
//       label: 'Twitter'
//     },
//     {
//       key: 'email',
//       icon: Mail,
//       url: `mailto:${portfolioData?.contact?.email}`,
//       label: 'Email'
//     }
//   ];

//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="relative mt-32 bg-gradient-to-t from-[#0a0a0a] via-[#111111] to-transparent border-t border-gray-800/50">
//       {/* Decorative top border */}
//       <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent"></div>

//       {/* Floating particles effect */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-emerald-300/20 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [-20, -40, -20],
//               opacity: [0.2, 0.5, 0.2],
//               scale: [1, 1.2, 1],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         {/* Main Footer Content */}
//         <div className="text-center space-y-8">
//           {/* Name and tagline */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="space-y-4"
//           >
//             <h3 className="text-2xl font-bold text-white">
//               {portfolioData?.name}
//               <span className="text-emerald-300">.dev</span>
//             </h3>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Building digital experiences that matter. Always learning, always growing, always coding.
//             </p>
//           </motion.div>

//           {/* Social Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="flex justify-center gap-6"
//           >
//             {socialLinks.map(({ key, icon: Icon, url, label }) => url && (
//               <motion.a
//                 key={key}
//                 href={url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group relative p-3 rounded-full border border-gray-700 hover:border-emerald-300/50 bg-gray-800/30 hover:bg-emerald-300/10 transition-all duration-300"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 aria-label={label}
//               >
//                 <Icon className="w-5 h-5 text-gray-400 group-hover:text-emerald-300 transition-colors duration-300" />

//                 {/* Tooltip */}
//                 <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                   <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded-md border border-gray-600">
//                     {label}
//                   </div>
//                   <div className="w-2 h-2 bg-gray-800 border-r border-b border-gray-600 transform rotate-45 absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
//                 </div>
//               </motion.a>
//             ))}
//           </motion.div>

//           {/* Location */}
//           {portfolioData?.contact?.location && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               viewport={{ once: true }}
//               className="flex items-center justify-center gap-2 text-gray-400"
//             >
//               <MapPin className="w-4 h-4 text-emerald-300" />
//               <span className="text-sm">{portfolioData.contact.location}</span>
//             </motion.div>
//           )}

//           {/* Divider */}
//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto"
//           ></motion.div>

//           {/* Bottom section */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             viewport={{ once: true }}
//             className="space-y-4"
//           >
//             {/* Fun stats or quote */}
//             <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
//               <div className="flex items-center gap-1">
//                 <Code className="w-4 h-4 text-emerald-300" />
//                 <span>Clean Code Enthusiast</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <Coffee className="w-4 h-4 text-emerald-300" />
//                 <span>Powered by Coffee</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <Sparkles className="w-4 h-4 text-emerald-300" />
//                 <span>Innovation Driven</span>
//               </div>
//             </div>

//             {/* Copyright */}
//             <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
//               <span>&copy; {currentYear} {portfolioData?.name}.</span>
//               <span>Made with</span>
//               <Heart className="w-4 h-4 text-red-400 animate-pulse" />
//               <span>and lots of</span>
//               <Coffee className="w-4 h-4 text-amber-400" />
//             </div>

//             {/* Tech stack */}
//             <p className="text-xs text-gray-600">
//               Built with React, Tailwind CSS & Framer Motion
//             </p>
//           </motion.div>
//         </div>

//         {/* Background glow effects */}
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute bottom-0 left-1/4 w-64 h-32 bg-emerald-300/5 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 right-1/4 w-64 h-32 bg-blue-300/5 rounded-full blur-3xl"></div>
//         </div>
//       </div>

//       {/* Bottom gradient */}
//       <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, MapPin, Heart, Coffee, Code, Sparkles } from 'lucide-react';

const Footer = ({ portfolioData }) => {
  const socialLinks = [
    {
      key: 'github',
      icon: Github,
      url: portfolioData?.contact?.github,
      label: 'GitHub'
    },
    {
      key: 'linkedin',
      icon: Linkedin,
      url: portfolioData?.contact?.linkedin,
      label: 'LinkedIn'
    },
    {
      key: 'twitter',
      icon: Twitter,
      url: portfolioData?.contact?.twitter,
      label: 'Twitter'
    },
    {
      key: 'email',
      icon: Mail,
      url: `mailto:${portfolioData?.contact?.email}`,
      label: 'Email'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-32 bg-gradient-to-t from-[#0a0a0a] via-[#111111] to-transparent border-t border-gray-800/50">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent"></div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-300/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="text-center space-y-8">
          {/* Name and tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white">
              {portfolioData?.name}
              <span className="text-emerald-300">.dev</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Building digital experiences that matter. Always learning, always growing, always coding.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            <a
              href="#about"
              className="text-gray-400 hover:text-emerald-300 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-400 hover:text-emerald-300 transition-colors duration-200"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-emerald-300 transition-colors duration-200"
            >
              Projects
            </a>
            <Link
              to="/blogs"
              className="text-emerald-300 hover:text-emerald-200 transition-colors duration-200 font-medium"
            >
              My Blogs
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map(({ key, icon: Icon, url, label }) => url && (
              <motion.a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full border border-gray-700 hover:border-emerald-300/50 bg-gray-800/30 hover:bg-emerald-300/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-emerald-300 transition-colors duration-300" />

                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded-md border border-gray-600">
                    {label}
                  </div>
                  <div className="w-2 h-2 bg-gray-800 border-r border-b border-gray-600 transform rotate-45 absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Location */}
          {portfolioData?.contact?.location && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 text-gray-400"
            >
              <MapPin className="w-4 h-4 text-emerald-300" />
              <span className="text-sm">{portfolioData.contact.location}</span>
            </motion.div>
          )}

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto"
          ></motion.div>

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Fun stats or quote */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Code className="w-4 h-4 text-emerald-300" />
                <span>Clean Code Enthusiast</span>
              </div>
              <div className="flex items-center gap-1">
                <Coffee className="w-4 h-4 text-emerald-300" />
                <span>Powered by Coffee</span>
              </div>
              <div className="flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-emerald-300" />
                <span>Innovation Driven</span>
              </div>
            </div>

            {/* Copyright */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <span>&copy; {currentYear} {portfolioData?.name}.</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>and lots of</span>
              <Coffee className="w-4 h-4 text-amber-400" />
            </div>

            {/* Tech stack */}
            <p className="text-xs text-gray-600">
              Built with React, Tailwind CSS & Framer Motion
            </p>
          </motion.div>
        </div>

        {/* Background glow effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-1/4 w-64 h-32 bg-emerald-300/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-32 bg-blue-300/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
    </footer>
  );
};

export default Footer;
