import React, { useState } from 'react';
import { X, Copy, Check, MessageSquare, ExternalLink, PhoneCall } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
  initialMessage?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  serviceTitle,
  initialMessage
}) => {
  const [copied, setCopied] = useState(false);
  const [testNumber, setTestNumber] = useState('');

  if (!isOpen) return null;

  const enquiryText = initialMessage || siteConfig.getDefaultEnquiryMessage(serviceTitle);
  const isNumberConfigured = Boolean(siteConfig.whatsappNumber && siteConfig.whatsappNumber.trim() !== '');

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(enquiryText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } else {
        // Fallback for non-secure contexts
        const textarea = document.createElement('textarea');
        textarea.value = enquiryText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch (err) {
      console.warn('Clipboard write error:', err);
    }
  };

  const handleTestRedirect = () => {
    const target = testNumber.replace(/[^0-9]/g, '') || siteConfig.whatsappNumber;
    if (target) {
      const url = `https://wa.me/${target}?text=${encodeURIComponent(enquiryText)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-modal-title"
    >
      <div 
        className="relative w-full max-w-lg bg-[#1A1817] border border-[#C4BCB5]/30 shadow-2xl p-6 sm:p-8 text-[#F6F2EC] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 p-2 text-[#C4BCB5]/70 hover:text-[#F6F2EC] hover:bg-[#121110] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-[#7A2837]/20 border border-[#7A2837]/40 flex items-center justify-center text-[#7A2837]">
            <MessageSquare className="w-5 h-5 text-[#7A2837]" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#7A2837] font-semibold block">
              Booking Enquiry Helper
            </span>
            <h3 id="whatsapp-modal-title" className="text-2xl font-serif font-normal text-[#F6F2EC]">
              {serviceTitle ? `${serviceTitle} Enquiry` : "Connect with Dimple"}
            </h3>
          </div>
        </div>

        {/* Status Notice */}
        {!isNumberConfigured ? (
          <div className="mb-5 p-3.5 bg-[#121110] border border-[#C4BCB5]/15 text-xs leading-relaxed text-[#C4BCB5]/85">
            <span className="font-semibold text-[#F6F2EC]">Client Handover Notice:</span> The official WhatsApp business number will be linked upon Dimple's final review. You can preview the prefilled message below or test with your own phone number.
          </div>
        ) : (
          <p className="text-sm text-[#C4BCB5]/85 mb-4 font-light">
            Click below to start a direct WhatsApp chat with Dimple Khinchi.
          </p>
        )}

        {/* Prepared Message Box */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs text-[#C4BCB5]/70 mb-2">
            <span className="uppercase tracking-wider text-[10px]">Formatted Enquiry Message</span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-[#F6F2EC] font-medium hover:text-[#7A2837] transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy text</span>
                </>
              )}
            </button>
          </div>
          <div className="p-4 bg-[#121110] border border-[#C4BCB5]/20 text-xs sm:text-sm text-[#F6F2EC] font-sans leading-relaxed rounded-none select-all">
            {enquiryText}
          </div>
        </div>

        {/* Live or Simulator Actions */}
        {isNumberConfigured ? (
          <button
            onClick={() => {
              const url = siteConfig.getWhatsAppUrl(enquiryText);
              if (url) window.open(url, '_blank', 'noopener,noreferrer');
            }}
            className="w-full flex items-center justify-center gap-2 py-4 bg-[#7A2837] hover:bg-[#963546] text-white tracking-[0.2em] uppercase text-xs font-medium transition-all shadow-lg active:scale-98"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Launch WhatsApp Now</span>
          </button>
        ) : (
          <div className="space-y-3">
            <div className="text-xs text-[#C4BCB5]/80">
              <label htmlFor="test-phone" className="block mb-1.5 uppercase tracking-wider text-[10px]">
                Simulate Direct Link (Optional Phone Number):
              </label>
              <div className="flex gap-2">
                <input
                  id="test-phone"
                  type="text"
                  placeholder="e.g. 919876543210"
                  value={testNumber}
                  onChange={(e) => setTestNumber(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 bg-[#121110] border border-[#C4BCB5]/25 text-xs text-[#F6F2EC] focus:outline-none focus:border-[#7A2837]"
                />
                <button
                  onClick={handleTestRedirect}
                  disabled={!testNumber.trim()}
                  className="px-4 py-2.5 bg-[#7A2837] hover:bg-[#963546] text-white text-xs uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 transition-all"
                >
                  <span>Test Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            <p className="text-[10px] text-center text-[#C4BCB5]/50 pt-2">
              Configuration file: <code className="bg-[#121110] px-1 py-0.5 border border-[#C4BCB5]/10">src/config/siteConfig.ts</code>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
