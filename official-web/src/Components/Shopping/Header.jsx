import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../Shopping/CartContext";
const Header = () => {
const { cart } = useCart();
  return (
    <div className='dark:bg-gray-900 '>

         


         <header className="w-full border-b bg-white dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / Brand */}
        <h1 className="text-2xl font-oswald font-bold tracking-wide">
          Farm<span className="text-green-600">Shop</span>
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className="hover:text-green-600 transition">
            Home
          </Link>

          

          <Link to="/about" className="hover:text-green-600 transition">
            About
          </Link>
            <a href="/cart" className="text-green-500 py-2">
                <FontAwesomeIcon icon={faShoppingBasket}  className="dark:text-light " />
                ({cart.length})
              </a>

        </nav>

       

   {/* Shopping Section */}

         


        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <button className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition">
            Sell Crops
          </button>
        </div>

      </div>
    </header>
      
    </div>
  )
}

export default Header
