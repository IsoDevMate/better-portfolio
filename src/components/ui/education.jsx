import React from 'react';
import CardMe from '@/components/ui/cardme';
import { Badge } from '@/components/ui/badge';

const Education = ({ data }) => {
    if (!data) return null;
    return (
        <CardMe title="Education">
            <h4 className="font-semibold text-white">{data.degree}</h4>
            <p className="text-sm text-gray-400">{data.university} &bull; {data.dates}</p>
            <p className="text-sm text-gray-300 mt-2">{data.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
                {data.tags?.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">{tag}</Badge>
                ))}
            </div>
        </CardMe>
    );
};

export default Education;
