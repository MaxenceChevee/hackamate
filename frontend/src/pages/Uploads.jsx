import { useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";

function Uploads() {
  const [image, setImage] = useState(null);
  const [analyzeResult, setAnalyzeResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyzer = () => {
    setIsLoading(true);
    axios
      .get(`${process.env.VITE_BACKEND_URL}/api/getRandomProducts`)
      .then((response) => {
        setAnalyzeResult(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <>
      <NavBar />
      {!analyzeResult && !isLoading && (
        <section>
          <h2>titreeee</h2>
          {image && <img src={image} alt="upload" />}
          <input type="file" onChange={handleChange} />
          <button
            type="button"
            onClick={() => handleAnalyzer()}
            disabled={!image}
          >
            Valider
          </button>
        </section>
      )}

      {isLoading && !analyzeResult && (
        <section>
          <img src={image} alt="upload" />
          <p>en chargement</p>
        </section>
      )}

      {analyzeResult && !isLoading && (
        <section>
          <h2>titre</h2>
          <img src={image} alt="upload" />
          {analyzeResult.map((product) => (
            <section>
              <img src={product.img} alt="product" />
              <div>
                <h3>{product.title}</h3>
                <p>{product.nameColor}</p>
              </div>
            </section>
          ))}
        </section>
      )}
    </>
  );
}

export default Uploads;
