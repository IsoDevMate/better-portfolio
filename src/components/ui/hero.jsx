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
        <div className="relative pt-24 pb-12">
            <TechIcons />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10">
                <div className="bg-[#2a2a2a] p-8 rounded-lg shadow-2xl w-full max-w-md border border-gray-700">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full mb-4 bg-gray-700 flex items-center justify-center">
                            {profilePictureUrl ? (
                                <img src={profilePictureUrl} alt={name} className="w-full h-full rounded-full object-cover" />
                            ) : (
                                <UserCircle className="w-20 h-20 text-gray-500" />
                            )}
                        </div>
                        <h1 className="text-3xl font-bold text-white">{name}</h1>
                        <h2 className="text-xl font-medium text-amber-300 mt-1">{title}</h2>
                        <p className="text-gray-300 mt-4 text-sm max-w-xs">{bio}</p>
                    </div>
                    <div className="mt-6 space-y-3 text-sm">
                        {socialLinks.map(({ key, icon: Icon }) => contact[key] && (
                            <div key={key} className="flex items-center gap-3 text-gray-400">
                                <Icon className="w-4 h-4 text-amber-300" />
                                <span>{contact[key]}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
