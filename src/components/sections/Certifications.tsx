import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { Award } from 'lucide-react';

const certifications = [
  { title: 'CCNAv7: Switching, Routing, and Wireless Essentials', issuer: 'Cisco Networking Academy', description: 'Completed coursework covering core networking concepts including switching, routing protocols, VLANs, wireless networking fundamentals, and network configuration using Cisco devices.' },
  { title: 'NDG Linux Essentials', issuer: 'Cisco Networking Academy', description: 'Gained foundational knowledge of Linux systems, including command-line usage, file systems, user management, basic networking concepts, and system administration fundamentals.' },
  { title: 'Python Data Structures', issuer: 'Coursera | University of Michigan', description: 'Completed coursework on Python data structures and data processing, including lists, dictionaries, tuples, file handling, and structured problem-solving. (Grade: 97.6%)' },
];

const Certifications = () => (
  <SectionWrapper id="certifications" className="py-16">
    <h2 className="section-title animated-underline">Certifications</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {certifications.map((cert) => (
        <div key={cert.title} className="cert-card p-6">
          <div className="flex items-start gap-3 mb-3">
            <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <h3 className="font-semibold text-foreground">{cert.title}</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{cert.description}</p>
          <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-md">
            {cert.issuer}
          </span>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Certifications;
