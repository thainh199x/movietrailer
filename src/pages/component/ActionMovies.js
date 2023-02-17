import React from "react";

const ActionMovies = ({ actionMovie, selectedActionMovie, showDetail }) => {
  return (
    <img
      onClick={() => {
        selectedActionMovie(actionMovie);
        showDetail(true);
      }}
      key={actionMovie.id}
      src={`https://image.tmdb.org/t/p/w500${actionMovie.backdrop_path}`}
      alt="poster"
    />
  );
};

export default ActionMovies;
