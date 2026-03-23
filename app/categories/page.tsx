import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CategoriesPage() {
  const categories = [
    { name: 'Wellness & Supplements', items: '15 Products', color: 'bg-[#1b4332]', textColor: 'text-white' },
    { name: 'Pure Honey', items: '4 Products', color: 'bg-[#dfb175]', textColor: 'text-[#1b4332]' },
    { name: 'Herbal Skincare', items: '8 Products', color: 'bg-[#e3d5c5]', textColor: 'text-[#1b4332]' },
    { name: 'Natural Haircare', items: '6 Products', color: 'bg-[#8aa794]', textColor: 'text-[#1b4332]' },
    { name: 'A2 Gir Cow Products', items: '3 Products', color: 'bg-[#4a4036]', textColor: 'text-white' },
    { name: 'Organic Spices', items: '12 Products', color: 'bg-[#b88c51]', textColor: 'text-white' },
  ];

  return (
    <div className="min-h-screen bg-nature-beige pb-24">
      {/* Header */}
      <div className="bg-nature-cream py-16 text-center border-b border-[#e3d5c5]">
        <h1 className="text-4xl md:text-5xl font-serif text-[#1b4332] mb-4">Shop by Category</h1>
        <p className="text-nature-darkGreen max-w-2xl mx-auto text-lg">
          Explore our range of 100% pure, chemical-free products carefully categorized for your wellness journey.
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-[1200px] mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <Link href="/product" key={idx} className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Background Color/Image Placeholder */}
              <div className={`absolute inset-0 ${cat.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
              
              {/* Decorative graphic */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className={`text-sm font-bold uppercase tracking-widest mb-2 opacity-80 ${cat.textColor}`}>{cat.items}</span>
                <h2 className={`text-3xl font-serif font-medium mb-4 ${cat.textColor}`}>{cat.name}</h2>
                <div className={`flex items-center font-bold text-sm uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0 ${cat.textColor}`}>
                  Explore <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
