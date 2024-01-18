import React, { useState, useEffect, useContext } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { productContext } from "../context/ProductsContext";
import "../styles/ShoppingCart.scss";

function ShoppingCart() {
  const { products, setProducts, removeProduct } = useContext(productContext);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadCart = () => {
    try {
      const storedItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
      setCartItems(storedItems);
    } catch (error) {
      console.error("Error loading cart:", error);
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    sessionStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const clearProducts = () => {
    sessionStorage.removeItem("products");
    setProducts([]);
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
      <div className="container_shop">
        <h1 className="title_shop">Shopping Cart</h1>

        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.quantity} x {item.name} - {item.id}
              {item.image && <img src={item.image} alt={item.name} />}{" "}
              {/* Afficher l'image si elle existe */}
              <p>Color: {item.nameColor}</p>
              <div
                className="color_result"
                style={{
                  backgroundColor: item.codeColor,
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
              <button type="button" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>

        <h2>Votre panier:</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - {product.id}
              {product.image && (
                <img src={product.image} alt={product.name} />
              )}{" "}
              {/* Afficher l'image si elle existe */}
              <p>Color: {product.nameColor}</p>
              <p>Code Color: {product.codeColor}</p>
              <button type="button" onClick={() => removeProduct(product.id)}>
                Supprimer
              </button>
            </li>
          ))}
        </ul>

        <button type="button" onClick={clearProducts}>
          Vider tout le panier
        </button>
      </div>
      <Footer />
    </>
  );
}

export default ShoppingCart;
