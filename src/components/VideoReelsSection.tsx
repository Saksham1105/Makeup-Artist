import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, ArrowUpRight, Sparkles, X } from 'lucide-react';
import { InstagramIcon, YouTubeIcon } from './Icons';
import { siteConfig } from '../config/siteConfig';

interface ReelItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  posterUrl: string;
  videoUrl: string;
  description: string;
  sourceFile: string;
}

const videoReelsData: ReelItem[] = [
  {
    id: 'reel-1',
    title: 'Sunlit Outdoor Bridal Grace',
    category: 'Destination Nuptials',
    duration: '0:10',
    posterUrl: '/images/video-posters/reel-outdoor-bride.webp',
    videoUrl: '/videos/reel-outdoor-bride.mp4',
    description: 'Daylight performance in crimson lehenga, capturing authentic bridal radiance and natural outdoor shimmer.',
    sourceFile: 'IMG_9794.MOV'
  },
  {
    id: 'reel-2',
    title: 'Royal Heritage Shimmer in Motion',
    category: 'Studio Bridal',
    duration: '0:14',
    posterUrl: '/images/video-posters/reel-royal-shimmer.webp',
    videoUrl: '/videos/reel-royal-shimmer.mp4',
    description: 'Dimensional polki and bandhani jewelry reflections with sculpted dewy bridal base under studio illumination.',
    sourceFile: 'IMG_1736.MOV'
  },
  {
    id: 'reel-3',
    title: 'Contemporary Editorial Glow',
    category: 'High-Fashion Glam',
    duration: '0:09',
    posterUrl: '/images/video-posters/reel-editorial-glow.webp',
    videoUrl: '/videos/reel-editorial-glow.mp4',
    description: 'High-contrast cheekbone glow and crystal corset accents highlighting modern editorial technique.',
    sourceFile: 'IMG_9720.MOV'
  },
  {
    id: 'reel-4',
    title: 'Artistry in Action: Studio Technique',
    category: 'Masterclass Behind the Scenes',
    duration: '0:03',
    posterUrl: '/images/video-posters/reel-dimple-brush.webp',
    videoUrl: '/videos/reel-dimple-brush.mp4',
    description: 'Dimple Khinchi holding brushes actively blending eye makeup and contouring client features in studio.',
    sourceFile: 'IMG_0108.MOV'
  }
];

export const VideoReelsSection: React.FC = () => {
  const [activeModalReel, setActiveModalReel] = useState<ReelItem | null>(null);
  const [playingInlineId, setPlayingInlineId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const handleToggleInlinePlay = (id: string) => {
    if (playingInlineId === id) {
      const vid = videoRefs.current[id];
      if (vid) {
        if (vid.paused) {
          vid.play();
        } else {
          vid.pause();
        }
      }
    } else {
      // Pause previous
      if (playingInlineId && videoRefs.current[playingInlineId]) {
        videoRefs.current[playingInlineId]?.pause();
      }
      setPlayingInlineId(id);
      setTimeout(() => {
        const vid = videoRefs.current[id];
        if (vid) {
          vid.play().catch(() => {});
        }
      }, 50);
    }
  };

  const handleOpenModal = (reel: ReelItem) => {
    // Pause any inline playing video
    if (playingInlineId && videoRefs.current[playingInlineId]) {
      videoRefs.current[playingInlineId]?.pause();
    }
    setActiveModalReel(reel);
  };

  const handleCloseModal = () => {
    setActiveModalReel(null);
  };

  return (
    <section id="reels" className="py-24 lg:py-32 bg-[#1A1817] border-t border-[#C4BCB5]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-[#121110] border border-[#C4BCB5]/20 text-[10px] text-[#C4BCB5] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#7A2837]" />
            <span>Artistry In Motion • Real Video Reels</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#F6F2EC] mb-4">
            Movement, Light &amp; Craft.
          </h2>

          <p className="text-sm sm:text-base text-[#C4BCB5]/80 font-light leading-relaxed mb-8">
            Experience the dimensional radiance, real skin texture, and fluid grace of Dimple Khinchi’s bridal and masterclass artistry captured on video.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#7A2837] hover:bg-[#963546] text-white uppercase tracking-[0.22em] font-medium transition-all shadow-md active:scale-95"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-white" />
              <span>Instagram @dimple_khinchi32</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/80" />
            </a>

            <a
              href={siteConfig.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#C4BCB5]/30 hover:border-[#F6F2EC] text-[#F6F2EC] uppercase tracking-[0.22em] font-medium transition-all hover:bg-[#121110]"
            >
              <YouTubeIcon className="w-3.5 h-3.5 text-[#7A2837]" />
              <span>YouTube @Dimpleglamacademy</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/80" />
            </a>
          </div>
        </div>

        {/* 4 Video Reels Cards in 9:16 Aspect Ratio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoReelsData.map((reel) => {
            const isPlayingInline = playingInlineId === reel.id;

            return (
              <div
                key={reel.id}
                className="group relative flex flex-col bg-[#121110] border border-[#C4BCB5]/20 overflow-hidden shadow-xl hover:border-[#C4BCB5]/50 transition-all duration-300"
              >
                {/* 9:16 Aspect Frame */}
                <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
                  {/* Poster Image (Visible when not playing) */}
                  {!isPlayingInline && (
                    <img
                      src={reel.posterUrl}
                      alt={reel.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}

                  {/* HTML5 Video Element (Instantiated when requested) */}
                  {isPlayingInline && (
                    <video
                      ref={(el) => { videoRefs.current[reel.id] = el; }}
                      src={reel.videoUrl}
                      poster={reel.posterUrl}
                      loop
                      playsInline
                      muted={isMuted}
                      className="w-full h-full object-cover"
                      onClick={() => handleToggleInlinePlay(reel.id)}
                    />
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-black/40 pointer-events-none" />

                  {/* Top Bar: Category & Duration Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] uppercase tracking-wider text-white z-10">
                    <span className="px-2 py-0.5 bg-[#121110]/80 backdrop-blur-xs border border-[#C4BCB5]/25 text-[#F6F2EC]">
                      {reel.category}
                    </span>
                    <span className="px-1.5 py-0.5 bg-black/70 backdrop-blur-xs text-[#C4BCB5]">
                      {reel.duration}
                    </span>
                  </div>

                  {/* Center Play / Pause Overlay Button */}
                  {!isPlayingInline ? (
                    <button
                      onClick={() => handleToggleInlinePlay(reel.id)}
                      className="absolute inset-0 flex items-center justify-center text-white group-hover:scale-105 transition-transform focus:outline-none"
                      aria-label={`Play video: ${reel.title}`}
                    >
                      <div className="w-14 h-14 rounded-full bg-[#7A2837]/90 hover:bg-[#7A2837] border-2 border-white/60 flex items-center justify-center shadow-[0_4px_24px_rgba(122,40,55,0.7)] transition-all">
                        <Play className="w-6 h-6 text-white ml-1 fill-white" />
                      </div>
                    </button>
                  ) : (
                    <div className="absolute bottom-3 right-3 flex items-center gap-2 z-20">
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="p-2 rounded-full bg-black/80 hover:bg-[#7A2837] text-white border border-white/30 transition-colors"
                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => handleToggleInlinePlay(reel.id)}
                        className="p-2 rounded-full bg-black/80 hover:bg-[#7A2837] text-white border border-white/30 transition-colors"
                        aria-label="Pause video"
                      >
                        <Pause className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  {/* Expand to Modal Button */}
                  <button
                    onClick={() => handleOpenModal(reel)}
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 bg-black/70 hover:bg-[#7A2837] text-white border border-white/30 rounded-full z-20"
                    title="Expand video modal"
                    aria-label={`Expand ${reel.title} in modal`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Card Meta Content */}
                <div className="p-4 flex flex-col justify-between flex-1 bg-[#121110]">
                  <div>
                    <h3 className="font-serif text-lg text-[#F6F2EC] leading-snug mb-1">
                      {reel.title}
                    </h3>
                    <p className="text-xs text-[#C4BCB5]/75 font-light leading-relaxed">
                      {reel.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#C4BCB5]/10 flex items-center justify-between text-[11px] text-[#C4BCB5]/60">
                    <span className="font-mono text-[9px] uppercase tracking-wider">{reel.sourceFile}</span>
                    <button
                      onClick={() => handleOpenModal(reel)}
                      className="text-[#F6F2EC] hover:text-[#7A2837] flex items-center gap-1 transition-colors uppercase tracking-widest text-[9px] font-medium"
                    >
                      <span>Watch Full</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Accessible Video Modal Lightbox */}
      {activeModalReel && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-label={activeModalReel.title}
        >
          <div
            className="relative max-w-sm w-full bg-[#121110] border border-[#C4BCB5]/30 overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="p-4 bg-[#1A1817] border-b border-[#C4BCB5]/15 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#7A2837] font-semibold block">
                  {activeModalReel.category}
                </span>
                <h3 className="font-serif text-base text-[#F6F2EC]">
                  {activeModalReel.title}
                </h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 text-[#C4BCB5] hover:text-white rounded-full bg-[#121110] border border-[#C4BCB5]/20"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Video Player with Controls */}
            <div className="relative aspect-[9/16] bg-black">
              <video
                src={activeModalReel.videoUrl}
                poster={activeModalReel.posterUrl}
                autoPlay
                controls
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#1A1817] text-xs text-[#C4BCB5]/80 flex items-center justify-between">
              <span>{activeModalReel.description}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
