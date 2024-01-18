import { createContext, useMemo } from "react";
import { useSessionStorage } from "usehooks-ts";
import PropTypes from "prop-types";

const productContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useSessionStorage("products", []);
  const [cartItems, setCartItems] = useSessionStorage("cartItems", []);

  const removeProduct = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
    sessionStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const product = useMemo(
    () => ({ products, setProducts, cartItems, setCartItems, removeProduct }),
    [products, setProducts, cartItems, setCartItems]
  );

  return (
    <productContext.Provider value={product}>
      {children}
    </productContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { productContext, ProductProvider };
