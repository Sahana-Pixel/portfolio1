import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from './Link';
import { useTheme } from '../hooks/useTheme';
import { ThemeToggle } from './ui/ThemeToggle';
import { useAnimatedLogo } from '../hooks/useAnimatedLogo';
import { motion } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { isDark, setIsDark } = useTheme();
  const { handleLogoClick } = useAnimatedLogo();

  // Add Scroll Listener
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Watch Visible Sections
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.3 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    // { href: '#github', label: 'GitHub' },
    { href: '#leetcode', label: 'Leetcode' },
    // { href: '#badges', label: 'Badges' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-2xl
        ${isScrolled ? 'bg-grey/80 dark:bg-black/80 backdrop-blur-md outline outline-1 outline-pink-500' : 'bg-transparent'}`}
    >
      <div className="flex items-center justify-between h-12 px-4">
        {/* Logo */}
        <div className="cursor-pointer" onClick={handleLogoClick}>
          <img src="./assets/favicon.png" alt="Logo" className="h-6 w-auto" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 justify-center items-center space-x-6 relative">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm text-gray-300 hover:text-pink-500 transition-transform duration-200 hover:scale-105"
            >
              {link.label}
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-pink-500 shadow-pink-500/50 shadow-sm rounded-full"
                  transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Theme Toggle  */}
        <div className="hidden lg:flex items-center">
          <div className="rounded-full p-1 transition">
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} iconColor="text-pink-500" />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            className="p-2 rounded-full  transition"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} iconColor="text-pink-500" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-pink-400 text-white hover:bg-pink-500/20 dark:bg-black dark:hover:bg-pink-500/20 dark:text-white transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="lg:hidden backdrop-blur-md bg-white/10 dark:bg-black/80 text-black dark:text-white rounded-b-xl shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-sm text-center hover:bg-pink-500/10 hover:text-pink-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

    </nav>
  );
}
