import React from "react";
import "./style.css";
const Header = () => {
  return (
    <nav className="header_container navbar">
      <button className="btn btn-primary me-2">Go back to Source</button>
      <button className="btn btn-primary">Go back to Question</button>
      <div className="justify-content-center container">
        <a href="/" className="d-flex navbar-brand">
          <span className="header">Welcome to Cheater glasses</span>
        </a>
      </div>
    </nav>
  );
}

export default Header;