import { useState } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import ProjectCard from '../ui/ProjectCard';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tools: string;
  category: 'web' | 'ai';
  liveUrl?: string;
  sourceUrl?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Music Player Web-App',
    description: 'A music streaming web app with user authentication, song search, playlist creation, and recent song tracking.',
    image: '/assets/img/project-music-player.png',
    tools: 'Django, HTML, CSS, Bootstrap, SQLite, AWS, S3, Heroku',
    category: 'web',
    liveUrl: 'http://galvanicn.github.io/herokuapp.com',
    sourceUrl: 'http://github.com/varadbhogayata/music-player',
  },
  {
    id: '2',
    title: 'Quiz Web-App',
    description: 'A quiz-playing web app with user registration, quiz participation, and leaderboard display.',
    image: '/assets/img/project-quizup-logo-1.png',
    tools: 'Django, HTML, CSS, Bootstrap, SQLite, Heroku',
    category: 'web',
    liveUrl: 'https://quiz-up-app.herokuapp.com/',
    sourceUrl: 'https://github.com/varadbhogayata/QuizUp',
  },
  {
    id: '3',
    title: 'Blog Web-App',
    description: 'A simple and extensible blog web-app for viewing and managing posts.',
    image: '/assets/img/project-blog-logo.jpg',
    tools: 'Flask, SQLAlchemy, PostgreSQL',
    category: 'web',
    liveUrl: 'https://flask-heroku-blog.herokuapp.com/',
    sourceUrl: 'https://github.com/varadbhogayata/flask-blog',
  },
  {
    id: '4',
    title: 'Visual Question Answering',
    description: 'An attention-based model for generating answers from images using CNN and LSTM.',
    image: '/assets/img/project-aim_bert-bias.png',
    tools: 'Python, TensorFlow, CNN, LSTM',
    category: 'ai',
    sourceUrl: 'https://github.com/varadbhogayata/visual-question-answering',
  },
];

const filters = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'ai', label: 'AI' },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <SectionWrapper id="projects" className="py-20">
      <h2 className="section-title animated-underline">Projects</h2>
      
      {/* Filter buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeFilter === filter.id
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                : 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      
      {/* Project grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {/* View more button */}
      <div className="mt-8 text-center">
        <a
          href="https://github.com/DevSurafel"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2"
        >
          View More Projects
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
