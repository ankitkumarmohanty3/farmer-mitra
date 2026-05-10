import assets from "../assets/assets";
import React, { useState, useContext } from "react";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { CartContext } from "./Shopping/CartContext";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems } = useContext(CartContext);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const goToSection = (id) => {
    // FIX: If id is empty (Home button clicked), navigate to "/" and scroll to top
    if (!id) {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } 
    // If on a different page (like /items), go home first, then scroll to section
    else if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } 
    // If already on home, just scroll to the section
    else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setSidebarOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex justify-between items-center px-4 
                   sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20
                   backdrop-blur-xl font-medium bg-white/50 dark:bg-[#111827]/80
         "
    >
      {/* FreshMitra Logo - Click to go home */}
      <img
        src={assets.bg_removedlogo}
        alt="logo"
        className="w-32 sm:w-40 rounded-xl cursor-pointer"
        onClick={() => goToSection("")} 
      />

      <div
        className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen
                      max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white
                      max-sm:pt-20 flex sm:items-center gap-5 transition-all
                      `}
      >
        <img src={assets.close_icon} alt="" className="w-5 absolute right-4 top-4 sm:hidden" onClick={() => setSidebarOpen(false)} />

        {/* This button now triggers the fixed Home navigation */}
        <button onClick={() => goToSection("")} className="sm:hover:border-b">Home</button>
        <button onClick={() => goToSection("services")} className="sm:hover:border-b">Services</button>
        <button onClick={() => goToSection("our-work")} className="sm:hover:border-b">Our Work</button>
        <button onClick={() => goToSection("contact-us")} className="sm:hover:border-b">Contact Us</button>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        
        {location.pathname === "/" && (
          <button
            onClick={() => navigate("/items")}
            className="p-1 hover:scale-110   transition-transform flex items-center justify-center"
            title="Visit Shop"
          >

            <img src={theme === 'dark' ? assets.whshop : assets.shop} alt="shop" className="w-7 h-7 text-black dark:text-white" />
              
          </button>
        )}

        {location.pathname === "/items" && (
          <Link to="/cart" className="relative p-1 hover:scale-110 transition-transform">
          <img
            src={theme === 'dark' ? assets.wh_cart : assets.black_cart}
            alt="cart"
            className="w-7 sm:w-8 cursor-pointer"
          />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#00a63e] text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white dark:border-gray-900">
              {cartCount}
            </span>
          )}
        </Link>
        )}

        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <img 
          src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} 
          alt="menu" 
          onClick={() => setSidebarOpen(true)} 
          className="w-8 sm:hidden cursor-pointer"
        />

        <button
          onClick={() => navigate("/login")}
          className="flex bg-secondary gap-2 text-white rounded-full text-sm max-sm:hidden 
                     items-center px-6 py-2 cursor-pointer hover:scale-103 transition-all font-semibold"
        >
          Sign up / Login <img src={assets.arrow_icon} alt="arrow" width={14} />
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;