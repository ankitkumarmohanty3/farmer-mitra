// import React from "react";
// import Price from "./Price";
// import { useCart } from "../Shopping/CartContext";

// export default function ProductCard({ product }) {
//   return (
//     <div className="w-72 rounded-md mx-auto border border-gray-300 dark:border-gray-300 shadow-md overflow-hidden flex flex-col bg-white dark:bg-gray-800 hover:border-primary dark:hover:border-lighter transition">
//       <div className="relative w-full h-72 border-b border-gray-300 dark:border-gray-600">
//         <img
//           src={product.imageUrl}
//           onClick={() => addToCart(product)}
//           alt={product.name}
//           loading="lazy"
//           className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
//         />
//       </div>
//       <div className="relative h-48 p-4 flex flex-col font-primary">
//         <h2 className="text-xl font-semibold text-primary dark:text-light mb-2">
//           {product.name}
//         </h2>
//         <p className="text-base text-gray-600 mb-4 dark:text-light">{product.description}</p>
//         <div className="flex items-center justify-between mt-auto">
//           <div className="bg-lighter text-primary font-medium text-sm py-2 px-4 rounded-tl-md dark:bg-light">
//             <Price currency="$" price={product.price}  onClick={() => addToCart(product)}/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





import React, {
  memo,
  useCallback,
} from "react";

import Price from "./Price";
import { useCart } from "../Shopping/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  // Stable function reference
  const handleAddToCart = useCallback(() => {
    addToCart(product);
  }, [addToCart, product]);

  return (
    <div className="w-72 mx-auto rounded-xl overflow-hidden border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-md hover:border-primary transition-all duration-300 flex flex-col">

      {/* Product Image */}
      <div className="relative w-full h-72 overflow-hidden border-b border-gray-300 dark:border-gray-600">
        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          onClick={handleAddToCart}
          className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-1 p-4 font-primary">
        <h2 className="text-xl font-semibold text-primary dark:text-white mb-2 line-clamp-1">
          {product.name}
        </h2>

        <p className="text-base text-gray-600 dark:text-white mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto">
          <button
            onClick={handleAddToCart}
            className="bg-lighter dark:bg-light text-primary font-medium text-sm py-2 px-4 rounded-md hover:opacity-90 transition"
          >
            <Price
              currency="$"
              price={product.price}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

// Prevent unnecessary re-renders
export default memo(ProductCard);