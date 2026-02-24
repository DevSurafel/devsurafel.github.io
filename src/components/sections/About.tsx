import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { GraduationCap, Code, Brain, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    text: 'B.Tech in Computer Engineering from Marwadi University, India (2022–2026). Study in India Scholar.',
  },
  {
    icon: Code,
    title: 'Core Skills',
    text: 'Python, Java, JavaScript, C/C++, React, Node.js, FastAPI, Docker, MongoDB, Firebase.',
  },
  {
    icon: Brain,
    title: 'Research',
    text: 'Published research on deepfake detection using CNN-based eye-blink analysis on FaceForensics++ dataset.',
  },
  {
    icon: Rocket,
    title: 'Mission',
    text: 'Building scalable, user-centric solutions at the intersection of software engineering and AI.',
  },
];

const About = () => {
  return (
    <SectionWrapper id="about" className="py-20">
      <h2 className="section-title animated-underline">About Me</h2>

      <div className="max-w-3xl mx-auto space-y-6">
        <p className="text-lg leading-relaxed text-muted-foreground">
          I'm Surafel Diriba — a Computer Engineering graduate from Marwadi University, India, 
          and a recipient of the Study in India Scholarship (Government of India). I specialize 
          in backend development, machine learning, and full-stack applications, with published 
          research in deepfake detection.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item) => (
            <div key={item.title} className="glass-card p-5 flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
