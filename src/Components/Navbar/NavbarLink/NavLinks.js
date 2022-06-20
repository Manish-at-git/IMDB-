import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./NavLink.css";
import logo from "../../../assets/images/logo-NavbarLink.png";
import closeButtonNavlink from "../../../assets/images/close-button-NavLink.png";
import Links from "./Links/Links";

import { useDispatch } from "react-redux";
import { navbarClicked } from "../../../redux/actions/index";

function NavLinks({ slide }) {
  const dispatch = useDispatch();

  const toggled = () => {
    dispatch(navbarClicked());
  };

  const Movies = [
    {
      link: "/top250",
      Name: "Top 250 Movies",
      category: "Top 250 Movies",
      url: "https://jsonplaceholder.typicode.com/users",
    },
    {
      link: "/popular",
      Name: "Rating",
      category: "Rating",
      url: "https://jsonplaceholder.typicode.com/comments",
    },
    {
      link: "/popular",
      Name: "Box Office",
      category: "Top Box Office",
      url: "https://jsonplaceholder.typicode.com/users",
    },
  ];
  const TV = [
    {
      link: "/top250",
      Name: "Top 250",
      category: "Top 250 TV Shows",
      url: "https://jsonplaceholder.typicode.com/users",
    },
    {
      link: "/popular",
      Name: "Top",
      category: "Popular TV Shows",
      url: "https://jsonplaceholder.typicode.com/comments",
    },
    {
      link: "/popular",
      Name: "Rating",
      category: "Rating",
      url: "https://jsonplaceholder.typicode.com/users",
    },
  ];
  const Awards = [
    {
      link: "/top250",
      Name: "Academy",
      category: "Academy Awards",
      url: "https://jsonplaceholder.typicode.com/users",
    },
    {
      link: "/popular",
      Name: "Others",
      category: "Other Awards",
      url: "https://jsonplaceholder.typicode.com/comments",
    },
  ];
  return (
    <div className="container NavLinks" style={slide}>
      <div className="NavLink-logo">
        <img src={logo} />
        <span className="close-button">
          <img src={closeButtonNavlink} onClick={toggled} />
        </span>
      </div>
      <div className="LinkCards">
        <Links title="Movies" List={Movies} />
        <Links title="TV Shows" List={TV} />
        <Links title="Awards" List={Awards} />
      </div>
    </div>
  );
}

export default NavLinks;
