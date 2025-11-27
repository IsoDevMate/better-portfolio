import React from 'react';
import { motion } from 'framer-motion';

// Import all your images
import springIcon from '../../assets/spring-icon.svg';
import awsIcon from '../../assets/aws.svg';
import flutterIcon from '../../assets/flutter.svg';
import postgresqlIcon from '../../assets/postgresql.svg';
import reactIcon from '../../assets/react.svg';
import nestjsIcon from '../../assets/nestjs.svg';
import graphqlIcon from '../../assets/graphql.svg';
import typescriptIcon from '../../assets/typescript-icon.svg';
import javaIcon from '../../assets/java.svg';
import githubActionsIcon from '../../assets/github-actions.svg';
import dockerIcon from '../../assets/docker.svg';

const icons = [
  {
    name: 'Spring',
    src: springIcon, // ✅ FIXED - using imported variable
    x: '20%',
    y: '15%',
    duration: 14,
    hoverColor: '#6db33f'
  },
  {
    name: 'AWS',
    src: awsIcon, // ✅ FIXED
    x: '50%',
    y: '10%',
    duration: 9,
    hoverColor: '#ff9900'
  },
  {
    name: 'Flutter',
    src: flutterIcon, // ✅ FIXED
    x: '80%',
    y: '15%',
    duration: 9,
    hoverColor: '#02569b'
  },
  {
    name: 'PostgreSQL',
    src: postgresqlIcon, // ✅ FIXED
    x: '95%',
    y: '55%',
    duration: 12,
    hoverColor: '#336791'
  },
  {
    name: 'React',
    src: reactIcon, // ✅ FIXED
    x: '10%',
    y: '35%',
    duration: 10,
    hoverColor: '#61dafb'
  },
  {
    name: 'NestJS',
    src: nestjsIcon, // ✅ FIXED
    x: '5%',
    y: '55%',
    duration: 10,
    hoverColor: '#e0234e'
  },
  {
    name: 'GraphQL',
    src: graphqlIcon, // ✅ FIXED
    x: '15%',
    y: '75%',
    duration: 14,
    hoverColor: '#e10098'
  },
  {
    name: 'TypeScript',
    src: typescriptIcon, // ✅ FIXED
    x: '90%',
    y: '35%',
    duration: 12,
    hoverColor: '#3178c6'
  },
  {
    name: 'Java',
    src: javaIcon, // ✅ FIXED
    x: '85%',
    y: '75%',
    duration: 8,
    hoverColor: '#f89820'
  },
  {
    name: 'GitHub Actions',
    src: githubActionsIcon, // ✅ FIXED
    x: '25%',
    y: '85%',
    duration: 10,
    hoverColor: '#2088ff'
  },
  {
    name: 'Docker',
    src: dockerIcon, // ✅ FIXED
    x: '75%',
    y: '85%',
    duration: 13,
    hoverColor: '#2496ed'
  }
];


const TechIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none sm:pointer-events-auto">
      {icons.map((icon, index) => {
        return (
          <motion.div
            key={icon.name}
            className="absolute cursor-pointer"
            style={{
              top: icon.y,
              left: icon.x,
              transform: 'translate(-50%, -50%)', // Center the icon on its coordinates
            }}
            initial={{
              opacity: 0,
              scale: 0,
              y: 50
            }}
            animate={{
              opacity: 0.7, // Slightly reduced opacity for subtlety
              scale: 1,
              y: 0
            }}
            transition={{
              delay: index * 0.15, // Slightly longer delay for smoother sequence
              duration: 0.8,
              ease: "easeOut"
            }}
            whileHover={{
              scale: 1.4,
              opacity: 1,
              transition: { duration: 0.2 }
            }}
            title={icon.name}
          >
            <motion.div
              animate={{
                y: [0, -15, 0], // Reduced floating distance
                rotate: [0, 3, -3, 0] // Reduced rotation
              }}
              transition={{
                delay: index * 0.15 + 0.8,
                duration: icon.duration,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
              whileHover={{
                filter: [`drop-shadow(0 0 16px ${icon.hoverColor}80)`],
                transition: { duration: 0.2 }
              }}
            >
              <motion.img
                src={icon.src}
                alt={icon.name}
                width={40} // Slightly smaller icons
                height={40}
                className="w-10 h-10 object-contain" // Updated size classes
                style={{
                  filter: 'brightness(0.9)', // Just slightly dimmed, keeping original colors
                }}
                whileHover={{
                  filter: 'brightness(1.1)', // Slightly brighter on hover
                  transition: { duration: 0.2 }
                }}
              />
            </motion.div>

            {/* Enhanced Tooltip */}
            <motion.div
              className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-1.5 rounded-md opacity-0 pointer-events-none whitespace-nowrap z-10 border border-gray-600"
              whileHover={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {icon.name}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45 border-l border-t border-gray-600"></div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Optional: Add some subtle connecting lines or geometric shapes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
        <defs>
          <radialGradient id="iconGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Subtle background pattern */}
        <circle cx="50%" cy="50%" r="45%" fill="url(#iconGradient)" />
        <circle cx="50%" cy="50%" r="35%" fill="none" stroke="#10B981" strokeWidth="1" strokeOpacity="0.1" />
        <circle cx="50%" cy="50%" r="25%" fill="none" stroke="#10B981" strokeWidth="1" strokeOpacity="0.05" />
      </svg>
    </div>
  );
};

export default TechIcons;
