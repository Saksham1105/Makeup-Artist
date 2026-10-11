export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  inclusions: string[];
  kitFocus: string;
  imageUrl: string;
  srcSetWebp?: string;
  imageAlt: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'bridal',
    number: '01',
    title: 'Bridal Ceremony Artistry',
    category: 'Ceremonial & Nuptial Looks',
    description: 'High-definition bridal makeup sculpted for traditional and contemporary brides. Calibrated to withstand sacred rituals, extended celebration hours, and high-intensity stage and natural lighting.',
    inclusions: [
      'HD & Long-Wear Complexion Calibration',
      'Ceremony Hair Artistry & Floral Setting',
      'Dupatta, Saree & Jewelry Placement',
      'Skin Preparation for Lasting Radiance'
    ],
    kitFocus: 'Camera-Ready & Long-Wear Formulations • Tailored to Indian Skin Undertones',
    imageUrl: '/images/portfolio/bridal-closed-eyes-768.webp',
    srcSetWebp: '/images/portfolio/bridal-closed-eyes-480.webp 480w, /images/portfolio/bridal-closed-eyes-768.webp 768w, /images/portfolio/bridal-closed-eyes-1200.webp 1200w',
    imageAlt: 'Detailed bridal makeup portrait highlighting intricate eye makeup and jewelry'
  },
  {
    id: 'engagement',
    number: '02',
    title: 'Engagement & Sangeet Radiance',
    category: 'Pre-Wedding Celebrations',
    description: 'Luminous, camera-calibrated glam crafted for ring ceremonies, sangeet celebrations, and cocktail evenings. Features radiant skin finishes accented with defined contour and sculpted lids.',
    inclusions: [
      'Luminous Skin Preparation',
      'Textured Waves or Sculpted Updo Styling',
      'Lash & Eye Dimension Artistry',
      'Dupatta & Outfit Drape Setting'
    ],
    kitFocus: 'Illuminating & High-Definition Evening Formulations',
    imageUrl: '/images/portfolio/contemporary-veil-768.webp',
    srcSetWebp: '/images/portfolio/contemporary-veil-480.webp 480w, /images/portfolio/contemporary-veil-768.webp 768w, /images/portfolio/contemporary-veil-1200.webp 1200w',
    imageAlt: 'Contemporary bride with veil and crystal corset showcasing radiant glam'
  },
  {
    id: 'party',
    number: '03',
    title: 'Party & Festive Glam',
    category: 'Occasion Artistry',
    description: 'Sophisticated beauty for family celebrations, wedding guests, and festive gatherings across Rajasthan. Breathable, radiant coverage that enhances natural facial features.',
    inclusions: [
      'Velvet & Glowing Complexion Finish',
      'Winged Liner, Kohl, or Crystal Accents',
      'Classic Hair Styling & Setting',
      'Saree & Dupatta Pinning'
    ],
    kitFocus: 'Lightweight Breathable & Camera-Ready Bases',
    imageUrl: '/images/portfolio/festive-crystal-glam-768.webp',
    srcSetWebp: '/images/portfolio/festive-crystal-glam-480.webp 480w, /images/portfolio/festive-crystal-glam-768.webp 768w, /images/portfolio/festive-crystal-glam-1200.webp 1200w',
    imageAlt: 'Festive party makeup with embellished attire and crystal winged eyeliner'
  },
  {
    id: 'editorial',
    number: '04',
    title: 'Editorial & Destination Shoots',
    category: 'Campaign & Outdoor Production',
    description: 'Precision makeup for fashion lookbooks, destination celebrations, and creative photoshoots. Designed to perform under direct outdoor sunlight, studio strobes, and 4K digital cameras.',
    inclusions: [
      'Studio Strobe & Daylight Balanced Makeup',
      'Editorial Concept & Brow Sculpting',
      'Hair Styling with Floral Parandi & Traditional Accents',
      'On-Location Durability Calibration'
    ],
    kitFocus: 'Studio Strobe & High-Definition Formulations',
    imageUrl: '/images/portfolio/bridal-outdoor-columns-768.webp',
    srcSetWebp: '/images/portfolio/bridal-outdoor-columns-480.webp 480w, /images/portfolio/bridal-outdoor-columns-768.webp 768w, /images/portfolio/bridal-outdoor-columns-1200.webp 1200w',
    imageAlt: 'Outdoor destination bridal photoshoot with traditional crimson lehenga and pillars'
  },
  {
    id: 'academy',
    number: '05',
    title: 'Dimple Glam Academy',
    category: 'Educational Brand',
    description: 'The educational division founded by Dimple Khinchi, rooted in the philosophy to Learn, Create, and Grow. Grounded in creative technique sharing and modern beauty artistry.',
    inclusions: [
      'Focus on Essential Face Mapping & Tone Matching',
      'Eye Makeup Techniques & Blending Foundations',
      'Bridal and Festive Finishing Techniques',
      'Official Dimple Glam Academy Community'
    ],
    kitFocus: 'Artistry Education • Learn • Create • Grow',
    imageUrl: '/images/branding/logo-160.webp',
    srcSetWebp: '/images/branding/logo-96.webp 96w, /images/branding/logo-160.webp 160w, /images/branding/logo-320.webp 320w',
    imageAlt: 'Official Dimple Glam Academy circular emblem insignia'
  }
];
