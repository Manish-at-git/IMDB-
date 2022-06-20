import React from "react";
import { NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Links.css";

function Links(props) {
  const { title, List } = props;

  return (
    <div className="Link">
      <h4 className="Heading">
        {/* <FontAwesomeIcon icon="fa-solid fa-film-simple" /> */}
        {title}
      </h4>

      {List.map((item, id) => (
        <NavLink
          className="links"
          to={item.link}
          state={{
            title: `${item.category}`,
            url: `${item.url}`,
          }}
          key={id}
        >
          {item.Name}
        </NavLink>
      ))}
    </div>
  );
}

export default Links;
