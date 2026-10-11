/**
 * Centralized Configuration for Dimple Khinchi Website
 * Redesigned for MAZRIK (https://mazrik.in)
 * Creative Concept: NOIR BEAUTÉ V3 — Personalized Identity & Editorial Elegance
 * 
 * STRICT COMPLIANCE:
 * - Grounded in verified Instagram (@dimple_khinchi32) & YouTube (@Dimpleglamacademy) evidence.
 * - Base location: Ajmer & Jaipur, Rajasthan (Available for destination celebrations).
 * - No fabricated seasonal urgency banners, brand affiliations, or artificial awards.
 * - Safe WhatsApp fallback modal with verified clipboard copy.
 */

export interface SiteConfig {
  artistName: string;
  tagline: string;
  eyebrow: string;
  seasonNotice?: string; // Optional; removed unverified seasonal urgency banner
  instagramHandle: string;
  instagramUrl: string;
  youtubeHandle: string;
  youtubeUrl: string;
  whatsappNumber: string; // Set to verified number when provided by client
  locationPlaceholder: string;
  emailPlaceholder: string;
  agencyName: string;
  agencyUrl: string;
  isDraftCopy: boolean;
  getWhatsAppUrl: (customMessage?: string) => string | null;
  getDefaultEnquiryMessage: (serviceName?: string) => string;
}

export const siteConfig: SiteConfig = {
  artistName: 'Dimple Khinchi',
  tagline: 'Your Look. Your Moment.',
  eyebrow: 'MAKEUP ARTIST • BEAUTY CREATOR',
  seasonNotice: '', // Removed unverified artificial urgency banner per V3 specifications
  instagramHandle: '@dimple_khinchi32',
  instagramUrl: 'https://www.instagram.com/dimple_khinchi32/',
  youtubeHandle: '@Dimpleglamacademy',
  youtubeUrl: 'https://www.youtube.com/@Dimpleglamacademy',
  
  // Client contact placeholders - to be finalized upon official client onboarding
  whatsappNumber: '', // Unset to ensure no invalid numbers are routed in production
  locationPlaceholder: 'Ajmer • Jaipur • Available for Destination Travel',
  emailPlaceholder: 'enquiries@dimplekhinchi.com',
  
  agencyName: 'MAZRIK',
  agencyUrl: 'https://mazrik.in',
  isDraftCopy: true, // Flags draft editorial text pending final client sign-off

  getDefaultEnquiryMessage: (serviceName?: string) => {
    if (serviceName) {
      return `Hi Dimple, I would like to enquire about ${serviceName}. Could you please share your availability, packages, and booking details?`;
    }
    return `Hi Dimple, I would love to enquire about booking an appointment for makeup artistry. Could you please share your availability and package details?`;
  },

  getWhatsAppUrl: (customMessage?: string) => {
    if (!siteConfig.whatsappNumber || siteConfig.whatsappNumber.trim() === '') {
      return null;
    }
    const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
    const message = customMessage || siteConfig.getDefaultEnquiryMessage();
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
  }
};
