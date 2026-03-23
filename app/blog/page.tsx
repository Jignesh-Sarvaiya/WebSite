import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    {
      title: 'The Hidden Benefits of Moringa Powder for Your Immunity',
      category: 'Wellness',
      date: 'October 12, 2026',
      readTime: '5 min read',
      excerpt: 'Discover why Moringa is known as the miracle tree and how integrating it into your daily routine can dramatically boost your immune system.',
      featured: true
    },
    {
      title: 'Why A2 Gir Cow Ghee is the Ultimate Ayurvedic Superfood',
      category: 'Nutrition',
      date: 'September 28, 2026',
      readTime: '4 min read',
      excerpt: 'Not all ghee is created equal. Learn the ancient science behind A2 Gir cow ghee and why it belongs in every Indian kitchen.',
    },
    {
      title: 'A Guide to Chemical-Free Skincare with Panchagavya',
      category: 'Skincare',
      date: 'September 15, 2026',
      readTime: '6 min read',
      excerpt: 'Stop putting toxins on your skin. Here is how ancient Panchagavya wisdom can heal and rejuvenate your face naturally.',
    },
    {
      title: 'How We Harvest Multi Flora Honey Without Harming Bees',
      category: 'Sustainability',
      date: 'August 30, 2026',
      readTime: '3 min read',
      excerpt: 'Step into the Nisarg farms and see our ethical, bee-friendly honey harvesting process that ensures purity and sustainability.',
    }
  ];

  return (
    <div className="min-h-screen bg-nature-beige pb-24">
      
      {/* Blog Hero text */}
      <div className="bg-[#0a4d3c] text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-nature-beige mb-4">The Nisarg Journal</h1>
        <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
          Stories, remedies, and ancient wisdom to help you live a healthier, chemical-free life in harmony with nature.
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-[1200px] mt-12">
        {/* Featured Post */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl mb-16 border border-nature-cream flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-[300px] md:h-auto bg-[#1b4332] relative flex items-center justify-center p-8 text-center text-nature-beige/40 font-serif italic text-2xl">
            Featured Image Placeholder
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center space-x-4 mb-4 text-xs font-bold uppercase tracking-widest text-nature-darkGreen hidden md:flex">
              <span className="bg-nature-cream px-3 py-1 rounded-full">{posts[0].category}</span>
              <span className="text-gray-400">{posts[0].date}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1b4332] mb-6 leading-tight hover:text-nature-lightGreen transition-colors cursor-pointer">
              {posts[0].title}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              {posts[0].excerpt}
            </p>
            <Link href="#" className="font-bold text-[#b88c51] uppercase tracking-wide flex items-center hover:text-[#0a4d3c] transition-colors w-max">
              Read Article &rarr;
            </Link>
          </div>
        </div>

        {/* Post Grid */}
        <h3 className="text-2xl font-serif text-[#1b4332] mb-8 border-b border-nature-cream pb-4">Latest Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden border border-nature-cream shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="h-48 bg-nature-beige border-b border-nature-cream relative overflow-hidden flex items-center justify-center text-nature-brown/30 italic font-serif">
                Article Image
                <div className="absolute inset-0 bg-[#0a4d3c] opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#b88c51] uppercase tracking-wider">{post.category}</span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <h4 className="text-xl font-serif text-[#1b4332] mb-3 group-hover:text-nature-lightGreen transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link href="#" className="mt-auto text-sm font-bold text-[#0a4d3c] hover:text-[#b88c51] transition-colors border-t border-gray-100 pt-4 flex items-center">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
