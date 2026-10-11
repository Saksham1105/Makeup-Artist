export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Bridal' | 'Festive' | 'Contemporary' | 'Editorial & BTS';
  occasion: string;
  imageUrl: string;
  thumbnailUrl: string;
  srcSetWebp: string;
  srcSetJpg: string;
  lightboxUrl: string;
  lightboxSrcSet: string;
  imageAlt: string;
  aspectClass: string;
  width: number;
  height: number;
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

const makeImageMeta = (slug: string, w = 1200, h = 1500) => ({
  imageUrl: `/images/portfolio/${slug}.webp`,
  thumbnailUrl: `/images/portfolio/${slug}-480.webp`,
  srcSetWebp: `/images/portfolio/${slug}-480.webp 480w, /images/portfolio/${slug}-768.webp 768w, /images/portfolio/${slug}-1200.webp 1200w, /images/portfolio/${slug}-1600.webp 1600w`,
  srcSetJpg: `/images/portfolio/${slug}-480.jpg 480w, /images/portfolio/${slug}-768.jpg 768w, /images/portfolio/${slug}-1200.jpg 1200w, /images/portfolio/${slug}-1600.jpg 1600w`,
  lightboxUrl: `/images/portfolio/${slug}-1200.webp`,
  lightboxSrcSet: `/images/portfolio/${slug}-768.webp 768w, /images/portfolio/${slug}-1200.webp 1200w, /images/portfolio/${slug}-1600.webp 1600w`,
  width: w,
  height: h,
});

export const portfolioData: PortfolioItem[] = [
  {
    id: 'look-1',
    title: 'Royal Heritage Bridal Portrait',
    category: 'Bridal',
    occasion: 'Traditional Rajasthani Ceremony',
    ...makeImageMeta('bridal-regal-portrait', 1200, 1845),
    imageAlt: 'Royal Indian bride wearing heavy emerald polki choker, delicate nath, and crimson bandhani dupatta with dewy makeup',
    aspectClass: 'row-span-2',
    sourceFile: 'IMG_1334.JPG.jpeg'
  },
  {
    id: 'look-2',
    title: 'Intricate Cut Crease & Eye Artistry',
    category: 'Bridal',
    occasion: 'Bridal Makeup Detail & Poise',
    ...makeImageMeta('bridal-closed-eyes', 1200, 1800),
    imageAlt: 'Macro close-up portrait of bride with eyes softly closed, highlighting cut-crease shimmer lid and jhumka earring',
    aspectClass: 'row-span-2',
    sourceFile: 'IMG_1406.JPG.jpeg'
  },
  {
    id: 'look-3',
    title: 'Radiant Ceremony Joy',
    category: 'Bridal',
    occasion: 'Bridal Reception & Greeting',
    ...makeImageMeta('bridal-joy-front', 1200, 1800),
    imageAlt: 'Joyfully smiling bride in silver embellished lehenga and polki collar necklace facing camera with natural glow',
    aspectClass: 'row-span-1',
    sourceFile: 'IMG_1404.JPG.jpeg'
  },
  {
    id: 'look-4',
    title: 'Traditional Bridal Alta & Poise',
    category: 'Bridal',
    occasion: 'Sacred Nuptial Rituals',
    ...makeImageMeta('bridal-regal-alta', 1200, 1707),
    imageAlt: 'Bride standing poised with folded hands showcasing red alta, rings, chooda bangles, and embellished lehenga',
    aspectClass: 'row-span-2',
    sourceFile: 'IMG_1405.JPG.jpeg'
  },
  {
    id: 'look-5',
    title: 'Cascading Waves & Blouse Detailing',
    category: 'Bridal',
    occasion: 'Bridal Hair Architecture & Profile',
    ...makeImageMeta('bridal-hair-back', 1200, 1685),
    imageAlt: 'Profile and back view of long wavy hair styling adorned with jeweled clip and intricate blouse embroidery',
    aspectClass: 'row-span-1',
    sourceFile: 'IMG_1347.JPG.jpeg'
  },
  {
    id: 'look-6',
    title: 'Destination Bridal in Crimson',
    category: 'Editorial & BTS',
    occasion: 'Outdoor Garden & Architecture Shoot',
    ...makeImageMeta('bridal-outdoor-columns', 1200, 1600),
    imageAlt: 'Outdoor bridal shoot framed between neoclassical Roman columns showcasing floral parandi braid and crimson lehenga',
    aspectClass: 'row-span-2',
    sourceFile: 'IMG_9786.HEIC'
  },
  {
    id: 'look-7',
    title: 'Behind the Craft: Strobe Lighting Setup',
    category: 'Editorial & BTS',
    occasion: 'On-Location Editorial Production',
    ...makeImageMeta('bts-outdoor-strobe', 1200, 1600),
    imageAlt: 'Wide behind-the-scenes view showing professional studio strobe light on C-stand, lawn, and outdoor bridal shoot setup',
    aspectClass: 'row-span-1',
    sourceFile: 'IMG_9787.HEIC'
  },
  {
    id: 'look-8',
    title: 'Coral Elegance & Crystal Wing Accent',
    category: 'Festive',
    occasion: 'Cocktail & Sangeet Celebrations',
    ...makeImageMeta('festive-crystal-glam', 1200, 1600),
    imageAlt: 'Glamour portrait in embellished coral-pink blouse with pearl tassels, glowing skin, and rhinestone winged eyeliner',
    aspectClass: 'row-span-1',
    sourceFile: 'IMG_0149.HEIC'
  },
  {
    id: 'look-9',
    title: 'Contemporary Crystal Corset & Veil',
    category: 'Contemporary',
    occasion: 'High-Fashion Engagement Radiance',
    ...makeImageMeta('contemporary-veil', 1200, 1600),
    imageAlt: 'Contemporary bride in crystal corset and mirror-work lehenga holding sheer embroidered veil over face',
    aspectClass: 'row-span-2',
    sourceFile: 'IMG_9705.HEIC'
  },
  {
    id: 'look-10',
    title: 'Shining Star of Mahima Bajaj Academy',
    category: 'Editorial & BTS',
    occasion: 'Formal Artistry Recognition',
    ...makeImageMeta('credential-medal', 1200, 2133),
    imageAlt: 'Artistic nail art holding the official Shining Star of Mahima Bajaj Academy bronze recognition medal',
    aspectClass: 'row-span-1',
    sourceFile: 'IMG_0647.JPG.jpeg'
  }
];
