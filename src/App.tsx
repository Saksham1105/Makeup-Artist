import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Portfolio } from './components/Portfolio';
import { VideoReelsSection } from './components/VideoReelsSection';
import { BookingContact } from './components/BookingContact';
import { Footer } from './components/Footer';
import { WhatsAppModal } from './components/WhatsAppModal';
import { LightboxModal } from './components/LightboxModal';
import { MobileBookingBar } from './components/MobileBookingBar';
import { siteConfig } from './config/siteConfig';
import type { ServiceItem } from './data/servicesData';
import { portfolioData, type PortfolioItem } from './data/portfolioData';

export function App() {
  // Modal states
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);
  const [activeServiceTitle, setActiveServiceTitle] = useState<string | undefined>(undefined);
  const [customMessage, setCustomMessage] = useState<string | undefined>(undefined);

  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Handlers for WhatsApp enquiry
  const handleOpenGeneralBooking = () => {
    setActiveServiceTitle(undefined);
    setCustomMessage(siteConfig.getDefaultEnquiryMessage());
    setWhatsAppModalOpen(true);
  };

  const handleEnquireService = (service: ServiceItem) => {
    const message = siteConfig.getDefaultEnquiryMessage(service.title);
    setActiveServiceTitle(service.title);
    setCustomMessage(message);
    setWhatsAppModalOpen(true);
  };

  const handleOpenWithMessage = (message: string) => {
    setActiveServiceTitle(undefined);
    setCustomMessage(message);
    setWhatsAppModalOpen(true);
  };

  // Handlers for Lightbox
  const handleOpenLightbox = (_item: PortfolioItem, index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNavigateLightbox = (newIndex: number) => {
    setLightboxIndex(newIndex);
  };

  return (
    <div className="min-h-screen bg-[#121110] text-[#F6F2EC] flex flex-col font-sans selection:bg-[#7A2837] selection:text-white">
      {/* Signature Sticky Navigation Header */}
      <Navbar onOpenBooking={handleOpenGeneralBooking} />

      {/* Main Page Flow */}
      <main className="flex-1">
        <Hero onOpenBooking={handleOpenGeneralBooking} />
        <About onOpenBooking={handleOpenGeneralBooking} />
        <Services onEnquireService={handleEnquireService} />
        {/* High-Contrast Warm Porcelain Editorial Section */}
        <WhyChooseUs />
        <Portfolio onOpenLightbox={handleOpenLightbox} />
        <VideoReelsSection />
        <BookingContact onOpenBookingWithMessage={handleOpenWithMessage} />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Discreet Mobile Floating Action Bar */}
      <MobileBookingBar onOpenBooking={handleOpenGeneralBooking} />

      {/* Interactive Lightbox Modal */}
      <LightboxModal
        items={portfolioData}
        currentIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
      />

      {/* Safe WhatsApp Booking Helper Modal */}
      <WhatsAppModal
        isOpen={whatsAppModalOpen}
        onClose={() => setWhatsAppModalOpen(false)}
        serviceTitle={activeServiceTitle}
        initialMessage={customMessage}
      />
    </div>
  );
}

export default App;
