'use client';

import { useState, useCallback, useEffect } from 'react';

export interface Product {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  basePrice: number; // Numeric price for calculations
  category: string;
  goals: string[]; // e.g., ['Immunity', 'Digestive Health']
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  image: string;
  benefits?: string[];
  ingredients?: string[];
  usage?: string;
  bestSeller?: boolean; // Added bestSeller property
}

const LOCAL_STORAGE_KEY = 'gir_ayurveda_products';

const mockProducts: Product[] = [
  { 
    id: '1', 
    title: 'Multi Flora Honey', 
    basePrice: 185, 
    priceRange: '₹ 185', 
    image: '/images/honey.png', 
    bestSeller: true, 
    category: 'Honey', 
    description: 'Pure, raw, and unadulterated multi-flora honey collected from the deep forests.', 
    stockStatus: 'In Stock',
    goals: ['Immunity', 'Energy'],
    benefits: ['Natural antibiotic properties', 'Rich in antioxidants', 'Soothes sore throats'],
    ingredients: ['100% Raw Forest Honey'],
    usage: 'Take 1 spoon daily or add to warm water.'
  },
  { 
    id: '2', 
    title: 'Moringa Leaf Powder', 
    basePrice: 99, 
    priceRange: '₹ 99', 
    image: '/images/moringa.png', 
    category: 'Wellness', 
    description: 'Nutrient-dense superfood powder made from organic Moringa leaves.', 
    stockStatus: 'In Stock',
    goals: ['Immunity', 'Detox'],
    benefits: ['High in Vitamin C', 'Supports joint health', 'Natural energy booster'],
    ingredients: ['Organic Moringa Leaves'],
    usage: 'Mix 1 tsp in smoothies or juices.'
  },
  { 
    id: '3', 
    title: 'Rose Dry Petals', 
    basePrice: 150, 
    priceRange: '₹ 150', 
    image: '/WebSite/images/rose.png', 
    category: 'Flowers', 
    description: 'Fragrant and sun-dried organic rose petals for culinary and wellness use.', 
    stockStatus: 'In Stock',
    goals: ['Stress Relief', 'Skin Health'],
    benefits: ['Calming effect on mind', 'Tones skin', 'Natural coolant'],
    ingredients: ['Organic Dried Rose Petals'],
    usage: 'Add to tea or use for face packs.'
  },
  { 
    id: '4', 
    title: 'Panchagavya Soap', 
    description: 'Cleanse and rejuvenate.', 
    priceRange: '₹ 120.00', 
    basePrice: 120,
    category: 'Skincare', 
    goals: ['Skin Health'],
    stockStatus: 'In Stock', 
    image: '/images/soap.png',
    benefits: ['Deep cleansing', 'Chemical-free', 'Glow-enhancing'],
    ingredients: ['Cow Ghee', 'Cow Milk', 'Neem', 'Tulsi'],
    usage: 'Apply on wet skin and rinse thoroughly.'
  },
  { 
    id: '5', 
    title: 'A2 Gir Cow Ghee', 
    description: 'The golden elixir of life.', 
    priceRange: '₹ 850', 
    basePrice: 850,
    category: 'Ghee', 
    goals: ['Digestive Health', 'Brain Health'],
    stockStatus: 'In Stock', 
    image: '/images/ghee.png',
    benefits: ['Improves digestion', 'Rich in OMEGA-3', 'High smoke point'],
    ingredients: ['A2 Gir Cow Milk Fat'],
    usage: 'Use for cooking or consume 1 spoon on an empty stomach.'
  },
];

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Initialize from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setProducts(JSON.parse(saved));
    } else {
      setProducts(mockProducts);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockProducts));
    }
    setLoading(false);
  }, []);

  const saveProducts = (newProducts: Product[]) => {
    setProducts(newProducts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newProducts));
  };

  const resetProducts = useCallback(() => {
    saveProducts(mockProducts);
  }, []);

  const addProduct = useCallback(async (newProduct: Omit<Product, 'id'>) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      const product: Product = {
        ...newProduct,
        id: Math.random().toString(36).substr(2, 9),
      };
      const updated = [...products, product];
      saveProducts(updated);
      return product;
    } finally {
      setLoading(false);
    }
  }, [products]);

  const deleteProduct = useCallback(async (id: string) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      const updated = products.filter(p => p.id !== id);
      saveProducts(updated);
    } finally {
      setLoading(false);
    }
  }, [products]);

  const updateProduct = useCallback(async (id: string, updates: Partial<Product>) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      const updated = products.map(p => p.id === id ? { ...p, ...updates } : p);
      saveProducts(updated);
    } finally {
      setLoading(false);
    }
  }, [products]);

  return {
    products,
    loading,
    addProduct,
    deleteProduct,
    updateProduct,
    resetProducts
  };
}
