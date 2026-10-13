export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Bridal' | 'Festive' | 'Contemporary' | 'Hairstyles' | 'Behind the Scenes' | 'Creative Studio';
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
  'Hairstyles',
  'Behind the Scenes',
  'Creative Studio'
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
  // --- PRIMARY EDITORIAL SHOWCASE (ABOVE-THE-FOLD & CORE BRIDAL) ---
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
    id: 'look-11',
    title: 'Destination Nuptials: Crimson Splendor',
    category: 'Bridal',
    occasion: 'Garden Colonnade Shoot',
    ...makeImageMeta('bridal-outdoor-columns-front', 1200, 1600),
    imageAlt: 'Full-length bride in crimson lehenga and silver zardozi standing between neoclassical columns in outdoor rotunda',
    aspectClass: 'row-span-2',
    sourceFile: 'IMG_9810.HEIC'
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
    id: 'look-16',
    title: 'Avant-Garde Rim-Lit Dewy Sculpt',
    category: 'Contemporary',
    occasion: 'High-Fashion Editorial Campaign',
    ...makeImageMeta('contemporary-editorial-rimlit', 1200, 1602),
    imageAlt: 'Editorial close-up with golden rim light halo, wet tendrils with jewel accents, and glass skin',
    aspectClass: 'row-span-2',
    sourceFile: 'IMG_2024.PNG'
  },
  {
    id: 'look-12',
    title: 'Rajputana Royal Poshak & Heritage Aad',
    category: 'Bridal',
    occasion: 'Traditional Rajput Ceremony',
    ...makeImageMeta('bridal-rajput-poshak', 1200, 1598),
    imageAlt: 'Rajput bride in gold tissue poshak, magenta odhna, and traditional kundan emerald choker in night lights',
    aspectClass: 'row-span-2',
    sourceFile: 'IMG_2025.PNG'
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
    id: 'look-14',
    title: 'Sunlit Sangeet Radiance & Braided Crown',
    category: 'Festive',
    occasion: 'Daytime Celebration Glam',
    ...makeImageMeta('festive-sangeet-sunlit', 1200, 1380),
    imageAlt: 'Warm smiling portrait in afternoon sunlight with braided crown hairstyle and delicate bindi',
    aspectClass: 'row-span-1',
    sourceFile: 'IMG_2030.PNG'
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
    id: 'look-17',
    title: 'Glass Skin Radiance & Rhinestone Accents',
    category: 'Contemporary',
    occasion: 'High-Fashion Engagement Radiance',
    ...makeImageMeta('contemporary-glass-skin', 1200, 2132),
    imageAlt: 'Contemporary model looking up with glass skin, rhinestone eye details, and crystal corset',
    aspectClass: 'row-span-2',
    sourceFile: 'IMG_9956.PNG'
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
    id: 'look-13',
    title: 'Regal Nuptial Duo in Pink Poshak',
    category: 'Bridal',
    occasion: 'Sacred Nuptial Moment',
    ...makeImageMeta('bridal-rajput-couple', 1200, 1400),
    imageAlt: 'Traditional Rajasthani couple in pink poshak and royal safa turban',
    aspectClass: 'row-span-1',
    sourceFile: 'IMG_2026.PNG'
  },
  {
    id: 'look-15',
    title: 'Evening Cocktail Tiara & Modern Glam',
    category: 'Festive',
    occasion: 'Cocktail & Evening Gala',
    ...makeImageMeta('festive-cocktail-tiara', 1200, 1500),
    imageAlt: 'Evening glam portrait featuring crystal tiara styling, defined eyes, and sequin ensemble',
    aspectClass: 'row-span-1',
    sourceFile: 'IMG_2022.PNG'
  },
  {
    id: 'look-18',
    title: 'Starlight Architectural Perspective',
    category: 'Contemporary',
    occasion: 'Haute Couture Lookbook',
    ...makeImageMeta('contemporary-staircase-alt', 1200, 2132),
    imageAlt: 'Contemporary model with pearl-embellished bun and sheer crystal sleeve in modern architectural interior',
    aspectClass: 'row-span-2',
    sourceFile: 'IMG_2020.PNG'
  },

  // --- HAIRSTYLE ARCHITECTURE ---
  {
    id: 'look-5',
    title: 'Cascading Waves & Blouse Detailing',
    category: 'Hairstyles',
    occasion: 'Bridal Hair Architecture & Profile',
    ...makeImageMeta('bridal-hair-back', 1200, 1685),
    imageAlt: 'Profile and back view of long wavy hair styling adorned with jeweled clip and intricate blouse embroidery',
    aspectClass: 'row-span-1',
    sourceFile: 'IMG_1347.JPG.jpeg'
  },
  {
    id: 'look-19',
    title: 'Symmetrical Hair Waves & Crystal Flora',
    category: 'Hairstyles',
    occasion: 'Bridal Hair Architecture',
    ...makeImageMeta('bridal-hair-direct', 1200, 1625),
    imageAlt: 'Direct back view of cascading wavy bridal hair styling with silver floral crown piece',
    aspectClass: 'row-span-2',
    sourceFile: 'IMG_1343.JPG.jpeg'
  },
  {
    id: 'look-20',
    title: 'Pastel Butterfly Waves & Pearl Pinning',
    category: 'Hairstyles',
    occasion: 'Festive Sangeet Hair Artistry',
    ...makeImageMeta('festive-butterfly-hair', 1200, 2132),
    imageAlt: 'Back view of dark cascading curls adorned with pastel butterfly hair accessories and pearls',
    aspectClass: 'row-span-2',
    sourceFile: 'IMG_2021.PNG'
  },

  // --- BEHIND THE SCENES & PRODUCTION CRAFT ---
  {
    id: 'look-6',
    title: 'Destination Bridal in Crimson',
    category: 'Behind the Scenes',
    occasion: 'Outdoor Garden & Architecture Shoot',
    ...makeImageMeta('bridal-outdoor-columns', 1200, 1600),
    imageAlt: 'Outdoor bridal shoot framed between neoclassical Roman columns showcasing floral parandi braid and crimson lehenga',
    aspectClass: 'row-span-2',
    sourceFile: 'IMG_9786.HEIC'
  },
  {
    id: 'look-7',
    title: 'Behind the Craft: Strobe Lighting Setup',
    category: 'Behind the Scenes',
    occasion: 'On-Location Editorial Production',
    ...makeImageMeta('bts-outdoor-strobe', 1200, 1600),
    imageAlt: 'Wide behind-the-scenes view showing professional studio strobe light on C-stand, lawn, and outdoor bridal shoot setup',
    aspectClass: 'row-span-1',
    sourceFile: 'IMG_9787.HEIC'
  },
  {
    id: 'look-10',
    title: 'Shining Star of Mahima Bajaj Academy',
    category: 'Behind the Scenes',
    occasion: 'Formal Artistry Recognition',
    ...makeImageMeta('credential-medal', 1200, 2133),
    imageAlt: 'Artistic nail art holding the official Shining Star of Mahima Bajaj Academy bronze recognition medal',
    aspectClass: 'row-span-1',
    sourceFile: 'IMG_0647.JPG.jpeg'
  },
  {
    id: 'look-21',
    title: 'Craft in Motion: On-Location Lighting',
    category: 'Behind the Scenes',
    occasion: 'Live Production & Studio Strobes',
    ...makeImageMeta('bts-couple-lighting', 1200, 1500),
    imageAlt: 'On-location photo shoot showing DigiTek studio strobe lighting and camera work during couple session',
    aspectClass: 'row-span-1',
    sourceFile: 'IMG_2027.PNG'
  },
  {
    id: 'look-22',
    title: 'Unscripted Nuptial Emotion & Production',
    category: 'Behind the Scenes',
    occasion: 'Behind The Scenes Candid',
    ...makeImageMeta('bts-couple-candid-alt', 1200, 1485),
    imageAlt: 'Candid smiling couple moment captured live during on-location wedding production',
    aspectClass: 'row-span-1',
    sourceFile: 'IMG_2028.PNG'
  },

  // --- CREATIVE STUDIO & SFX EXPERIMENTS ---
  {
    id: 'look-23',
    title: 'Feline Transformation & Striped Face Art',
    category: 'Creative Studio',
    occasion: 'Creative Studio Face Artistry',
    ...makeImageMeta('creative-tiger-faceart', 1200, 1477),
    imageAlt: 'Creative tiger face paint with shaded orange gradient, black stripes, and gray contacts',
    aspectClass: 'row-span-1',
    sourceFile: 'IMG_2031.PNG'
  },
  {
    id: 'look-24',
    title: 'Creative Studio: Eye & Forehead Precision',
    category: 'Creative Studio',
    occasion: 'Creative Transformation Detail',
    ...makeImageMeta('creative-tiger-detail', 1200, 1492),
    imageAlt: 'Downward angle of creative tiger face paint showing precision eyebrow and eyelid stripes',
    aspectClass: 'row-span-1',
    sourceFile: 'IMG_2032.PNG'
  }
];
