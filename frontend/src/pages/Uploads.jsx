import { useContext, useEffect, useState } from "react";
import axios from "axios";
// import { CommentProvider, useCommentContext } from "../context/CommentContext";
// import Comment from "../components/Comment";
// import CommentForm from "../components/CommentForm";
import NavBar from "../components/NavBar";
import "../styles/Uploads.scss";
import { productContext } from "../context/ProductsContext";
import Footer from "../components/Footer";

function Uploads() {
  // const { comments } = useCommentContext();
  const [image, setImage] = useState(null);
  const [analyzeResult, setAnalyzeResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(0);
  const { setProducts, products } = useContext(productContext);
  const [isValidateImg, setIsValidateImg] = useState(false);
  // const [showComments, setShowComments] = useState(false);
  const [isShoppingCart, setIsShoppingCart] = useState(false);

  const handleAnalyzer = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/suggestions/random`)
        .then((response) => {
          setAnalyzeResult(response.data.suggestions);
          setIsLoading(false);
        })
        .catch((err) => console.error(err));
    }, 3000);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (selectProduct) => {
    const arrayProduct = {
      id: selectProduct.id,
      name: selectProduct.name,
      image: selectProduct.image_link,
      quantity: selectProduct.quantity,
      nameColor: selectProduct.nameColor,
      codeColor: selectProduct.codeColor,
    };
    setProducts([...products, arrayProduct]);
    setIsShoppingCart(true);
  };

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  const handleValidateImg = () => {
    setIsValidateImg(!isValidateImg);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShoppingCart(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isShoppingCart]);

  return (
    // <CommentProvider>
    <>
      <NavBar />
      {!analyzeResult && !isLoading && (
        <section className="page_uploads">
          <h1 className="title_uploads">Import</h1>
          {isValidateImg && (
            <section className="popup_uploads">
              <h3>Decrivez votre peau</h3>
              <div className="check_uploads">
                <div className="align_check">
                  <input type="checkbox" />
                  <p>Avez-vous des allergies ?</p>
                </div>
                <div className="align_check">
                  <input type="checkbox" />
                  <p>Avez-vous des cicatrices ?</p>
                </div>
                <div className="align_check">
                  <input type="checkbox" />
                  <p>Avez-vous la peau sèche ?</p>
                </div>
                <div className="align_check">
                  <input type="checkbox" />
                  <p>Avez-vous la peau grasse ?</p>
                </div>
              </div>
              <button
                onClick={() => {
                  handleAnalyzer();
                  handleValidateImg();
                }}
                type="button"
                className="valide_popup_uploads"
              >
                Valider
              </button>
            </section>
          )}
          {image && <img src={image} alt="upload" />}
          <input
            type="file"
            className="select_uploads"
            onChange={handleChange}
          />
          {!isValidateImg && (
            <button
              type="button"
              className="valide_uploads"
              onClick={() => handleValidateImg()}
              disabled={!image}
            >
              Valider
            </button>
          )}
        </section>
      )}

      {isLoading && !analyzeResult && (
        <section className="page_uploads_monitor">
          <hr className="scan_uploads" />
          <img className="screen_uploads" src={image} alt="upload" />
          <p className="in_progress">Chargement en cours</p>
        </section>
      )}

      {analyzeResult && !isLoading && (
        <section className="page_uploads_result">
          {isShoppingCart && (
            <img
              className="pouce_uploads"
              src="https://usagif.com/wp-content/uploads/thumbs-up-99.gif"
              alt="pouce"
            />
          )}
          <p>produit dans le panier {counter}</p>
          {analyzeResult.map((result) => {
            return (
              <>
                <div className="container_result" key={result.name}>
                  <p className="desc_result">{result.name}</p>
                  <img
                    className="img_result"
                    src={result.image_link}
                    alt="maquillage"
                  />
                  <p className="text_color_result">{result.nameColor}</p>
                  <div
                    className="color_result"
                    style={{
                      backgroundColor: result.codeColor,
                      width: "1.5rem",
                      height: "1.5rem",
                    }}
                  />
                  {/* <button
                      type="button"
                      onClick={() => setShowComments(!showComments)}
                    >
                      {showComments
                        ? "Cacher les commentaires"
                        : "Voir les commentaires"}
                    </button>
                    {showComments && (
                      <div className="comments-section">
                        {comments.length > 0 ? (
                          comments.map((comment) => (
                            <Comment key={comment.id} comment={comment} />
                          ))
                        ) : (
                          <p>Il n'y a aucun commentaire.</p>
                        )}
                        <CommentForm productId={result.id} />
                      </div>
                    )} */}
                  <p className="quantity_result">{result.quantity}ml</p>
                  <button
                    onClick={() => {
                      handleSubmit(result);
                      handleCounter();
                    }}
                    className="valide_result"
                    type="button"
                  >
                    Ajouter au panier
                  </button>
                </div>
                <hr />
              </>
            );
          })}
        </section>
      )}
      <Footer />
    </>
    // </CommentProvider>
  );
}

export default Uploads;
