import React from "react";
import "./Categories.css";
function Categories() {
  return (
    <div className="MovieList-sideBar">
      <div className="Sidebar-header">
        <h5>You Have Seen</h5>
        <span>
          <span className="bold">0</span>/250 (0%)
        </span>
        <div className="Sidebar-check">
          <input type="checkbox" />
          <label>Hide titles I've seen</label>
        </div>
      </div>
      <hr />
      <div className="category">
        <h6>Top Rated Movies by Genre</h6>
        {[
          "Action",
          "Adventure",
          "Animation",
          "Biography",
          "Comedy",
          "Crime",
          "Drama",
          "Family",
          "Fantasy",
          "Film-Noir",
          "History",
          "Horror",
          "Music",
          "Musical",
          "Mystery",
          "Romance",
          "Sci-Fi",
          "Sport",
          "Thriller",
          "Western",
        ].map((item) => (
          <small className="categoryList">{item}</small>
        ))}
      </div>
    </div>
  );
}

export default Categories;
