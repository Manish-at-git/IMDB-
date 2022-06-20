import React from "react";

function SingleMovie() {
  return (
    <>
      <div
        className="SingleMovie-main container-fluid"
        style={{ border: "1px solid red" }}
      >
        <div
          className="SingleMovie container"
          style={{ border: "1px solid red" }}
        >
          <div className="SingleMovie-heading d-flex justify-content-between">
            <div className="SingleMovie-heading-title">
              <h1>Obi-Wan Kenobi</h1>
            </div>
            <div className="SingleMovie-heading-info">
              <div className="heading">
                <span className="block">IMDB RATING</span>
                <span className="block">
                  <span className="rating"> 7.9/10</span>
                </span>
              </div>
              <div className="heading">
                <span className="block">YOUR RATING</span>
                <span className="block">
                  <span className="rating"> Rate</span>
                </span>
              </div>
              <div className="heading">
                <span className="block">POPULARITY</span>
                <span className="block">
                  <span className="rating"> 1239</span>
                </span>
              </div>
            </div>
          </div>
          <div className="SingleMovie-card">
            <div className="SingleMovie-poster card-element"></div>
            <div className="SingleMovie-trailer card-element"></div>
            <div className="SingleMovie-media card-element ">
              <div className="SingleMovie-images "></div>
              <div className="SingleMovie-images"></div>
            </div>
          </div>
          <div className="SingleMovie-info">
            <div className="categories">
              <span className="categories-action">Action</span>
              <span className="categories-adventure">Adventure</span>
              <span className="categories-comedy">Comedy</span>
            </div>
            <div className="description">
              From visionary director Robert Eggers comes The Northman, an
              action-filled epic that follows a young Viking prince on his quest
              to avenge his father's murder.
            </div>
            <hr className="description-line" />
            <div className="director">
              <span className="director-bold">Director</span>
              <span className="director-blue"> Robert Eggers</span>
            </div>
            <hr className="description-line" />
            <div className="director">
              <span className="director-bold">Director</span>
              <span className="director-blue"> Robert Eggers</span>
            </div>
            <hr className="description-line" />
            <div className="director">
              <span className="director-bold">Director</span>
              <span className="director-blue"> Robert Eggers</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">hello</div>
    </>
  );
}

export default SingleMovie;
