import React from "react";
import Cards from "../Cards/Card";
import Grid from "../Grid/Grid";
import MoviePick from "../MoviePick/MoviePick";
import SignIn from "../SignIn/SignIn";
import SingleMovie from "../SingleMovie/SingleMovie";
import Slider from "../Slider/Slider";

function Home() {
  return (
    <div>
      {/* <Grid /> */}
      <MoviePick
        heading="What To Watch"
        recommend="Get More Recommendations"
        title="Top Picks"
        text="TV Shows and Movies just for you"
        url="https://imdb-api.com/en/API/Top250Movies/k_691fo2uh"
      />
      <SignIn />
      <MoviePick
        heading=""
        recommend=""
        title="In Theatre"
        text="TV Shows and Movies just for you"
        url="https://imdb-api.com/en/API/Top250Movies/k_691fo2uh"
      />

      {/* <Cards /> */}
      {/* <SingleMovie /> */}
      {/* <Slider /> */}
    </div>
  );
}

export default Home;
