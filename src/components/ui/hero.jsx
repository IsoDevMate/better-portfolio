

import React from 'react';
import { Mail, Twitter, Github, Linkedin, MapPin, UserCircle } from 'lucide-react';
import TechIcons from './techicons';

const socialLinks = [
    { key: 'email', icon: Mail },
    { key: 'twitter', icon: Twitter },
    { key: 'github', icon: Github },
    { key: 'linkedin', icon: Linkedin },
    { key: 'location', icon: MapPin },
];

const Hero = ({ name, title, bio, contact, profilePictureUrl }) => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Tech Icons Background */}
            <TechIcons />

            {/* Main Content - Centered in viewport */}
            <div className="relative z-20 flex flex-col items-center justify-center">
                <div className="bg-[#2a2a2a]/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-700 hover:border-gray-600 transition-all duration-300">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full mb-4 bg-gray-700 flex items-center justify-center border-2 border-emerald-300/20">
                            {profilePictureUrl ? (
                                <img
                                    src={profilePictureUrl}
                                    alt={name}
                                    className="w-full h-full rounded-full object-cover"
                                />
                            ) : (
                                <UserCircle className="w-20 h-20 text-gray-500" />
                            )}
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">{name}</h1>
                        <h2 className="text-xl font-medium text-emerald-300 mb-4">{title}</h2>
                        <p className="text-gray-300 text-sm max-w-xs leading-relaxed">{bio}</p>
                    </div>

                    <div className="mt-6 space-y-3 text-sm">
                        {socialLinks.map(({ key, icon: Icon }) => contact[key] && (
                            <div key={key} className="flex items-center gap-3 text-gray-400 hover:text-emerald-300 transition-colors duration-200">
                                <Icon className="w-4 h-4 text-emerald-300" />
                                <span className="truncate">{contact[key]}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="mt-8 flex flex-col items-center text-gray-400">
                    <span className="text-xs mb-2">Scroll to explore</span>
                    <div className="w-px h-8 bg-gradient-to-b from-emerald-300 to-transparent"></div>
                </div>
            </div>

            {/* Background glow effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-300/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-300/5 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
};

export default Hero;
