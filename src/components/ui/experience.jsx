import React from 'react';
import CardMe from '@/components/ui/cardme';
import { Badge } from '@/components/ui/badge';

const Experience = ({ items }) => (
    <CardMe title="Experience">
        <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-3 top-3 bottom-3 w-0.5 bg-gray-600"></div>
            <div className="space-y-8">
                {items?.map((item) => (
                    <div key={item.id} className="relative pl-8">
                        {/* Timeline Dot */}
                       <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-emerald-300 border-2 border-[#1E1E1E]"></div>
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="text-sm text-gray-400">{item.company} &bull; {item.dates}</p>
                        <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-gray-300">
                            {item.description_points.map((point, i) => <li key={i}>{point}</li>)}
                        </ul>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {item.tags?.map((tag) => (
                                <Badge key={tag} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">{tag}</Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </CardMe>
);

export default Experience;
