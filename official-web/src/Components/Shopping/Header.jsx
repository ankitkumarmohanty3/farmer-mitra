import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import assets from "../../assets/assets";



const Header = () => {

  const navigate = useNavigate();

  const [showInfo, setShowInfo] = useState(false);



  // Logo-style text helper: Bold, Italic, Tight spacing, and Brand Green

  const BrandName = () => (

    <span className="font-black text-[#00a63e] tracking-tighter uppercase italic px-0.5">

      FreshMitra

    </span>

  );



  return (

    <header className="w-full sticky top-0 z-20 backdrop-blur-xl border-b bg-white/50 dark:bg-[#111827]/80 border-gray-200 dark:border-gray-800 transition-all font-medium">

      <div className="flex flex-col">

        {/* Navigation Bar Section */}

        <div className="flex items-center justify-between px-4 sm:px-12 lg:px-24 xl:px-40 py-4">

          

          {/* Column 1: Logo (Left) */}

          <div className="flex-1 flex justify-start">

            <img

              src={assets.bg_removedlogo}

              alt="logo"

              className="w-32 sm:w-40 rounded-xl cursor-pointer"

              onClick={() => {

                navigate("/");

                window.scrollTo({ top: 0, behavior: "smooth" });

              }}

            />

          </div>



          {/* Column 2: Center Navigation (Home + How we work) */}

          <nav className="flex items-center justify-center gap-8">

            <Link

              to="/"

              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}

              className="text-gray-700 dark:text-white sm:text-sm sm:hover:border-b border-gray-700 dark:border-white pb-1 transition-all"

            >

              Home

            </Link>



            <button

              onClick={() => setShowInfo(!showInfo)}

              className={`sm:text-sm italic transition-all pb-1 border-b ${

                showInfo 

                ? "text-[#00a63e] border-[#00a63e]" 

                : "text-gray-700 dark:text-white border-transparent hover:text-[#00a63e]"

              }`}

            >

              How we work

            </button>

          </nav>



          {/* Column 3: Spacer (Right) - Keeps the center group centered */}

          <div className="flex-1 hidden sm:flex"></div>

        </div>



        {/* Translucent Explanation Section */}

        {showInfo && (

          <div className="px-4 sm:px-12 lg:px-24 xl:px-40 pb-8 animate-in fade-in zoom-in-95 duration-300">

            <div className="relative p-8 bg-white/10 dark:bg-black/30 backdrop-blur-lg rounded-2xl border border-white/20 dark:border-gray-700 shadow-2xl">

              

              {/* Close Button: Cross symbol in upper right */}

              <button 

                onClick={() => setShowInfo(false)}

                className="absolute top-4 right-5 text-3xl font-light text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors leading-none"

              >

                &times;

              </button>



              <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed text-justify pr-6">

                <BrandName /> is a farmer-centric digital marketplace designed to bridge the gap between farmers and consumers through a transparent, efficient, and reliable supply chain system. Our platform enables farmers to directly list and sell their freshly harvested crops, vegetables, fruits, and other agricultural products, along with essential raw materials such as fertilizers and pesticides. By eliminating unnecessary intermediaries, we ensure that farmers receive fair value for their produce while customers gain access to fresh, high-quality products at competitive prices.

                <br /><br />

                At <BrandName />, we take full responsibility for the post-harvest process, including structured procurement, quality verification, hygienic storage, professional packaging, and timely doorstep delivery. Our streamlined operations are designed to maintain product freshness, ensure food safety standards, and provide a seamless purchasing experience for customers. Through our integrated logistics and customer-focused services, we aim to create a trustworthy ecosystem where farmers can grow their income and consumers can confidently purchase farm-fresh products with convenience and transparency.

              </p>

            </div>

          </div>

        )}

      </div>

    </header>

  );

};



export default Header;