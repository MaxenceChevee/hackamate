import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const productContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
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
