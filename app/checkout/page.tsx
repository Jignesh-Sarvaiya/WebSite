'use client';

import { useCart } from '@/hooks/useCart';
import { useOrders } from '@/hooks/useOrders';
import { ShoppingBag, CreditCard, Truck, ShieldCheck, Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, cartTotal, removeFromCart, addToCart, updateQuantity, clearCart, isLoaded } = useCart();
  const { updateOrderStatus } = useOrders(); // We use useOrders to 'create' a dummy order
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    paymentMode: 'UPI'
  });

  if (!isLoaded) return <div className="min-h-screen bg-nature-beige flex items-center justify-center font-serif text-nature-darkGreen">Loading Your Cart...</div>;

  if (cart.length === 0 && !isSuccess) {
    return (
      <div className="min-h-screen bg-nature-beige flex flex-col items-center justify-center p-4">
        <div className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-md">
          <ShoppingBag className="w-16 h-16 text-gray-200 mx-auto mb-6" />
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-500 mb-8">Add some organic goodness to your life starting today!</p>
          <Link href="/product" className="bg-nature-darkGreen text-white px-8 py-3 rounded-full font-bold hover:bg-nature-green transition-all shadow-lg">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3); // Simulating processing
    setTimeout(() => {
      // In a real app, logic to save order to localStorage or DB would go here
      clearCart();
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-nature-beige flex flex-col items-center justify-center p-4">
        <div className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-lg border border-nature-green/20">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-2">Order Successful!</h2>
          <p className="text-nature-green font-bold mb-4 uppercase tracking-widest text-xs">Thank you for choosing Gir Ayurveda</p>
          <p className="text-gray-500 mb-8">We've received your order and are preparing it for harvest. A confirmation has been sent to your email.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/" className="bg-nature-darkGreen text-white px-8 py-3 rounded-full font-bold hover:bg-nature-green transition-all">
               Back to Home
             </Link>
             <Link href="/product" className="bg-white border-2 border-nature-darkGreen text-nature-darkGreen px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-all">
               Shop More
             </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-nature-beige py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Left Side: Steps & Forms */}
        <div className="flex-grow">
          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-12 px-4 max-w-md mx-auto">
             <div className="flex flex-col items-center">
               <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= 1 ? 'bg-nature-darkGreen text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
               <span className="text-[10px] mt-1 font-bold text-nature-darkGreen">CART</span>
             </div>
             <div className={`flex-grow h-1 mx-2 rounded-full ${step >= 2 ? 'bg-nature-darkGreen' : 'bg-gray-200'}`}></div>
             <div className="flex flex-col items-center">
               <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= 2 ? 'bg-nature-darkGreen text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
               <span className="text-[10px] mt-1 font-bold text-gray-400">ADDRESS</span>
             </div>
             <div className={`flex-grow h-1 mx-2 rounded-full ${step >= 3 ? 'bg-nature-darkGreen' : 'bg-gray-200'}`}></div>
             <div className="flex flex-col items-center">
               <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= 3 ? 'bg-nature-darkGreen text-white' : 'bg-gray-200 text-gray-500'}`}>3</div>
               <span className="text-[10px] mt-1 font-bold text-gray-400">PAYMENT</span>
             </div>
          </div>

          {step === 1 && (
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-nature-cream">
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6 flex items-center">
                Review Your Cart
              </h2>
              <div className="space-y-6">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center space-x-4 border-b border-gray-50 pb-6">
                    <Link href={`/product/${item.id}`} className="w-20 h-20 bg-nature-beige rounded-xl flex items-center justify-center text-gray-300 hover:opacity-80 transition-opacity overflow-hidden">
                      <div className="text-[8px] font-bold text-nature-darkGreen text-center p-2 leading-tight uppercase opacity-40">{item.title}</div>
                    </Link>
                    <div className="flex-grow">
                      <Link href={`/product/${item.id}`}>
                        <h4 className="font-bold text-gray-900 font-serif hover:text-nature-green transition-colors">{item.title}</h4>
                      </Link>
                      <p className="text-xs text-nature-green font-bold">₹ {(item.basePrice || 0).toLocaleString()}</p>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                       <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-gray-400 hover:text-red-500"><Minus className="w-3.5 h-3.5" /></button>
                       <span className="text-sm font-bold text-gray-700 w-4 text-center">{item.quantity}</span>
                       <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-gray-400 hover:text-nature-darkGreen"><Plus className="w-3.5 h-3.5" /></button>
                    </div>
                    <div className="text-right">
                       <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500 p-2"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => setStep(2)}
                className="w-full mt-10 bg-nature-darkGreen text-white py-4 rounded-xl font-bold hover:bg-nature-green transition-all shadow-lg flex items-center justify-center uppercase tracking-widest text-sm"
              >
                Proceed to Shipping →
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-nature-cream animate-fadeIn">
              <button onClick={() => setStep(1)} className="flex items-center text-gray-400 text-xs font-bold mb-6 hover:text-nature-darkGreen">
                <ArrowLeft className="w-3 h-3 mr-1" /> BACK TO CART
              </button>
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6 font-serif underline decoration-nature-gold underline-offset-8">Shipping Details</h2>
              <form onSubmit={(e) => { e.preventDefault(); setStep(3); }} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input required placeholder="Full Name" className="p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-nature-gold text-sm" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  <input required placeholder="Email Address" type="email" className="p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-nature-gold text-sm" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                <input required placeholder="Phone Number" className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-nature-gold text-sm" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                <textarea required placeholder="Delivery Address" rows={3} className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-nature-gold text-sm resize-none" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
                <div className="grid grid-cols-2 gap-4">
                  <input required placeholder="City" className="p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-nature-gold text-sm" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} />
                  <input required placeholder="Pincode" className="p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-nature-gold text-sm" value={formData.pincode} onChange={(e) => setFormData({...formData, pincode: e.target.value})} />
                </div>
                <button type="submit" className="w-full mt-6 bg-nature-darkGreen text-white py-4 rounded-xl font-bold hover:bg-nature-green transition-all shadow-lg uppercase tracking-widest text-sm">
                   Continue to Payment
                </button>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-nature-cream animate-fadeIn">
              <button onClick={() => setStep(2)} className="flex items-center text-gray-400 text-xs font-bold mb-6 hover:text-nature-darkGreen">
                <ArrowLeft className="w-3 h-3 mr-1" /> BACK TO ADDRESS
              </button>
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-8 font-serif">Secure Payment</h2>
              <div className="space-y-4">
                <div className="flex border-2 border-nature-darkGreen bg-nature-beige/10 p-4 rounded-2xl items-center cursor-pointer">
                   <div className="w-10 h-10 bg-nature-darkGreen text-white rounded-full flex items-center justify-center mr-4">
                     <CreditCard className="w-5 h-5" />
                   </div>
                   <div className="flex-grow">
                     <p className="font-bold text-gray-800">UPI / QR Scan</p>
                     <p className="text-[10px] text-gray-400">Pay using GPay, PhonePe or Amazon Pay</p>
                   </div>
                   <div className="w-5 h-5 rounded-full border-4 border-nature-darkGreen flex items-center justify-center">
                     <div className="w-2 h-2 bg-nature-darkGreen rounded-full"></div>
                   </div>
                </div>
                <div className="flex border border-gray-100 bg-white p-4 rounded-2xl items-center cursor-pointer opacity-50">
                   <div className="w-10 h-10 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mr-4">
                     <Truck className="w-5 h-5" />
                   </div>
                   <div className="flex-grow">
                     <p className="font-bold text-gray-400 text-sm">Cash on Delivery (Disabled)</p>
                   </div>
                   <div className="w-5 h-5 rounded-full border border-gray-200"></div>
                </div>
              </div>

              <div className="mt-12 bg-gray-50 p-6 rounded-2xl text-center">
                 <p className="text-gray-500 text-xs mb-4">By placing your order, you agree to Gir Ayurveda's terms and conditions.</p>
                 <button 
                  onClick={handlePlaceOrder}
                  className="w-full bg-[#dfb175] text-[#1b4332] py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl uppercase tracking-widest text-sm"
                 >
                   Confirm Payment of ₹ {cartTotal.toLocaleString()}
                 </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Order Summary */}
        <div className="lg:w-80 flex-shrink-0">
          <div className="bg-[#1b4e40] text-white p-8 rounded-3xl sticky top-24 shadow-2xl">
            <h3 className="font-serif text-xl border-b border-white/10 pb-4 mb-6">Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-white/70 text-sm">
                <span>Subtotal</span>
                <span>₹ {cartTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-white/70 text-sm">
                <span>Shipping</span>
                <span className="text-nature-gold font-bold italic">FREE</span>
              </div>
              <div className="flex justify-between text-white/70 text-sm">
                <span>Tax (GST)</span>
                <span>₹ 0</span>
              </div>
              <div className="pt-4 border-t border-white/10 flex justify-between items-center text-lg font-bold">
                <span className="font-serif">Total</span>
                <span className="text-2xl text-nature-beige">₹ {cartTotal.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-2 text-[10px] text-white/40 uppercase tracking-widest font-bold">
               <ShieldCheck className="w-3 h-3" />
               <span>100% Safe Payments</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
