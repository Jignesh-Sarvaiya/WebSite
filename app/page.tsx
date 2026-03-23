'use client';

import { ShoppingCart, Check, ShieldCheck, Zap, Smile, Activity, ExternalLink, Leaf, Star, Heart } from 'lucide-react';
import { useProducts, Product } from '@/hooks/useProducts';
import { useCart } from '@/hooks/useCart';
import Link from 'next/link';

export default function Home() {
  const { addToCart } = useCart();
  const { products } = useProducts();
  
  const featuredProducts = products.filter(p => p.bestSeller || ['1', '2', '3', '4'].includes(p.id));
  const trustedTales = products.slice(0, 5);

  return (
    <div className="flex flex-col min-h-screen bg-nature-beige">
      {/* 1. Hero Section */}
      <section className="relative overflow-visible min-h-[500px] lg:min-h-[600px] flex items-stretch">
        
        {/* Left Side: Beige Background and Woman */}
        <div className="w-full lg:w-[45%] bg-nature-beige relative pt-12 lg:pt-24 px-4 lg:pl-20 flex flex-col justify-end">
          <div className="relative w-full max-w-[450px] mx-auto lg:mx-0 h-[400px] lg:h-[500px]">
            {/* Visual element representing the smiling Indian woman */}
            <div className="absolute bottom-0 left-0 w-full h-[90%] bg-[#e3d5c5] rounded-t-full border-4 border-white/50 shadow-lg flex flex-col items-center justify-end overflow-hidden z-20">
               <img 
                 src="/images/woman_hero.png" 
                 alt="Smiling Ayurvedic Woman" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-x-0 bottom-0 bg-nature-darkGreen/10 backdrop-blur-[2px] flex items-center justify-center py-10">
                 <span className="font-serif italic text-nature-brown font-bold text-center px-8 text-shadow-sm">Authentic Ayurvedic Wellness <br/> Harvested with Care</span>
               </div>
            </div>
          </div>
        </div>

        {/* Right Side: Dark Green curved background */}
        <div className="hidden lg:block w-[60%] absolute top-0 right-0 h-full bg-[#0a5c43] rounded-bl-[150px] z-10 overflow-hidden">
           <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/20 blur-3xl rounded-full"></div>
           <span className="absolute top-8 right-8 text-white/30 font-serif italic text-2xl">Purity Guaranteed</span>
        </div>

        {/* Content over Right Side */}
        <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-20 flex flex-col pt-16 lg:pt-24 px-4 lg:px-12 items-center lg:items-start text-center lg:text-left pointer-events-none">
           <h1 className="text-4xl md:text-5xl lg:text-[64px] font-serif font-normal text-nature-beige leading-[1.1] mb-6 drop-shadow-sm pointer-events-auto">
             GIR AYURVEDA <br/> <span className="text-nature-gold">ORGANICS</span>
           </h1>
           
           <h2 className="text-2xl lg:text-[32px] font-serif italic text-nature-beige/80 mb-8 pointer-events-auto">
             Where the Earth Meets Wellness
           </h2>
           
           {/* Sub-headline pill */}
           <div className="bg-nature-beige text-[#1b4332] px-8 py-3 rounded-full inline-block font-medium tracking-wide shadow-md pointer-events-auto mb-12">
             ---- Nature's Gift by Women's Hands ----
           </div>

           {/* Products Array Graphic */}
           <div className="w-full flex justify-center lg:justify-start mt-auto relative pb-8 pointer-events-auto">
             <div className="relative w-full max-w-[500px] h-[250px] hidden md:block">
                <div className="absolute bottom-0 left-0 w-[110%] h-[120px] bg-[#4a4036] rounded-t-[40px] rounded-b-xl opacity-90 border-t-4 border-[#5d5145]"></div>
                {products.slice(0, 4).map((p, idx) => (
                  <div key={p.id} 
                    className={`absolute bg-white border border-gray-200 rounded-lg shadow-lg flex items-center justify-center overflow-hidden
                    ${idx === 0 ? 'bottom-10 left-10 w-24 h-40 rotate-[-5deg] z-10' : ''}
                    ${idx === 1 ? 'bottom-16 left-28 w-28 h-44 z-20 scale-110 shadow-xl' : ''}
                    ${idx === 2 ? 'bottom-12 right-20 w-32 h-36 z-30 scale-125 border-nature-gold shadow-2xl bg-gradient-to-b from-white to-[#fff9e6]' : ''}
                    ${idx === 3 ? 'bottom-4 right-8 w-24 h-20 z-40' : ''}
                  `}>
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-80" />
                  </div>
                ))}
             </div>
           </div>
        </div>
      </section>

      {/* 2. Floating Trusted Bar */}
      <div className="relative z-30 -mt-8 flex justify-center w-full px-4 mb-16">
        <div className="bg-[#0a4d3c] text-white px-6 md:px-12 py-4 md:py-5 rounded-full shadow-2xl border-b-4 border-[#06382b] text-sm md:text-lg font-medium tracking-wide text-center max-w-[90%] lg:max-w-[1000px]">
          Discover 100% Pure, Organic & Chemical-Free Products for Your Mind, Body & Skin.
        </div>
      </div>

      {/* 4. Shop By Goal Section (Inspired by Organic India) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-nature-darkGreen mb-4">Shop By Goal</h2>
            <div className="w-24 h-1 bg-nature-gold mx-auto rounded-full opacity-50"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
            {[
              { name: 'Immunity', icon: ShieldCheck },
              { name: 'Digestive Health', icon: Zap },
              { name: 'Stress Relief', icon: Smile },
              { name: 'Skin Health', icon: Heart },
              { name: 'Energy', icon: Activity },
              { name: 'Detox', icon: ExternalLink }
            ].map((goal, i) => (
              <div key={i} className="group cursor-pointer flex flex-col items-center">
                <div className="w-24 h-24 bg-nature-beige rounded-[32px] flex items-center justify-center text-nature-darkGreen group-hover:bg-nature-green group-hover:text-white transition-all duration-300 shadow-sm border border-nature-cream group-hover:border-nature-green mb-4">
                  <goal.icon className="w-10 h-10" />
                </div>
                <span className="text-sm font-bold text-nature-darkGreen group-hover:text-nature-green transition-colors text-center">{goal.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Products */}
      <section className="py-20 bg-nature-beige">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-serif font-bold text-nature-darkGreen">Our Best Sellers</h2>
            <Link href="/product" className="text-nature-green font-bold text-sm hover:underline">View All Products →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 border border-nature-cream relative overflow-hidden">
                <Link href={`/product/${product.id}`}>
                  <div className="aspect-square bg-nature-beige rounded-2xl mb-4 relative overflow-hidden group-hover:scale-[1.02] transition-transform">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                  </div>
                </Link>
                <h3 className="font-bold text-nature-darkGreen mb-1">{product.title}</h3>
                <p className="text-[10px] text-gray-500 mb-3 uppercase tracking-widest">{product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-nature-green">₹ {product.basePrice.toLocaleString()}</span>
                  <button 
                    onClick={() => addToCart(product as any)}
                    className="p-2 bg-nature-darkGreen text-white rounded-full hover:bg-nature-green transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Certifications Section */}
      <section className="py-20 bg-[#1b4332] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -z-0"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <h3 className="text-lg font-bold mb-16 tracking-[0.4em] uppercase text-nature-gold border-b border-nature-gold/20 pb-4 text-center">Benefit From Choosing The Best</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {[
              { name: 'Certified Organic', label: '100%' },
              { name: 'Non GMO', label: 'Pure' },
              { name: 'Zero Chemicals', label: 'Safety' },
              { name: 'Ethically Sourced', label: 'Trust' }
            ].map((cert, i) => (
              <div key={i} className="flex flex-col items-center gap-4 group">
                <div className="w-20 h-20 border border-nature-gold/30 rounded-full flex items-center justify-center p-1 group-hover:border-nature-gold transition-all duration-500">
                  <div className="w-full h-full border-2 border-nature-gold rounded-full flex items-center justify-center text-nature-gold font-bold text-xs uppercase">
                    {cert.label}
                  </div>
                </div>
                <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-nature-gold/80">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Trusted Tales Section */}
      <section className="py-20 bg-nature-beige relative">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl font-serif font-bold text-[#113c31] mb-4">Trusted Tales</h2>
            <p className="text-[#3b4b45] text-lg opacity-80">
              Discover the goodness of nature, tell your story. Join the #GirAyurveda Family.
            </p>
          </div>

          <div className="flex overflow-x-auto pb-12 pt-4 snap-x snap-mandatory gap-8 hide-scrollbar">
            {trustedTales.map((tale, index) => (
              <div key={index} className="snap-start flex-shrink-0 w-[320px] bg-white rounded-[32px] overflow-hidden border border-nature-cream shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer">
                <Link href={`/product/${tale.id}`}>
                  <div className="w-full h-[280px] bg-nature-beige relative group">
                    <img 
                      src={tale.image} 
                      alt={tale.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-nature-darkGreen/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </Link>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#113c31] mb-2">{tale.title}</h3>
                  <p className="text-gray-500 text-sm mb-8 leading-relaxed line-clamp-2">{tale.description}</p>
                  <div className="flex justify-between items-center pt-6 border-t border-nature-cream">
                    <span className="font-bold text-nature-green">₹ {tale.basePrice.toLocaleString()}</span>
                    <button 
                      onClick={() => addToCart(tale as any)}
                      className="flex items-center gap-2 text-[#113c31] hover:text-nature-green transition-all font-bold text-xs uppercase tracking-widest"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
