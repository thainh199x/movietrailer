import React from "react";

const ComedyMovies = ({ comedyMovie, selectedComedyMovie, showDetail }) => {
  return (
    <img
      onClick={() => {
        selectedComedyMovie(comedyMovie);
        showDetail(true);
      }}
      key={comedyMovie.id}
      src={`https://image.tmdb.org/t/p/w500${comedyMovie.backdrop_path}`}
      alt="poster"
    />
  );
};

export default ComedyMovies;
