import React from "react";
import { NavLink } from "react-router-dom";

import "./WhatToWatch.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function WhatToWatch(props) {
  return (
    <div className="MoviePick-heading container" style={props.style}>
      <div className="WhatToWatch">
        <h3 className="watch">{props.heading}</h3>
        <span className="recommend">
          <small>
            {props.recommend}
            <FontAwesomeIcon
              icon={faChevronRight}
              className="px-2"
              style={props.icons}
            />
          </small>
        </span>
      </div>
      <h4 className="MoviePick-Heading-Large d-flex align-items-center">
        <FontAwesomeIcon icon="fa-solid fa-pipe" />
        <NavLink
          className="NavLink"
          to="/grid"
          style={props.style}
          state={{ url: `${props.url}` }}
        >
          {props.title}
        </NavLink>
        <FontAwesomeIcon icon={faChevronRight} className="px-2" />
      </h4>
      <p className="MoviePick-Heading-small">{props.text}</p>
    </div>
  );
}

export default WhatToWatch;
