export type Category = "Whitening" | "Electric Toothbrush" | "Flossing" | "Mouthwash" | "Kids" | "Specialty";

export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  rating: number;
  reviewCount: number;
  category: Category;
  affiliateUrl: string;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Oral-B iO Series 9 Electric Toothbrush",
    description: "Advanced 3D teeth tracking and AI recognition for a professional clean feeling every day.",
    imageUrl: "https://m.media-amazon.com/images/I/71u9iI7-lDL._AC_SL1500_.jpg",
    price: "$249.99",
    rating: 4.8,
    reviewCount: 11245,
    category: "Electric Toothbrush",
    affiliateUrl: "https://www.amazon.com/dp/B08BWSCNL8?tag=YOURTAG-20"
  },
  {
    id: "p2",
    name: "Philips Sonicare ProtectiveClean 4100",
    description: "Removes up to 7x more plaque than a manual toothbrush. Includes a pressure sensor to protect gums.",
    imageUrl: "https://m.media-amazon.com/images/I/71X8sYw1hQL._AC_SL1500_.jpg",
    price: "from $49.95",
    rating: 4.7,
    reviewCount: 9540,
    category: "Electric Toothbrush",
    affiliateUrl: "https://www.amazon.com/dp/B078GVDB19?tag=YOURTAG-20"
  },
  {
    id: "p3",
    name: "Crest 3D Whitestrips Professional",
    description: "Professional-level teeth whitening results at home. Removes 14 years of stains in just 30 minutes a day.",
    imageUrl: "https://m.media-amazon.com/images/I/81kIu862BGL._AC_SL1500_.jpg",
    price: "from $34.99",
    rating: 4.6,
    reviewCount: 12050,
    category: "Whitening",
    affiliateUrl: "https://www.amazon.com/dp/B07MK8KPVQ?tag=YOURTAG-20"
  },
  {
    id: "p4",
    name: "Snow Teeth Whitening Kit with LED",
    description: "Award-winning sensitive teeth whitening system with an accelerating LED mouthpiece.",
    imageUrl: "https://m.media-amazon.com/images/I/71m48Z8G8sL._AC_SL1500_.jpg",
    price: "from $149.00",
    rating: 4.5,
    reviewCount: 6830,
    category: "Whitening",
    affiliateUrl: "https://www.amazon.com/dp/B07Y8W4J8J?tag=YOURTAG-20"
  },
  {
    id: "p5",
    name: "Waterpik Aquarius Water Flosser",
    description: "The easy and more effective way to floss. Clinically proven to remove up to 99.9% of plaque.",
    imageUrl: "https://m.media-amazon.com/images/I/71Xq5aP4F6L._AC_SL1500_.jpg",
    price: "$79.99",
    rating: 4.7,
    reviewCount: 11450,
    category: "Flossing",
    affiliateUrl: "https://www.amazon.com/dp/B00A0ZJTPE?tag=YOURTAG-20"
  },
  {
    id: "p6",
    name: "Cocofloss Coconut-Oil Infused Floss",
    description: "Thick, textured floss that grabs plaque and debris. Infused with soothing coconut oil and vegan wax.",
    imageUrl: "https://m.media-amazon.com/images/I/61Fj5L0t4uL._AC_SL1500_.jpg",
    price: "from $8.00",
    rating: 4.8,
    reviewCount: 4120,
    category: "Flossing",
    affiliateUrl: "https://www.amazon.com/dp/B01BWSZKK0?tag=YOURTAG-20"
  },
  {
    id: "p7",
    name: "Listerine Total Care Antiseptic Mouthwash",
    description: "Provides 6 benefits in 1: helps prevent cavities, restores enamel, and strengthens teeth.",
    imageUrl: "https://m.media-amazon.com/images/I/71b2gL62wSL._AC_SL1500_.jpg",
    price: "from $7.99",
    rating: 4.8,
    reviewCount: 8930,
    category: "Mouthwash",
    affiliateUrl: "https://www.amazon.com/dp/B0042JX7Z0?tag=YOURTAG-20"
  },
  {
    id: "p8",
    name: "TheraBreath Fresh Breath Oral Rinse",
    description: "Dentist-formulated to fight bad breath for 24 hours. Clinically proven, alcohol-free formula.",
    imageUrl: "https://m.media-amazon.com/images/I/71x32E8qGXL._AC_SL1500_.jpg",
    price: "from $9.99",
    rating: 4.7,
    reviewCount: 10200,
    category: "Mouthwash",
    affiliateUrl: "https://www.amazon.com/dp/B003ETF5U6?tag=YOURTAG-20"
  },
  {
    id: "p9",
    name: "Oral-B Kids Electric Toothbrush",
    description: "Features a round brush head sized for small mouths, plus fun character themes to make brushing enjoyable.",
    imageUrl: "https://m.media-amazon.com/images/I/81L6E1W8SdL._AC_SL1500_.jpg",
    price: "from $19.99",
    rating: 4.6,
    reviewCount: 5640,
    category: "Kids",
    affiliateUrl: "https://www.amazon.com/dp/B089N5HWVY?tag=YOURTAG-20"
  },
  {
    id: "p10",
    name: "Dr. Brown's Infant-to-Toddler Toothbrush",
    description: "Super-soft bristles gently clean baby's teeth and gums. Cute elephant shape keeps them engaged.",
    imageUrl: "https://m.media-amazon.com/images/I/71jA4T4R+3L._AC_SL1500_.jpg",
    price: "from $5.99",
    rating: 4.8,
    reviewCount: 7210,
    category: "Kids",
    affiliateUrl: "https://www.amazon.com/dp/B07VVTFJMY?tag=YOURTAG-20"
  },
  {
    id: "p11",
    name: "Xylimelts Dry Mouth Relief",
    description: "Soothing oral adhering discs that stimulate saliva flow and moisturize the mouth for hours.",
    imageUrl: "https://m.media-amazon.com/images/I/81xU-kX1t4L._AC_SL1500_.jpg",
    price: "from $11.99",
    rating: 4.5,
    reviewCount: 8850,
    category: "Specialty",
    affiliateUrl: "https://www.amazon.com/dp/B00AUCQJGS?tag=YOURTAG-20"
  },
  {
    id: "p12",
    name: "GUM Soft-Picks Advanced Dental Picks",
    description: "Flexible, comfortable bristles gently remove plaque and food between teeth. Great for on-the-go.",
    imageUrl: "https://m.media-amazon.com/images/I/81fH2vPZbEL._AC_SL1500_.jpg",
    price: "from $4.99",
    rating: 4.7,
    reviewCount: 6320,
    category: "Specialty",
    affiliateUrl: "https://www.amazon.com/dp/B00N11MKKQ?tag=YOURTAG-20"
  }
];
