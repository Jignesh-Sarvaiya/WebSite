'use client';

import { useOrders, Order } from '@/hooks/useOrders';
import { ShoppingBag, CheckCircle, Truck, Clock, XCircle, MoreVertical, Trash2 } from 'lucide-react';
import { useState } from 'react';

export default function OrdersPage() {
  const { orders, loading, updateOrderStatus, deleteOrder } = useOrders();
  const [filter, setFilter] = useState<Order['status'] | 'All'>('All');

  const filteredOrders = filter === 'All' 
    ? orders 
    : orders.filter(o => o.status === filter);

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Shipped': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Delivered': return 'bg-green-100 text-green-700 border-green-200';
      case 'Cancelled': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'Pending': return <Clock className="w-3 h-3 mr-1" />;
      case 'Shipped': return <Truck className="w-3 h-3 mr-1" />;
      case 'Delivered': return <CheckCircle className="w-3 h-3 mr-1" />;
      case 'Cancelled': return <XCircle className="w-3 h-3 mr-1" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-serif font-bold text-gray-800">Orders</h2>
          <p className="text-gray-500 text-sm">Track and manage customer purchases.</p>
        </div>
        <div className="flex bg-white rounded-lg p-1 shadow-sm border border-gray-100">
          {['All', 'Pending', 'Shipped', 'Delivered'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${
                filter === f 
                  ? 'bg-nature-darkGreen text-white shadow-sm' 
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {loading && <div className="text-center py-10 text-nature-green animate-pulse font-medium">Updating Orders...</div>}

      {!loading && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Items</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-gray-900">{order.id}</td>
                    <td className="px-6 py-4">
                      <div className="font-medium">{order.customer}</div>
                      <div className="text-xs text-gray-400">{order.email}</div>
                    </td>
                    <td className="px-6 py-4 text-gray-600 truncate max-w-[200px]">{order.items}</td>
                    <td className="px-6 py-4 text-gray-500">{order.date}</td>
                    <td className="px-6 py-4 font-bold text-gray-900">{order.total}</td>
                    <td className="px-6 py-4">
                      <div className="relative group">
                        <button className={`px-2.5 py-1 rounded-full text-[10px] font-bold border flex items-center ${getStatusColor(order.status)} hover:shadow-sm transition-shadow`}>
                          {getStatusIcon(order.status)}
                          {order.status}
                        </button>
                        
                        {/* Status Change Dropdown (Hover) */}
                        <div className="absolute left-0 mt-1 w-32 bg-white rounded-lg shadow-xl border border-gray-100 hidden group-hover:block z-20">
                          {(['Pending', 'Shipped', 'Delivered', 'Cancelled'] as Order['status'][]).map(s => (
                            <button
                              key={s}
                              onClick={() => updateOrderStatus(order.id, s)}
                              className="w-full text-left px-4 py-2 text-[10px] font-bold text-gray-600 hover:bg-gray-50 hover:text-nature-darkGreen first:rounded-t-lg last:rounded-b-lg"
                            >
                              Move to {s}
                            </button>
                          ))}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => deleteOrder(order.id)}
                        className="text-gray-300 hover:text-red-500 transition-colors p-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredOrders.length === 0 && (
            <div className="py-20 text-center flex flex-col items-center">
              <ShoppingBag className="w-12 h-12 text-gray-100 mb-4" />
              <p className="text-gray-400 text-sm">No {filter !== 'All' ? filter.toLowerCase() : ''} orders found.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
