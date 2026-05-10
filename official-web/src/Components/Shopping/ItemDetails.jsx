import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import apiClient from "../../api/apiClient";

const ItemDetails = () => {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Single Product
  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);

      // Fetch all products
      const response = await apiClient.get("/assets");

      // Find matching product
      const foundItem = response.data.find(
        (product) => product.productId === Number(id)
      );

      setItem(foundItem);
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Failed to fetch product"
      );
    } finally {
      setLoading(false);
    }
  };

  // Loading UI
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl font-semibold">
          Loading product...
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

  // Product Not Found
  if (!item) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold">
          Item not found
        </h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "30px" }}>
      <img
        src={item.image}
        alt={item.name}
        width="300"
      />

      <h2>{item.name}</h2>

      <p>{item.description}</p>

      <h3>₹{item.price}</h3>

      <input
        type="number"
        value={quantity}
        min="1"
        onChange={(e) =>
          setQuantity(Number(e.target.value))
        }
      />

      <button
        onClick={() =>
          addToCart({
            ...item,
            quantity,
          })
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ItemDetails;