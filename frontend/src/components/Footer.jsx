import "../styles/Footer.scss";
import secure from "../assets/images/secure.png";
import delivery from "../assets/images/delivery.png";
import rapide from "../assets/images/48h_delivery.png";

function Footer() {
  return (
    <section className="container_footer">
      <div className="bloc_info_footer">
        <img src={secure} alt="icon sécurité" className="icon_info" />
        <p className="text_info">
          Paiement
          <br />
          sécurisé
        </p>
      </div>
      <div className="bloc_info_footer">
        <img src={delivery} alt="icon livraison" className="icon_info" />
        <p className="text_info">
          Livraison
          <br />
          offerte*
        </p>
      </div>
      <div className="bloc_info_footer">
        <img src={rapide} alt="icon en 48 heures" className="icon_info" />
        <p className="text_info">
          Livraison
          <br />
          en 48h*
        </p>
      </div>
    </section>
  );
}

export default Footer;
