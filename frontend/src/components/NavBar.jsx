import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Navbar.scss";
import logo from "../assets/images/logo.png";

function NavBar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      closeMenu();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const loggedInLinks = [
    { id: 1, linkname: "Accueil", linkurl: "/" },
    { id: 2, linkname: "Se déconnecter", linkurl: "/", action: handleLogout },
    { id: 3, linkname: "Paramètres", linkurl: "/settings" },
    { id: 4, linkname: "Importer", linkurl: "/analyzer/uploads" },
    { id: 5, linkname: "Panier", linkurl: "/shopping-cart" },
  ];

  const loggedOutLinks = [
    { id: 1, linkname: "Accueil", linkurl: "/" },
    { id: 2, linkname: "Se connecter", linkurl: "/login" },
    { id: 3, linkname: "Inscription", linkurl: "/register" },
    { id: 4, linkname: "Importer", linkurl: "/analyzer/uploads" },
    { id: 5, linkname: "Panier", linkurl: "/shopping-cart" },
  ];

  const navbardata = user ? loggedInLinks : loggedOutLinks;

  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="Your Logo" className="logo" />
      </div>
      <button
        className={`burger-menu ${showMenu ? "open" : ""}`}
        type="button"
        onClick={toggleMenu}
      >
        &#9776;
      </button>
      <ul className={`nav-links ${showMenu ? "show-menu" : ""}`}>
        {navbardata.map((item) => (
          <>
            <li key={item.id}>
              {item.action ? (
                <button
                  type="button"
                  className="logout-button"
                  onClick={item.action}
                >
                  {item.linkname}
                </button>
              ) : (
                <Link to={item.linkurl} onClick={closeMenu}>
                  {item.linkname}
                </Link>
              )}
            </li>
            <hr />
          </>
        ))}
      </ul>
      <span className="bottom"> </span>
    </nav>
  );
}

export default NavBar;
