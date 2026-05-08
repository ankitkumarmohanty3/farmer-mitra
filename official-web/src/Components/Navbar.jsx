import assets from "../assets/assets";
import React, { useState } from "react";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "./Shopping/CartContext";

const Navbar = ({ theme, setTheme }) => {
     const [sidebarOpen,setSidebarOpen] =  useState(false);
    //  const navigate = useNavigate();
    //  const location = useLocation();

//     const handleCartToggle = () => {
//       if (location.pathname === "/shoppingcart") {
//            navigate("/");        // bag is open → close it (go home)
//       } else {
//          navigate("/shoppingcart"); // bag closed → open it
//      }
// };

const { cart } = useCart();

const navigate = useNavigate();
const location = useLocation();

const goToSection = (id) => {
  // If NOT on home, go home first

  if(!id){
     window.scrollTo({ top: 0, behavior: "smooth" });
  }else if (location.pathname !== "/") {
    navigate("/");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  setSidebarOpen(false);
};




  return (
 
    <motion.div
      initial= {{opacity:0,y:-50}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.6,ease:'easeOut'}}
      className="flex justify-between items-center px-4 
                   sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20
                   backdrop-blur-xl font-medium  bg-white/50 dark:bg-gray-900      
         "
    >

      
      <img
        src={theme === "dark" ? assets.bg_removedlogo : assets.bg_removedlogo}
        alt="logo"
        className="w-32 sm:w-40 rounded-xl"
      />

      <div
        className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen
                      max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white
                      max-sm:pt-20 flex sm:items-center gap-5 transition-all
                      `}
      >

       <img src={assets.close_icon} alt="" className="w-5 absolute right-4 top-4 sm:hidden" onClick={()=>setSidebarOpen(false)}/>




        
        <button onClick={() => goToSection("")} className="sm:hover:border-b">
          Home
        </button>
        
        <button onClick={() => goToSection("services")} className="sm:hover:border-b">
         Services
        </button>
        

        <button onClick={() => goToSection("our-work")} className="sm:hover:border-b">
         Our Work
        </button>

        


        <button onClick={() => goToSection("contact-us")} className="sm:hover:border-b">
        Contact Us
        </button>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">

        <Link to="/cart">
           <img
         src={theme === 'dark' ? assets.wh_cart : assets.black_cart}
         alt=""
         
         className="w-8 cursor-pointer"
        
        />

        </Link>

        <ThemeToggleBtn theme={theme} setTheme={setTheme}/>


        <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt=""  onClick={()=>setSidebarOpen(true)} className="w-8 sm:hidden"/>
     
        

         <button onClick={() => goToSection("contact-us")} className="flex bg-secondary gap-2 text-white rounded-full   text-sm max-sm:hidden 
           items-center  px-6 py-2 
           cursor-pointer hover:scale-103 transition-all">
           Sign in / Login <img src={assets.arrow_icon} alt="arrow" width={14} />
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;
