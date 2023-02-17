import React from "react";
import NavBar from "../component/NavBar";
import Banner from "../component/Banner";
import MovieLists from "../component/MovieLists";

function Browse() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <MovieLists />
    </div>
  );
}

export default Browse;
