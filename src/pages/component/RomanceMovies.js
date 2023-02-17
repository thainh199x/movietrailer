import React from "react";

const RomanceMovies = ({ romanceMovie, selectedRomanceMovie, showDetail }) => {
  return (
    <img
      onClick={() => {
        selectedRomanceMovie(romanceMovie);
        showDetail(true);
      }}
      key={romanceMovie.id}
      src={`https://image.tmdb.org/t/p/w500${romanceMovie.backdrop_path}`}
      alt="poster"
    />
  );
};

export default RomanceMovies;
