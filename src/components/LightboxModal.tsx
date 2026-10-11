import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { PortfolioItem } from '../data/portfolioData';

interface LightboxModalProps {
  items: PortfolioItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null && items[currentIndex] != null;
  const currentItem = isOpen ? items[currentIndex] : null;
  const hasPrev = currentIndex !== null && currentIndex > 0;
  const hasNext = currentIndex !== null && currentIndex < items.length - 1;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && hasPrev) {
        onNavigate(currentIndex - 1);
      } else if (e.key === 'ArrowRight' && hasNext) {
        onNavigate(currentIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, currentIndex, hasPrev, hasNext, onClose, onNavigate]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lookbook lightbox"
    >
      {/* Top Bar: Counter & Close */}
      <div 
        className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between text-[#F6F2EC] z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C4BCB5] font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7A2837]" />
          <span>{currentItem.category}</span>
          <span className="text-[#C4BCB5]/40">•</span>
          <span>Look {currentIndex + 1} of {items.length}</span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close lightbox (Esc)"
          className="p-2.5 text-[#C4BCB5] hover:text-white bg-[#1A1817]/80 hover:bg-[#1A1817] rounded-full transition-colors border border-[#C4BCB5]/20"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Content Area */}
      <div
        className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Button */}
        {hasPrev && (
          <button
            onClick={() => onNavigate(currentIndex - 1)}
            aria-label="Previous look (Arrow left)"
            className="absolute -left-3 sm:-left-12 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 bg-[#1A1817]/90 hover:bg-[#7A2837] text-white border border-[#C4BCB5]/30 rounded-full transition-all"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Current Image Frame */}
        <div className="relative overflow-hidden max-h-[72vh] flex items-center justify-center border border-[#C4BCB5]/25 bg-black/40 shadow-2xl">
          <picture>
            <source
              type="image/webp"
              srcSet={currentItem.lightboxSrcSet}
              sizes="(max-width: 1024px) 95vw, 1200px"
            />
            <img
              src={currentItem.lightboxUrl}
              alt={currentItem.imageAlt}
              className="max-h-[72vh] max-w-full object-contain select-none"
              loading="eager"
              decoding="async"
              width={currentItem.width}
              height={currentItem.height}
            />
          </picture>
        </div>

        {/* Image Caption */}
        <div className="w-full text-center mt-5 text-[#F6F2EC]">
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F6F2EC]">
            {currentItem.title}
          </h3>
          <p className="text-xs text-[#C4BCB5] mt-1 tracking-[0.2em] uppercase">
            {currentItem.occasion}
          </p>
        </div>

        {/* Next Button */}
        {hasNext && (
          <button
            onClick={() => onNavigate(currentIndex + 1)}
            aria-label="Next look (Arrow right)"
            className="absolute -right-3 sm:-right-12 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 bg-[#1A1817]/90 hover:bg-[#7A2837] text-white border border-[#C4BCB5]/30 rounded-full transition-all"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
      </div>
    </div>
  );
};
