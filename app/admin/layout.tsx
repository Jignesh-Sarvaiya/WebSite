'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { User, LogOut, LayoutDashboard, Package, ShoppingCart, Users, Settings } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isLoginPage = pathname === '/admin/login';
    const isAuth = localStorage.getItem('gir_admin_auth') === 'true';

    if (!isAuth && !isLoginPage) {
      router.push('/admin/login');
    } else {
      setAuthorized(true);
    }
    setLoading(false);
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem('gir_admin_auth');
    router.push('/admin/login');
  };

  if (loading) return null;
  if (!authorized && pathname !== '/admin/login') return null;

  // If it's the login page, don't show the sidebar/layout wrapper
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const navItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Products', href: '/admin/products', icon: Package },
    { name: 'Orders', href: '/admin/orders', icon: ShoppingCart },
    { name: 'Customers', href: '/admin/customers', icon: Users },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-nature-beige">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-nature-darkGreen text-white hidden lg:flex flex-col sticky top-0 h-screen shadow-2xl">
        <div className="p-8 border-b border-white/10">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-nature-gold rounded-full flex items-center justify-center text-nature-darkGreen font-bold">G</div>
            <div>
              <h1 className="text-lg font-serif font-bold tracking-tight leading-none">Gir Ayurveda</h1>
              <p className="text-[9px] text-nature-gold font-sans uppercase tracking-[2px] mt-1">Admin Panel</p>
            </div>
          </Link>
        </div>
        
        <nav className="mt-8 px-4 flex-grow space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`flex items-center space-x-3 p-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-nature-green text-white shadow-lg shadow-black/10'
                    : 'text-white/60 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="flex items-center space-x-3 w-full p-3 text-white/60 hover:text-white transition-colors hover:bg-white/5 rounded-xl"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-nature-cream flex items-center justify-between px-8 sticky top-0 z-40">
           <h2 className="text-sm font-bold text-nature-darkGreen uppercase tracking-widest hidden md:block">
             {navItems.find(item => pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href)))?.name || 'ADMIN'}
           </h2>
           <div className="flex items-center space-x-6">
              <Link href="/" className="text-xs font-bold text-nature-green hover:underline">View Storefront</Link>
              <div className="flex items-center space-x-3 bg-nature-beige p-2 rounded-full pl-4 pr-3 border border-nature-cream">
                <span className="text-xs font-bold text-nature-darkGreen">Admin User</span>
                <div className="w-8 h-8 bg-nature-gold rounded-full flex items-center justify-center text-white text-xs font-bold">AU</div>
              </div>
           </div>
        </header>

        <main className="p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
