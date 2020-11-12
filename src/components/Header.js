import React from "react";
import "../App.css";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header__contain">
      <div className="header">
        <Link to="/">
          <img className="header__logo" src={logo} alt="company logo" />
        </Link>
        <div className="header__icon">
          <Link
            to="/signup"
            className="header__iconAccount"
            style={{
              background: "#94c935",
              // background: "#2C436D",
              fontSize: "30px",
              border: "1px solid black",
              color: "white",
              border: "none",
            }}
          >
            {/* <AccountCircleIcon fontSize="large" color="primary" /> */}
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <div
            className="header__iconCart"
            style={{
              background: "#94c935",
              // background: "#2C436D",
              fontSize: "30px",
              border: "1px solid black",
              color: "white",
              border: "none",
            }}
          >
            {/* <ShoppingCartIcon fontSize="large" color="primary" /> */}
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
