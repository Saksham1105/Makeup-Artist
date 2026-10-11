import React from 'react';
import { ArrowUpRight, MessageCircle, Check } from 'lucide-react';
import { servicesData, type ServiceItem } from '../data/servicesData';

interface ServicesProps {
  onEnquireService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onEnquireService }) => {
  return (
    <section id="services" className="py-24 lg:py-36 bg-[#121110] border-t border-[#C4BCB5]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-[#C4BCB5]/15">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-8 bg-[#7A2837]" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#C4BCB5] font-medium">
                Services &amp; Offerings
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#F6F2EC]">
              Curated for Every <br />
              <span className="italic font-light text-[#C4BCB5]">Occasion.</span>
            </h2>
          </div>

          <div className="mt-6 md:mt-0 max-w-md">
            <span className="text-[10px] uppercase tracking-widest text-[#7A2837] font-semibold block mb-1">
              Confirmed &amp; Customized Services
            </span>
            <p className="text-xs sm:text-sm text-[#C4BCB5]/75 leading-relaxed font-light">
              Artistry services designed for wedding celebrations, festive gatherings, and professional education in Ajmer, Jaipur, and destination locations.
            </p>
          </div>
        </div>

        {/* Editorial Service Entries */}
        <div className="space-y-16 lg:space-y-24">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <article
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center p-6 sm:p-10 bg-[#1A1817]/70 border border-[#C4BCB5]/15 transition-all duration-500 hover:border-[#C4BCB5]/35 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] ${
                  isEven ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Visual Panel (5 cols) */}
                <div className={`lg:col-span-5 relative ${isEven ? 'lg:col-start-8' : ''}`}>
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#121110] border border-[#C4BCB5]/20 editorial-zoom-frame">
                    <img
                      src={service.imageUrl}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover object-center filter contrast-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/80 via-transparent to-transparent opacity-60" />
                    
                    {/* Category Label */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#121110]/90 backdrop-blur-sm text-[9px] uppercase tracking-[0.22em] text-[#F6F2EC] font-medium border border-[#C4BCB5]/20">
                        {service.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 text-3xl font-serif text-[#C4BCB5]/40 select-none">
                      {service.number}
                    </div>
                  </div>
                </div>

                {/* Content Panel (7 cols) */}
                <div className={`lg:col-span-7 flex flex-col justify-between ${isEven ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs uppercase tracking-[0.25em] text-[#7A2837] font-semibold">
                        Service {service.number}
                      </span>
                      <span className="text-[#C4BCB5]/30">•</span>
                      <span className="text-[11px] uppercase tracking-wider text-[#C4BCB5]/60">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F6F2EC] mb-4">
                      {service.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#C4BCB5]/85 font-light leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Inclusions List */}
                    <div className="mb-6">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#C4BCB5]/60 block mb-2 font-medium">
                        Craftsmanship &amp; Inclusions:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#F6F2EC]/80">
                        {service.inclusions.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#7A2837] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Formulation Focus Line */}
                    <div className="p-3 bg-[#121110] border border-[#C4BCB5]/10 text-[11px] text-[#C4BCB5]/70 mb-8">
                      <span className="uppercase tracking-wider text-[#C4BCB5] font-medium">Standards: </span>
                      <span>{service.kitFocus}</span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-[#C4BCB5]/15 flex items-center justify-between">
                    <button
                      onClick={() => onEnquireService(service)}
                      className="group inline-flex items-center gap-2.5 px-6 py-3 bg-[#7A2837] hover:bg-[#963546] text-white text-xs uppercase tracking-[0.22em] font-medium transition-all shadow-md active:scale-95"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Enquire for Dates</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>

                    <span className="text-[11px] text-[#C4BCB5]/50 uppercase tracking-widest hidden sm:inline">
                      Ajmer • Jaipur • Travel
                    </span>
                  </div>
                </div>

              </article>
            );
          })}
        </div>

        {/* Custom Itinerary Banner */}
        <div className="mt-20 p-8 sm:p-12 bg-[#1A1817] border border-[#C4BCB5]/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#7A2837] font-semibold block mb-1">
              Custom Itineraries
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F6F2EC]">
              Planning a Destination or Multi-Day Wedding?
            </h3>
            <p className="text-xs sm:text-sm text-[#C4BCB5]/75 mt-2 font-light max-w-xl">
              Coordinated beauty looks across Sangeet, Mehendi, Vedic nuptials, and receptions in Ajmer, Jaipur, Pushkar, Udaipur, and beyond.
            </p>
          </div>
          <button
            onClick={() => onEnquireService(servicesData[0])}
            className="px-8 py-4 border border-[#C4BCB5]/40 hover:border-[#F6F2EC] hover:bg-[#121110] text-[#F6F2EC] text-xs uppercase tracking-[0.24em] font-medium transition-all shrink-0"
          >
            Request Bridal Itinerary
          </button>
        </div>

      </div>
    </section>
  );
};
