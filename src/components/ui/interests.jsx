import React from 'react';
import CardMe from '@/components/ui/cardme';
import { Badge } from '@/components/ui/badge';

const Interests = ({ items }) => (
    <CardMe title="Interests & Activities">
        <div className="flex flex-wrap gap-2">
            {items?.map((interest) => (
                <Badge key={interest} variant="outline" className="border-gray-600 text-gray-300 text-xs">{interest}</Badge>
            ))}
        </div>
    </CardMe>
);

export default Interests;
