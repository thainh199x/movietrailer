import React from "react";

const TrendingMovies = ({
  trendingMovie,
  selectedTrendingMovie,
  showDetail,
}) => {
  return (
    <img
      onClick={() => {
        selectedTrendingMovie(trendingMovie);
        showDetail(true);
      }}
      key={trendingMovie.id}
      src={`https://image.tmdb.org/t/p/w500${trendingMovie.backdrop_path}`}
      alt="poster"
    />
  );
};

export default TrendingMovies;
