import React from 'react';
import { ArrowUpRight, Sparkles, Award } from 'lucide-react';
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
          
          {/* Left Column: Authentic Photographic Proof */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image: Dimple in Action */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#121110] border border-[#C4BCB5]/25 shadow-2xl">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/images/video-posters/reel-dimple-brush-480.webp 480w, /images/video-posters/reel-dimple-brush-720.webp 720w, /images/video-posters/reel-dimple-brush-1080.webp 1080w"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 420px"
                  />
                  <img
                    src="/images/video-posters/reel-dimple-brush-480.webp"
                    alt="Dimple Khinchi actively applying and blending makeup on client in studio"
                    className="w-full h-full object-cover filter contrast-[1.02]"
                    loading="lazy"
                    decoding="async"
                    width={720}
                    height={960}
                  />
                </picture>
                
                {/* Live Action Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#121110]/95 via-[#121110]/70 to-transparent">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#7A2837] font-semibold block">
                    The Artistry in Action
                  </span>
                  <span className="font-serif text-sm text-[#F6F2EC]">
                    Dimple Khinchi Studio Masterclass
                  </span>
                </div>
              </div>

              {/* Overlapping Detail Inset: Authentic Medal */}
              <div className="absolute -bottom-8 -right-6 sm:-bottom-10 sm:-right-8 w-44 sm:w-52 aspect-square overflow-hidden shadow-2xl border-2 border-[#1A1817] bg-[#121110] hidden sm:block">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/images/portfolio/credential-medal-480.webp 480w, /images/portfolio/credential-medal-768.webp 768w"
                    sizes="(max-width: 640px) 160px, 208px"
                  />
                  <img
                    src="/images/portfolio/credential-medal-480.webp"
                    alt="Official Shining Star of Mahima Bajaj Academy medal recognition"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width={480}
                    height={480}
                  />
                </picture>
                <div className="absolute bottom-0 inset-x-0 p-2.5 bg-[#121110]/90 backdrop-blur-xs text-center border-t border-[#C4BCB5]/20">
                  <span className="text-[8px] uppercase tracking-wider text-[#C4BCB5] font-medium block truncate">
                    Shining Star of Mahima Bajaj Academy
                  </span>
                </div>
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

            {/* Client Location & Presence Tag */}
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
                Based in <strong className="text-[#F6F2EC] font-normal">Ajmer, Rajasthan</strong> and active across Jaipur and destination venues, Dimple Khinchi combines creative beauty modeling, transition artistry, and bespoke makeup craft. As the creator behind <strong className="text-[#F6F2EC] font-normal">{siteConfig.youtubeHandle}</strong>, she brings a modern, camera-tested eye to royal bridal nuptials, festive milestones, and creative lookbooks.
              </p>
              <p className="text-sm sm:text-base text-[#C4BCB5]/80">
                Whether sculpting an enduring bridal look with poshak and kundan jewelry or delivering a sunlit radiant engagement glow, every look is customized to your unique bone structure and skin tone.
              </p>
            </div>

            {/* Verified Credentials & Academy Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-6 border-y border-[#C4BCB5]/15 mb-8">
              {/* Credential 1: Mahima Bajaj Academy Award */}
              <div className="p-4 bg-[#121110]/60 border border-[#C4BCB5]/10">
                <div className="flex items-center gap-2 text-[#7A2837] mb-2">
                  <Award className="w-4 h-4" />
                  <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#F6F2EC]">
                    Formal Training Recognition
                  </h4>
                </div>
                <p className="text-xs text-[#C4BCB5]/75 leading-relaxed font-light">
                  Recognized as <strong className="text-[#F6F2EC] font-normal">“Shining Star of Mahima Bajaj Academy”</strong>, grounded in intensive hands-on academy training and bridal techniques.
                </p>
              </div>

              {/* Credential 2: Dimple Glam Academy Branding */}
              <div className="p-4 bg-[#121110]/60 border border-[#C4BCB5]/10 flex items-start gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#C4BCB5]/30 bg-[#121110] shrink-0 p-0.5">
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
                <div>
                  <div className="flex items-center gap-2 text-[#7A2837] mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#F6F2EC]">
                      Dimple Glam Academy
                    </h4>
                  </div>
                  <p className="text-xs text-[#C4BCB5]/75 leading-relaxed font-light">
                    Educational brand founded on the philosophy to <strong className="text-[#F6F2EC] font-normal">Learn, Create, and Grow</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <button
                onClick={onOpenBooking}
                className="px-8 py-3.5 bg-[#7A2837] hover:bg-[#963546] text-white text-xs uppercase tracking-[0.24em] font-medium transition-all shadow-md flex items-center gap-2 active:scale-95"
              >
                <span>Book Now</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="#services"
                className="text-xs uppercase tracking-[0.2em] text-[#C4BCB5] hover:text-[#F6F2EC] transition-colors py-2"
              >
                View Services
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
