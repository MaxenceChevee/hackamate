import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const productContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [idProducts, setIdProducts] = useState(null);
  const product = useMemo(
    () => ({ products, setProducts, idProducts, setIdProducts }),
    [products, setProducts, idProducts, setIdProducts]
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
