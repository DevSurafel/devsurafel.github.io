import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-2' 
          : 'py-4'
      }`}
    >
      <div className="section-container">
        <div className={`flex justify-between items-center px-6 py-3 rounded-2xl transition-all duration-500 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl shadow-2xl border border-border/60'
            : 'bg-background/40 backdrop-blur-md border border-border/30'
        }`}>
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <img
              src="/assets/img/githubp.jpeg"
              alt="Surafel Diriba"
              className="h-10 w-10 rounded-full border-2 border-primary/60 object-cover transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30"
            />
            <span className="font-display font-bold text-lg hidden sm:block text-foreground group-hover:text-primary transition-colors duration-300">
              Surafel Diriba
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-muted/50 rounded-xl p-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeSection === link.href.slice(1) 
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/30' 
                    : 'text-foreground/80 hover:text-foreground hover:bg-background/60'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-xl bg-muted/60 hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-muted/60 hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="section-container mt-2">
          <div className="bg-background/90 backdrop-blur-xl rounded-2xl border border-border/50 shadow-xl p-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted/60'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
