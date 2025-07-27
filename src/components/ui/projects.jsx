import React from 'react';
import CardMe from '@/components/ui/cardme';
import { Badge } from '@/components/ui/badge';

const Projects = ({ items }) => (
    <CardMe title="Featured Projects">
        <div className="space-y-6">
            {items?.map((project) => (
                <div key={project.id} className="border-b border-gray-700 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-white">{project.name}</h4>
                    <p className="text-sm text-gray-300 mt-1">{project.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {project.tags?.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">{tag}</Badge>
                        ))}
                    </div>
                    <div className="mt-3 flex gap-4 text-sm">
                       <a href={project.website_link} target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:underline">Visit Website</a>
                       <a href={project.details_link} target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:underline">View Details</a>
                    </div>
                </div>
            ))}
        </div>
    </CardMe>
);

export default Projects;
