import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import classes from "./MovieList.module.css";
import TrendingMovies from "./TrendingMovies";
import TrendingMovieDetail from "./TrendingMovieDetail";

const TrendingList = () => {
  const API_KEY = "34eeae2a98434d678e368abbead93503";
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [selectedTrendingMovie, setSelectedTrendingMovie] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  const fetchTrendingMovie = async () => {
    const {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
    );
    setTrendingMovie(results);
    setSelectedTrendingMovie(results[0]);
  };

  useEffect(() => {
    fetchTrendingMovie();
  }, []);

  const renderTrendingMovie = () =>
    trendingMovie.map((trendingMovie) => (
      <TrendingMovies
        key={trendingMovie.id}
        trendingMovie={trendingMovie}
        selectedTrendingMovie={setSelectedTrendingMovie}
        showDetail={setShowDetail}
      />
    ));

  return (
    <div>
      <div className={classes.container}>
        <h2>Trending</h2>
        <div className={classes.flex}>{renderTrendingMovie()}</div>
      </div>
      <div>
        {/* khi click vào hình ảnh phim thì sẽ hiển thị thông tin phim và trailer */}
        {showDetail === true ? (
          <TrendingMovieDetail selectedTrendingData={selectedTrendingMovie} />
        ) : null}
      </div>
    </div>
  );
};

export default TrendingList;
