import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { loadMovieList } from "../../redux/actions";
import { NavLink } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useSelector, useDispatch } from "react-redux";

// import required modules
import { Pagination, Navigation } from "swiper";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import WhatToWatch from "../WhatToWatch/WhatToWatch";
import Card from "../Cards/Card";
import img from "./poster.png";
import "./MoviePick.css";

import {
  faAngleRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
function MoviePick(props) {
  const data = useSelector((state) => state.images);
  // const isLoading = useSelector((state) => state.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovieList(props.url));
  }, []);

  // let data = dataApi[0].items;

  return (
    <div className="container-fluid" style={{ background: "black" }}>
      <div className="container MoviePick">
        <div className="MoviePick-Heading">
          <WhatToWatch
            heading={props.heading}
            recommend={props.recommend}
            title={props.title}
            text={props.text}
            url={props.url}
          />

          <div className="MoviePick-Cards">
            {setTimeout(() => {
              {
                data ? (
                  <Swiper
                    slidesPerView={5}
                    spaceBetween={0}
                    slidesPerGroup={2}
                    loop={false}
                    loopFillGroupWithBlank={false}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                    {data.slice(0, 15).map((item) => (
                      <SwiperSlide>
                        {console.log(item)}
                        <NavLink
                          to={`/title/${item.id}`}
                          state={item.id}
                          className="NavLink"
                        >
                          <Card item={item} />
                        </NavLink>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <h2>No Movies</h2>
                );
              }
            }, 5000)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePick;
