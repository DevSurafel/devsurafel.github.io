import { useEffect, useRef } from 'react';
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
      {/* Background particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="section-container text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-slide-up">
          Hi, I'm{' '}
          <span className="text-yellow-400">Surafel Diriba</span>
        </h1>

        <h2 className="text-2xl md:text-4xl mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          A <TypedText strings={['Developer', 'Tech Enthusiast', 'Problem Solver']} />
        </h2>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-muted-foreground animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Crafting innovative solutions with code, creativity, and a passion for technology.
          Let's build the future together!
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-2xl"
              aria-label={link.label}
            >
              <link.icon className="w-8 h-8" />
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a href="#about" className="btn-primary inline-flex items-center justify-center gap-2">
            Explore More
            <ArrowDown className="w-4 h-4" />
          </a>
          <a href="#contact" className="btn-secondary">
            Connect
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
