'use client';

import { useOrders } from '@/hooks/useOrders';
import { ShoppingBag, Package, Truck, Calendar, MapPin, Search } from 'lucide-react';
import Link from 'next/link';

export default function MyOrdersPage() {
  const { orders, loading } = useOrders();

  // In a real app, we would filter by the current logged-in user.
  // For now, we show all mock orders.
  const myOrders = orders;

  return (
    <div className="min-h-screen bg-nature-beige py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8 border-b-2 border-nature-darkGreen/10 pb-6">
          <div>
            <h1 className="text-4xl font-serif font-bold text-gray-800">My Orders</h1>
            <p className="text-gray-500 font-medium">Tracking your organic journey.</p>
          </div>
          <div className="hidden md:flex bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm items-center">
            <Search className="w-4 h-4 text-gray-300 mr-2" />
            <input placeholder="Search orders..." className="outline-none text-sm w-32" />
          </div>
        </div>

        {loading && <div className="text-center py-20 text-nature-green animate-pulse font-bold tracking-widest">LOADING HISTORY...</div>}

        {!loading && myOrders.length === 0 && (
          <div className="bg-white p-16 rounded-3xl shadow-sm text-center border border-gray-100">
             <ShoppingBag className="w-12 h-12 text-gray-200 mx-auto mb-4" />
             <h3 className="text-xl font-serif text-gray-800 font-bold mb-2">No Previous Orders</h3>
             <p className="text-gray-400 text-sm mb-6">You haven't ordered anything yet. Taste the purity today!</p>
             <Link href="/product" className="text-nature-darkGreen font-bold border-b-2 border-nature-darkGreen pb-1 hover:text-nature-green transition-colors">
               Visit Store
             </Link>
          </div>
        )}

        {!loading && myOrders.length > 0 && (
          <div className="space-y-8">
            {myOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-nature-cream hover:shadow-md transition-shadow">
                <div className="bg-gray-50/80 p-6 flex flex-wrap justify-between items-center gap-4">
                  <div className="flex items-center space-x-6">
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Order ID</p>
                      <p className="font-bold text-gray-900">#{order.id}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Placed On</p>
                      <p className="text-sm font-medium text-gray-600">{order.date}</p>
                    </div>
                  </div>
                  <div>
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold border ${
                      order.status === 'Delivered' ? 'bg-green-50 text-green-700 border-green-100' :
                      order.status === 'Shipped' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                      'bg-orange-50 text-orange-700 border-orange-100'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-grow space-y-4">
                       <div className="flex items-start">
                         <div className="w-10 h-10 bg-nature-beige rounded-xl flex items-center justify-center text-nature-darkGreen mr-4 flex-shrink-0">
                           <Package className="w-5 h-5" />
                         </div>
                         <div>
                            <p className="text-sm font-bold text-gray-800 mb-1">Items In Package</p>
                            <p className="text-xs text-gray-500 italic max-w-sm">{order.items}</p>
                         </div>
                       </div>
                       <div className="flex items-center">
                         <div className="w-10 h-10 bg-nature-beige rounded-xl flex items-center justify-center text-nature-darkGreen mr-4 flex-shrink-0">
                            <Truck className="w-5 h-5" />
                         </div>
                         <div>
                            <p className="text-sm font-bold text-gray-800 mb-1">Shipping Details</p>
                            <p className="text-xs text-gray-500">Expedited Shipping - Tracking: {order.id.replace('RD','TR')}</p>
                         </div>
                       </div>
                    </div>

                    <div className="w-full md:w-32 flex flex-col items-center md:items-end justify-center">
                       <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Order Total</p>
                       <p className="text-2xl font-bold text-nature-darkGreen">{order.total}</p>
                       <button className="mt-4 text-[10px] font-bold text-nature-gold hover:text-nature-darkGreen transition-colors uppercase tracking-widest border-b border-nature-gold">
                         Support Request
                       </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 bg-[#1b4e40] p-10 rounded-[40px] text-center text-white relative overflow-hidden shadow-2xl">
           <div className="relative z-10">
             <h3 className="text-2xl font-serif mb-2 tracking-wide text-nature-beige">Need Assistance?</h3>
             <p className="text-white/70 text-sm mb-6 max-w-sm mx-auto">Our farmer experts are here to help with your orders or gardening queries.</p>
             <Link href="/contact-us" className="bg-[#dfb175] text-[#1b4332] px-8 py-3 rounded-full font-bold shadow-lg hover:bg-white hover:text-[#1b4332] transition-all inline-block uppercase tracking-widest text-xs">
               Contact Support
             </Link>
           </div>
           <div className="absolute top-0 right-[-20%] w-64 h-64 bg-white/5 blur-3xl rounded-full"></div>
           <div className="absolute bottom-0 left-[-20%] w-48 h-48 bg-white/5 blur-3xl rounded-full"></div>
        </div>

      </div>
    </div>
  );
}
