import React from 'react';
import CardMe from '@/components/ui/cardme';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';

const Certifications = ({ items }) => {
  if (!items || items.length === 0) return null;
  return (
    <CardMe title="Certifications & Licenses">
      <div className="space-y-6">
        {items.map((cert) => (
          <div key={cert.id} className="border-b border-gray-700 pb-4 last:border-b-0">
            <div className="flex items-start gap-2">
              <Award className="w-4 h-4 text-amber-300 mt-1" />
              <div>
                <h4 className="font-semibold text-white">{cert.name}</h4>
                <p className="text-sm text-gray-400">{cert.issuer} &bull; {cert.date}</p>
                <p className="text-sm text-gray-400">ID: {cert.credential_id}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cert.tags?.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardMe>
  );
};

export default Certifications;
