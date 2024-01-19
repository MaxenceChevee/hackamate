import Webcam from "react-webcam";
import PropTypes from "prop-types";

import "../../../styles/Scan.scss";

function ScanModule({ isScanning, launchScan }) {
  return (
    <div className="scanContainer">
      <h1 className="scanTitle">
        Scannez votre visage et trouvez des produits adaptés à votre peau
      </h1>
      <p className="scanText">
        En scannant votre visage, notre IA est en capacité de vous sortir un lot
        de produits adaptés à votre type de peau.
      </p>
      <div className="webcamContainer">
        <div className="visage" />
        <Webcam className="webcam" audio={false} width="100%" />
      </div>
      <button type="button" className="scanButton" onClick={() => launchScan()}>
        {!isScanning ? "Lancer le scan" : <div className="dotsLoading" />}
      </button>
    </div>
  );
}

ScanModule.propTypes = {
  isScanning: PropTypes.bool.isRequired,
  launchScan: PropTypes.func.isRequired,
};

export default ScanModule;
