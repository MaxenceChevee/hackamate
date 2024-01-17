import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useAuth } from "../context/AuthContext";
import Popup from "../components/Popup";
import "../styles/Login.scss";

export default function Login() {
  const [credentials, setCredentials] = useState({
    mail: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
    setLoginError(null);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const status = await login(credentials);

      if (status === "Login successful") {
        localStorage.setItem("loginSuccess", "true");
        setShowLoginPopup(true);
      }
    } catch (error) {
      console.error("Error during login:", error);

      if (error.message === "Email not found") {
        setLoginError("Email not found. Please check your email.");
      } else if (error.message === "Incorrect password") {
        setLoginError("Incorrect password. Please try again.");
      } else {
        setLoginError("Email not found. Please check your email.");
      }
    }
  };

  const handleCloseLoginPopup = () => {
    setShowLoginPopup(false);
    navigate("/");
  };

  return (
    <>
      <NavBar />
      <div className="auth-form">
        <h2>Se connecter</h2>
        <form onSubmit={handleLogin} className="form-container">
          <label>
            Mail:
            <input
              type="email"
              name="mail"
              value={credentials.mail}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Mot de passe:
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Login</button>
        </form>
        <p>
          Je n'ai pas de compte? <Link to="/register">Inscrivez-vous ici</Link>
        </p>
        <p>
          <Link to="/forgot-password">Mot de passe oublié?</Link>
        </p>
        {loginError && <p className="error-message">{loginError}</p>}
        {showLoginPopup && (
          <Popup onClose={handleCloseLoginPopup} confirmButtonText="Close">
            <p>Connexion réussie! Content de te revoir ✔</p>
          </Popup>
        )}
      </div>
    </>
  );
}
