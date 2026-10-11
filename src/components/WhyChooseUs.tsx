import React from 'react';

export const WhyChooseUs: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Anatomic Calibration',
      tagline: 'Sculpted for your unique features',
      description: 'Rejecting standardized salon templates in favor of custom shade mixing, bone structure illumination, and undertone calibration that celebrates your authentic heritage.'
    },
    {
      num: '02',
      title: 'Complexion Longevity',
      tagline: 'Formulated for long wedding hours',
      description: 'Layering breathable, humidity-resistant priming and skin setting techniques ensuring your makeup remains luminous, tear-resistant, and comfortable through extended ceremonies.'
    },
    {
      num: '03',
      title: 'Ensemble & Heritage Synergy',
      tagline: 'Harmonizing jewelry, drapery & tone',
      description: 'Meticulously balancing lip depths and eye shimmers with the embroidery metallics of your bridal attire, hair florals, and venue lighting conditions.'
    },
    {
      num: '04',
      title: 'Dedicated Atmosphere',
      tagline: 'Punctuality, calm & single-client focus',
      description: 'Committing to unhurried appointment blocks so your wedding morning remains a serene sanctuary filled with confidence rather than backstage rush.'
    }
  ];

  return (
    <section id="craft" className="py-24 lg:py-36 bg-[#F6F2EC] text-[#121110] border-t border-[#C4BCB5]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-[1px] w-8 bg-[#7A2837]" />
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#7A2837] font-semibold">
            Why Choose Dimple
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Expressive Typography List (7 cols) */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#121110] mb-4">
              The Tenets of <br />
              <span className="italic font-light text-[#7A2837]">My Artistry.</span>
            </h2>

            <p className="text-[10px] uppercase tracking-[0.25em] text-[#121110]/60 font-semibold mb-12">
              Authentic Artistry Approach • Dimple Khinchi, Ajmer &amp; Jaipur
            </p>

            <div className="space-y-6">
              {principles.map((item) => (
                <div 
                  key={item.num}
                  className="p-8 bg-white border border-[#C4BCB5]/40 transition-all duration-300 hover:border-[#7A2837]/50 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif text-2xl font-normal text-[#121110]">
                      {item.title}
                    </h3>
                    <span className="font-serif text-2xl text-[#7A2837]">
                      {item.num}
                    </span>
                  </div>

                  <span className="text-[10px] uppercase tracking-widest text-[#7A2837] font-semibold block mb-3">
                    {item.tagline}
                  </span>

                  <p className="text-xs sm:text-sm text-[#121110]/75 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Visual Quote on Porcelain Surface (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="aspect-[3/4] overflow-hidden bg-[#1A1817] border border-[#C4BCB5]/40 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85"
                  alt="High-fashion Indian bridal makeup portrait illustrating craftsmanship tenets"
                  className="w-full h-full object-cover filter contrast-[1.04]"
                  loading="lazy"
                />
              </div>

              {/* Offset High-Contrast Quote Box */}
              <div className="p-8 bg-[#121110] text-[#F6F2EC] border-l-4 border-[#7A2837] mt-6 shadow-2xl">
                <blockquote className="font-serif text-xl italic text-[#F6F2EC] leading-snug">
                  "Every look is crafted to feel like you at your most confident, elegant, and radiant."
                </blockquote>
                <p className="text-[10px] tracking-[0.28em] uppercase text-[#C4BCB5] mt-4 font-sans font-medium">
                  Dimple Khinchi Artistry
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
