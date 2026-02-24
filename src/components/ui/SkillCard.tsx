import React from 'react';

interface Skill {
  name: string;
  image: string;
  tooltip: string;
}

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-secondary/50 border border-border transition-colors duration-200 hover:border-primary/30 group">
      <img
        src={skill.image}
        alt={skill.name}
        className="h-9 w-9 object-contain mb-2"
        loading="lazy"
      />
      <p className="text-xs font-medium text-muted-foreground text-center group-hover:text-foreground transition-colors">
        {skill.name}
      </p>
    </div>
  );
};

export default SkillCard;
