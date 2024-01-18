import { useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";

function Uploads() {
  const [image, setImage] = useState(null);
  const [analyzeResult, setAnalyzeResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyzer = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/suggestions/random`)
        .then((response) => {
          // eslint-disable-next-line no-restricted-syntax
          console.log(response.data.suggestions);
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
  return (
    <>
      <NavBar />
      {!analyzeResult && !isLoading && (
        <section>
          <h2>Titre</h2>
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
          <p>Chargement en cours</p>
        </section>
      )}

      {analyzeResult && !isLoading && (
        <section>
          {analyzeResult.map((result) => {
            return (
              <div>
                <p>{result.name}</p>
                <img src={result.image_link} alt="maquillage" />
                <p>{result.nameColor}</p>
                <div
                  style={{
                    backgroundColor: result.codeColor,
                    width: "5rem",
                    height: "5rem",
                  }}
                />
                <p>{result.quantity}ml</p>
              </div>
            );
          })}
        </section>
      )}
    </>
  );
}

export default Uploads;
