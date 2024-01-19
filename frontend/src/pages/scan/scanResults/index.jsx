import { useContext } from "react";
import propTypes from "prop-types";

import { productContext } from "../../../context/ProductsContext";
import "../../../styles/Scan.scss";

function ScanResults({ products }) {
  const { setProducts, products: cartProducts } = useContext(productContext);

  return (
    <div className="scanContainer">
      <h1 className="scanTitle">Nous avons trouvé vos produits !</h1>
      <p className="scanText">
        Voici les {products.length} produits qui conviennent le plus à votre
        type de peau en prenant en compte le scan et vos réponses
      </p>
      <div className="resultsContainer">
        {products.map((product) => (
          <div className="resultContainer" key={product.id}>
            <img
              src={product.image_link}
              className="resultImage"
              alt={`product ${product.name}`}
            />
            <div className="resultName">{product.name}</div>
            <div className="resultFlexContainer">
              <div className="resultQuantity">
                <div
                  className="resultColor"
                  style={{ backgroundColor: product.codeColor }}
                />
                {product.quantity} ml
              </div>
              <div className="resultPrice">{product.price}€</div>
            </div>
            <button
              type="button"
              className="scanButton"
              onClick={() => setProducts([...cartProducts, product])}
            >
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
      <div className="webcamContainer">
        <div className="visage" />
      </div>
    </div>
  );
}

ScanResults.propTypes = {
  products: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      quantity: propTypes.number.isRequired,
      codeColor: propTypes.string.isRequired,
      effect: propTypes.string,
      image_link: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      price: propTypes.string.isRequired,
      nameColor: propTypes.string.isRequired,
    })
  ).isRequired,
};

export default ScanResults;
