import React, { useContext } from "react";
import Price from "./Price";
import { CartContext } from "./CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
  <div className="w-full sm:w-72 rounded-lg border border-gray-200 dark:!border-gray-800 shadow-md overflow-hidden flex flex-col !bg-white dark:!bg-[#111827] transition-all">
    
    {/* Product Image Section */}
    <div className="relative w-full h-64 overflow-hidden border-b border-gray-100 dark:!border-gray-800">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>

    {/* Content Section - Forced Background */}
    <div className="p-4 flex flex-col flex-grow !bg-white dark:!bg-[#111827]">
      <h2 className="text-lg font-bold !text-gray-800 dark:!text-white uppercase mb-1">
        {product.name}
      </h2>
      
      <p className="text-[#00a63e] dark:text-[#00c84b] font-bold text-xl mb-3">
        ₹{product.price}
      </p>

      <div className="mt-auto space-y-3">
        {/* Quantity Controls */}
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center !bg-gray-100 dark:!bg-gray-800 dark:!text-white rounded border border-gray-300 dark:border-gray-700">-</button>
          <span className="w-8 text-center dark:text-white font-semibold">1</span>
          <button className="w-8 h-8 flex items-center justify-center !bg-gray-100 dark:!bg-gray-800 dark:!text-white rounded border border-gray-300 dark:border-gray-700">+</button>
        </div>

        {/* Action Button */}
        <button 
          onClick={() => addToCart(product)}
          className="w-full bg-[#00a63e] hover:bg-[#008c34] text-white font-bold py-2.5 rounded transition-colors text-sm uppercase"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  );
}