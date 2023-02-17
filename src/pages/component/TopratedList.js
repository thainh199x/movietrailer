import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import classes from "./MovieList.module.css";
import TopratedMovies from "./TopratedMovies";
import TopratedMovieDetail from "./TopratedMovieDetail";

const TopratedList = () => {
  const API_KEY = "34eeae2a98434d678e368abbead93503";
  const [topratedMovie, setTopratedMovie] = useState([]);
  const [selectedTopratedMovie, setSelectedTopratedMovie] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  const fetchTopratedMovie = async () => {
    const {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`
    );
    setTopratedMovie(results);
    setSelectedTopratedMovie(results[0]);
  };

  useEffect(() => {
    fetchTopratedMovie();
  }, []);

  const renderTopratedMovie = () =>
    topratedMovie.map((topratedMovie) => (
      <TopratedMovies
        key={topratedMovie.id}
        topratedMovie={topratedMovie}
        selectedTopratedMovie={setSelectedTopratedMovie}
        showDetail={setShowDetail}
      />
    ));

  return (
    <div>
      <div className={classes.container}>
        <h2>Toprated</h2>
        <div className={classes.flex}>{renderTopratedMovie()}</div>
      </div>
      <div>
        {/* khi click vào hình ảnh phim thì sẽ hiển thị thông tin phim và trailer */}
        {showDetail === true ? (
          <TopratedMovieDetail selectedTopratedData={selectedTopratedMovie} />
        ) : null}
      </div>
    </div>
  );
};

export default TopratedList;
