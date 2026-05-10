import React, { useContext } from "react"; // ADDED useContext HERE
import { CartContext } from "./CartContext";
import Header from "./Header"; 

// Accept theme and setTheme as props from App.jsx
export default function Checkout({ theme, setTheme }) {
  const { cartItems } = useContext(CartContext);

  const total = cartItems ? cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  ) : 0;

  return (
    <div className="min-h-screen bg-white dark:bg-[#111827] transition-colors">
      {/* Pass theme props to the header */}
      <Header theme={theme} setTheme={setTheme} />

      <div className="px-4 sm:px-12 lg:px-24 xl:px-40 py-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Checkout
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Delivery Details Section */}
          <div className="bg-gray-50 dark:bg-gray-800/40 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
              Delivery Details
            </h3>
            
            <div className="flex flex-col gap-5">
              <input 
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-[#00a63e] outline-none" 
                placeholder="Full Name" 
              />
              <input 
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-[#00a63e] outline-none" 
                placeholder="Address" 
              />
              <input 
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-[#00a63e] outline-none" 
                placeholder="Phone" 
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mt-10 mb-4">
              Payment Method
            </h3>
            <select className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 dark:text-white outline-none cursor-pointer">
              <option>Cash On Delivery</option>
              <option>UPI</option>
              <option>Card</option>
            </select>

            <button className="w-full mt-10 bg-[#00a63e] hover:bg-[#008c34] text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-95">
              Place Order
            </button>
          </div>

          {/* Order Summary Section */}
          <div className="p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 h-fit">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
              Order Summary
            </h3>

            <div className="space-y-4 mb-8">
              {!cartItems || cartItems.length === 0 ? (
                <p className="text-gray-500 italic">No items in cart.</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-gray-600 dark:text-gray-300">
                    <span className="font-medium text-gray-800 dark:text-white">
                      {item.name} <span className="text-xs font-bold text-[#00a63e]">x{item.quantity}</span>
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-gray-100">₹{item.price * item.quantity}</span>
                  </div>
                ))
              )}
            </div>

            <div className="flex justify-between items-center border-t border-gray-100 dark:border-gray-800 pt-6">
              <span className="text-lg font-bold text-gray-800 dark:text-white">Total Payment</span>
              <span className="text-2xl font-black text-[#00a63e]">₹{total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}