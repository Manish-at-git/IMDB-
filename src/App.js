import "./App.css";
// import "swiper/css/bundle";
import ReactDOM from "react-dom/client";
import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Blogs from "./Components1/Blog/Blog";
// import Contact from "./Components1/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import MovieList from "./Components/MovieList/MovieList";
import Home from "./Components/Pages/Home";
import { useEffect } from "react";
// // import SingleMovie from "./Components/demo";
// import Slider from "./Slider/Slider";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Card, Col, Button } from "react-bootstrap";
// import img1 from "./poster.png";
// import Blogs from "./Components1/Blog/Blog";

import configureStore from "./redux/store/store";
import Grid from "./Components/Grid/Grid";
import SingleMovie from "./Components/SingleMovie/SingleMovie";
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <BrowserRouter>
          <Navbar />
          {/* <SingleMovie /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="top250" element={<MovieList />} />
            <Route path="popular" element={<MovieList />} />
            <Route path="grid" element={<Grid />} />
            <Route path="/title/:id" element={<SingleMovie />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    </Provider>
  );
}
export default App;
