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
    text: 'Undergraduate research on physiological-signal-based deepfake detection evaluated on FaceForensics++',
  },
  {
    icon: Rocket,
    title: 'Mission',
    text: 'Building scalable, user-centric solutions at the intersection of software engineering and AI.',
  },
];

const About = () => {
  return (
    <SectionWrapper id="about" className="py-16">
      <h2 className="section-title animated-underline">About Me</h2>

      <div className="max-w-5xl mx-auto space-y-8">
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground text-justify max-w-3xl mx-auto">
         I am a Computer Engineering graduate with a strong interest in scalable software systems and machine learning infrastructure. 
         My academic work has centered on core computer science foundations including operating systems, algorithms, database systems, and computer networks. 
         As a Government of India scholarship recipient, I pursued research in physiological-signal-based deepfake detection and built implementation-heavy projects such as CPU scheduling simulators and end-to-end ML pipelines. 
         I am particularly interested in system performance, distributed computing, and the practical deployment of machine learning models under real-world constraints, and I aim to deepen this focus through graduate study.
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
