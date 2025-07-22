import React from 'react';
import CardMe from '@/components/ui/cardme';

const About = ({ content }) => (
    <CardMe title="About Me">
        <p className="text-gray-300 leading-relaxed text-sm">{content}</p>
    </CardMe>
);

export default About;
