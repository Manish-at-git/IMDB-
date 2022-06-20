import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { navbarToggle } from "../../redux/actions";

import { NavLink } from "react-router-dom";

// import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/images/logo.png";
import NavbarLogo2 from "../../assets/images/NavbarLogo2.png";

import "./Navbar.css";
import NavLinks from "./NavbarLink/NavLinks";

function Navbar() {
  const toggle = useSelector((state) => state.navbarToggle);
  const dispatch = useDispatch();
  let navbarNotToggled = true;

  const changeState = () => {
    dispatch(navbarToggle(navbarNotToggled));
  };

  console.log(toggle);
  let slide = {};
  toggle ? (slide = { position: "absolute", top: "-100%" }) : (slide = null);

  return (
    <>
      <div className="container-fluid Navbar-main">
        <nav className="container Navbar">
          <NavLink to="/">
            <img className="logo logo1" src={logo} />
          </NavLink>
          <span className="menu" onClick={changeState}>
            <FontAwesomeIcon icon={faBars} className="nav-icons" />
            Menu
          </span>
          <span className="Search">
            <input type="text" placeholder="Search IMDb" />
            <FontAwesomeIcon
              icon={faSearch}
              className="ico,ns"
              style={{
                color: "grey",
                backgroundColor: "#fff",
                padding: "9px 10px",
                borderRadius: "3px",
                borderBottomLeftRadius: "0px",
                borderTopLeftRadius: "0px",
                // borderLeft: "1px solid grey",
              }}
            />
          </span>
          <img className="logo logo2" src={NavbarLogo2} />
          <div className="verticle-line"></div>
          <a src="" className="watchlist">
            <FontAwesomeIcon icon={faBookmark} className="nav-icons" />
            Watchlist
          </a>
          <a src="" className="SignIn">
            Sign In
          </a>
          <span className="lang">
            EN
            <FontAwesomeIcon icon={faCaretDown} className="nav-icons" />
          </span>
        </nav>
        <NavLinks slide={slide} />
      </div>
    </>
  );
}

export default Navbar;
