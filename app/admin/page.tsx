import { TrendingUp, Package, ShoppingCart, AlertCircle } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { title: 'Total Sales', value: '₹ 1,24,500', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-100' },
    { title: 'Active Orders', value: '42', icon: ShoppingCart, color: 'text-blue-600', bg: 'bg-blue-100' },
    { title: 'Total Products', value: '18', icon: Package, color: 'text-purple-600', bg: 'bg-purple-100' },
    { title: 'Low Stock Items', value: '3', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-100' },
  ];

  const recentOrders = [
    { id: '#ORD-0012', customer: 'Priya Sharma', date: '2023-10-24', status: 'Processing', total: '₹ 850' },
    { id: '#ORD-0011', customer: 'Rahul Desai', date: '2023-10-23', status: 'Shipped', total: '₹ 1,200' },
    { id: '#ORD-0010', customer: 'Anita Patel', date: '2023-10-23', status: 'Delivered', total: '₹ 450' },
    { id: '#ORD-0009', customer: 'Suresh Kumar', date: '2023-10-22', status: 'Delivered', total: '₹ 2,100' },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div>
        <h2 className="text-3xl font-serif font-bold text-gray-800 mb-2">Dashboard Overview</h2>
        <p className="text-gray-500">Welcome back to the Gir Ayurveda Organics admin panel.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={'p-3 rounded-lg ' + stat.bg}>
                  <Icon className={'w-6 h-6 ' + stat.color} />
                </div>
                <span className="text-sm font-medium text-green-500 bg-green-50 px-2 py-1 rounded-full">+4.5%</span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Activity placeholder layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders Table */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-lg font-bold text-gray-800 font-serif">Recent Orders</h3>
            <button className="text-sm text-nature-green hover:underline font-medium">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-600 text-sm">
                  <th className="px-6 py-4 font-medium">Order ID</th>
                  <th className="px-6 py-4 font-medium">Customer</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentOrders.map((order, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{order.customer}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{order.date}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium 
                        ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 
                           order.status === 'Processing' ? 'bg-yellow-100 text-yellow-700' : 
                           'bg-blue-100 text-blue-700'}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900 text-right">{order.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions / Notifications */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800 font-serif mb-6">Inventory Alerts</h3>
          <div className="space-y-4">
             <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
               <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
               <div>
                 <p className="text-sm font-bold text-gray-800">Low Stock: Rose Dry Petals</p>
                 <p className="text-xs text-gray-500 mt-1">Only 5 units remaining in inventory.</p>
               </div>
             </div>
             <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
               <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
               <div>
                 <p className="text-sm font-bold text-gray-800">Low Stock: A2 Gir Cow Ghee</p>
                 <p className="text-xs text-gray-500 mt-1">Only 2 units remaining in inventory.</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
