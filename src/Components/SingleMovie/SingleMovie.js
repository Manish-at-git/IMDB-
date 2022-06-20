import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as thinStar } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faStar as solidStar,
} from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import img from "./poster.png";
import img2 from "./trailer.png";
import "./SingleMovie.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { loadMovieList } from "../../redux/actions";
import WhatToWatch from "../WhatToWatch/WhatToWatch";
import Cast from "./Cast/Cast";

function SingleMovie() {
  const location = useLocation();

  const data = useSelector((state) => state.images);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      loadMovieList("https://imdb-api.com/en/API/Title/k_691fo2uh/tt1375666")
    );
  }, []);

  // useEffect(() => {
  //   fetch("https://imdb-api.com/en/API/Title/k_aw8n1uz1/tt1375666")
  //     .then((response) => response.json())
  //     .then((data) => setApiData(data));
  // }, []);

  console.log(data[0]);

  let movie = data[0];

  const style = { color: "black", fontSize: "28px" };

  return (
    <>
      <div className="SingleMovie-main1 container-fluid">
        <div className="SingleMovie container">
          <div className="SingleMovie-heading d-flex justify-content-between">
            <div className="SingleMovie-heading-title">
              {movie ? <h1> {movie.title}</h1> : <h1>no movie</h1>}
            </div>
            <div className="SingleMovie-heading-info">
              <div className="heading">
                <span className="block">IMDB RATING</span>
                <span className="block">
                  <FontAwesomeIcon
                    icon={solidStar}
                    size="lg"
                    style={{ color: "#f5c518" }}
                  />
                  <span className="rating">
                    {" "}
                    <span className="boldLarge">{movie.imDbRating}</span>/10
                  </span>
                </span>
              </div>
              <div className="heading">
                <span className="block">YOUR RATING</span>
                <span className="block">
                  <FontAwesomeIcon
                    icon={thinStar}
                    size="lg"
                    style={{ color: "#5799ef" }}
                  />
                  <span className="rating" style={{ color: "#5799ef" }}>
                    {" "}
                    Rate
                  </span>
                </span>
              </div>
              <div className="heading">
                <span className="block">POPULARITY</span>
                <span className="block">
                  <FontAwesomeIcon
                    icon={faChartLine}
                    size="lg"
                    style={{ color: "green" }}
                  />
                  {/* <span className="rating"> {props.imDbRating}</span> */}
                </span>
              </div>
            </div>
          </div>
          <div className="SingleMovie-card">
            <div className="SingleMovie-poster card-element">
              <img src={movie.image} />
            </div>
            <div className="SingleMovie-trailer card-element">
              <div className="embed-responsive embed-responsive-4by3">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.imdb.com/video/vi2959588889"
                ></iframe>
              </div>
            </div>
            <div className="SingleMovie-media card-element ">
              <div className="SingleMovie-images card-element">
                <FontAwesomeIcon
                  className="icon"
                  icon={faImages}
                  size="lg"
                  style={{ color: "white" }}
                />
                <small>Images</small>
              </div>
              <div className="SingleMovie-images">
                <FontAwesomeIcon
                  className="icon"
                  icon={faFilm}
                  size="lg"
                  style={{ color: "white" }}
                />
                <small>Videos</small>
              </div>
            </div>
          </div>
          <div className="info">
            <div className="SingleMovie-info" style={{ width: "60%" }}>
              <div className="categories">
                {movie ? (
                  <>
                    {movie.genreList.map((item) => (
                      <span className="categories-action">{item.value}</span>
                    ))}
                  </>
                ) : null}
              </div>
              <div className="description">{movie.plot}</div>
              <hr className="description-line" />
              <div className="director">
                <span className="director-bold">Director</span>
                <span className="director-blue"> {movie.directors}</span>
              </div>
              <hr className="description-line" />
              <div className="director">
                <span className="director-bold">Writer</span>
                <span className="director-blue"> {movie.writers}</span>
              </div>
              <hr className="description-line" />
              <div className="director">
                <span className="director-bold">Stars</span>
                <span className="director-blue"> {movie.stars}</span>
              </div>
            </div>
            <div
              className="SingleMovie-info watchlist-bookmark"
              style={{ width: "40%" }}
            >
              <div className="See-Showtime">
                <FontAwesomeIcon icon={faPlus} size="md" />
                {"  "}
                See Showtime
              </div>
              <div className="Watchlist">
                <span>
                  <FontAwesomeIcon icon={faPlus} size="md" />
                  {"  "}
                  Add to Watchlist{" "}
                </span>
                <FontAwesomeIcon icon={faAngleDown} size="md" />
              </div>
              <div className="bookmark-down">
                <span>
                  <b>
                    <span className="boldLarge">2.1K</span>
                  </b>
                  User reviews
                </span>
                <span>
                  <b>
                    <span className="boldLarge">320</span>
                  </b>
                  Critic reviews
                </span>
                <span>
                  <b>
                    <span
                      className="boldLarge"
                      style={{ backgroundColor: "green", color: "white" }}
                    >
                      {movie.metacriticRating}
                    </span>
                  </b>
                  Metascore
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div
          className="container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="SingleMovie-main2 container" style={{ width: "60%" }}>
            <div className="">
              <Swiper
                slidesPerView={4}
                spaceBetween={0}
                slidesPerGroup={1}
                // loop={true}
                // loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="slider-image">
                    <img src="https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6751_AL_.jpg" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-image">
                    <img src="https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6751_AL_.jpg" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-image">
                    <img src="https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6751_AL_.jpg" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-image">
                    <img src="https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6751_AL_.jpg" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-image">
                    <img src="https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6751_AL_.jpg" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-image">
                    <img src="https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6751_AL_.jpg" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div>
              <div className="gridCast">
                {data ? (
                  <>
                    {movie.actorList.slice(0, 8).map((item) => (
                      <div style={{ padding: "10px" }}>
                        <div className="Cast-item inline">
                          <img
                            src={item.image}
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                              borderRadius: "50%",
                              marginRight: "10px",
                            }}
                          />
                        </div>
                        <div className="cast-img inline">
                          <div className="Cast-Name">{item.name}</div>
                          <div className="Cast-desc">
                            {item.asCharacter.slice(0, 40)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <h2>No Movies</h2>
                )}
              </div>
            </div>
            <div className="container">
              <hr className="description-line" />
              <div className="director">
                <span className="director-bold">Director</span>
                <span className="director-blue"> {movie.directors}</span>
              </div>
              <hr className="description-line" />
              <div className="director">
                <span className="director-bold">Writer</span>
                <span className="director-blue"> {movie.writers}</span>
              </div>
              <hr className="description-line" />
              <div className="director">
                <span className="director-bold">Stars</span>
                <span className="director-blue"> {movie.stars}</span>
              </div>
            </div>
          </div>
          <div className="single-sidebar">
            {movie.similars.slice(0, 10).map((item) => (
              <div className="single-sidebar-box">
                <div className="watched-series">
                  <small className="watched-series-span">{item.title}</small>
                  <small className="created-year-span">{item.imDbRating}</small>
                </div>
                <img src={item.image} className="created-year" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default SingleMovie;
