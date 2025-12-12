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
    <div className="project-card">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
        <h3 className="absolute bottom-4 left-4 right-4 text-xl font-semibold text-primary">
          {project.title}
        </h3>
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
