import React, { useState } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'CCNAv7: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    description: 'Completed coursework covering core networking concepts including switching, routing protocols, VLANs, wireless networking fundamentals, and network configuration using Cisco devices.',
    verifyUrl: 'https://www.netacad.com/certificates/?issuanceId=d6ab79b7-fda6-4d02-8d63-4821832752be',
  },
  {
    title: 'NDG Linux Essentials',
    issuer: 'Cisco Networking Academy',
    description: 'Gained foundational knowledge of Linux systems, including command-line usage, file systems, user management, basic networking concepts, and system administration fundamentals.',
    verifyUrl: 'https://www.netacad.com/certificates/?issuanceId=a213f0ac-3f54-4d1a-92da-90c1f81ffafe',
  },
  {
    title: 'Python Data Structures',
    issuer: 'Coursera | University of Michigan',
    description: 'Completed coursework on Python data structures and data processing, including lists, dictionaries, tuples, file handling, and structured problem-solving. (Grade: 97.6%)',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/F9GTS68G5YMK',
  },
];

const Certifications = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="certifications" className="py-16">
      <h2 className="section-title animated-underline">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, index) => (
          <div
            key={cert.title}
            className="cert-card p-6 relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-start gap-3 mb-3">
              <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <h3 className="font-semibold text-foreground">{cert.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{cert.description}</p>
            <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-md">
              {cert.issuer}
            </span>

            {/* Hover overlay with verify link */}
            <div
              className={`absolute inset-0 rounded-xl flex flex-col items-center justify-center gap-4 transition-opacity duration-300 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              style={{ background: 'hsl(var(--card) / 0.95)' }}
            >
              <Award className="w-10 h-10 text-primary" />
              <p className="text-sm font-semibold text-foreground text-center px-4">{cert.title}</p>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Verify Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
