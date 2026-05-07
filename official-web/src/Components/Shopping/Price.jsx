import React from "react";
import { useCart } from "../Shopping/CartContext";

export default function Price({ currency, price }) {
   const { addToCart } = useCart();
  return (
    <>
      <div  className="bg-blue-400 p-2 w-auto rounded-xl text-white dark:text-white cursor-pointer">
        {currency}
      <span >{price}</span>
      </div>
    </>
  );
}


