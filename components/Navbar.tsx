'use client';

import Link from 'next/link';
import { Search, ShoppingCart, Menu, User, X, ArrowRight } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useProducts } from '@/hooks/useProducts';

export default function Navbar() {
  const { cartCount } = useCart();
  const { products } = useProducts();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const filteredResults = searchQuery.trim() 
    ? products.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 3)
    : [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/product?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <>
      <header className="bg-nature-beige sticky top-0 z-50 shadow-sm border-b border-nature-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-14 h-14 bg-nature-green text-white rounded-full flex items-center justify-center font-serif flex-col leading-none border-2 border-nature-darkGreen shadow-md">
                <span className="text-xl">G</span>
                <span className="text-[0.6rem]">A</span>
              </div>
              <Link href="/" className="font-sans flex flex-col font-black text-nature-darkGreen tracking-tight uppercase leading-none">
                <span className="text-2xl">GIR AYURVEDA</span>
                <span className="text-[0.7rem] tracking-[0.3em] text-nature-green mt-1.5 font-bold">ORGANICS</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex space-x-10 items-center">
              {['Home', 'Product', 'Blog', 'Categories', 'About us', 'Contact us'].map((item) => (
                <Link 
                  key={item} 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-nature-darkGreen hover:text-nature-green font-bold text-[14px] transition-all uppercase tracking-widest relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-nature-green transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-6 text-nature-darkGreen">
              <button 
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search" 
                className="hover:text-nature-green transition-colors p-2 hover:bg-nature-green/5 rounded-full"
              >
                <Search className="w-6 h-6" />
              </button>
              
              <Link href="/admin" aria-label="User Profile" className="hover:text-nature-green transition-colors hidden md:block p-2 hover:bg-nature-green/5 rounded-full">
                <User className="w-6 h-6" />
              </Link>

              <Link href="/checkout" aria-label="Shopping Cart" className="hover:text-nature-green transition-colors relative p-2 hover:bg-nature-green/5 rounded-full">
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-nature-green text-white text-[10px] rounded-full h-[18px] w-[18px] flex items-center justify-center font-black border-2 border-nature-beige animate-in zoom-in duration-300">
                    {cartCount}
                  </span>
                )}
              </Link>

              <button aria-label="Menu" className="xl:hidden hover:text-nature-green transition-colors p-2 hover:bg-nature-green/5 rounded-full">
                <Menu className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-nature-darkGreen/95 z-[100] flex flex-col items-center justify-center p-6 backdrop-blur-sm animate-in fade-in duration-300">
          <button 
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
          >
            <X className="w-10 h-10" />
          </button>
          
          <form onSubmit={handleSearch} className="w-full max-w-3xl space-y-8">
            <h2 className="text-4xl font-serif text-white text-center mb-4">What are you looking for?</h2>
            <div className="relative">
              <input 
                autoFocus
                type="text" 
                placeholder="Search products, goals, ingredients..."
                className="w-full bg-transparent border-b-2 border-white/20 text-white text-3xl py-4 focus:outline-none focus:border-nature-gold transition-colors placeholder:text-white/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-nature-gold transition-colors">
                <ArrowRight className="w-8 h-8" />
              </button>
            </div>

            {/* Live Search Results */}
            {filteredResults.length > 0 && (
              <div className="space-y-4 pt-10">
                <span className="text-white/40 text-sm uppercase tracking-widest font-bold">Quick Results:</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {filteredResults.map(p => (
                    <Link 
                      key={p.id} 
                      href={`/product/${p.id}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-all border border-white/5"
                    >
                      <div className="w-16 h-16 rounded-xl bg-nature-beige overflow-hidden flex-shrink-0">
                        <img src={p.image} className="w-full h-full object-cover" alt={p.title} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold leading-tight line-clamp-1">{p.title}</h4>
                        <p className="text-nature-gold font-bold text-sm">₹ {p.basePrice}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap justify-center gap-3 pt-6">
              <span className="text-white/40 text-sm w-full text-center mb-2">Popular:</span>
              {['A2 Ghee', 'Moringa', 'Honey', 'Detox', 'Wellness'].map(tag => (
                <button 
                  key={tag}
                  type="button"
                  onClick={() => setSearchQuery(tag)}
                  className="bg-white/5 hover:bg-white/10 text-white px-4 py-1.5 rounded-full text-xs font-bold border border-white/10 transition-all"
                >
                  {tag}
                </button>
              ))}
            </div>
          </form>
        </div>
      )}
    </>
  );
}
