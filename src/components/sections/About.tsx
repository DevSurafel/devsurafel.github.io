import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';

const About = () => {
  return (
    <SectionWrapper id="about" className="py-20">
      <h2 className="section-title animated-underline">About Me</h2>
      
      <div className="max-w-3xl mx-auto text-muted-foreground space-y-4">
        <p className="text-lg leading-relaxed">
          I'm Surafel Diriba, a final-year Computer Engineering student at Marwadi University, India. 
          I specialize in backend development, AI, and full-stack web applications, with a passion 
          for solving real-world problems through technology.
        </p>
        
        <p className="text-lg leading-relaxed">
          My experience includes building scalable applications, diving into machine learning, 
          and collaborating on innovative projects. I'm always eager to learn and create impactful solutions.
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>
            <strong className="text-foreground">Skills:</strong> Python, Flask, Flutter, TensorFlow, AWS
          </li>
          <li>
            <strong className="text-foreground">Mission:</strong> Deliver user-centric, scalable solutions
          </li>
          <li>
            <strong className="text-foreground">Vision:</strong> Innovate at the intersection of code and creativity
          </li>
        </ul>
        
        <p className="text-lg leading-relaxed">
          Let's connect to turn your ideas into reality!
        </p>
      </div>
    </SectionWrapper>
  );
};

export default About;
