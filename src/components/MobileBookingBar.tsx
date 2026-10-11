import React, { useState, useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface MobileBookingBarProps {
  onOpenBooking: () => void;
}

export const MobileBookingBar: React.FC<MobileBookingBarProps> = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return;

      const scrollY = window.scrollY;
      const contactEl = document.getElementById('contact');

      let contactInView = false;
      if (contactEl) {
        const rect = contactEl.getBoundingClientRect();
        // Hide when contact section enters viewport
        if (rect.top <= window.innerHeight - 80) {
          contactInView = true;
        }
      }

      // Show only after scrolling past hero and when not already at contact section
      if (scrollY > 450 && !contactInView) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <aside 
      aria-label="Mobile quick booking"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#1A1817]/95 backdrop-blur-md border-t border-[#C4BCB5]/25 p-3.5 pb-[max(0.875rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(0,0,0,0.6)] animate-in slide-in-from-bottom duration-300"
    >
      <div className="flex items-center justify-between gap-3 max-w-sm mx-auto">
        <div className="min-w-0 flex-1">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#7A2837] font-semibold block truncate">
            {siteConfig.artistName}
          </span>
          <span className="text-xs font-serif text-[#F6F2EC] truncate block">
            Reserve Appointment
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 bg-[#7A2837] hover:bg-[#963546] text-white text-[11px] uppercase tracking-[0.2em] font-medium flex items-center gap-1.5 transition-all shadow-md active:scale-95"
          >
            <span>Book Now</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setIsDismissed(true)}
            aria-label="Dismiss quick booking bar"
            className="p-2 text-[#C4BCB5]/70 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
