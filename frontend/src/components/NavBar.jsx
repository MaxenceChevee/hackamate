import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { productContext } from "../context/ProductsContext";
import cartIcon from "../assets/images/cart-icon.png";
import "../styles/Navbar.scss";
import logo from "../assets/images/logo.png";

function NavBar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { products } = useContext(productContext);

  const [showMenu, setShowMenu] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(products.length);
  }, [products]);

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
    { id: 2, linkname: "Panier", linkurl: "/shopping-cart" },
    { id: 3, linkname: "Paramètres", linkurl: "/settings" },
    { id: 4, linkname: "Importer", linkurl: "/analyzer/uploads" },
    { id: 5, linkname: "Scan", linkurl: "/analyzer/scan" },
    { id: 6, linkname: "Contact", linkurl: "/contact" },
    { id: 7, linkname: "Se déconnecter", linkurl: "/", action: handleLogout },
  ];

  const loggedOutLinks = [
    { id: 1, linkname: "Accueil", linkurl: "/" },
    { id: 2, linkname: "Se connecter", linkurl: "/login" },
    { id: 3, linkname: "Inscription", linkurl: "/register" },
    { id: 4, linkname: "Importer", linkurl: "/analyzer/uploads" },
    { id: 5, linkname: "Scan", linkurl: "/analyzer/scan" },
    { id: 6, linkname: "Panier", linkurl: "/shopping-cart" },
    { id: 7, linkname: "Contact", linkurl: "/contact" },
  ];

  const navbardata = user ? loggedInLinks : loggedOutLinks;
  return (
    <nav>
      <div className="left-section">
        <div className="logo-container">
          <img src={logo} alt="Your Logo" className="logo" />
        </div>
      </div>

      <div className="right-section">
        <Link to="/shopping-cart" className="cart-link">
          <div className="cart-icon-container">
            <div className="cart-badge">
              {cartCount > 0 && (
                <span className="cart-counter">{cartCount}</span>
              )}
            </div>
            <img src={cartIcon} alt="Cart" className="cart-icon" />
          </div>
        </Link>

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
      </div>
    </nav>
  );
}
export default NavBar;
