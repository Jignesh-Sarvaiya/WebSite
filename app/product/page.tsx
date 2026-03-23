'use client';

import ProductCard from '@/components/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';

export default function ProductsPage() {
  const products = [
    { id: '3', title: 'Rose Dry Petals', priceRange: '₹ 99.00 - 900.00', image: '/placeholder.jpg', category: 'Wellness', description: 'Freshly dried organic rose petals.', stockStatus: 'In Stock' as const },
    { id: '1', title: 'Multi Flora Honey', priceRange: '₹ 185.00 - 330.00', image: '/placeholder.jpg', bestSeller: true, category: 'Food', description: 'Pure forest honey.', stockStatus: 'In Stock' as const },
    { id: '4', title: 'Panchagavya Soap', priceRange: '₹ 150.00 - 430.00', image: '/placeholder.jpg', category: 'Skincare', description: 'Ayurvedic cleansing soap.', stockStatus: 'In Stock' as const },
    { id: '101', title: 'Natural Black Mahendi', priceRange: '₹ 120.00 - 250.00', image: '/placeholder.jpg', category: 'Haircare', description: 'Chemical-free hair color.', stockStatus: 'In Stock' as const },
    { id: '2', title: 'Moringa Leaf Powder', priceRange: '₹ 99.00 - 900.00', image: '/placeholder.jpg', category: 'Wellness', description: 'Nutrient-rich moringa.', stockStatus: 'In Stock' as const },
    { id: '102', title: 'A2 Gir Cow Ghee', priceRange: '₹ 800.00 - 1500.00', image: '/placeholder.jpg', bestSeller: true, category: 'Food', description: 'Traditional bilona ghee.', stockStatus: 'In Stock' as const },
    { id: '103', title: 'Neem Wood Comb', priceRange: '₹ 150.00', image: '/placeholder.jpg', category: 'Accessories', description: 'Handcrafted neem wood.', stockStatus: 'In Stock' as const },
    { id: '104', title: 'Ashwagandha Powder', priceRange: '₹ 200.00 - 500.00', image: '/placeholder.jpg', category: 'Wellness', description: 'Pure vitality root.', stockStatus: 'In Stock' as const },
    { id: '105', title: 'Organic Turmeric', priceRange: '₹ 80.00 - 250.00', image: '/placeholder.jpg', category: 'Food', description: 'High curcumin turmeric.', stockStatus: 'In Stock' as const },
    { id: '106', title: 'Aloe Vera Gel', priceRange: '₹ 150.00 - 300.00', image: '/placeholder.jpg', category: 'Skincare', description: 'Pure smoothing gel.', stockStatus: 'In Stock' as const },
    { id: '107', title: 'Herbal Hair Oil', priceRange: '₹ 250.00 - 600.00', image: '/placeholder.jpg', category: 'Haircare', description: 'Nourishing botanical oil.', stockStatus: 'In Stock' as const },
    { id: '108', title: 'Cold Pressed Coconut Oil', priceRange: '₹ 300.00 - 800.00', image: '/placeholder.jpg', bestSeller: true, category: 'Food', description: 'Pure virgin oil.', stockStatus: 'In Stock' as const },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-nature-beige pb-20">
      
      {/* Search & Header Section */}
      <section className="bg-[#0a4d3c] py-16 px-4 md:px-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-nature-gold/10 rounded-full blur-2xl"></div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-nature-beige mb-4 relative z-10">
          Our Pure Collection
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto font-sans text-lg mb-8 relative z-10">
          Rooted in purity, grown without chemicals, and processed with love.
        </p>
      </section>

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 lg:px-8 mt-12 flex flex-col lg:flex-row gap-8 max-w-[1400px]">
        
        {/* Sidebar Filters (Desktop) / Top Dropdown (Mobile) */}
        <aside className="w-full lg:w-1/4">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-nature-cream sticky top-24">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <h3 className="font-sans font-bold text-xl text-[#0a4d3c] flex items-center">
                <Filter className="w-5 h-5 mr-2" /> Filters
              </h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex justify-between items-center cursor-pointer">
                  Categories <ChevronDown className="w-4 h-4 text-gray-500" />
                </h4>
                <ul className="space-y-2 text-gray-600 font-medium">
                  <li className="flex items-center justify-between hover:text-[#0a4d3c] cursor-pointer transition-colors">
                    <span className="flex items-center"><input type="checkbox" className="mr-3 accent-[#0a4d3c]" /> Wellness</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-500">3</span>
                  </li>
                  <li className="flex items-center justify-between hover:text-[#0a4d3c] cursor-pointer transition-colors">
                    <span className="flex items-center"><input type="checkbox" className="mr-3 accent-[#0a4d3c]" /> Food & Nutrition</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-500">4</span>
                  </li>
                  <li className="flex items-center justify-between hover:text-[#0a4d3c] cursor-pointer transition-colors">
                    <span className="flex items-center"><input type="checkbox" className="mr-3 accent-[#0a4d3c]" /> Skincare</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-500">2</span>
                  </li>
                  <li className="flex items-center justify-between hover:text-[#0a4d3c] cursor-pointer transition-colors">
                    <span className="flex items-center"><input type="checkbox" className="mr-3 accent-[#0a4d3c]" /> Haircare</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-500">2</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-3 flex justify-between items-center cursor-pointer">
                  Price Range <ChevronDown className="w-4 h-4 text-gray-500" />
                </h4>
                <input type="range" className="w-full accent-[#0a4d3c]" min="0" max="2000" />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>₹0</span>
                  <span>₹2000+</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="w-full lg:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-600 font-medium">Showing all {products.length} products</span>
            <select className="border border-gray-200 bg-white text-gray-700 py-2 px-4 rounded-lg outline-none focus:border-[#0a4d3c] shadow-sm font-medium">
              <option>Sort by Popularity</option>
              <option>Sort by Latest</option>
              <option>Sort by Price: Low to High</option>
              <option>Sort by Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                product={product as any}
                isBestSeller={product.bestSeller}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12 gap-2">
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0a4d3c] text-white font-bold shadow-md">1</button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 font-bold transition-colors">2</button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 font-bold transition-colors">3</button>
          </div>
        </main>
      </div>
    </div>
  );
}
