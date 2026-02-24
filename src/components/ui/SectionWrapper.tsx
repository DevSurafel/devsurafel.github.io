import React, { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, children, className = '' }: SectionWrapperProps) => {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-500 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      <div className="section-container">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
