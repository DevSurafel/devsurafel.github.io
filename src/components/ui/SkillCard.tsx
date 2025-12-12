import React, { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  image: string;
  progress: number;
  tooltip: string;
}

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const circumference = 2 * Math.PI * 30;
  const strokeDashoffset = circumference - (skill.progress / 100) * circumference;

  return (
    <div
      ref={cardRef}
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
      <p className="mt-2 text-muted-foreground text-sm">{skill.name}</p>

      {/* Progress ring */}
      <svg className="w-16 h-16 mx-auto mt-2" viewBox="0 0 80 80">
        <circle
          className="text-muted"
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
        <circle
          className="text-primary progress-ring__circle"
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: isVisible ? strokeDashoffset : circumference,
            strokeLinecap: 'round',
          }}
        />
        <text
          x="40"
          y="45"
          textAnchor="middle"
          className="fill-foreground text-xs font-semibold"
        >
          {skill.progress}%
        </text>
      </svg>
    </div>
  );
};

export default SkillCard;
