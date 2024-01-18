import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function ShoppingCart() {
  const { userId } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [cart, setCart] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [cartItems, setCartItems] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadCart = async () => {
    try {
      if (!userId) {
        console.error("User ID is undefined.");
      }

      // axios
      //   .get(`${import.meta.env.VITE_BACKEND_URL}/api/cart/view/${userId}`)
      //   .then((response) => {
      //     console.log(response.data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    } catch (error) {
      console.error("Error loading cart:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <NavBar />
      <div>
        <h2>Shopping Cart</h2>
        {cart && (
          <div>
            <p>Cart ID: {cart.id}</p>
            {cartItems && cartItems.length > 0 ? (
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    {item.quantity} x {item.itemType} - {item.itemId}
                    <button
                      type="button"
                      // eslint-disable-next-line no-undef
                      onClick={() => removeFromCart(item.itemId)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Your cart is empty.</p>
            )}
            <button
              type="button"
              onClick={() => {
                // eslint-disable-next-line no-undef
                clearCart(cart.id);
              }}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default ShoppingCart;
