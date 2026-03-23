'use client';

import { useState } from 'react';
import { useProducts, Product } from '@/hooks/useProducts';
import { Plus, Edit2, Trash2, X, Image as ImageIcon } from 'lucide-react';

export default function ProductsPage() {
  const { products, loading, addProduct, deleteProduct } = useProducts();
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priceRange: '',
    category: '',
    stockStatus: 'In Stock' as const,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addProduct({
      ...formData,
      image: '/placeholder.jpg' // Mock image for now
    });
    setIsFormOpen(false);
    setFormData({ title: '', description: '', priceRange: '', category: '', stockStatus: 'In Stock' });
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-serif font-bold text-gray-800">Products</h2>
          <p className="text-gray-500 text-sm">Manage your store inventory and product catalog.</p>
        </div>
        <button 
          onClick={() => setIsFormOpen(true)}
          className="bg-nature-darkGreen text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-nature-green transition-colors flex items-center shadow-sm"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </button>
      </div>

      {loading && <div className="text-center py-4 text-nature-green font-medium animate-pulse">Updating...</div>}

      {/* Products Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                 <th className="px-6 py-4">Product</th>
                 <th className="px-6 py-4">Category</th>
                 <th className="px-6 py-4">Price Range</th>
                 <th className="px-6 py-4">Stock Status</th>
                 <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
                        <ImageIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 font-serif">{product.title}</div>
                        <div className="text-xs text-gray-500 truncate w-48">{product.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{product.category}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{product.priceRange}</td>
                  <td className="px-6 py-4">
                     <span className={`px-3 py-1 rounded-full text-xs font-medium 
                        ${product.stockStatus === 'In Stock' ? 'bg-green-100 text-green-700' : 
                           product.stockStatus === 'Low Stock' ? 'bg-yellow-100 text-yellow-700' : 
                           'bg-red-100 text-red-700'}`}>
                       {product.stockStatus}
                     </span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button className="text-gray-400 hover:text-blue-600 transition-colors bg-white p-1 rounded border shadow-sm">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => deleteProduct(product.id)}
                      className="text-gray-400 hover:text-red-600 transition-colors bg-white p-1 rounded border shadow-sm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                    No products found. Add your first product!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Product Slide-over / Modal (Simplified as inline absolute for now) */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-gray-900/50 backdrop-blur-sm transition-opacity">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slideInRight">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="text-lg font-bold font-serif text-gray-800">Add New Product</h3>
              <button 
                onClick={() => setIsFormOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-grow">
              <form id="product-form" onSubmit={handleSubmit} className="space-y-5">
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Title</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                    className="w-full p-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-green focus:border-nature-green outline-none text-sm transition-shadow" 
                    placeholder="e.g., A2 Gir Cow Ghee"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea 
                    required 
                    rows={3} 
                    value={formData.description}
                    onChange={e => setFormData({...formData, description: e.target.value})}
                    className="w-full p-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-green focus:border-nature-green outline-none text-sm transition-shadow resize-none" 
                    placeholder="Brief description of the product..."
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.priceRange}
                      onChange={e => setFormData({...formData, priceRange: e.target.value})}
                      className="w-full p-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-green focus:border-nature-green outline-none text-sm transition-shadow" 
                      placeholder="e.g., ₹ 500 - 800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select 
                      required 
                      value={formData.category}
                      onChange={e => setFormData({...formData, category: e.target.value})}
                      className="w-full p-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-green focus:border-nature-green outline-none text-sm transition-shadow"
                    >
                      <option value="">Select...</option>
                      <option value="Honey">Honey</option>
                      <option value="Powders">Powders</option>
                      <option value="Skincare">Skincare</option>
                      <option value="Flowers">Flowers</option>
                      <option value="Ghee">Ghee</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Stock Status</label>
                  <select 
                      value={formData.stockStatus}
                      onChange={e => setFormData({...formData, stockStatus: e.target.value as any})}
                      className="w-full p-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-green focus:border-nature-green outline-none text-sm transition-shadow"
                    >
                      <option value="In Stock">In Stock</option>
                      <option value="Low Stock">Low Stock</option>
                      <option value="Out of Stock">Out of Stock</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="space-y-1 text-center">
                      <ImageIcon className="mx-auto h-12 w-12 text-gray-400 group-hover:text-nature-green transition-colors" />
                      <div className="flex text-sm text-gray-600">
                        <span className="relative cursor-pointer bg-white rounded-md font-medium text-nature-green hover:text-nature-darkGreen focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-nature-green">
                          Upload a file
                        </span>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, WEBP up to 5MB</p>
                    </div>
                  </div>
                </div>
                
              </form>
            </div>
            
            <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end space-x-3">
              <button 
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nature-green transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit"
                form="product-form"
                disabled={loading}
                className="px-6 py-2 text-sm font-medium text-white bg-nature-darkGreen rounded-lg hover:bg-nature-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nature-green transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? 'Saving...' : 'Save Product'}
              </button>
            </div>
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            @keyframes slideInRight {
              from { transform: translateX(100%); }
              to { transform: translateX(0); }
            }
            .animate-slideInRight {
              animation: slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }
          `}} />
        </div>
      )}
    </div>
  );
}
