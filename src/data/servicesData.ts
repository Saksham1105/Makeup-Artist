export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  inclusions: string[];
  kitFocus: string;
  imageUrl: string;
  imageAlt: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'bridal',
    number: '01',
    title: 'Bridal Artistry Ceremony',
    category: 'Traditional & Modern Brides',
    description: 'A transformative, high-definition bridal experience sculpted around your ceremony tone, attire craftsmanship, and personal facial architecture. Tailored to withstand sacred ceremony hours and tearful moments under bright stage and studio lights.',
    inclusions: [
      'Tailored HD & Long-Wear Complexion Calibration',
      'Ceremony Hair Artistry & Traditional Floral Setting',
      'Dupatta, Saree & Traditional Jewelry Placement',
      'Pre-Ceremony Skin Preparation & Emergency Touchup Guide'
    ],
    kitFocus: 'Professional Long-Wear & Camera-Ready Formulations • Tailored to Indian Skin Undertones',
    imageUrl: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Indian bride in royal bridal attire with ornate jewelry and bespoke bridal makeup'
  },
  {
    id: 'engagement',
    number: '02',
    title: 'Engagement & Sangeet Radiance',
    category: 'Pre-Wedding Celebrations',
    description: 'Luminous, camera-calibrated party aesthetics tailored for cocktail evenings, high-energy sangeet celebrations, and ring ceremonies. Radiant skin finishes accented with defined contour and sculpted eyes.',
    inclusions: [
      'Sweat-Resistant Luminous Skin Preparation',
      'Modern Textured Waves or Sculpted Updo Styling',
      'High-Definition Lash & Lid Dimension Artistry',
      'Outfit Drape & Silhouette Perfection'
    ],
    kitFocus: 'Illuminating & High-Definition Evening Formulations',
    imageUrl: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Contemporary glamorous engagement makeup with golden highlights and winged eye'
  },
  {
    id: 'party',
    number: '03',
    title: 'Party & Festive Glam',
    category: 'Special Occasions',
    description: 'Sophisticated beauty for wedding guests, gala attendees, family milestones, and festive celebrations in Rajasthan. Lightweight, breathable coverage that enhances natural beauty without feeling masked or heavy.',
    inclusions: [
      'Radiant Velvet Complexion Finish',
      'Statement Lip or Soft Kohl Smokey Eye Accent',
      'Effortless Blowout or Classic Bun Styling',
      'Saree / Dupatta Pinning & Final Touches'
    ],
    kitFocus: 'Lightweight Breathable & Camera-Ready Bases',
    imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Festive occasion makeup with defined kohl eyes and warm nude lips'
  },
  {
    id: 'editorial',
    number: '04',
    title: 'Editorial & Brand Shoots',
    category: 'Campaign & Commercial',
    description: 'Precision makeup calibrated for fashion shoots, commercial lookbooks, and brand campaigns. Grounded in Dimple’s active experience in front of and behind the camera in Ajmer and Jaipur.',
    inclusions: [
      'Studio Strobe & 4K Camera Calibrated Makeup',
      'Editorial Concept Collaboration & Precision Brow Sculpting',
      'On-Set Touchup & Multi-Look Transition Support',
      'Creative Lighting & Color Harmony'
    ],
    kitFocus: 'High-Definition Studio & Strobe-Calibrated Formulations',
    imageUrl: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'High-fashion editorial model with pristine sculpted makeup'
  },
  {
    id: 'academy',
    number: '05',
    title: 'Masterclasses & Workshops',
    category: 'Dimple Glam Academy',
    description: 'Comprehensive makeup education through Dimple Glam Academy. Hands-on learning modules covering everyday self-grooming, professional blending techniques, product selection, and bridal vanity secrets.',
    inclusions: [
      'Step-by-Step Face Mapping & Skin Analysis',
      'Correct Shade Matching & Concealing Mastery',
      'Eye Makeup Techniques: Kohl, Cut Crease & Smokey Lids',
      'Personal Vanity Audit & Certificate of Participation'
    ],
    kitFocus: 'Educational Tools & Hands-On Technique Demonstration',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Makeup workshop tools and artistry brushes for Dimple Glam Academy masterclass'
  }
];
