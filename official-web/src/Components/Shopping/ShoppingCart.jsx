import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { CartContext } from "./CartContext";

export default function ShoppingCart() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();
  
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Header />

      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl text-center font-bold mb-6 text-gray-800 dark:text-white">
          Your Cart
        </h2>

        {cartItems.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-600 dark:text-gray-400">No items added yet.</p>
            <button 
              onClick={() => navigate("/items")}
              className="mt-4 bg-[#00a63e] hover:bg-[#008c34] cursor-pointer text-white font-bold py-2 px-4 rounded-lg transition-all"
            >
              Back to Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border border-gray-200 dark:border-gray-800 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 shadow-sm"
              >
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 dark:text-gray-100">{item.name}</h3>
                  <p className="text-[#00a63e] dark:text-[#00c84b] font-semibold">₹ {item.price}</p>
                </div>

                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, Number(e.target.value))
                    }
                    className="w-16 border border-gray-300 dark:border-gray-600 rounded px-2 py-1 bg-white dark:bg-gray-800 dark:text-white outline-none focus:border-[#00a63e]"
                  />

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 font-medium text-sm transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-8 p-6 border-t border-gray-200 dark:border-gray-800 flex flex-col items-end">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Total: <span className="text-[#00a63e] dark:text-[#00c84b]">₹ {total}</span>
              </h3>

              <button
                onClick={() => navigate("/checkout")}
                className="mt-6 w-full sm:w-64 bg-[#00a63e] hover:bg-[#008c34] text-white font-bold py-3 rounded-lg shadow-md transition-all uppercase tracking-wide"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}