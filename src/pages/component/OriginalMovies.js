import React from "react";

const OriginalMovies = ({
  originalMovie,
  selectedOriginalMovie,
  showDetail,
}) => {
  return (
    <img
      onClick={() => {
        selectedOriginalMovie(originalMovie);
        showDetail(true);
      }}
      key={originalMovie.id}
      src={`https://image.tmdb.org/t/p/w500${originalMovie.poster_path}`}
      alt="poster"
    />
  );
};

export default OriginalMovies;
