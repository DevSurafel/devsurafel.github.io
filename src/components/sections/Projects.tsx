import React, { useState } from 'react';
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
    title: 'DeFiLance – Web3 Freelancing Platform',
    description: 'A decentralized freelancing marketplace with smart contract escrow, USDC payments on Polygon, automated dispute resolution, revision tracking, and a social media account trading system—enabling trustless client-freelancer transactions.',
    image: '/assets/img/project-music-player.png',
    tools: 'React, TypeScript, Solidity, Ethers.js, Hardhat, Polygon, OpenZeppelin, USDC, Supabase, Tailwind CSS',
    category: 'web',
    liveUrl: 'http://galvanicn.github.io/herokuapp.com',
    sourceUrl: 'https://github.com/DevSurafel/DECENTRALIZED-MARKETPLACE',
  },
  {
    id: '2',
    title: 'CodeTogether - Collaborative Editor',
    description: 'A real-time multi-user coding environment with live code sync, multi-language execution, integrated terminal, teacher mode locking, and doubt chat system—built for pair programming and classroom collaboration.',
    image: '/assets/img/project-quizup-logo-1.png',
    tools: 'React, Node.js, Express, Socket.IO, CodeMirror, Judge0 API, Docker',
    category: 'web',
    liveUrl: 'https://quiz-up-app.herokuapp.com/',
    sourceUrl: 'https://github.com/DevSurafel/CODE-TOGETHER',
  },
  {
    id: '3',
    title: 'BIRR - Telegram Tap Game',
    description: 'A viral tap-to-earn Telegram Mini App featuring real-time gamification, progressive leveling, referral rewards, and an upgradeable boost economy—all backed by Firebase and serverless functions.',
    image: '/assets/img/project-blog-logo.jpg',
    tools: 'React, Firebase Firestore, Telegram Web App API, Netlify Functions, Telegraf.js, Framer Motion',
    category: 'web',
    liveUrl: 'https://flask-heroku-blog.herokuapp.com/',
    sourceUrl: 'https://github.com/DevSurafel/DIGITAL-BIRR',
  },
  {
    id: '4',
    title: 'Fake News Detection System',
    description: 'A machine learning system combining traditional ML and deep learning approaches to detect misinformation, featuring a REST API for real-time predictions and a browser extension for on-page fake news detection.',
    image: '/assets/img/project-aim_bert-bias.png',
    tools: 'Python, scikit-learn, PyTorch, Transformers (RoBERTa), FastAPI, Docker, MLflow, DVC, Great Expectations',
    category: 'ai',
    sourceUrl: 'https://github.com/DevSurafel/FAKE-NEWS-DETECTOR',
  },
  {
    id: '5',
    title: 'CPU Scheduler Simulator',
    description: 'An interactive educational tool for visualizing and understanding CPU scheduling algorithms with real-time queue animations, step-by-step execution controls, and performance metrics analysis.',
    image: '/assets/img/project-aim_bert-bias.png',
    tools: 'Java, JavaFX, JFoenix, Eclipse',
    category: 'all',
    sourceUrl: 'https://github.com/DevSurafel/OS-SCHEDULING-SIMULATOR',
  },
   {
    id: '6',
    title: 'Deepfake Detection',
    description: 'A CNN-based deepfake detection system that analyzes eye blinking patterns using depthwise separable convolutions and Eye Aspect Ratio features. Trained on FaceForensics++ dataset with multi-branch architecture processing dual eye images for frame-level fake/real classification.',
    image: '/assets/img/project-aim_bert-bias.png',
    tools: 'Python, TensorFlow/Keras, CNN, OpenCV, dlib, Streamlit, NumPy, Pandas',
    category: 'all',
    sourceUrl: 'https://github.com/DevSurafel/OS-SCHEDULING-SIMULATOR',
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
      <div className="flex justify-center gap-4 mb-10">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
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
