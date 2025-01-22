import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css"; // Custom styles
import Footer from '../components/Footer';

const PageNotFound = () => {
  return (
    <><div className="page-not-found">
      <div className="content">
        <h1 className="error-code">404</h1>
        <p className="error-message">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="home-button">
          Back to Home
        </Link>
      </div>
      <div className="glow-circle"></div>
    </div>
      <Footer /> {/* Custom Footer */}
    </>
  );
};

export default PageNotFound;
