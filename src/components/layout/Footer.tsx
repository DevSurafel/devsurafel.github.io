import React from 'react';
import { Linkedin, Github, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'http://linkedin.com/in/Surafel-Diriba', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://github.com/DevSurafel/', icon: Github, label: 'GitHub' },
    { href: 'https://twitter.com/Surafel_Diriba_', icon: Twitter, label: 'Twitter' },
  ];

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container text-center">
        <div className="flex justify-center gap-3 mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={link.label}
            >
              <link.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <p className="text-muted-foreground text-sm mb-3">
          © {currentYear} Surafel Diriba. All rights reserved.
        </p>

        <a
          href="#hero"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          Back to Top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
