import React from 'react';
import { ArrowUp, ExternalLink } from 'lucide-react';
import { InstagramIcon, YouTubeIcon } from './Icons';
import { siteConfig } from '../config/siteConfig';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121110] text-[#F6F2EC] pt-20 pb-12 border-t border-[#C4BCB5]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#C4BCB5]/10 items-start">
          
          {/* Brand Wordmark & Vision (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#C4BCB5]/30 bg-[#121110] shrink-0 p-0.5 shadow-md">
                <picture>
                  <source type="image/webp" srcSet="/images/branding/logo-96.webp 1x, /images/branding/logo-160.webp 2x" />
                  <img
                    src="/images/branding/logo-96.webp"
                    alt="Official Dimple Glam Academy Emblem"
                    className="w-full h-full object-contain rounded-full"
                    width={48}
                    height={48}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl tracking-[0.18em] font-normal uppercase text-[#F6F2EC] block leading-tight">
                  {siteConfig.artistName}
                </span>
                <span className="text-[10px] uppercase tracking-[0.26em] text-[#C4BCB5]/70 font-light block">
                  Dimple Glam Academy
                </span>
              </div>
            </div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#7A2837] font-semibold">
              Makeup Artist &amp; Beauty Creator
            </p>
            <p className="max-w-md text-xs sm:text-sm text-[#C4BCB5]/75 leading-relaxed font-light">
              Elevating authentic individual grace across wedding ceremonies, festive milestones, brand campaigns, and beauty education in Ajmer, Jaipur, and destination locations.
            </p>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C4BCB5]/60 font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs text-[#C4BCB5]/85 font-light">
              <li>
                <a href="#home" className="hover:text-[#F6F2EC] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F6F2EC] transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F6F2EC] transition-colors">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#F6F2EC] transition-colors">My Work</a>
              </li>
              <li>
                <a href="#craft" className="hover:text-[#F6F2EC] transition-colors">Why Choose Dimple</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F6F2EC] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Connect & Social (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C4BCB5]/60 font-semibold block">
              Connect With Dimple
            </span>
            
            <div className="space-y-2">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#F6F2EC] hover:text-[#7A2837] transition-colors group"
              >
                <InstagramIcon className="w-4 h-4 text-[#7A2837]" />
                <span>{siteConfig.instagramHandle}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
              </a>

              <a
                href={siteConfig.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#F6F2EC] hover:text-[#7A2837] transition-colors group"
              >
                <YouTubeIcon className="w-4 h-4 text-[#7A2837]" />
                <span>{siteConfig.youtubeHandle}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
              </a>
            </div>

            <p className="text-xs text-[#C4BCB5]/70 font-light pt-1">
              {siteConfig.locationPlaceholder}
            </p>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#C4BCB5] hover:text-white transition-colors"
                aria-label="Back to top"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 text-[#7A2837]" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & MAZRIK Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#C4BCB5]/50 tracking-wider gap-4">
          <div>
            &copy; {CURRENT_YEAR} {siteConfig.artistName}. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5 text-[#C4BCB5]/60">
            <span>Crafted with distinction by</span>
            <a
              href={siteConfig.agencyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F6F2EC] hover:text-[#7A2837] font-medium hover:underline inline-flex items-center gap-1 transition-colors"
            >
              <span>{siteConfig.agencyName}</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
