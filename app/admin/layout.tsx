import Link from 'next/link';
import { LayoutDashboard, Package, ShoppingBag, Users, Settings, LogOut } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Products', href: '/admin/products', icon: Package },
    { name: 'Orders', href: '/admin/orders', icon: ShoppingBag },
    { name: 'Customers', href: '/admin/customers', icon: Users },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-nature-darkGreen text-white flex flex-col md:h-screen sticky top-0 md:sticky z-40 shadow-xl">
        <div className="p-6 border-b border-white/10 flex items-center justify-between md:justify-center">
          <Link href="/" className="font-serif text-xl font-bold tracking-wider text-nature-beige">
            Nisarg Admin
          </Link>
          <Link href="/" className="md:hidden text-xs bg-white/20 px-3 py-1 rounded hover:bg-white/30 transition-colors">
            View Store
          </Link>
        </div>
        
        <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg hover:bg-nature-green transition-colors text-nature-cream hover:text-white"
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            )
          })}
        </nav>
        
        <div className="p-4 border-t border-white/10 hidden md:block">
          <Link 
            href="/"
            className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg hover:bg-red-500/80 transition-colors text-nature-cream hover:text-white"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Exit to Store</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col min-h-screen md:h-screen md:overflow-y-auto bg-gray-50/50">
        <header className="bg-white shadow-sm border-b px-8 py-4 flex justify-between items-center sticky top-0 z-30">
          <h1 className="text-xl font-bold text-gray-800 font-serif">Hello, Admin</h1>
          <div className="flex items-center space-x-4">
             <div className="w-10 h-10 rounded-full bg-nature-darkGreen flex items-center justify-center text-white font-bold shadow-md">
               A
             </div>
          </div>
        </header>
        <div className="p-8 flex-grow">
          {children}
        </div>
      </main>
    </div>
  );
}
