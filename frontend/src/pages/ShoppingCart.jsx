import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar";

function ShoppingCart({ userId }) {
  const [cart, setCart] = useState(null);
  const [cartItems, setCartItems] = useState(null);

  const loadCart = async () => {
    try {
      const response = await axios.get(`/api/viewCart/${userId}`);
      setCart(response.data.cart);
      setCartItems(response.data.items);
    } catch (error) {
      console.error("Error loading cart:", error);
    }
  };
  useEffect(() => {
    loadCart();
  }, [userId]);

  const removeFromCart = async (itemId) => {
    try {
      await axios.delete(`/api/removeFromCart/${cart.id}/${itemId}`);
      loadCart();
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const clearCart = async () => {
    try {
      await axios.delete(`/api/clearCart/${cart.id}`);
      loadCart();
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  return (
    <>
      <NavBar />
      <div>
        <h2>Shopping Cart</h2>
        {cart && (
          <div>
            <p>Cart ID: {cart.id}</p>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.quantity} x {item.itemType} - {item.itemId}
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.itemId)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <button type="button" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
ShoppingCart.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default ShoppingCart;
