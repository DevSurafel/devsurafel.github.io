import React, { useEffect, useRef } from 'react';
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
      className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      {/* Background particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="section-container text-center relative z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 animate-slide-up">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-flow">
            Surafel Diriba
          </span>
        </h1>

        <h2 className="text-2xl md:text-4xl lg:text-5xl mb-8 animate-slide-up text-foreground/90" style={{ animationDelay: '0.15s' }}>
          A <TypedText strings={['Developer', 'Tech Enthusiast', 'Problem Solver', 'Innovator']} />
        </h2>

        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 text-muted-foreground animate-slide-up leading-relaxed" style={{ animationDelay: '0.25s' }}>
          Crafting innovative solutions with code, creativity, and a passion for technology.
          Let's build the future together!
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-10 animate-slide-up" style={{ animationDelay: '0.35s' }}>
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={link.label}
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 animate-slide-up" style={{ animationDelay: '0.45s' }}>
          <a href="#about" className="btn-primary inline-flex items-center justify-center gap-2">
            <span>Explore More</span>
            <ArrowDown className="w-5 h-5" />
          </a>
          <a href="#contact" className="btn-secondary">
            Connect
          </a>
          <a
            href="/assets/resume/Surafel_Resume.pdf"
            target="_blank"
            className="btn-secondary inline-flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
