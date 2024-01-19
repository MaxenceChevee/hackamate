import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../styles/Home.scss";
import testphoto from "../assets/images/photoaccueil.png";

function Home() {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/analyzer/uploads");
  };
  return (
    <>
      <NavBar />
      <section className="page_home">
        <div className="desc_home">
          <h1 className="h1_home">ESSAI MAQUILLAGE</h1>
          <p className="text_home">
            Meilleur allié de la beauté des femmes, l'Essai Maquillage L'Oréal
            Paris marie à la perfection l'art de la couleur, la précision du
            tracé, la sensorialité des textures et la beauté des objets. <br />
            Pour vous sublimer. Chaque jour. <br />
            Amusez-vous avec vos photos préférées.
          </p>
        </div>
        <div className="separation_of_elements">
          <img
            className="terminal_informations"
            src={testphoto}
            alt="test virtuel"
          />
          <button
            className="valide_uploads"
            onClick={handleButton}
            type="submit"
          >
            JE DECOUVRE
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
