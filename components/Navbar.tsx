import Link from 'next/link';
import { Search, ShoppingCart, Menu, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-nature-beige sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-12 h-12 bg-nature-green text-white rounded-full flex items-center justify-center font-serif flex-col leading-none border-2 border-nature-darkGreen">
              <span>N</span>
              <span className="text-[0.5rem]">O F</span>
            </div>
            <Link href="/" className="font-sans flex flex-col font-bold text-nature-darkGreen tracking-wide uppercase">
              <span className="text-xl leading-none">NISARG</span>
              <span className="text-[0.65rem] tracking-widest text-nature-green mt-1">ORGANIC FARM</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 items-center">
            {['Home', 'Product', 'Blog', 'Categories', 'About us', 'Contact us'].map((item) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className={`text-nature-darkGreen hover:text-nature-lightGreen font-medium text-[15px] transition-colors relative pb-1 ${item === 'Home' ? 'font-bold' : ''}`}
              >
                {item}
                {item === 'Home' && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-nature-darkGreen rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-6 text-nature-darkGreen">
            <button aria-label="User Profile" className="hover:text-nature-lightGreen transition-colors hidden md:block">
              <User className="w-[22px] h-[22px]" />
            </button>
            <button aria-label="Shopping Cart" className="hover:text-nature-lightGreen transition-colors relative">
              <ShoppingCart className="w-[22px] h-[22px]" />
              <span className="absolute -top-2 -right-3 bg-nature-darkGreen text-white text-[10px] rounded-full h-[18px] w-[18px] flex items-center justify-center font-bold">
                0
              </span>
            </button>
            <button aria-label="Menu" className="md:hidden hover:text-nature-lightGreen transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
