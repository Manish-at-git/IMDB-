import React from "react";

import "./SignIn.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar as thinStar } from "@fortawesome/free-regular-svg-icons";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import WhatToWatch from "../WhatToWatch/WhatToWatch";

function SignIn() {
  const mystyle = {
    display: "flex",
  };
  return (
    <div className="Login-main">
      <WhatToWatch
        heading=""
        recommend=""
        title="Sign In"
        text="Sign In to access your account"
        icons={mystyle}
      />
      <div className="container Login-container">
        <FontAwesomeIcon icon={faAdd} className="Login-Icon" />
        <div className="Sign-in-to-watchlist">
          Sign in to access your Watchlist
        </div>
        <div className="Save-shows-and-movies">
          Save shows and movies to keep track of what you want to watch.
        </div>
        <a href="" className="Sign-in-to-IMDb">
          Sign in to IMDb
        </a>
      </div>
    </div>
  );
}

export default SignIn;
