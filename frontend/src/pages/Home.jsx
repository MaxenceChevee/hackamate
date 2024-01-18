import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../styles/Home.scss";

function Home() {
  return (
    <>
      <NavBar />
      <div className="HomeComponent">
        <h1 className="title_home">Accueil</h1>

        <p className="desc_home">
          Découvrez toutes nos gammes de fond de teint, et testez sur votre peau
          celui qui vous correspond le mieux grâce à notre simulateur.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Home;
