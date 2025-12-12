import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { ExternalLink } from 'lucide-react';

const certifications = [
  { title: 'Machine Learning (Stanford)', issuer: 'Coursera', description: 'Completed an in-depth course on machine learning, covering supervised and unsupervised learning, neural networks.' },
  { title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', description: 'Mastered cloud architecture and deployment on AWS, including EC2, S3, and Lambda.' },
  { title: 'Python for Data Science', issuer: 'IBM', description: 'Learned advanced Python techniques for data analysis, visualization, and machine learning.' },
];

const Certifications = () => (
  <SectionWrapper id="certifications" className="py-20">
    <h2 className="section-title animated-underline">Certifications</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {certifications.map((cert, index) => (
        <div 
          key={cert.title} 
          className="cert-card group"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl">🏆</span>
          </div>
          <h3 className="text-xl font-bold text-primary mb-3 pr-14 group-hover:text-secondary transition-colors duration-300">{cert.title}</h3>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{cert.description}</p>
          <div className="flex items-center gap-2 text-sm">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{cert.issuer}</span>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Certifications;
