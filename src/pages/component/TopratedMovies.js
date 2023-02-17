import React from "react";

const TopratedMovies = ({
  topratedMovie,
  selectedTopratedMovie,
  showDetail,
}) => {
  return (
    <img
      onClick={() => {
        selectedTopratedMovie(topratedMovie);
        showDetail(true);
      }}
      key={topratedMovie.id}
      src={`https://image.tmdb.org/t/p/w500${topratedMovie.backdrop_path}`}
      alt="poster"
    />
  );
};

export default TopratedMovies;
