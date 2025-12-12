import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

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

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="project-card group">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-bold uppercase tracking-wider">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
        <p className="text-sm text-muted-foreground mb-4">
          <strong className="text-foreground">Tools:</strong> {project.tools}
        </p>
        
        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors text-sm inline-flex items-center gap-1"
            >
              <ExternalLink className="w-4 h-4" />
              View Live
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors text-sm inline-flex items-center gap-1"
            >
              <Github className="w-4 h-4" />
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
