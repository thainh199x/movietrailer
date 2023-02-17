import React, { Fragment } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import classes from "./MovieList.module.css";
import OriginalMovies from "./OriginalMovies";
import OriginalMovieDetail from "./OriginalMovieDetail";

const OriginalList = () => {
  const API_KEY = "34eeae2a98434d678e368abbead93503";
  const [originalMovie, setOriginalMovie] = useState([]);
  const [selectedOriginalMovie, setSelectedOriginalMovie] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  const fetchOriginalMovie = async () => {
    const {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_network=123`
    );
    setOriginalMovie(results);
    setSelectedOriginalMovie(results[0]);
  };

  useEffect(() => {
    fetchOriginalMovie();
  }, []);

  const renderOriginalMovie = () =>
    originalMovie.map((originalMovie) => (
      <OriginalMovies
        key={originalMovie.id}
        originalMovie={originalMovie}
        selectedOriginalMovie={setSelectedOriginalMovie}
        showDetail={setShowDetail}
      />
    ));

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.flex}>{renderOriginalMovie()}</div>
      </div>
      <div>
        {/* khi click vào hình ảnh phim thì sẽ hiển thị thông tin phim và trailer */}
        {showDetail === true ? (
          <OriginalMovieDetail selectedOriginalData={selectedOriginalMovie} />
        ) : null}
      </div>
    </Fragment>
  );
};

export default OriginalList;
