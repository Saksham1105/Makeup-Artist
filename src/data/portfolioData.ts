export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Bridal' | 'Engagement' | 'Festive' | 'Editorial' | 'Details';
  occasion: string;
  imageUrl: string;
  imageAlt: string;
  aspectClass: string; // for asymmetric masonry grid presentation
}

export const portfolioCategories = ['All', 'Bridal', 'Engagement', 'Festive', 'Editorial', 'Details'] as const;
export type PortfolioCategory = typeof portfolioCategories[number];

export const portfolioData: PortfolioItem[] = [
  {
    id: 'look-1',
    title: 'The Royal Heritage Bride',
    category: 'Bridal',
    occasion: 'Traditional Wedding Ceremony',
    imageUrl: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Indian bride with intricate kundan jewelry and soft smokey eye makeup',
    aspectClass: 'row-span-2'
  },
  {
    id: 'look-2',
    title: 'Luminous Sunlit Glow',
    category: 'Engagement',
    occasion: 'Sunset Sangeet & Cocktails',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Radiant golden hour complexion with dewy cheekbones and muted rose lips',
    aspectClass: 'row-span-1'
  },
  {
    id: 'look-3',
    title: 'Modern Minimalist Elegance',
    category: 'Editorial',
    occasion: 'Fashion Editorial Campaign',
    imageUrl: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Editorial close-up with clean glass skin and sculpted brows',
    aspectClass: 'row-span-1'
  },
  {
    id: 'look-4',
    title: 'Crimson Velvet Splendor',
    category: 'Bridal',
    occasion: 'Vedic Wedding Nuptials',
    imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Traditional red bridal veil with gold jewelry and bold classic lip',
    aspectClass: 'row-span-2'
  },
  {
    id: 'look-5',
    title: 'Champagne Shimmer & Soft Liner',
    category: 'Festive',
    occasion: 'Mehendi & Festive Soirée',
    imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Festive party makeup with metallic champagne lids and nude matte lip',
    aspectClass: 'row-span-1'
  },
  {
    id: 'look-6',
    title: 'Romantic Textured Braiding',
    category: 'Details',
    occasion: 'Bridal Hair Artistry',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Intricately styled bridal hair with subtle pearls and textured twists',
    aspectClass: 'row-span-1'
  },
  {
    id: 'look-7',
    title: 'Rose Gold Evening Drama',
    category: 'Engagement',
    occasion: 'Reception Gala Dinner',
    imageUrl: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Evening glam with winged eyeliner, defined contour, and glossy rose lips',
    aspectClass: 'row-span-1'
  },
  {
    id: 'look-8',
    title: 'Ethereal Pastels & Pearl Adornment',
    category: 'Bridal',
    occasion: 'Day Wedding & Anand Karaj',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Delicate pastel day bride with soft flush and illuminated skin',
    aspectClass: 'row-span-2'
  },
  {
    id: 'look-9',
    title: 'Sculpted Monochrome Beauty',
    category: 'Editorial',
    occasion: 'Jewelry & Beauty Lookbook',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Monochrome warm bronze tones on cheek, eyelid, and lip',
    aspectClass: 'row-span-1'
  }
];
