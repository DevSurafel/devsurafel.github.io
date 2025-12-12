import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { ExternalLink } from 'lucide-react';

interface ExperienceItem {
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  responsibilities: string[];
  tools: string;
}

const experiences: ExperienceItem[] = [
  {
    company: 'Zhiffy',
    companyUrl: 'https://www.zhiffy.com/',
    role: 'Software Engineer',
    period: 'July 2020 - Nov 2020',
    location: 'Hyderabad, India',
    logo: '/assets/img/exp-zhiffy-logo-1.webp',
    responsibilities: [
      'Developed backend for e-commerce platform using Flask and MongoDB.',
      'Built 50+ RESTful APIs for various applications.',
      'Optimized response time by 20%.',
    ],
    tools: 'Python, Flask, MongoDB',
  },
  {
    company: 'Meditab',
    companyUrl: 'https://www.meditab.com',
    role: 'Programmer',
    period: 'Dec 2014 - July 2015',
    location: 'Analytics',
    logo: '/assets/img/exp-meditab-logo-500x500.jpg',
    responsibilities: [
      'Optimized algorithms for drug dispenser robots, reducing cycle time by 25%.',
      'Developed video analytics app with Flask and OpenCV.',
      'Enhanced performance by 15% using YOLOv3.',
    ],
    tools: 'Python, Flask, OpenCV, YOLOv3',
  },
];

const Experience = () => {
  return (
    <SectionWrapper id="experience" className="py-20">
      <h2 className="section-title animated-underline">Experience</h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block" />
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="relative">
              {/* Timeline dot */}
              <div className="timeline-dot hidden md:block" />
              
              <div className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Info side */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <h3 className="text-2xl font-semibold text-primary">
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex items-center gap-2"
                    >
                      {exp.company}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    {exp.role} | {exp.period} | {exp.location}
                  </p>
                </div>
                
                {/* Card side */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="glass-card p-6">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="h-12 mb-4 object-contain"
                      loading="lazy"
                    />
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                      <li>
                        <strong className="text-foreground">Tools:</strong> {exp.tools}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
