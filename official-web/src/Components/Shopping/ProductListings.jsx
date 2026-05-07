
// import React, { useMemo, useState } from "react";
// import ProductCard from "./ProductCard";
// import SearchBox from "./Searchbox";
// import DropDown from "./DropDown";


// const sortList = ["Popularity", "Price Low to High", "Price High to Low"];

// export default function ProductListings({ products }) {
//   const [searchText, setSearchText] = useState("");
//   const [selectedSort, setSelectedSort] =  useState("Popularity");
//   const filteredAndSortedProducts = useMemo(() => {
//     if(!Array.isArray(products)) {
//       return []
//     };
//     let filteredProducts =   products.filter((product)=>
//     product.name.toLowerCase().includes(searchText.toLowerCase()) || 
//     product.description.toLowerCase().includes(searchText.toLowerCase())
// );

// return filteredProducts.slice().sort((a,b)=>{
//   switch(selectedSort){
//     case "Price Low to High":
//       return parseFloat(a.price) - parseFloat(b.price);
//     case "Price High to low":
//       return parseFloat(b.price) - parseFloat(a.price);
//     default:
//       return parseInt(b.popularity) - parseInt(a.popularity);
//   }
// }


// )
//   }, [products,searchText,selectedSort]);

//   const handleSearchChange = (inputSearch) => {
//     setSearchText(inputSearch);
    
//   };
//   const handleSortChange = (sortType) => {
//     setSelectedSort(sortType);
    
//   };

  




//   return (
//     <div className="max-w-[1152px] mx-auto">
//       <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12">
//         <SearchBox
//           label="Search"
//           placeholder="Search products..."
//           value={searchText}
//           handleSearchChange={(value,event)=>handleSearchChange(value,event)}
//         />

       
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-12">
//         {filteredAndSortedProducts.length > 0 ? (
//           filteredAndSortedProducts.map((product) => (
//             <ProductCard key={product.productId} product={product} />
//           ))
//         ) : (
//           <p className="text-center font-primary font-bold text-lg text-primary">
//             No products found
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }








import React, {
  useMemo,
  useState,
  useDeferredValue,
  useCallback,
  memo,
} from "react";

import ProductCard from "./ProductCard";
import SearchBox from "./Searchbox";

function ProductListings({ products = [] }) {
  const [searchText, setSearchText] = useState("");

  // Smooth typing experience
  const deferredSearchText = useDeferredValue(searchText);

  // Stable callback
  const handleSearchChange = useCallback((value) => {
    setSearchText(value);
  }, []);

  // Memoized filtered products
  const filteredProducts = useMemo(() => {
    if (!Array.isArray(products)) return [];

    const search = deferredSearchText.trim().toLowerCase();

    if (!search) return products;

    return products.filter((product) => {
      const name = product.name?.toLowerCase() || "";
      const description =
        product.description?.toLowerCase() || "";

      return (
        name.includes(search) ||
        description.includes(search)
      );
    });
  }, [products, deferredSearchText]);

  return (
    <div className="max-w-[1152px] mx-auto px-4 dark:text-black">

      {/* Search */}
      <div className="flex justify-center pt-12">
        <SearchBox
          label="Search"
          placeholder="Search products..."
          value={searchText}
          handleSearchChange={handleSearchChange}
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.productId}
              product={product}
            />
          ))
        ) : (
          <p className="col-span-full text-center font-primary font-bold text-lg text-primary">
            No products found
          </p>
        )}
      </div>
    </div>
  );
}

// Prevent unnecessary parent re-renders
export default memo(ProductListings);