import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-nature-darkGreen text-nature-beige py-12 border-t border-nature-lightGreen/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-white">NISARG ORGANIC FARM</h3>
            <p className="text-sm text-nature-cream/80 max-w-sm">
              Discover 100% Pure, Organic & Chemical-Free Products for Your Mind, Body & Skin. Nature's Gift by Women's Hands.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-nature-cream/80">
              <li><Link href="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/product" className="hover:text-white transition-colors">Shop</Link></li>
              <li><Link href="/contact-us" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Connect</h4>
            <ul className="space-y-2 text-sm text-nature-cream/80">
              <li>Instagram: @nisargorganicfarm</li>
              <li>Email: info@nisargorganic.example</li>
              <li>Join the #Nisarg family!</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-nature-lightGreen/20 text-center text-sm text-nature-cream/60">
          &copy; {new Date().getFullYear()} Nisarg Organic Farm. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
