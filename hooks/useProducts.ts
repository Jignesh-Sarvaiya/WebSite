import { useState, useCallback } from 'react';

export interface Product {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  category: string;
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  image: string;
}

const mockProducts: Product[] = [
  { id: '1', title: 'Multi Flora Honey', description: 'Pure, unadulterated sweetness direct from nature.', priceRange: '₹ 185.00 - 330.00', category: 'Honey', stockStatus: 'In Stock', image: '/placeholder.jpg' },
  { id: '2', title: 'Moringa Leaf Powder', description: 'A daily dose of green vitality.', priceRange: '₹ 99.00 - 900.00', category: 'Powders', stockStatus: 'In Stock', image: '/placeholder.jpg' },
  { id: '3', title: 'Rose Dry Petals', description: 'Experience the magic of natural roses.', priceRange: '₹ 99.00 - 900.00', category: 'Flowers', stockStatus: 'Low Stock', image: '/placeholder.jpg' },
  { id: '4', title: 'Panchagavya Soap', description: 'Cleanse and rejuvenate.', priceRange: '₹ 150.00 - 430.00', category: 'Skincare', stockStatus: 'In Stock', image: '/placeholder.jpg' },
];

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [loading, setLoading] = useState(false);

  // In a real app, this would be an async call to Firebase/Supabase
  const addProduct = useCallback(async (newProduct: Omit<Product, 'id'>) => {
    setLoading(true);
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      const product: Product = {
        ...newProduct,
        id: Math.random().toString(36).substr(2, 9),
      };
      setProducts(prev => [...prev, product]);
      return product;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteProduct = useCallback(async (id: string) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      setProducts(prev => prev.filter(p => p.id !== id));
    } finally {
      setLoading(false);
    }
  }, []);

  const updateProduct = useCallback(async (id: string, updates: Partial<Product>) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    products,
    loading,
    addProduct,
    deleteProduct,
    updateProduct
  };
}
