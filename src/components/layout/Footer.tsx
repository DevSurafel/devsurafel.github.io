import React from 'react';
import { Linkedin, Github, Twitter, Rocket } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'http://linkedin.com/in/Surafel-Diriba', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://github.com/DevSurafel/', icon: Github, label: 'GitHub' },
    { href: 'https://twitter.com/Surafel_Diriba_', icon: Twitter, label: 'Twitter' },
  ];

  return (
    <footer className="bg-card/80 backdrop-blur-lg py-8 mt-12">
      <div className="section-container text-center">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Surafel Diriba. All rights reserved.{' '}
          <span className="inline-block animate-heartbeat">❤️</span>
        </p>

        <div className="mt-4 flex justify-center gap-6">
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

        <a
          href="#hero"
          className="mt-4 inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
        >
          <Rocket className="w-4 h-4" />
          Back to Top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
