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
  category: 'web' | 'ai' | 'all';
  liveUrl?: string;
  sourceUrl?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'DeFiLance – Decentralized Freelance Marketplace',
    description: 'A full-stack decentralized freelance marketplace with blockchain-powered escrow payments, real-time chat, social media account trading, credential verification, and Telegram bot integration. Features include job posting, bidding, milestone-based payments, dispute resolution, and admin dashboards.',
    image: '/assets/img/project-music-player.png',
    tools: 'React, TypeScript, Tailwind CSS, Supabase, Solidity, Hardhat, Ethers.js, WalletConnect, Polygon, IPFS',
    category: 'web',
    liveUrl: 'https://de-fi-lance-beta.vercel.app',
    sourceUrl: 'https://github.com/DevSurafel/DeFiLance-Beta',
  },
  {
    id: '2',
    title: 'CodeTogether - Collaborative Editor',
    description: 'A real-time multi-user coding environment with live code sync, multi-language execution, integrated terminal, teacher mode locking, and doubt chat system.',
    image: '/assets/img/project-quizup-logo-1.png',
    tools: 'React, Node.js, Express, Socket.IO, CodeMirror, Judge0 API, Docker',
    category: 'web',
    sourceUrl: 'https://github.com/DevSurafel/CODE-TOGETHER',
  },
  {
    id: '3',
    title: 'BIRR - Telegram Tap Game',
    description: 'A viral tap-to-earn Telegram Mini App featuring real-time gamification, progressive leveling, referral rewards, and an upgradeable boost economy.',
    image: '/assets/img/project-blog-logo.jpg',
    tools: 'React, Firebase Firestore, Telegram Web App API, Netlify Functions, Telegraf.js, Framer Motion',
    category: 'web',
    sourceUrl: 'https://github.com/DevSurafel/DIGITAL-BIRR',
  },
  {
    id: '4',
    title: 'Fake News Detection System',
    description: 'End-to-end ML pipeline for fake news classification using TF-IDF features, speaker credibility metrics, Random Forest and RoBERTa transformer models with real-time inference via FastAPI.',
    image: '/assets/img/project-aim_bert-bias.png',
    tools: 'Python, scikit-learn, PyTorch, RoBERTa, FastAPI, Docker, MLflow',
    category: 'ai',
    sourceUrl: 'https://github.com/DevSurafel/FAKE-NEWS-DETECTOR',
  },
  {
    id: '5',
    title: 'CPU Scheduler Simulator',
    description: 'An interactive educational tool for visualizing CPU scheduling algorithms with real-time queue animations, step-by-step execution controls, and performance metrics.',
    image: '/assets/img/project-aim_bert-bias.png',
    tools: 'Java, JavaFX, JFoenix, Eclipse',
    category: 'all',
    sourceUrl: 'https://github.com/DevSurafel/OS-SCHEDULING-SIMULATOR',
  },
  {
    id: '6',
    title: 'Deepfake Detection (Published Research)',
    description: 'CNN-based deepfake detection using physiological eye-blink patterns with depthwise separable convolutions and EAR features on FaceForensics++ dataset.',
    image: '/assets/img/project-aim_bert-bias.png',
    tools: 'Python, TensorFlow/Keras, CNN, OpenCV, dlib, NumPy, Pandas',
    category: 'ai',
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
    <SectionWrapper id="projects" className="py-16">
      <h2 className="section-title animated-underline">Projects</h2>

      <div className="flex justify-center gap-2 mb-8">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://github.com/DevSurafel"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center gap-2"
        >
          View More on GitHub
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
