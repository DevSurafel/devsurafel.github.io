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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {certifications.map((cert) => (
        <div key={cert.title} className="glass-card p-6 hover:-translate-y-2 transition-transform">
          <h3 className="text-xl font-semibold text-primary mb-2">{cert.title}</h3>
          <p className="text-muted-foreground text-sm mb-2">{cert.description}</p>
          <p className="text-sm"><strong className="text-foreground">Issuer:</strong> {cert.issuer}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Certifications;
