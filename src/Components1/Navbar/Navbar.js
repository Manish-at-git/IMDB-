import React, { useState } from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "./logo.png";
import NavbarLogo2 from "./NavbarLogo2.png";
import "./Navbar.css";
import NavLinks from "./NavbarLink/NavLinks";
function Navbar() {
  const [state, setstate] = useState(true);

  const changeState = () => {
    setstate(!state);
  };

  console.log(state);

  let slide = {};

  state ? (slide = { position: "absolute", top: "-100%" }) : (slide = null);

  return (
    <>
      <nav className="container Navbar">
        <img className="logo logo1" src={logo} />
        <span className="menu" onClick={changeState}>
          {/* <FontAwesomeIcon icon="fa-solid fa-bars" className="icons" /> */}
          Menu
        </span>
        <span className="Search">
          <input type="text" placeholder="Search IMDb" />
        </span>
        <img className="logo logo2" src={NavbarLogo2} />
        <div className="verticle-line"></div>
        <a src="" className="watchlist">
          {/* <FontAwesomeIcon icon="fa-solid fa-bookmark" className="icons" /> */}
          Watchlist
        </a>
        <a src="" className="SignIn">
          Sign In
        </a>
        <span className="lang">
          EN
          {/* <FontAwesomeIcon icon="fa-solid fa-caret-down" className="icons" /> */}
        </span>
      </nav>
      <NavLinks slide={slide} />
    </>
  );
}

export default Navbar;
