import React from "react";

const HorrorMovies = ({ horrorMovie, selectedHorrorMovie, showDetail }) => {
  return (
    <img
      onClick={() => {
        selectedHorrorMovie(horrorMovie);
        showDetail(true);
      }}
      key={horrorMovie.id}
      src={`https://image.tmdb.org/t/p/w500${horrorMovie.backdrop_path}`}
      alt="poster"
    />
  );
};

export default HorrorMovies;
