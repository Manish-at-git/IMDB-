import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavLink } from "react-router-dom";

import "./Links.css";

function Links() {
  return (
    <div className="Link">
      <h3 className="Heading">
        {/* <FontAwesomeIcon icon="fa-solid fa-film-simple" /> */}
        Movie
      </h3>
      {/* <span className="links">Popular Movies</span>
      <span className="links">Box Office </span>
      <span className="links">Rating</span> */}

      {/* <NavLink to="/">Home</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
      <NavLink to="/contact">Contact</NavLink> */}
    </div>
  );
}

export default Links;
