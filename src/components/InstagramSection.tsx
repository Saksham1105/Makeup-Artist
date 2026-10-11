import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { siteConfig } from '../config/siteConfig';

export const InstagramSection: React.FC = () => {
  const instagramMoments = [
    {
      id: 'ig-1',
      imageUrl: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&w=600&q=80',
      caption: 'Imperial Bridal Artistry',
      tag: 'Wedding Rituals'
    },
    {
      id: 'ig-2',
      imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      caption: 'Sunset Sangeet Dewiness',
      tag: 'Cocktails & Sangeet'
    },
    {
      id: 'ig-3',
      imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80',
      caption: 'Statement Kohl & Champagne',
      tag: 'Festive Glamour'
    },
    {
      id: 'ig-4',
      imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
      caption: 'Couture Floral Hair Architecture',
      tag: 'Hair Artistry'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#1A1817] border-t border-[#C4BCB5]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <InstagramIcon className="w-4 h-4 text-[#7A2837]" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#C4BCB5] font-medium">
              {siteConfig.instagramHandle}
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#F6F2EC] mb-4">
            Beauty Beyond the Screen.
          </h2>

          <p className="text-sm sm:text-base text-[#C4BCB5]/80 font-light leading-relaxed mb-8">
            Explore fresh bridal transformations, masterclass moments, and beauty inspiration directly on Instagram.
          </p>

          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#7A2837] hover:bg-[#963546] text-white text-xs uppercase tracking-[0.24em] font-medium transition-all shadow-md active:scale-95"
          >
            <InstagramIcon className="w-4 h-4 text-white" />
            <span>Follow on Instagram</span>
            <ArrowUpRight className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Curated Preview Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {instagramMoments.map((moment) => (
            <a
              key={moment.id}
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-[#121110] border border-[#C4BCB5]/20 block shadow-md"
              aria-label={`View Instagram showcase: ${moment.caption}`}
            >
              <img
                src={moment.imageUrl}
                alt={moment.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/95 via-[#121110]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[9px] uppercase tracking-widest text-[#7A2837] font-semibold mb-1">
                  {moment.tag}
                </span>
                <p className="font-serif text-lg text-[#F6F2EC] leading-snug mb-3">
                  {moment.caption}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#C4BCB5]">
                  <span>Open Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Minimal Corner Glyph */}
              <div className="absolute top-2.5 right-2.5 p-1.5 bg-[#121110]/70 text-white backdrop-blur-xs rounded-full sm:hidden">
                <InstagramIcon className="w-3 h-3" />
              </div>
            </a>
          ))}
        </div>

        {/* Showcase Notice */}
        <p className="text-[10px] text-center text-[#C4BCB5]/50 uppercase tracking-widest mt-10">
          Demo Visual Showcase • Direct links navigate to Dimple's official Instagram profile
        </p>

      </div>
    </section>
  );
};
