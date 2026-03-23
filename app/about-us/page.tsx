import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <div className="bg-nature-beige min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-[#1b4332] text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -z-0"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-bold tracking-widest uppercase text-[#dfb175] text-sm mb-4 block">Our Story</span>
          <h1 className="text-5xl md:text-6xl font-serif text-nature-beige mb-6 leading-tight">
            Rooted in Purity <br className="hidden md:block"/> Grown with Love
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-sans leading-relaxed">
            Nisarg Organic Farm was born from a simple belief: the earth provides everything we need to heal, nourish, and thrive.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 relative h-[500px]">
             {/* Abstract Farm Image Composition */}
             <div className="absolute inset-0 bg-[#e3d5c5] rounded-tl-[100px] rounded-br-[100px] shadow-lg border-2 border-white flex flex-col items-center justify-center p-8 overflow-hidden">
               <div className="w-full h-full bg-[#0a5c43]/10 absolute inset-0"></div>
               <span className="font-serif italic text-3xl text-[#1b4332]/40 z-10 text-center">Nisarg Farm Fields</span>
               <div className="w-48 h-48 rounded-full border border-nature-brown/20 absolute -top-10 -right-10 z-0"></div>
               <div className="w-64 h-64 rounded-full border border-nature-brown/20 absolute -bottom-20 -left-20 z-0"></div>
             </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-serif text-[#1b4332] mb-6">Our Mission</h2>
            <p className="text-[#4a4036] text-lg mb-8 leading-[1.8]">
              To deliver 100% pure, chemical-free, and ethically sourced organic products to every household, while nurturing the land and empowering local farming communities, especially women.
            </p>
            
            <h2 className="text-4xl font-serif text-[#1b4332] mb-6 mt-12">Why We Are Different</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-[#1b4332] p-1 rounded-full text-white mt-1 mr-4">✓</div>
                <div>
                  <h4 className="font-bold text-[#1b4332] text-lg">Regenerative Farming</h4>
                  <p className="text-gray-600 text-sm">We give back more to the soil than we take. No synthetic fertilizers or harmful pesticides.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-[#1b4332] p-1 rounded-full text-white mt-1 mr-4">✓</div>
                <div>
                  <h4 className="font-bold text-[#1b4332] text-lg">Women Empowered</h4>
                  <p className="text-gray-600 text-sm">Our products are hand-processed by skilled women artisans from our local rural communities.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-[#1b4332] p-1 rounded-full text-white mt-1 mr-4">✓</div>
                <div>
                  <h4 className="font-bold text-[#1b4332] text-lg">Ayurvedic Principles</h4>
                  <p className="text-gray-600 text-sm">Every recipe and extraction method follows ancient Indian science to preserve maximum nutrition.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trust Markers */}
      <section className="bg-white border-y border-nature-cream py-16">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-nature-beige rounded-full flex items-center justify-center text-[#1b4332] text-3xl mb-4 font-serif">100</div>
            <h4 className="font-bold text-[#1b4332]">100% Organic</h4>
            <p className="text-xs text-gray-500 mt-2">Certified Fields</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-nature-beige rounded-full flex items-center justify-center text-[#1b4332] text-xl font-bold mb-4 font-serif">A2</div>
            <h4 className="font-bold text-[#1b4332]">Pure Gir Cow</h4>
            <p className="text-xs text-gray-500 mt-2">Ethical Milk Sourcing</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-nature-beige rounded-full flex items-center justify-center text-[#1b4332] text-2xl mb-4 font-serif">0%</div>
            <h4 className="font-bold text-[#1b4332]">Zero Chemicals</h4>
            <p className="text-xs text-gray-500 mt-2">No Toxins Ever</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-nature-beige rounded-full flex items-center justify-center text-[#1b4332] text-xl font-bold mb-4 font-serif">♡</div>
            <h4 className="font-bold text-[#1b4332]">Made With Love</h4>
            <p className="text-xs text-gray-500 mt-2">Handmade by Women</p>
          </div>
        </div>
      </section>
    </div>
  );
}
