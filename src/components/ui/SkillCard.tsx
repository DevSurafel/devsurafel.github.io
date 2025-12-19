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
      className="skill-card relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-card border border-border px-3 py-1 rounded-lg text-xs text-foreground whitespace-nowrap z-10 shadow-lg">
          {skill.tooltip}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border" />
        </div>
      )}

      <img
        src={skill.image}
        alt={skill.name}
        className="h-16 w-16 mx-auto object-contain"
        loading="lazy"
      />
      <p className="mt-3 text-muted-foreground text-sm font-medium">{skill.name}</p>
    </div>
  );
};

export default SkillCard;
