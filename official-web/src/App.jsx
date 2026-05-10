import { useState, useEffect } from 'react';

import { Routes, Route, useLocation } from "react-router-dom";

import { Toaster } from 'react-hot-toast';



// Styling

import './App.css';



// Components

import Navbar from './Components/Navbar';

import Hero from './Components/Hero';

import TrustedBy from './Components/TrustedBy';

import Services from './Components/Services';

import OurWork from './Components/OurWork';

import Teams from './Components/Teams';

import Contactus from './Components/Contactus';

import Footer from './Components/Footer';



// Shopping Components

import ShoppingCart from './Components/Shopping/ShoppingCart';

import LoginSignup from "./Components/loginsignup/LoginSignup";

import Items from "./Components/Shopping/Items";

import ItemDetails from "./Components/Shopping/ItemDetails";

import Checkout from "./Components/Shopping/Checkout";



function App() {

  const [theme, setTheme] = useState(

    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'

  );



  useEffect(() => {

    if (theme === "dark") {

      document.documentElement.classList.add("dark");

    } else {

      document.documentElement.classList.remove("dark");

    }

    localStorage.setItem("theme", theme);

  }, [theme]);



  const location = useLocation();



  return (

    <>

      <div className='min-h-screen bg-white dark:bg-black transition-colors duration-300 relative'>

        <Toaster />



        {/* FIX: Hide the global Navbar on both /cart AND /checkout pages.

            This prevents the "Double Header" issue since those pages 

            have their own specialized Header.

        */}

        {location.pathname !== "/cart" && location.pathname !== "/checkout" && (

          <Navbar theme={theme} setTheme={setTheme} />

        )}



        <Routes>

          <Route

            path="/"

            element={

              <>

                <Hero />

                <TrustedBy />

                <Services />

                <OurWork />

                <Teams />

                <Contactus />

                <Footer />

              </>

            }

          />



          <Route path="/cart" element={<ShoppingCart />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="/login" element={<LoginSignup theme={theme} />} />

          <Route path="/items" element={<Items />} />

          <Route path="/item/:id" element={<ItemDetails />} />

        </Routes>

      </div>

    </>

  );

}



export default App;