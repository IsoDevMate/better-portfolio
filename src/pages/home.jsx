import React from 'react';
import Hero from '@/components/ui/hero';
import About from '@/components/ui/about';
import Experience from '@/components/ui/experience';
import Projects from '@/components/ui/projects';
import Education from '@/components/ui/education';
import Interests from '@/components/ui/interests';
import Certifications from '../components/ui/certifications';

export default function HomePage({ portfolioData }) {
    if (!portfolioData) {
        return <div className="text-center text-gray-400 p-10">Loading portfolio data...</div>;
    }

    return (
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-24">
            <Hero
                name={portfolioData.name}
                title={portfolioData.title}
                bio={portfolioData.bio}
                contact={portfolioData.contact}
                profilePictureUrl={portfolioData.profile_picture_url}
            />
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-12">
                    <About content={portfolioData.about_me} />
                    <Experience items={portfolioData.experience} />
                </div>
                <div className="space-y-12">
                    <Certifications items={portfolioData.Certifications} />
                    <Projects items={portfolioData.projects} />
                    <Education data={portfolioData.education} />
                </div>
            </div>
        </div>
    );
}
