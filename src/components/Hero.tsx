import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { siteConfig } from '../config/siteConfig';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section 
      id="home"
      className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-28 flex items-center bg-[#121110] overflow-hidden"
    >
      {/* GPU-calibrated ambient background accents */}
      <div 
        className="absolute top-1/4 -left-32 w-80 h-80 sm:w-[28rem] sm:h-[28rem] rounded-full bg-[#2E1E26]/30 blur-2xl md:blur-3xl pointer-events-none transform-gpu" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 right-0 w-72 h-72 sm:w-[24rem] sm:h-[24rem] rounded-full bg-[#7A2837]/15 blur-2xl md:blur-3xl pointer-events-none transform-gpu" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Expressive Headline & Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Immediate Eyebrow */}
            <div className="flex items-center gap-3 mb-6 hero-anim-eyebrow">
              <span className="h-[1px] w-6 bg-[#7A2837]" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#C4BCB5] font-medium">
                {siteConfig.eyebrow}
              </span>
            </div>

            {/* Instant Bodoni Headline: V3 Personalized Identity */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] leading-[1.03] text-[#F6F2EC] mb-8 font-normal hero-anim-title">
              Your Look. <br />
              <span className="italic font-light text-[#C4BCB5]">Your Moment.</span>
            </h1>

            {/* Immediate Supporting Copy Grounded in Evidence */}
            <p className="max-w-xl text-base sm:text-lg text-[#C4BCB5]/85 leading-relaxed font-light mb-10 hero-anim-copy">
              Bespoke bridal, celebration, and shoot makeup artistry by <strong className="text-[#F6F2EC] font-normal">Dimple Khinchi</strong>. Celebrating your authentic individuality with luminous, camera-ready looks calibrated to endure ceremonial tears and extended wedding hours.
            </p>

            {/* Primary & Secondary CTAs Visible Immediately */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-12 hero-anim-cta">
              <button
                onClick={onOpenBooking}
                className="group px-8 py-4 bg-[#7A2837] hover:bg-[#963546] text-white text-xs uppercase tracking-[0.25em] font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_4px_20px_rgba(122,40,55,0.4)] active:scale-98"
              >
                <span>Book Now</span>
                <ArrowUpRight className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              
              <a
                href="#portfolio"
                className="px-8 py-4 border border-[#C4BCB5]/30 hover:border-[#F6F2EC] text-[#F6F2EC] text-xs uppercase tracking-[0.25em] font-medium text-center transition-all duration-300 hover:bg-[#1A1817]"
              >
                View My Work
              </a>
            </div>

            {/* Micro-Meta Details Grounded in Ajmer/Jaipur */}
            <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-[#C4BCB5]/15 text-xs text-[#C4BCB5]/75">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#F6F2EC] hover:text-[#7A2837] transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-[#1A1817] border border-[#C4BCB5]/20 flex items-center justify-center group-hover:border-[#7A2837] transition-colors">
                  <InstagramIcon className="w-3.5 h-3.5 text-[#C4BCB5] group-hover:text-white" />
                </div>
                <span className="font-medium tracking-wider">{siteConfig.instagramHandle}</span>
              </a>

              <span className="text-[#C4BCB5]/30 hidden sm:inline">•</span>

              <span className="text-[11px] uppercase tracking-wider text-[#C4BCB5]/80">
                {siteConfig.locationPlaceholder}
              </span>
            </div>

          </div>

          {/* Right Column: Dominant Editorial Portrait with Precise Responsive Delivery (5 cols) */}
          <div className="lg:col-span-5 relative hero-anim-image">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Frame Accent */}
              <div className="absolute -inset-3 sm:-inset-4 border border-[#C4BCB5]/20 pointer-events-none translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3" />

              {/* Dominant Image Container with explicit aspect ratio */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#1A1817] shadow-2xl border border-[#C4BCB5]/30">
                {!imgError ? (
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/images/portfolio/bridal-regal-portrait-480.webp 480w, /images/portfolio/bridal-regal-portrait-768.webp 768w, /images/portfolio/bridal-regal-portrait-1200.webp 1200w, /images/portfolio/bridal-regal-portrait-1600.webp 1600w"
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 520px"
                    />
                    <source
                      type="image/jpeg"
                      srcSet="/images/portfolio/bridal-regal-portrait-480.jpg 480w, /images/portfolio/bridal-regal-portrait-768.jpg 768w, /images/portfolio/bridal-regal-portrait-1200.jpg 1200w, /images/portfolio/bridal-regal-portrait-1600.jpg 1600w"
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 520px"
                    />
                    <img
                      src="/images/portfolio/bridal-regal-portrait-480.webp"
                      alt="Dimple Khinchi royal Rajasthani bridal makeup portrait showcasing emerald polki choker and bandhani dupatta"
                      className="w-full h-full object-cover object-[center_18%] filter contrast-[1.03] brightness-[0.98] transition-transform duration-700 hover:scale-[1.03]"
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      width={1200}
                      height={1845}
                      onError={() => setImgError(true)}
                    />
                  </picture>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#1A1817] text-[#C4BCB5] text-xs">
                    Editorial Visual
                  </div>
                )}

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/80 via-transparent to-transparent pointer-events-none" />

                {/* Minimalist Lower Tag */}
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#1A1817]/90 backdrop-blur-xs border border-[#C4BCB5]/20 flex items-center justify-between text-[#F6F2EC]">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#C4BCB5] block font-semibold">
                      Royal Bridal Artistry
                    </span>
                    <span className="font-serif text-sm text-[#F6F2EC]">
                      Regal Grace &amp; Timeless Radiance
                    </span>
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-[#E28D9D] font-semibold px-2.5 py-0.5 bg-[#121110] border border-[#E28D9D]/30">
                    Signature Look
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:flex justify-center mt-16">
          <a
            href="#about"
            className="flex flex-col items-center text-[#C4BCB5]/85 hover:text-[#F6F2EC] transition-colors group"
          >
            <span className="text-[9px] uppercase tracking-[0.35em] mb-2 group-hover:translate-y-0.5 transition-transform">
              Scroll To Discover
            </span>
            <ArrowDown className="w-3.5 h-3.5 text-[#E28D9D] animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};
