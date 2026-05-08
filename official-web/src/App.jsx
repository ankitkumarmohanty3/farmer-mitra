
import { useRef, useState,useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import TrustedBy from './Components/TrustedBy';
import Services from './Components/Services';
import OurWork from './Components/OurWork';
import Teams from './Components/Teams';
import Contactus from './Components/Contactus';
import {Toaster} from 'react-hot-toast'
import Footer from './Components/Footer';
import { Routes, Route,useLocation  } from "react-router-dom";
import ShoppingCart from './Components/Shopping/ShoppingCart';


function App() {


const[theme,setTheme]  = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

const location = useLocation();


 
  
   return (
     <>
      <div className='dark:bg-black relative'>
        <Toaster />
    {location.pathname !== "/cart" && (
    <Navbar theme={theme} setTheme={setTheme} />
     )}
   
   <Routes>
    {/* HOME ROUTE */}
   <Route
    path="/"
    element={
      <>
        <Hero/>
        <TrustedBy/>
        <Services/>
        <OurWork/>
        <Teams/>
        <Contactus/>
        <Footer/>
      </>
    }
  />
 {/* CART ROUTE */}
  <Route path="/cart" element={<ShoppingCart />} />
 </Routes>

 </div>
</>

  )
}

export default App
