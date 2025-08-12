
import React, { useState } from 'react';
import { Mail, Twitter, Github, Linkedin, MapPin, UserCircle, Terminal, ArrowRight } from 'lucide-react';
import TechIcons from './techicons';
import { SponsorButton, SponsorModal, SponsorSuccess } from './sponsor';

const generateContactUrl = (key, value) => {
    switch (key) {
        case 'email':
            return `mailto:${value}`;
        case 'twitter':
            // Handle both @username and full URLs
            if (value.startsWith('http')) return value;
            const username = value.replace('@', '');
            return `https://twitter.com/${username}`;
        case 'github':
            // Handle both username and full URLs
            if (value.startsWith('http')) return value;
            const githubUsername = value.replace(/^@?/, '');
            return `https://github.com/${githubUsername}`;
        case 'linkedin':
            // Handle both profile URLs and usernames
            if (value.startsWith('http')) return value;
            return `https://linkedin.com/in/${value}`;
        case 'location':
            // Generate Google Maps search URL
            return `https://maps.google.com/maps?q=${encodeURIComponent(value)}`;
        default:
            return value.startsWith('http') ? value : `https://${value}`;
    }
};

const socialLinks = [
    { key: 'email', icon: Mail },
    { key: 'twitter', icon: Twitter },
    { key: 'github', icon: Github },
    { key: 'linkedin', icon: Linkedin },
    { key: 'location', icon: MapPin },
];

const Hero = ({ name, title, bio, contact, profilePictureUrl }) => {
    const [showSponsorModal, setShowSponsorModal] = useState(false);
    const [showSponsorSuccess, setShowSponsorSuccess] = useState(false);
    const [sponsorAmount, setSponsorAmount] = useState(0);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <TechIcons />

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
                            <a
                                key={key}
                                href={generateContactUrl(key, contact[key])}
                                target={key === 'location' ? '_blank' : key === 'email' ? '_self' : '_blank'}
                                rel={key !== 'email' ? 'noopener noreferrer' : undefined}
                                className="flex items-center gap-3 text-gray-400 hover:text-emerald-300 transition-colors duration-200 group cursor-pointer"
                            >
                                <Icon className="w-4 h-4 text-emerald-300 group-hover:scale-110 transition-transform duration-200" />
                                <span className="truncate group-hover:underline">{contact[key]}</span>
                            </a>
                        ))}

                    </div>

                    {/* Terminal Payment Awareness */}
                    <div className="mt-4 p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg">
                        <div className="flex items-center gap-2 text-blue-300 text-xs">
                            <Terminal className="w-3 h-3" />
                            <span className="font-medium">💡 Try Terminal Mode!</span>
                        </div>
                        <p className="text-blue-200 text-xs mt-1">
                            Buy me a coffee like a developer - sponsor via the terminal
                        </p>
                    </div>

                    {/* Sponsorship Button */}
                    <div className="mt-4 flex justify-center">
                        <SponsorButton
                            onSponsor={() => setShowSponsorModal(true)}
                            className="transform hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center">
                    <span className="text-sm font-medium text-emerald-400/90 mb-3 animate-pulse">Scroll to explore</span>
                    <div className="relative">
                        <div className="w-0.5 h-16 bg-gradient-to-b from-emerald-400/80 to-transparent">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-400 animate-bounce"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-300/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-300/5 rounded-full blur-3xl"></div>
            </div>

            {/* Sponsorship Modals */}
            <SponsorModal
                isOpen={showSponsorModal}
                onClose={() => setShowSponsorModal(false)}
                onSponsor={(amount, reference) => {
                    setSponsorAmount(amount);
                    setShowSponsorModal(false);
                    setShowSponsorSuccess(true);
                }}
            />

            {showSponsorSuccess && (
                <SponsorSuccess
                    amount={sponsorAmount}
                    onClose={() => setShowSponsorSuccess(false)}
                />
            )}
        </div>
    );
};

export default Hero;
