import NavBar from "../components/NavBar";
import "../styles/Home.scss";

function Home() {
  return (
    <>
      <NavBar />
      <div className="HomeComponent">
        <h1>Accueil</h1>

        <p>
          Découvrez toutes nos gammes de fond de teint, et testez sur votre peau
          celui qui vous correspond le mieux grâce à notre simulateur.
        </p>
      </div>
    </>
  );
}

export default Home;
