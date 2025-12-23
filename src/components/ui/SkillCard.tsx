import React, { useState } from 'react';

interface Skill {
  name: string;
  image: string;
  tooltip: string;
}

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <div
      className="relative group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-card border border-primary/30 px-3 py-1.5 rounded-lg text-xs text-foreground whitespace-nowrap z-20 shadow-xl backdrop-blur-sm">
          {skill.tooltip}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary/30" />
        </div>
      )}
      
      {/* Card */}
      <div className="relative flex flex-col items-center justify-center p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:border-primary/40 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 cursor-pointer h-full">
        <img
          src={skill.image}
          alt={skill.name}
          className="h-10 w-10 object-contain mb-2 transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <p className="text-xs font-medium text-muted-foreground text-center group-hover:text-primary transition-colors">
          {skill.name}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
