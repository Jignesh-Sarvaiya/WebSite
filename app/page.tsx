import ProductCard from '@/components/ProductCard';
import { ShoppingCart } from 'lucide-react';

export default function Home() {
  const featuredProducts = [
    { title: 'Moringa Leaf Powder', price: '₹ 99.00-900.00', image: '/placeholder.jpg' },
    { title: 'Rose Dry Petals', price: '₹ 99.00-900.00', image: '/placeholder.jpg' },
    { title: 'Multi Flora Honey', price: '₹ 185.00-330.00', image: '/placeholder.jpg', bestSeller: true },
    { title: 'Panchagavya Soap', price: '₹ 150.00-430.00', image: '/placeholder.jpg' },
  ];

  const trustedTales = [
    { title: 'Rose Dry Petals', description: 'Experience the magic of natural roses in your daily care.', image: '/placeholder.jpg' },
    { title: 'Multi Flora Honey', description: 'Pure, unadulterated sweetness direct from nature.', image: '/placeholder.jpg' },
    { title: 'Panchagavya Soap', description: 'Cleanse and rejuvenate with ancient ayurvedic wisdom.', image: '/placeholder.jpg' },
    { title: 'Natural Black Mahendi', description: 'Rich, natural color without the harsh chemicals.', image: '/placeholder.jpg' },
    { title: 'Moringa Leaf Pow..', description: 'A daily dose of green vitality for your immune system.', image: '/placeholder.jpg' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-nature-beige">
      {/* 1. Hero Section */}
      <section className="relative overflow-visible min-h-[500px] lg:min-h-[600px] flex items-stretch">
        
        {/* Left Side: Beige Background and Woman */}
        <div className="w-full lg:w-[45%] bg-nature-beige relative pt-12 lg:pt-24 px-4 lg:pl-20 flex flex-col justify-end">
          <div className="relative w-full max-w-[450px] mx-auto lg:mx-0 h-[400px] lg:h-[500px]">
            {/* Visual element representing the smiling Indian woman */}
            <div className="absolute bottom-0 left-0 w-full h-[90%] bg-[#e3d5c5] rounded-t-full border-4 border-white/50 shadow-lg flex flex-col items-center justify-end overflow-hidden z-20">
              <span className="font-serif italic text-nature-brown/50 pb-20">Smiling Woman Placeholder</span>
            </div>
            {/* Decorative dot */}
            <div className="absolute top-[30%] left-[45%] w-2 h-2 rounded-full bg-red-500 z-30 opacity-50"></div>
          </div>
        </div>

        {/* Right Side: Dark Green curved background */}
        <div className="hidden lg:block w-[60%] absolute top-0 right-0 h-full bg-[#0a5c43] rounded-bl-[150px] z-10 overflow-hidden">
           {/* Decorative white flowers top right */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-60"></div>
           <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/20 blur-3xl rounded-full"></div>
           <span className="absolute top-8 right-8 text-white/30 font-serif italic text-2xl">White Flowers</span>
        </div>

        {/* Content over Right Side */}
        <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-20 flex flex-col pt-16 lg:pt-24 px-4 lg:px-12 items-center lg:items-start text-center lg:text-left pointer-events-none">
           <h1 className="text-4xl md:text-5xl lg:text-[64px] font-serif font-normal text-nature-beige leading-[1.1] mb-6 drop-shadow-sm pointer-events-auto">
             Where the Earth <br/> Meets Wellness
           </h1>
           
           {/* Sub-headline pill */}
           <div className="bg-nature-beige text-[#1b4332] px-8 py-3 rounded-full inline-block font-medium tracking-wide shadow-md pointer-events-auto mb-12">
             ---- Nature's Gift by Women's Hands ----
           </div>

           {/* Products Array Graphic */}
           <div className="w-full flex justify-center lg:justify-start mt-auto relative pb-8 pointer-events-auto">
             <div className="relative w-full max-w-[500px] h-[250px] hidden md:block">
                {/* Rock placeholder */}
                <div className="absolute bottom-0 left-0 w-[110%] h-[120px] bg-[#4a4036] rounded-t-[40px] rounded-b-xl opacity-90 border-t-4 border-[#5d5145]"></div>
                
                {/* Product placeholders stacked */}
                <div className="absolute bottom-10 left-10 w-24 h-40 bg-white border border-gray-200 rounded-lg shadow-lg rotate-[-5deg] flex items-center justify-center p-2 text-center text-xs text-nature-darkGreen font-bold"><span className="truncate">Rose Petals</span></div>
                <div className="absolute bottom-16 left-28 w-28 h-44 bg-white border border-gray-200 rounded-lg shadow-xl flex items-center justify-center p-2 text-center text-xs text-nature-darkGreen font-bold z-10">Moringa Powder</div>
                <div className="absolute bottom-12 right-20 w-32 h-36 bg-white border-2 border-nature-gold rounded-xl shadow-2xl z-20 flex items-center justify-center p-2 text-center text-sm text-nature-darkGreen font-bold bg-gradient-to-b from-white to-[#fff9e6]">Multi Flora Honey</div>
                <div className="absolute bottom-4 right-8 w-24 h-20 bg-white border border-gray-200 rounded-md shadow-md z-30 flex items-center justify-center p-2 text-center text-[10px] text-nature-darkGreen font-bold">Panchgavya Soap</div>
             </div>
           </div>
        </div>
      </section>

      {/* Floating Bottom Bar */}
      <div className="relative z-30 -mt-8 flex justify-center w-full px-4 mb-16">
        <div className="bg-[#0a4d3c] text-white px-6 md:px-12 py-4 md:py-5 rounded-full shadow-2xl border-b-4 border-[#06382b] text-sm md:text-lg font-medium tracking-wide text-center max-w-[90%] lg:max-w-[1000px]">
          Discover 100% Pure, Organic & Chemical-Free Products for Your Mind, Body & Skin.
        </div>
      </div>

      {/* 2. Promotional Banner */}
      <section className="py-6 bg-nature-beige">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="bg-[#1b4e40] rounded-xl overflow-hidden shadow-xl border border-nature-green/30 relative flex flex-col md:flex-row items-center border-t-2 border-t-nature-green">
            
            {/* Left Side */}
            <div className="p-8 md:px-16 md:py-12 flex flex-col justify-center text-center md:text-left md:w-1/3">
              <span className="font-serif text-[44px] text-nature-beige font-normal mb-2 tracking-wide">Organic</span>
              <span className="text-white italic text-lg tracking-wide">
                Made with 100% fresh herbs
              </span>
            </div>

            {/* Center Collage Placeholder */}
            <div className="h-48 md:h-[250px] w-full md:w-1/3 py-2 flex items-center justify-center relative">
              <div className="w-full h-full max-w-[350px] grid grid-cols-2 grid-rows-2 gap-2 p-2">
                 <div className="bg-nature-green/40 rounded-tl-xl border border-white/20 flex items-center justify-center text-xs text-white/50 italic">Field Work</div>
                 <div className="bg-nature-brown/40 rounded-tr-xl border border-white/20 flex items-center justify-center text-xs text-white/50 italic">Harvest</div>
                 <div className="bg-nature-gold/20 rounded-bl-xl border border-white/20 flex items-center justify-center text-xs text-white/50 italic">Processing</div>
                 <div className="bg-nature-lightGreen/30 rounded-br-xl border border-white/20 flex items-center justify-center text-xs text-white/50 italic">Nature</div>
              </div>
            </div>

            {/* Right Side */}
            <div className="p-8 md:px-16 md:py-12 flex flex-col justify-center items-center md:items-end text-center md:text-right md:w-1/3">
              <h3 className="font-sans text-xl font-medium text-white mb-6 tracking-wide text-center">
                Get exclusive offers on<br/>your first purchase!
              </h3>
              <button className="bg-[#dfb175] text-[#1b4332] hover:bg-white hover:text-[#1b4332] px-8 py-3 font-bold shadow-md transition-all duration-300 tracking-wide text-sm">
                SHOP NOW
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <section className="py-20 bg-nature-beige">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Text Content */}
            <div className="w-full lg:w-[45%] text-left">
              <h2 className="text-4xl md:text-[42px] font-sans font-medium text-[#113c31] mb-8 leading-tight">
                Why Choose Nisarg Organic Farm?
              </h2>
              <p className="text-[#3b4b45] leading-[1.8] mb-10 text-[17px]">
                At Nisarg, we don't just grow food - we grow trust.<br/>
                Our farm products are rooted in purity,<br/>
                grown without chemicals, and processed with love.<br/>
                From A2 Gir cow ghee to herbal skincare essentials,<br/>
                every item is handpicked for your wellness.
              </p>
              <button className="bg-[#113c31] text-white px-8 py-3 text-sm font-medium hover:bg-[#0a251e] transition-colors shadow-sm">
                Know More
              </button>
            </div>

            {/* Image Content */}
            <div className="w-full lg:w-[50%] flex justify-center lg:justify-end relative">
               <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                 {/* Honey Jar composition graphic */}
                 <div className="absolute bottom-0 w-[80%] h-[80px] bg-[#9ca3af] rounded-full blur-2xl opacity-60"></div>
                 <div className="relative w-full h-full flex flex-col items-center z-10">
                   {/* Product */}
                   <div className="w-[60%] h-[75%] bg-gradient-to-b from-yellow-300 to-amber-500 rounded-t-3xl rounded-b-xl border-t-[20px] border-amber-600 border-x-8 border-yellow-400 shadow-[inset_0_-10px_30px_rgba(0,0,0,0.3)] flex items-center justify-center relative z-20">
                     <div className="bg-white w-[85%] h-[55%] rounded shadow p-4 text-center border border-gray-200">
                        <span className="text-[#113c31] font-bold text-xs">NISARG</span><br/>
                        <span className="text-xl font-serif text-blue-900 leading-none">MULTI FLORA</span><br/>
                        <span className="text-4xl font-serif text-amber-500 font-bold leading-none tracking-widest">HONEY</span>
                     </div>
                   </div>
                   {/* Rock */}
                   <div className="w-[90%] h-[15%] bg-[#78716c] rounded-lg -mt-4 z-10 border-t-4 border-[#57534e] flex items-center justify-center shadow-lg">
                      <div className="w-[70%] h-4 bg-amber-800 rounded absolute left-4 bottom-8 rotate-[-10deg] shadow-md z-30"></div> {/* Honey Dipper */}
                   </div>
                   {/* Decorative flowers */}
                   <div className="absolute right-0 bottom-10 text-6xl drop-shadow-lg z-30">🌻</div>
                   <div className="absolute left-0 bottom-20 text-5xl drop-shadow-lg z-0">🌿</div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Trusted Tales Section */}
      <section className="py-20 bg-nature-beige relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
          
          <div className="max-w-3xl mb-12">
            <h2 className="text-[34px] font-sans font-medium text-[#113c31] mb-2">
              Trusted Tales
            </h2>
            <p className="text-[#3b4b45] text-[15px]">
              Discover the goodness of nature, tell your story. Join the #Nisarg Family-tag us to be featured.
            </p>
          </div>

          <div className="flex overflow-x-auto pb-12 pt-4 snap-x snap-mandatory gap-6 hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {trustedTales.map((tale, index) => (
              <div key={index} className="snap-start flex-shrink-0 w-80 flex flex-col bg-white rounded-lg overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer">
                
                <div className="w-full h-[280px] bg-gray-100 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-nature-darkGreen/0 group-hover:bg-nature-darkGreen/10 transition-colors z-10"></div>
                  <div className="w-full h-full flex items-center justify-center text-gray-400 font-serif italic">{tale.title} Photo</div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-sans font-medium text-lg text-[#113c31] mb-2">{tale.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    {tale.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-50">
                    <button className="flex items-center text-[#113c31] hover:text-nature-green transition-all font-medium text-sm group">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add To Cart
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
