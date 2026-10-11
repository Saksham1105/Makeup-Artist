import React, { useState } from 'react';
import { MessageCircle, MapPin, Mail, Calendar, Sparkles, Send, Edit3, RotateCcw } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { siteConfig } from '../config/siteConfig';

interface BookingContactProps {
  onOpenBookingWithMessage: (message: string) => void;
}

export const BookingContact: React.FC<BookingContactProps> = ({ onOpenBookingWithMessage }) => {
  const [clientName, setClientName] = useState('');
  const [occasionType, setOccasionType] = useState('Bridal Artistry Ceremony');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [notes, setNotes] = useState('');

  // Review step state
  const [isReviewing, setIsReviewing] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Compile formatted message using only provided fields
  const buildEnquiryMessage = () => {
    const greeting = clientName.trim()
      ? `Hi Dimple, my name is ${clientName.trim()}.`
      : 'Hi Dimple,';
    
    let details = `I would like to enquire about ${occasionType}.`;
    if (eventDate.trim()) {
      details += ` Preferred Date: ${eventDate.trim()}.`;
    }
    if (eventLocation.trim()) {
      details += ` City/Venue: ${eventLocation.trim()}.`;
    }
    if (notes.trim()) {
      details += ` Notes: ${notes.trim()}.`;
    }
    details += ' Could you please share your availability, packages, and booking details?';

    return `${greeting} ${details}`;
  };

  const handleReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) {
      setValidationError('Please enter your name to prepare the enquiry.');
      return;
    }
    setValidationError('');
    setIsReviewing(true);
  };

  const handleSendFinal = () => {
    const compiled = buildEnquiryMessage();
    onOpenBookingWithMessage(compiled);
  };

  const handleReset = () => {
    setClientName('');
    setOccasionType('Bridal Artistry Ceremony');
    setEventDate('');
    setEventLocation('');
    setNotes('');
    setValidationError('');
    setIsReviewing(false);
  };

  return (
    <section id="contact" className="py-24 lg:py-36 bg-[#121110] border-t border-[#C4BCB5]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[1px] w-8 bg-[#7A2837]" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#C4BCB5] font-medium">
              Contact &amp; Bookings
            </span>
            <span className="h-[1px] w-8 bg-[#7A2837]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#F6F2EC] mb-4">
            Let's Create Your Look.
          </h2>

          <p className="text-base sm:text-lg text-[#C4BCB5]/85 font-light leading-relaxed max-w-2xl mx-auto">
            Have an occasion coming up? Inquire directly with Dimple to check schedule availability for Ajmer, Jaipur, and destination celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Direct Info Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 sm:p-10 bg-[#1A1817] border border-[#C4BCB5]/20 shadow-2xl">
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#7A2837] font-semibold block mb-2">
                Personal Consultation
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#F6F2EC] mb-3">
                {siteConfig.artistName}
              </h3>
              <p className="text-xs text-[#C4BCB5]/75 leading-relaxed font-light mb-8">
                Every booking is handled individually to preserve a calm, dedicated experience. Dates are subject to schedule confirmation.
              </p>

              <div className="space-y-5 pt-6 border-t border-[#C4BCB5]/15 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#7A2837] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#C4BCB5]/60 block">
                      Location &amp; Travel
                    </span>
                    <span className="text-[#F6F2EC] font-light">
                      {siteConfig.locationPlaceholder}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#7A2837] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#C4BCB5]/60 block">
                      Inquiries (Client Placeholder)
                    </span>
                    <span className="text-[#F6F2EC] font-light">
                      {siteConfig.emailPlaceholder}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <InstagramIcon className="w-4 h-4 text-[#7A2837] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#C4BCB5]/60 block">
                      Instagram Profile
                    </span>
                    <a
                      href={siteConfig.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C4BCB5] hover:text-[#F6F2EC] transition-colors"
                    >
                      {siteConfig.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Instant WhatsApp Action */}
            <div className="p-6 bg-[#1A1817] border border-[#C4BCB5]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-serif text-lg text-[#F6F2EC]">
                  Direct WhatsApp Chat
                </h4>
                <p className="text-xs text-[#C4BCB5]/60">
                  Quickest way to check schedule availability
                </p>
              </div>

              <button
                onClick={() => onOpenBookingWithMessage(siteConfig.getDefaultEnquiryMessage())}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#7A2837] hover:bg-[#963546] text-white text-xs uppercase tracking-[0.22em] font-medium flex items-center justify-center gap-2 transition-all shadow-md shrink-0 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Column: Appointment Consultation Drafter (7 cols) */}
          <div className="lg:col-span-7 bg-[#1A1817] p-8 sm:p-12 border border-[#C4BCB5]/20 shadow-2xl">
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#7A2837]" />
                <span className="text-[11px] uppercase tracking-[0.24em] text-[#C4BCB5] font-medium">
                  {isReviewing ? 'Step 2: Review Message' : 'Step 1: Plan Enquiry'}
                </span>
              </div>

              {isReviewing && (
                <button
                  type="button"
                  onClick={() => setIsReviewing(false)}
                  className="flex items-center gap-1.5 text-xs text-[#C4BCB5] hover:text-[#F6F2EC] transition-colors"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit Details</span>
                </button>
              )}
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F6F2EC] mb-6">
              {isReviewing ? 'Verify Your Enquiry Message' : 'Prepare Your Appointment Enquiry'}
            </h3>

            {!isReviewing ? (
              <form onSubmit={handleReview} className="space-y-6">
                
                {validationError && (
                  <div className="p-3 bg-red-950/60 border border-red-500/40 text-red-200 text-xs">
                    {validationError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="client-name" className="block text-xs uppercase tracking-wider text-[#C4BCB5] mb-2 font-medium">
                      Your Name <span className="text-[#7A2837]">*</span>
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      placeholder="e.g. Radhika Kapoor"
                      value={clientName}
                      onChange={(e) => {
                        setClientName(e.target.value);
                        if (validationError) setValidationError('');
                      }}
                      className="w-full px-4 py-3.5 bg-[#121110] border border-[#C4BCB5]/25 text-sm text-[#F6F2EC] placeholder:text-[#C4BCB5]/40 focus:outline-none focus:border-[#7A2837] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="occasion-type" className="block text-xs uppercase tracking-wider text-[#C4BCB5] mb-2 font-medium">
                      Occasion / Service
                    </label>
                    <select
                      id="occasion-type"
                      value={occasionType}
                      onChange={(e) => setOccasionType(e.target.value)}
                      className="w-full px-4 py-3.5 bg-[#121110] border border-[#C4BCB5]/25 text-sm text-[#F6F2EC] focus:outline-none focus:border-[#7A2837] transition-colors"
                    >
                      <option value="Bridal Artistry Ceremony">Bridal Artistry Ceremony</option>
                      <option value="Engagement & Sangeet Radiance">Engagement &amp; Sangeet Radiance</option>
                      <option value="Party & Festive Glam">Party &amp; Festive Glam</option>
                      <option value="Editorial & Brand Shoots">Editorial &amp; Brand Shoots</option>
                      <option value="Masterclasses & Workshops">Masterclasses &amp; Workshops (Dimple Glam Academy)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="event-date" className="block text-xs uppercase tracking-wider text-[#C4BCB5] mb-2 font-medium">
                      Preferred Date (Approximate)
                    </label>
                    <div className="relative">
                      <input
                        id="event-date"
                        type="text"
                        placeholder="e.g. 18th November 2026"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full px-4 py-3.5 bg-[#121110] border border-[#C4BCB5]/25 text-sm text-[#F6F2EC] placeholder:text-[#C4BCB5]/40 focus:outline-none focus:border-[#7A2837] transition-colors"
                      />
                      <Calendar className="w-4 h-4 text-[#C4BCB5]/40 absolute right-3.5 top-3.5 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="event-location" className="block text-xs uppercase tracking-wider text-[#C4BCB5] mb-2 font-medium">
                      City / Venue (Optional)
                    </label>
                    <input
                      id="event-location"
                      type="text"
                      placeholder="e.g. Ajmer / Jaipur / Udaipur"
                      value={eventLocation}
                      onChange={(e) => setEventLocation(e.target.value)}
                      className="w-full px-4 py-3.5 bg-[#121110] border border-[#C4BCB5]/25 text-sm text-[#F6F2EC] placeholder:text-[#C4BCB5]/40 focus:outline-none focus:border-[#7A2837] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-xs uppercase tracking-wider text-[#C4BCB5] mb-2 font-medium">
                    Special Notes or Preferences (Optional)
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="Ceremony timings, attire colors, venue requirements..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-3.5 bg-[#121110] border border-[#C4BCB5]/25 text-sm text-[#F6F2EC] placeholder:text-[#C4BCB5]/40 focus:outline-none focus:border-[#7A2837] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#7A2837] hover:bg-[#963546] text-white text-xs uppercase tracking-[0.25em] font-medium flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(122,40,55,0.4)] active:scale-98"
                  >
                    <span>Review &amp; Preview Message &rarr;</span>
                  </button>
                  <p className="text-[11px] text-[#C4BCB5]/60 text-center mt-3">
                    Direct enquiry compilation. Review your exact message before sending.
                  </p>
                </div>

              </form>
            ) : (
              /* Review Mode */
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="p-5 bg-[#121110] border border-[#C4BCB5]/30">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-[#C4BCB5]/70 mb-2">
                    <span>Generated Enquiry Message</span>
                    <span className="text-[#7A2837] font-semibold">Ready to Send</span>
                  </div>
                  <p className="text-sm text-[#F6F2EC] font-sans leading-relaxed select-all">
                    "{buildEnquiryMessage()}"
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleSendFinal}
                    className="flex-1 py-4 bg-[#7A2837] hover:bg-[#963546] text-white text-xs uppercase tracking-[0.25em] font-medium flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(122,40,55,0.4)] active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Proceed via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsReviewing(false)}
                    className="px-6 py-4 border border-[#C4BCB5]/30 hover:border-[#F6F2EC] text-[#F6F2EC] text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 transition-all"
                  >
                    <Edit3 className="w-4 h-4" />
                    <span>Edit</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-4 text-[#C4BCB5]/60 hover:text-[#C4BCB5] text-xs uppercase tracking-wider flex items-center justify-center transition-colors"
                    title="Reset form"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[11px] text-[#C4BCB5]/60 text-center">
                  Will open the official WhatsApp application or allow direct message copy if phone details are unconfigured.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
