import { createContext, useMemo } from "react";
import { useSessionStorage } from "usehooks-ts";
import PropTypes from "prop-types";

const productContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useSessionStorage("products", []);
  const product = useMemo(
    () => ({ products, setProducts }),
    [products, setProducts]
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
