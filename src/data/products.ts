import { Product } from '../contexts/CartContext';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: 899,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    category: "T-Shirts",
    description: "Premium quality cotton t-shirt with perfect fit and comfort. Made from 100% organic cotton.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 15,
    rating: 4.5
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 2499,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    category: "Pants",
    description: "Modern slim fit jeans with stretch fabric for ultimate comfort and style.",
    sizes: ["28", "30", "32", "34", "36"],
    stock: 8,
    rating: 4.2
  },
  {
    id: 3,
    name: "Formal White Shirt",
    price: 1899,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400",
    category: "Shirts",
    description: "Classic white formal shirt perfect for office wear and special occasions.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 12,
    rating: 4.7
  },
  {
    id: 4,
    name: "Comfort Hoodie",
    price: 2299,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
    category: "Hoodies",
    description: "Ultra-comfortable hoodie with soft fleece lining, perfect for casual wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 6,
    rating: 4.3
  },
  {
    id: 5,
    name: "Traditional Sherwani",
    price: 4999,
    image: "https://images.unsplash.com/photo-1594736797933-d0151ba63cd9?w=400",
    category: "Sherwanis",
    description: "Elegant traditional sherwani with intricate embroidery work for special occasions.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 4,
    rating: 4.8
  },
  {
    id: 6,
    name: "Casual Shorts",
    price: 1299,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400",
    category: "Shorts",
    description: "Comfortable casual shorts perfect for summer and leisure activities.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 20,
    rating: 4.1
  },
  {
    id: 7,
    name: "Leather Jacket",
    price: 8999,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    category: "Jackets",
    description: "Premium leather jacket with modern styling and durable construction.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 3,
    rating: 4.9
  },
  {
    id: 8,
    name: "Business Blazer",
    price: 5999,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    category: "Blazers",
    description: "Sophisticated business blazer tailored for the modern professional man.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 7,
    rating: 4.6
  },
  {
    id: 9,
    name: "Graphic Print Tee",
    price: 1199,
    image: "https://images.unsplash.com/photo-1583743814966-8936f37f7ae2?w=400",
    category: "T-Shirts",
    description: "Trendy graphic print t-shirt with contemporary design and premium fabric.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 0,
    rating: 4.0
  },
  {
    id: 10,
    name: "Chino Pants",
    price: 2199,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400",
    category: "Pants",
    description: "Versatile chino pants that blend comfort with style for any occasion.",
    sizes: ["28", "30", "32", "34", "36"],
    stock: 14,
    rating: 4.4
  },
  {
    id: 11,
    name: "Denim Shirt",
    price: 2399,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
    category: "Shirts",
    description: "Classic denim shirt with modern fit and vintage appeal.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 9,
    rating: 4.3
  },
  {
    id: 12,
    name: "Zip-Up Hoodie",
    price: 2799,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    category: "Hoodies",
    description: "Stylish zip-up hoodie with premium materials and comfortable fit.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 11,
    rating: 4.2
  },
  {
    id: 13,
    name: "Electric Toothbrush",
    price: 4999,
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400",
    category: "Dental",
    description: "Advanced electric toothbrush with multiple cleaning modes and timer.",
    sizes: ["Standard"],
    stock: 25,
    rating: 4.7
  },
  {
    id: 14,
    name: "Dental Floss Pack",
    price: 299,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400",
    category: "Dental",
    description: "Premium dental floss for effective plaque removal and gum health.",
    sizes: ["Standard"],
    stock: 100,
    rating: 4.5
  },
  {
    id: 15,
    name: "Whitening Toothpaste",
    price: 599,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
    category: "Dental",
    description: "Professional whitening toothpaste for brighter, healthier teeth.",
    sizes: ["Standard"],
    stock: 75,
    rating: 4.3
  },
  {
    id: 16,
    name: "Mouthwash",
    price: 399,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
    category: "Dental",
    description: "Antibacterial mouthwash for complete oral hygiene protection.",
    sizes: ["500ml", "1L"],
    stock: 50,
    rating: 4.1
  },
  {
    id: 17,
    name: "Dental Care Kit",
    price: 1299,
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400",
    category: "Dental",
    description: "Complete dental care kit with toothbrush, paste, and floss.",
    sizes: ["Standard"],
    stock: 3,
    rating: 4.6
  }
];

export const categories = [
  {
    name: "T-Shirts",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300",
    count: products.filter(p => p.category === "T-Shirts").length
  },
  {
    name: "Pants",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300",
    count: products.filter(p => p.category === "Pants").length
  },
  {
    name: "Shirts",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300",
    count: products.filter(p => p.category === "Shirts").length
  },
  {
    name: "Hoodies",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300",
    count: products.filter(p => p.category === "Hoodies").length
  },
  {
    name: "Sherwanis",
    image: "https://images.unsplash.com/photo-1594736797933-d0151ba63cd9?w=300",
    count: products.filter(p => p.category === "Sherwanis").length
  },
  {
    name: "Shorts",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300",
    count: products.filter(p => p.category === "Shorts").length
  },
  {
    name: "Jackets",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300",
    count: products.filter(p => p.category === "Jackets").length
  },
  {
    name: "Blazers",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
    count: products.filter(p => p.category === "Blazers").length
  },
  {
    name: "Dental",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=300",
    count: products.filter(p => p.category === "Dental").length
  }
];