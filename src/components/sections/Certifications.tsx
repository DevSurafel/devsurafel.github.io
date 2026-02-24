import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { Award } from 'lucide-react';

const certifications = [
  { title: 'Machine Learning (Stanford)', issuer: 'Coursera', description: 'Completed an in-depth course on machine learning, covering supervised and unsupervised learning, neural networks.' },
  { title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', description: 'Mastered cloud architecture and deployment on AWS, including EC2, S3, and Lambda.' },
  { title: 'Python for Data Science', issuer: 'IBM', description: 'Learned advanced Python techniques for data analysis, visualization, and machine learning.' },
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
