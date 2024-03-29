import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Popup from "../components/Popup";
import { useAuth } from "../context/AuthContext";
import Footer from "../components/Footer";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { sendPasswordResetEmail } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);

      await sendPasswordResetEmail(email);

      setShowPopup(true);
    } catch (catchError) {
      console.error("Error sending password reset email:", error);
      setError("Error sending password reset email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate("/");
  };

  return (
    <>
      <NavBar />
      <div className="auth-form">
        <h2>Mot de passe oublié</h2>
        <form onSubmit={handleSubmit} className="form-container">
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Reset Password"}
          </button>
        </form>
        <p>
          Vous vous souvenez de votre mot de passe ?{" "}
          <Link to="/login">Connectez-vous ici</Link>
        </p>
        {error && <p className="error-message">{error}</p>}
        {showPopup && (
          <Popup onClose={handleClosePopup} confirmButtonText="Close">
            <p>
              Instructions de réinitialisation du mot de passe envoyées à votre
              adresse e-mail
            </p>
          </Popup>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ForgotPassword;
