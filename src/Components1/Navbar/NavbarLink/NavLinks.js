import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./NavLink.css";
import logo from "./logo-NavbarLink.png";
import closeButtonNavlink from "./close-button-NavLink.png";

import Links from "./Links/Links";

function NavLinks({ slide }) {
  console.log(slide);

  return (
    <div className="container NavLinks" style={slide}>
      <div className="NavLink-logo">
        <img src={logo} />
        <span>
          <img src={closeButtonNavlink} />
        </span>
      </div>
      <div className="LinkCards">
        <Links />
        <Links />
        <Links />
      </div>
    </div>
  );
}

export default NavLinks;
