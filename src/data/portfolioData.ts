export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Bridal' | 'Festive' | 'Contemporary' | 'Editorial & BTS';
  occasion: string;
  imageUrl: string;
  imageAlt: string;
  aspectClass: string;
  sourceFile: string;
}

export const portfolioCategories = [
  'All',
  'Bridal',
  'Festive',
  'Contemporary',
  'Editorial & BTS'
] as const;

export type PortfolioCategory = typeof portfolioCategories[number];

export const portfolioData: PortfolioItem[] = [
  {
    id: 'look-1',
    title: 'Royal Heritage Bridal Portrait',
    category: 'Bridal',
    occasion: 'Traditional Rajasthani Ceremony',
    imageUrl: '/images/portfolio/bridal-regal-portrait.webp',
    imageAlt: 'Royal Indian bride wearing heavy emerald polki choker, delicate nath, and crimson bandhani dupatta with dewy makeup',
    aspectClass: 'row-span-2',
    sourceFile: 'IMG_1334.JPG.jpeg'
  },
  {
    id: 'look-2',
    title: 'Intricate Cut Crease & Eye Artistry',
    category: 'Bridal',
    occasion: 'Bridal Makeup Detail & Poise',
    imageUrl: '/images/portfolio/bridal-closed-eyes.webp',
    imageAlt: 'Macro close-up portrait of bride with eyes softly closed, highlighting cut-crease shimmer lid and jhumka earring',
    aspectClass: 'row-span-2',
    sourceFile: 'IMG_1406.JPG.jpeg'
  },
  {
    id: 'look-3',
    title: 'Radiant Ceremony Joy',
    category: 'Bridal',
    occasion: 'Bridal Reception & Greeting',
    imageUrl: '/images/portfolio/bridal-joy-front.webp',
    imageAlt: 'Joyfully smiling bride in silver embellished lehenga and polki collar necklace facing camera with natural glow',
    aspectClass: 'row-span-1',
    sourceFile: 'IMG_1404.JPG.jpeg'
  },
  {
    id: 'look-4',
    title: 'Traditional Bridal Alta & Poise',
    category: 'Bridal',
    occasion: 'Sacred Nuptial Rituals',
    imageUrl: '/images/portfolio/bridal-regal-alta.webp',
    imageAlt: 'Bride standing poised with folded hands showcasing red alta, rings, chooda bangles, and embellished lehenga',
    aspectClass: 'row-span-2',
    sourceFile: 'IMG_1405.JPG.jpeg'
  },
  {
    id: 'look-5',
    title: 'Cascading Waves & Blouse Detailing',
    category: 'Bridal',
    occasion: 'Bridal Hair Architecture & Profile',
    imageUrl: '/images/portfolio/bridal-hair-back.webp',
    imageAlt: 'Profile and back view of long wavy hair styling adorned with jeweled clip and intricate blouse embroidery',
    aspectClass: 'row-span-1',
    sourceFile: 'IMG_1347.JPG.jpeg'
  },
  {
    id: 'look-6',
    title: 'Destination Bridal in Crimson',
    category: 'Editorial & BTS',
    occasion: 'Outdoor Garden & Architecture Shoot',
    imageUrl: '/images/portfolio/bridal-outdoor-columns.webp',
    imageAlt: 'Outdoor bridal shoot framed between neoclassical Roman columns showcasing floral parandi braid and crimson lehenga',
    aspectClass: 'row-span-2',
    sourceFile: 'IMG_9786.HEIC'
  },
  {
    id: 'look-7',
    title: 'Behind the Craft: Strobe Lighting Setup',
    category: 'Editorial & BTS',
    occasion: 'On-Location Editorial Production',
    imageUrl: '/images/portfolio/bts-outdoor-strobe.webp',
    imageAlt: 'Wide behind-the-scenes view showing professional studio strobe light on C-stand, lawn, and outdoor bridal shoot setup',
    aspectClass: 'row-span-1',
    sourceFile: 'IMG_9787.HEIC'
  },
  {
    id: 'look-8',
    title: 'Coral Elegance & Crystal Wing Accent',
    category: 'Festive',
    occasion: 'Cocktail & Sangeet Celebrations',
    imageUrl: '/images/portfolio/festive-crystal-glam.webp',
    imageAlt: 'Glamour portrait in embellished coral-pink blouse with pearl tassels, glowing skin, and rhinestone winged eyeliner',
    aspectClass: 'row-span-1',
    sourceFile: 'IMG_0149.HEIC'
  },
  {
    id: 'look-9',
    title: 'Contemporary Crystal Corset & Veil',
    category: 'Contemporary',
    occasion: 'High-Fashion Engagement Radiance',
    imageUrl: '/images/portfolio/contemporary-veil.webp',
    imageAlt: 'Contemporary bride in crystal corset and mirror-work lehenga holding sheer embroidered veil over face',
    aspectClass: 'row-span-2',
    sourceFile: 'IMG_9705.HEIC'
  },
  {
    id: 'look-10',
    title: 'Shining Star of Mahima Bajaj Academy',
    category: 'Editorial & BTS',
    occasion: 'Formal Artistry Recognition',
    imageUrl: '/images/portfolio/credential-medal.webp',
    imageAlt: 'Artistic nail art holding the official Shining Star of Mahima Bajaj Academy bronze recognition medal',
    aspectClass: 'row-span-1',
    sourceFile: 'IMG_0647.JPG.jpeg'
  }
];
