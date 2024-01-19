import { useState } from "react";
import axios from "axios";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ScanModule from "./scanModule";
import ScanForm from "./scanForm";
import ScanResults from "./scanResults";
import "../../styles/Scan.scss";

function Scan() {
  const [isScanning, setIsScanning] = useState(false);
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const [scanResults, setScanResults] = useState(null);
  const [resultsError, setResultsError] = useState(null);
  const [hasValidateForm, setHasValidateForm] = useState(false);

  const launchScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setIsLoadingResults(true);
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/suggestions/random`)
        .then((response) => {
          setIsLoadingResults(false);
          setScanResults(response.data.suggestions);
        })
        .catch((err) => {
          setIsLoadingResults(false);
          setResultsError(err);
        });
    }, 3000);
  };

  return (
    <>
      <Navbar />
      <div className="scanLayout">
        {!scanResults && !isLoadingResults && !resultsError && (
          <ScanModule isScanning={isScanning} launchScan={launchScan} />
        )}
        {scanResults && !isLoadingResults && !hasValidateForm && (
          <ScanForm setHasValidateForm={setHasValidateForm} />
        )}
        {!scanResults &&
          !isLoadingResults &&
          resultsError &&
          "error while retrieving products"}
        {scanResults && !isLoadingResults && hasValidateForm && (
          <ScanResults products={scanResults} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default Scan;
