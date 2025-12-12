import SectionWrapper from '../ui/SectionWrapper';
import SkillCard from '../ui/SkillCard';

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    image: string;
    progress: number;
    tooltip: string;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages and Databases',
    skills: [
      { name: 'Python', image: '/assets/img/python-logo-1-300x300.jpg', progress: 90, tooltip: 'Proficient in backend and AI development' },
      { name: 'HTML5', image: '/assets/img/html5-300x300.jpg', progress: 85, tooltip: 'Expert in semantic HTML' },
      { name: 'CSS3', image: '/assets/img/css3-300x300.jpg', progress: 80, tooltip: 'Advanced CSS with animations' },
      { name: 'MySQL', image: '/assets/img/mysql-logo-1-300x300.jpg', progress: 75, tooltip: 'Database management' },
      { name: 'C++', image: '/assets/img/c++logo.png', progress: 70, tooltip: 'System-level programming' },
      { name: 'C', image: '/assets/img/c-logo.png', progress: 65, tooltip: 'Low-level programming' },
    ],
  },
  {
    title: 'Libraries',
    skills: [
      { name: 'TensorFlow', image: '/assets/img/tensorflow-logo-1.png', progress: 85, tooltip: 'Machine learning and AI' },
      { name: 'OpenCV', image: '/assets/img/opencv-logo-1-500x500.jpg', progress: 80, tooltip: 'Computer vision' },
      { name: 'Pandas', image: '/assets/img/pandas-logo-2-500x500.jpg', progress: 75, tooltip: 'Data manipulation' },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Flask', image: '/assets/img/flask-logo.png', progress: 90, tooltip: 'Backend development' },
      { name: 'Django', image: '/assets/img/django-logo.webp', progress: 85, tooltip: 'Full-stack development' },
      { name: 'Flutter', image: '/assets/img/flutterr.png', progress: 80, tooltip: 'Mobile app development' },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'AWS', image: '/assets/img/aws-logo.png', progress: 70, tooltip: 'Cloud computing' },
      { name: 'Git', image: '/assets/img/git.png', progress: 85, tooltip: 'Version control' },
      { name: 'GitHub', image: '/assets/img/github.png', progress: 85, tooltip: 'Code collaboration' },
      { name: 'VS Code', image: '/assets/img/vscode.png', progress: 90, tooltip: 'Code editor' },
    ],
  },
];

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="py-20">
      <h2 className="section-title animated-underline">Skills</h2>
      
      <div className="space-y-12">
        {skillCategories.map((category) => (
          <div key={category.title} className="glass-card p-6">
            <h3 className="text-2xl font-semibold text-primary mb-6">{category.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
