import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import apiClient from "../../api/apiClient";

const Items = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  // Backend Products State
  const [items, setItems] = useState([]);

  // Quantity State
  const [quantity, setQuantity] = useState({});

  // Loading & Error State
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Products from Spring Boot Backend
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await apiClient.get("/assets");

      setItems(response.data);
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Failed to fetch products"
      );
    } finally {
      setLoading(false);
    }
  };

  const increase = (id) => {
    setQuantity({
      ...quantity,
      [id]: (quantity[id] || 1) + 1,
    });
  };

  const decrease = (id) => {
    if ((quantity[id] || 1) > 1) {
      setQuantity({
        ...quantity,
        [id]: quantity[id] - 1,
      });
    }
  };

  // Loading UI
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl font-semibold">
          Loading products...
        </span>
      </div>
    );
  }

  // Error UI
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl text-red-500">
          Error: {error}
        </span>
      </div>
    );
  }

  return (
    /* Main Page Wrapper: Forces black background in dark mode */
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      
      <div className="p-6 md:p-10">
        <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white uppercase tracking-wide">
          Our Fresh Products
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            
            <div
              key={item.productId}
              className="flex flex-col border border-gray-200 dark:!border-gray-800 rounded-lg overflow-hidden shadow-md !bg-white dark:!bg-[#111827] transition hover:shadow-xl"
            >
              {/* Product Image */}
              <img
               
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-56 object-cover cursor-pointer"
                onClick={() =>
                  navigate(`/item/${item.productId}`)
                }
              />

              <div className="p-4 flex flex-col flex-grow">
                {/* Product Name */}
                <h3 className="font-bold text-lg text-gray-800 dark:!text-white uppercase">
                  {item.name}
                </h3>

                {/* Product Price */}
                <p className="text-[#00a63e] dark:text-[#00c84b] font-bold text-xl mt-1">
                  ₹{item.price}
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 mt-4">
                  <button
                    onClick={() =>
                      decrease(item.productId)
                    }
                    className="w-10 h-10 flex items-center justify-center !bg-gray-100 dark:!bg-gray-800 dark:!text-white rounded border border-gray-300 dark:border-gray-700"
                  >
                    −
                  </button>

                  <span className="w-6 text-center font-semibold dark:text-white">
                    {quantity[item.productId] || 1}
                  </span>

                  <button
                    onClick={() =>
                      increase(item.productId)
                    }
                    className="w-10 h-10 flex items-center justify-center !bg-gray-100 dark:!bg-gray-800 dark:!text-white rounded border border-gray-300 dark:border-gray-700"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() =>
                    addToCart({
                      ...item,
                      quantity:
                        quantity[item.productId] || 1,
                    })
                  }
                  className="mt-5 w-full bg-[#00a63e] hover:bg-[#008c34] text-white font-bold py-3 rounded-lg transition-colors text-sm uppercase"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;