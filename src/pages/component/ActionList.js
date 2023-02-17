import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import classes from "./MovieList.module.css";
import ActionMovies from "./ActionMovies";
import ActionMovieDetail from "./ActionMovieDetail";

const ActionList = () => {
  const API_KEY = "34eeae2a98434d678e368abbead93503";
  const [actionMovie, setActionMovie] = useState([]);
  const [selectedActionMovie, setSelectedActionMovie] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  const fetchActionMovie = async () => {
    const {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
    );
    setActionMovie(results);
    setSelectedActionMovie(results[0]);
  };

  useEffect(() => {
    fetchActionMovie();
  }, []);

  const renderActionMovie = () =>
    actionMovie.map((actionMovie) => (
      <ActionMovies
        key={actionMovie.id}
        actionMovie={actionMovie}
        selectedActionMovie={setSelectedActionMovie}
        showDetail={setShowDetail}
      />
    ));

  return (
    <div>
      <div className={classes.container}>
        <h2>Action</h2>
        <div className={classes.flex}>{renderActionMovie()}</div>
      </div>
      <div>
        {/* khi click vào hình ảnh phim thì sẽ hiển thị thông tin phim và trailer */}
        {showDetail === true ? (
          <ActionMovieDetail selectedActionData={selectedActionMovie} />
        ) : null}
      </div>
    </div>
  );
};

export default ActionList;
