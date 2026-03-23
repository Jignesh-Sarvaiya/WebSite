'use client';

import { Star, ShoppingCart, Check } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { Product } from '@/hooks/useProducts';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  isBestSeller?: boolean;
}

export default function ProductCard({ product, isBestSeller }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-nature-cream relative">
      {isBestSeller && (
        <div className="absolute top-4 left-4 bg-nature-gold text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
          Best Seller
        </div>
      )}
      
      <div className="relative w-full aspect-square overflow-hidden bg-nature-beige">
        <div className="w-full h-full flex items-center justify-center text-nature-brown opacity-20 group-hover:scale-105 transition-transform duration-500">
          <div className="w-full h-full bg-gradient-to-br from-nature-cream to-nature-lightGreen/20"></div>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-nature-gold text-nature-gold" />
          ))}
        </div>
        
        <h3 className="font-serif text-lg font-bold text-nature-darkGreen mb-1 line-clamp-2 pb-2">
          {product.title}
        </h3>
        
        <div className="mt-auto pt-2 flex items-center justify-between">
          <span className="font-sans font-semibold text-nature-green">
            {product.priceRange}
          </span>
          
          <button 
            onClick={handleAddToCart}
            aria-label="Add to cart"
            className={`p-2 rounded-full transition-all group-hover:shadow-md ${
              added 
                ? 'bg-nature-darkGreen text-white' 
                : 'bg-nature-cream text-nature-darkGreen hover:bg-nature-darkGreen hover:text-white'
            }`}
          >
            {added ? <Check className="w-5 h-5" /> : <ShoppingCart className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
}
