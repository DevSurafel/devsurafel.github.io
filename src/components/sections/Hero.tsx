import React from 'react';
import { Linkedin, Github, Twitter, Download, ArrowDown } from 'lucide-react';
import TypedText from '../ui/TypedText';

const Hero = () => {
  const socialLinks = [
    { href: 'http://linkedin.com/in/Surafel-Diriba', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://github.com/DevSurafel/', icon: Github, label: 'GitHub' },
    { href: 'https://twitter.com/Surafel_Diriba_', icon: Twitter, label: 'Twitter' },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="section-container text-center relative z-10">
        <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4 animate-fade-in">
          Software Engineer
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-slide-up text-foreground">
          Surafel Diriba
        </h1>

        <h2 className="text-xl md:text-2xl mb-6 animate-slide-up text-muted-foreground" style={{ animationDelay: '0.1s' }}>
          <TypedText strings={['Problem Solver', 'Innovator', 'Developer']} />
        </h2>

        <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 text-muted-foreground animate-slide-up leading-relaxed" style={{ animationDelay: '0.15s' }}>
          Building scalable, user-centric solutions at the intersection of software engineering and AI.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-3 mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 animate-slide-up" style={{ animationDelay: '0.25s' }}>
          <a href="#about" className="btn-primary inline-flex items-center justify-center gap-2">
            Explore More
            <ArrowDown className="w-4 h-4" />
          </a>
          <a href="#contact" className="btn-secondary inline-flex items-center justify-center">
            Get in Touch
          </a>
          <a
            href="/assets/resume/Surafel_Resume.pdf"
            target="_blank"
            className="btn-secondary inline-flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
