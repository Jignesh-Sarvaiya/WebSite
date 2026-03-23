'use client';

import { Save, Shield, Palette } from 'lucide-react';

export default function AdminSettings() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h2 className="text-3xl font-serif font-bold text-gray-800 mb-2">Store Settings</h2>
        <p className="text-gray-500">Manage your store configuration and preferences.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 divide-y divide-gray-100">
        <div className="p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-nature-beige rounded-2xl flex items-center justify-center text-nature-darkGreen">
              <Palette className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Visual Branding</h3>
              <p className="text-sm text-gray-500">Customize your store's theme and logos.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Primary Color</label>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-nature-darkGreen border border-gray-200"></div>
                <span className="text-sm font-mono text-gray-600">#1B4332</span>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Secondary Color</label>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-nature-gold border border-gray-200"></div>
                <span className="text-sm font-mono text-gray-600">#D4AF37</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-nature-beige rounded-2xl flex items-center justify-center text-nature-darkGreen">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Security</h3>
              <p className="text-sm text-gray-500">Manage admin access and security protocols.</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
            <div>
              <p className="font-bold text-sm text-gray-800">Admin Password</p>
              <p className="text-xs text-gray-500 mt-1">Change the password required for admin access.</p>
            </div>
            <button className="text-sm font-bold text-nature-green hover:underline uppercase tracking-widest">Change</button>
          </div>
        </div>

        <div className="p-8 bg-gray-50/50 flex justify-end">
          <button className="flex items-center gap-2 bg-nature-darkGreen text-white px-8 py-3 rounded-full font-bold hover:bg-nature-green transition-all shadow-lg">
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
