import React from 'react';
import { ArrowUpRight, Sparkles, Heart } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-24 lg:py-36 bg-[#1A1817] border-t border-[#C4BCB5]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <span className="h-[1px] w-8 bg-[#7A2837]" />
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#C4BCB5] font-medium">
            About Dimple Khinchi
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Portrait Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#121110] border border-[#C4BCB5]/25 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
                  alt="Dimple Khinchi beauty artistry portrait"
                  className="w-full h-full object-cover filter contrast-[1.03]"
                  loading="lazy"
                />
              </div>

              {/* Overlapping Detail Inset */}
              <div className="absolute -bottom-8 -right-6 sm:-bottom-10 sm:-right-8 w-44 sm:w-52 aspect-square overflow-hidden shadow-2xl border-2 border-[#1A1817] bg-[#121110] hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80"
                  alt="Bespoke makeup artistry and fine application details"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Offset Decorative Accent */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t border-l border-[#7A2837]" />
            </div>
          </div>

          {/* Right Column: Grounded Editorial Narrative */}
          <div className="lg:col-span-7 lg:pl-4">
            
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#F6F2EC] leading-[1.08] mb-6">
              The Art of <br />
              <span className="italic font-light text-[#C4BCB5]">Revealing You.</span>
            </h2>

            {/* Client Draft Copy Tag */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-[#121110] border border-[#C4BCB5]/20 text-[10px] text-[#C4BCB5] tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7A2837]" />
              <span>Grounded in Instagram &amp; YouTube Presence • Ajmer, Rajasthan</span>
            </div>

            {/* Core Narrative */}
            <div className="space-y-5 text-base sm:text-lg text-[#C4BCB5]/90 font-light leading-relaxed mb-8">
              <p className="font-serif italic text-xl text-[#F6F2EC]/95">
                "Makeup is not about changing how you look; it’s about elevating your inherent grace, feeling confident in your skin, and owning your moment."
              </p>
              <p className="text-sm sm:text-base text-[#C4BCB5]/80">
                Based in <strong className="text-[#F6F2EC] font-normal">Ajmer, Rajasthan</strong> and active across Jaipur, Dimple Khinchi combines creative fashion modeling, transition artistry, and bespoke makeup craft. As the creator behind <strong className="text-[#F6F2EC] font-normal">{siteConfig.youtubeHandle}</strong>, she brings a modern, camera-tested eye to royal bridal nuptials, festive milestones, and masterclass education.
              </p>
              <p className="text-sm sm:text-base text-[#C4BCB5]/80">
                Whether sculpting an enduring bridal look with poshak and kundan jewelry or delivering a sunlit radiant engagement glow, every look is customized to your unique bone structure and skin tone.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-6 border-y border-[#C4BCB5]/15 mb-8">
              <div className="p-4 bg-[#121110]/60 border border-[#C4BCB5]/10">
                <div className="flex items-center gap-2 text-[#7A2837] mb-2">
                  <Sparkles className="w-4 h-4" />
                  <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#F6F2EC]">
                    Bespoke Calibration
                  </h4>
                </div>
                <p className="text-xs text-[#C4BCB5]/75 leading-relaxed font-light">
                  Custom shade mixing, undertone correction, and breathable skin prep tailored to Rajasthan's climate and long celebrations.
                </p>
              </div>

              <div className="p-4 bg-[#121110]/60 border border-[#C4BCB5]/10">
                <div className="flex items-center gap-2 text-[#7A2837] mb-2">
                  <Heart className="w-4 h-4" />
                  <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#F6F2EC]">
                    Dedicated Care
                  </h4>
                </div>
                <p className="text-xs text-[#C4BCB5]/75 leading-relaxed font-light">
                  Calm, unhurried attention for every appointment, creating a serene, confident atmosphere before your major entrance.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <button
                onClick={onOpenBooking}
                className="px-8 py-3.5 bg-[#7A2837] hover:bg-[#963546] text-white text-xs uppercase tracking-[0.24em] font-medium transition-all shadow-md flex items-center gap-2"
              >
                <span>Book Now</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="#services"
                className="text-xs uppercase tracking-[0.2em] text-[#C4BCB5] hover:text-[#F6F2EC] transition-colors py-2"
              >
                Explore Services &rarr;
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
