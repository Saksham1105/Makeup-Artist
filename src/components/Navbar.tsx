import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isScrolledRef = useRef(false);

  // Simplified Navigation Labels
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'My Work', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  // Lightweight scroll state tracking without layout thrashing
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY;
          const shouldBeScrolled = scrollPos > 30;

          if (shouldBeScrolled !== isScrolledRef.current) {
            isScrolledRef.current = shouldBeScrolled;
            setIsScrolled(shouldBeScrolled);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section Observer for active menu item (zero layout thrashing on scroll)
  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'portfolio', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard Escape listener for mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll smoothly when mobile menu is open without iOS jump
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Signature Navigation Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-[padding,background-color,border-color] duration-300 ease-out ${
          isScrolled
            ? 'py-3.5 bg-[#1A1817]/95 backdrop-blur-md border-b border-[#C4BCB5]/15 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
            : 'py-5 sm:py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Clear Brand Wordmark with Official Academy Insignia */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#C4BCB5]/30 bg-[#121110] shrink-0 p-0.5 group-hover:border-[#7A2837] transition-colors shadow-sm">
              <picture>
                <source type="image/webp" srcSet="/images/branding/logo-96.webp 1x, /images/branding/logo-160.webp 2x" />
                <img
                  src="/images/branding/logo-96.webp"
                  alt="Dimple Glam Academy Emblem"
                  className="w-full h-full object-contain rounded-full"
                  width={40}
                  height={40}
                  decoding="async"
                />
              </picture>
            </div>
            <div className="flex flex-col">
              <span className={`font-serif tracking-[0.2em] font-normal uppercase text-[#F6F2EC] transition-all duration-300 group-hover:text-[#C4BCB5] leading-tight ${
                isScrolled ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'
              }`}>
                {siteConfig.artistName}
              </span>
              <span className="text-[9px] uppercase tracking-[0.22em] text-[#C4BCB5]/70 font-light">
                Dimple Glam Academy
              </span>
            </div>
          </a>

          {/* Desktop Simplified Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-200 relative py-1 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#F6F2EC]'
                      : 'text-[#C4BCB5]/75 hover:text-[#F6F2EC]'
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7A2837] inline-block" />
                  )}
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Primary Booking Action */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center gap-2 px-6 py-2.5 bg-[#7A2837] hover:bg-[#963546] text-white text-[11px] uppercase tracking-[0.22em] font-medium transition-all duration-300 shadow-[0_4px_16px_rgba(122,40,55,0.4)] active:scale-95"
            >
              <span>Book Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Actions: Simple Book Now & Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-1.5 bg-[#7A2837] text-white text-[10px] uppercase tracking-[0.2em] font-medium active:scale-95 transition-transform"
            >
              Book Now
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F6F2EC] hover:text-[#C4BCB5] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#121110]/85 backdrop-blur-md md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#1A1817] border-l border-[#C4BCB5]/20 p-7 flex flex-col justify-between shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#C4BCB5]/15">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-[#C4BCB5]/30 bg-[#121110] shrink-0 p-0.5">
                    <img
                      src="/images/branding/logo-96.webp"
                      alt="Dimple Glam Academy Emblem"
                      className="w-full h-full object-contain rounded-full"
                      width={32}
                      height={32}
                      decoding="async"
                    />
                  </div>
                  <div>
                    <span className="font-serif text-base tracking-[0.18em] uppercase text-[#F6F2EC] block leading-tight">
                      {siteConfig.artistName}
                    </span>
                    <span className="text-[8px] uppercase tracking-[0.2em] text-[#C4BCB5]/60 font-light block">
                      Dimple Glam Academy
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#C4BCB5] hover:text-[#F6F2EC]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col space-y-5 pt-8" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-2xl font-light text-[#F6F2EC]/90 hover:text-[#7A2837] py-1 border-b border-[#C4BCB5]/10 transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C4BCB5]/40" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-[#C4BCB5]/15 space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-4 bg-[#7A2837] hover:bg-[#963546] text-white text-xs uppercase tracking-[0.25em] font-medium flex items-center justify-center gap-2 transition-all shadow-lg active:scale-98"
              >
                <span>Book Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="text-center">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#C4BCB5] hover:text-[#F6F2EC] tracking-widest uppercase inline-block"
                >
                  {siteConfig.instagramHandle}
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
