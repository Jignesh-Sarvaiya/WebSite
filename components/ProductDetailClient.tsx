'use client';

import { useParams, useRouter } from 'next/navigation';
import { useProducts, Product } from '@/hooks/useProducts';
import { useCart } from '@/hooks/useCart';
import { Star, ShoppingCart, ChevronLeft, ShieldCheck, Leaf, Heart, ArrowRight, Zap, Activity, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductDetailClient({ id }: { id: string }) {
  const router = useRouter();
  const { products } = useProducts();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) return <div className="min-h-screen flex items-center justify-center">Product not found</div>;

  const handleAddToCart = () => {
    for(let i=0; i<quantity; i++) {
      addToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 py-6 border-b border-nature-cream">
        <Link href="/product" className="flex items-center text-sm text-gray-500 hover:text-nature-green transition-colors">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Shop
        </Link>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Product Image Area */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="aspect-square bg-nature-beige rounded-[40px] overflow-hidden relative group border-2 border-nature-cream shadow-xl">
               <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-nature-green/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-nature-beige rounded-2xl border border-nature-cream hover:border-nature-green transition-all cursor-pointer overflow-hidden">
                  <img src={product.image} alt="" className="w-full h-full object-cover opacity-60" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info Area */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-nature-green/10 text-nature-darkGreen text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">{product.category}</span>
                <span className="text-gray-300">|</span>
                <div className="flex items-center text-nature-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  <span className="text-xs text-gray-400 ml-2">(48 Reviews)</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-nature-darkGreen leading-tight">{product.title}</h1>
              <p className="text-2xl font-bold text-nature-green mt-4">₹ {product.basePrice.toLocaleString()}</p>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              {product.description} Experience the purity of our ethnobotanical extraction methods designed to preserve nutritional bio-activity.
            </p>

            {/* Features Icons */}
            <div className="grid grid-cols-2 gap-4 py-8 border-y border-nature-cream">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-nature-beige rounded-full flex items-center justify-center text-nature-green">
                   <ShieldCheck className="w-5 h-5" />
                 </div>
                 <span className="text-sm font-bold text-nature-darkGreen">100% Pure</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-nature-beige rounded-full flex items-center justify-center text-nature-green">
                   <Leaf className="w-5 h-5" />
                 </div>
                 <span className="text-sm font-bold text-nature-darkGreen">Ethically Sourced</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-nature-beige rounded-full flex items-center justify-center text-nature-green">
                   <Heart className="w-5 h-5" />
                 </div>
                 <span className="text-sm font-bold text-nature-darkGreen">Handmade With Love</span>
               </div>
            </div>

            {/* Cart Controller */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <div className="flex items-center bg-gray-100 rounded-full p-1 border border-nature-cream w-full sm:w-auto">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-lg hover:text-nature-green transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center font-bold text-nature-darkGreen">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-lg hover:text-nature-green transition-colors"
                >
                  +
                </button>
              </div>

              <button 
                onClick={handleAddToCart}
                disabled={added}
                className={`flex-1 w-full flex items-center justify-center gap-2 py-4 rounded-full font-bold transition-all shadow-xl hover:-translate-y-1 active:scale-95 ${
                  added ? 'bg-green-500 text-white' : 'bg-nature-darkGreen text-white hover:bg-nature-green'
                }`}
              >
                {added ? '✓ Item Added' : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart • ₹ {(product.basePrice * quantity).toLocaleString()}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-3 gap-16 border-t border-nature-cream pt-20">
           <div>
             <h3 className="text-2xl font-serif font-bold text-nature-darkGreen mb-6">Key Benefits</h3>
             <ul className="space-y-4">
               {(product.benefits || ['Boosts natural immunity', 'Rich in essential minerals', 'Promotes overall wellness']).map((benefit, i) => (
                 <li key={i} className="flex items-start gap-3">
                   <div className="w-5 h-5 bg-nature-gold/20 rounded-full flex items-center justify-center text-nature-gold mt-1">
                     <Star className="w-3 h-3 fill-current" />
                   </div>
                   <span className="text-gray-600">{benefit}</span>
                 </li>
               ))}
             </ul>
           </div>
           <div>
             <h3 className="text-2xl font-serif font-bold text-nature-darkGreen mb-6">Ingredients</h3>
             <p className="text-gray-600 leading-relaxed italic border-l-4 border-nature-green pl-6 py-2">
               {product.ingredients?.join(', ') || '100% Organic and ethically sourced raw botanical materials.'}
             </p>
           </div>
           <div>
             <h3 className="text-2xl font-serif font-bold text-nature-darkGreen mb-6">How to Use</h3>
             <p className="text-gray-600 leading-relaxed">
               {product.usage || 'Best consumed in the morning for optimal absorption. Can be added to your favorite smoothies or warm beverages.'}
             </p>
           </div>
        </div>
      </div>
    </div>
  );
}
