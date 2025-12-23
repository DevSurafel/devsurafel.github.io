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
    title: 'Languages and Databases',
    skills: [
      { name: 'Python', image: '/assets/img/python-logo-1-300x300.jpg', tooltip: 'Backend and AI development' },
      { name: 'HTML5', image: '/assets/img/html5-300x300.jpg', tooltip: 'Semantic HTML' },
      { name: 'CSS3', image: '/assets/img/css3-300x300.jpg', tooltip: 'CSS with animations' },
      { name: 'MySQL', image: '/assets/img/mysql-logo-1-300x300.jpg', tooltip: 'Database management' },
      { name: 'C++', image: '/assets/img/c++logo.png', tooltip: 'System-level programming' },
      { name: 'C', image: '/assets/img/c-logo.png', tooltip: 'Low-level programming' },
    ],
  },
  {
    title: 'Libraries',
    skills: [
      { name: 'TensorFlow', image: '/assets/img/tensorflow-logo-1.png', tooltip: 'Machine learning and AI' },
      { name: 'OpenCV', image: '/assets/img/opencv-logo-1-500x500.jpg', tooltip: 'Computer vision' },
      { name: 'Pandas', image: '/assets/img/pandas-logo-2-500x500.jpg', tooltip: 'Data manipulation' },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Flask', image: '/assets/img/flask-logo.png', tooltip: 'Backend development' },
      { name: 'Django', image: '/assets/img/django-logo.webp', tooltip: 'Full-stack development' },
      { name: 'Flutter', image: '/assets/img/flutterr.png', tooltip: 'Mobile app development' },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'AWS', image: '/assets/img/aws-logo.png', tooltip: 'Cloud computing' },
      { name: 'Git', image: '/assets/img/git.png', tooltip: 'Version control' },
      { name: 'GitHub', image: '/assets/img/github.png', tooltip: 'Code collaboration' },
      { name: 'VS Code', image: '/assets/img/vscode.png', tooltip: 'Code editor' },
    ],
  },
];

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="py-20">
      <h2 className="section-title animated-underline">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <div key={category.title} className="glass-card p-5">
            <h3 className="text-xl font-semibold text-primary mb-4">{category.title}</h3>
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
