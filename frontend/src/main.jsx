import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ProductProvider } from "./context/ProductsContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
// import { CommentProvider } from "./context/CommentContext";
import App from "./App";
import LogIn from "./pages/Login";
import Register from "./pages/Signup";
import Settings from "./pages/Settings";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Popup from "./components/Popup";
import ShoppingCart from "./pages/ShoppingCart";
import Uploads from "./pages/Uploads";
import Scan from "./pages/scan";
import Home from "./pages/Home";

function PrivateRoute({ element, requiresAuth, ...props }) {
  const { user } = useAuth();

  if (requiresAuth && !user) {
    return <Navigate to="/login" />;
  }

  if (!requiresAuth && user) {
    return <Navigate to="/" />;
  }

  return React.cloneElement(element, props);
}

function Main() {
  const { user } = useAuth();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const loginSuccess = localStorage.getItem("loginSuccess");

    if (user && loginSuccess) {
      setShowPopup(true);
      localStorage.removeItem("loginSuccess");
    }
  }, [user]);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/analyzer/uploads" element={<Uploads />} />
        <Route path="/analyzer/scan" element={<Scan />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <LogIn />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/settings"
          element={<PrivateRoute element={<Settings />} requiresAuth />}
        />
        <Route
          path="/forgot-password"
          element={user ? <Navigate to="/" /> : <ForgotPassword />}
        />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/" element={<App />} />
      </Routes>

      {showPopup && (
        <Popup onClose={closePopup} confirmButtonText="Fermer">
          <p>Successful login! Welcome to our website!</p>
        </Popup>
      )}
    </>
  );
}

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
  requiresAuth: PropTypes.bool.isRequired,
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ProductProvider>
          {/* <CommentProvider> */}
          <Main />
          {/* </CommentProvider> */}
        </ProductProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
