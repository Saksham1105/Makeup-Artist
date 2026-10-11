import React, { useState } from 'react';
import { Eye, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { portfolioData, portfolioCategories, type PortfolioCategory, type PortfolioItem } from '../data/portfolioData';
import { siteConfig } from '../config/siteConfig';

interface PortfolioProps {
  onOpenLightbox: (item: PortfolioItem, index: number) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('All');

  const filteredItems = selectedCategory === 'All'
    ? portfolioData
    : portfolioData.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 lg:py-36 bg-[#1A1817] border-t border-[#C4BCB5]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[1px] w-8 bg-[#7A2837]" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#C4BCB5] font-medium">
              My Work
            </span>
            <span className="h-[1px] w-8 bg-[#7A2837]" />
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#F6F2EC] mb-4">
            The Portfolio of Looks.
          </h2>
          <p className="text-sm sm:text-base text-[#C4BCB5]/80 font-light max-w-xl mx-auto leading-relaxed">
            From imperial traditional bridal grandeur to radiant modern occasion glam, explore looks crafted for celebrations across Ajmer, Jaipur, and beyond.
          </p>

          <div className="mt-4 inline-block px-3 py-1 bg-[#121110] border border-[#C4BCB5]/20 text-[10px] uppercase tracking-widest text-[#C4BCB5]/70">
            Verified Portfolio • Authentic Editorial Looks &amp; Behind the Scenes
          </div>
        </div>

        {/* Refined Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          {portfolioCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-[#7A2837] text-white shadow-md'
                    : 'bg-[#121110] text-[#C4BCB5]/80 border border-[#C4BCB5]/15 hover:border-[#C4BCB5]/40 hover:text-[#F6F2EC]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Haute Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => {
            const actualIndex = portfolioData.findIndex((p) => p.id === item.id);
            const targetIndex = actualIndex !== -1 ? actualIndex : index;

            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item, targetIndex)}
                className="group relative cursor-pointer overflow-hidden bg-[#121110] border border-[#C4BCB5]/20 shadow-lg transition-all duration-500 hover:border-[#C4BCB5]/50 hover:shadow-2xl"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpenLightbox(item, targetIndex);
                  }
                }}
                aria-label={`View look: ${item.title}`}
              >
              {/* Image Frame */}
              <div className="aspect-[4/5] overflow-hidden editorial-zoom-frame">
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover object-center filter contrast-[1.03]"
                  loading="lazy"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/95 via-[#121110]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-7 text-[#F6F2EC]">
                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] uppercase tracking-widest text-[#7A2837] font-semibold">
                      {item.category}
                    </span>
                    <span className="text-[#C4BCB5]/40 text-xs">•</span>
                    <span className="text-[10px] uppercase tracking-wider text-[#C4BCB5]/80">
                      {item.occasion}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-normal text-white mb-3">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-[#C4BCB5] font-medium tracking-wider uppercase pt-2.5 border-t border-[#C4BCB5]/20">
                    <Eye className="w-3.5 h-3.5 text-[#7A2837]" />
                    <span>Expand Editorial View</span>
                  </div>
                </div>
              </div>

              {/* Touch Indicator Glyph */}
              <div className="absolute top-3 right-3 sm:hidden p-2 bg-[#121110]/80 text-[#F6F2EC] rounded-full border border-[#C4BCB5]/20">
                <Eye className="w-3.5 h-3.5" />
              </div>
            </div>
            );
          })}
        </div>

        {/* Bottom CTA to Instagram (Phase 3 Mandate: Simple CTA "Follow on Instagram") */}
        <div className="mt-20 text-center">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#121110] border border-[#C4BCB5]/30 hover:border-[#F6F2EC] text-[#F6F2EC] text-xs uppercase tracking-[0.25em] font-medium transition-all shadow-md"
          >
            <InstagramIcon className="w-4 h-4 text-[#7A2837] group-hover:rotate-6 transition-transform" />
            <span>Follow on Instagram</span>
            <ArrowUpRight className="w-4 h-4 text-[#C4BCB5]" />
          </a>
          <p className="text-[11px] text-[#C4BCB5]/60 uppercase tracking-widest mt-4">
            {siteConfig.instagramHandle} • Dimple Khinchi
          </p>
        </div>

      </div>
    </section>
  );
};
