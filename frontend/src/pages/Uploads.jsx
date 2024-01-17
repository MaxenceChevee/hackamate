import { useState } from "react";
import axios from "axios";

function Uploads() {
  const [image, setImage] = useState(null);
  const [analyzeResult, setAnalyzeResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyzer = () => {
    setIsLoading(true);
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/suggestions/random`)
      .then((response) => {
        // eslint-disable-next-line no-restricted-syntax
        console.log(response.data.suggestions);
        setAnalyzeResult(response.data.suggestions);
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
          <section>
            <img src={analyzeResult.foundation1.image_link} alt="product" />
            <div>
              <h3>{analyzeResult.foundation1.name}</h3>
              <p>{analyzeResult.foundation1.nameColor}</p>
            </div>
          </section>
          <section>
            <img src={analyzeResult.lipstick1.image_link} alt="product" />
            <div>
              <h3>{analyzeResult.lipstick1.name}</h3>
              <p>{analyzeResult.lipstick1.nameColor}</p>
            </div>
          </section>
          <section>
            <img src={analyzeResult.mascara1.image_link} alt="product" />
            <div>
              <h3>{analyzeResult.mascara1.name}</h3>
              <p>{analyzeResult.mascara1.nameColor}</p>
            </div>
          </section>
        </section>
      )}
    </>
  );
}

export default Uploads;
