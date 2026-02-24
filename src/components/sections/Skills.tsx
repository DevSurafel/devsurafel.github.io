import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SkillCard from '../ui/SkillCard';

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    image: string;
    tooltip: string;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', image: '/assets/img/python-logo-1-300x300.jpg', tooltip: 'Backend, ML & scripting' },
      { name: 'Java', image: '/assets/img/c++logo.png', tooltip: 'OOP & desktop apps' },
      { name: 'JavaScript', image: '/assets/img/javascript.png', tooltip: 'Full-stack web development' },
      { name: 'C/C++', image: '/assets/img/c-logo.png', tooltip: 'System-level programming' },
    ],
  },
  {
    title: 'ML & AI',
    skills: [
      { name: 'PyTorch', image: '/assets/img/pytorch-logo.png', tooltip: 'Deep learning' },
      { name: 'scikit-learn', image: '/assets/img/sk-learn-logo-1-500x500.jpg', tooltip: 'Classical ML' },
      { name: 'OpenCV', image: '/assets/img/opencv-logo-1-500x500.jpg', tooltip: 'Computer vision' },
      { name: 'TensorFlow', image: '/assets/img/tensorflow-logo-1.png', tooltip: 'ML framework' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', image: '/assets/img/git.png', tooltip: 'Version control' },
      { name: 'Docker', image: '/assets/img/heroku.png', tooltip: 'Containerization' },
      { name: 'Linux', image: '/assets/img/shell-logo-1-300x300.jpg', tooltip: 'OS & scripting' },
      { name: 'GitHub', image: '/assets/img/github.png', tooltip: 'Collaboration' },
    ],
  },
  {
    title: 'Frameworks & Databases',
    skills: [
      { name: 'FastAPI', image: '/assets/img/flask-logo.png', tooltip: 'Python REST APIs' },
      { name: 'React', image: '/assets/img/nodejs.png', tooltip: 'Frontend framework' },
      { name: 'MongoDB', image: '/assets/img/mysql-logo-1-300x300.jpg', tooltip: 'NoSQL database' },
      { name: 'Firebase', image: '/assets/img/heroku.png', tooltip: 'BaaS platform' },
    ],
  },
];

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="py-16">
      <h2 className="section-title animated-underline">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillCategories.map((category) => (
          <div key={category.title} className="glass-card p-5">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">{category.title}</h3>
            <div className="grid grid-cols-3 gap-3">
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
