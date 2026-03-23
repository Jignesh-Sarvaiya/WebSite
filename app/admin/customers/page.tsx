'use client';

import { useUsers } from '@/hooks/useUsers';
import { Users, Mail, Calendar, Hash, IndianRupee, Trash2 } from 'lucide-react';

export default function UsersPage() {
  const { users, loading, deleteUser } = useUsers();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-serif font-bold text-gray-800">Customers</h2>
        <p className="text-gray-500 text-sm">View and manage your registered customer base.</p>
      </div>

      {loading && <div className="text-center py-10 text-nature-green animate-pulse font-medium">Loading User Data...</div>}

      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div key={user.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all relative group">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${user.role === 'Admin' ? 'bg-nature-darkGreen' : 'bg-[#dfb175]'}`}>
                  {user.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{user.name}</h3>
                  <div className="flex items-center text-xs text-gray-400">
                    <span className={`mr-2 px-1.5 py-0.5 rounded ${user.role === 'Admin' ? 'bg-nature-green/10 text-nature-darkGreen' : 'bg-gray-100 text-gray-500'}`}>
                      {user.role}
                    </span>
                    {user.id}
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-50">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-3 text-gray-400" />
                  {user.email}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-3 text-gray-400" />
                  Joined {user.joinDate}
                </div>
                <div className="flex items-center justify-between text-sm pt-2">
                  <div className="flex items-center text-gray-500">
                    <Hash className="w-4 h-4 mr-1" />
                    {user.orders} Orders
                  </div>
                  <div className="flex items-center font-bold text-nature-darkGreen">
                    <IndianRupee className="w-3.5 h-3.5 mr-1" />
                    {user.totalSpent}
                  </div>
                </div>
              </div>

              {user.role !== 'Admin' && (
                <button 
                  onClick={() => deleteUser(user.id)}
                  className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
