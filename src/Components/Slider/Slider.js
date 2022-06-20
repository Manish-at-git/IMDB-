import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";

import { Carousel } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Card from "../Cards/Card";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

import "./Slider.css";
import CarouselCard from "./CarouselCard/CarouselCard";

function Slider() {
  return (
    <div className="container-fluid" style={{ background: "black" }}>
      <div className="container MoviePick">
        {/* <div className="MoviePick-Heading"> */}
        {/* <h4 className="MoviePick-Heading-Large">
            <FontAwesomeIcon icon={faPlay} style={{ color: "white" }} />
            Top Picks
          </h4>
          <p className="MoviePick-Heading-small">
            TV Shows and Movies just for you
          </p> 
          <div className="MoviePick-Cards">
            <Carousel>
              <Carousel.Item>
                <div className="item"></div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="item"></div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="item"></div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="item"></div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="item"></div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="item"></div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="item"></div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="item"></div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="item"></div>
              </Carousel.Item>
            </Carousel>
          </div> */}
        {/* </div> */}
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          slidesPerGroup={1}
          loop={false}
          loopFillGroupWithBlank={false}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="trailer-Swiper"
        >
          {Array.from({ length: 10 }, (_, i) => (
            <SwiperSlide className="trailer-swiperSlide">
              {/* <h1 className="carouselCard">Hell</h1> */}
              <CarouselCard className="carouselCard" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
