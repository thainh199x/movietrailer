import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import classes from "./MovieList.module.css";
import ComedyMovieDetail from "./ComedyMovieDetail";
import ComedyMovies from "./ComedyMovies";

const ComedyList = () => {
  const API_KEY = "34eeae2a98434d678e368abbead93503";
  const [comedyMovie, setComedyMovie] = useState([]);
  const [selectedComedyMovie, setSelectedComedyMovie] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  const fetchComedyMovie = async () => {
    const {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
    );
    setComedyMovie(results);
    setSelectedComedyMovie(results[0]);
  };

  useEffect(() => {
    fetchComedyMovie();
  }, []);

  const renderComedyMovie = () =>
    comedyMovie.map((comedyMovie) => (
      <ComedyMovies
        key={comedyMovie.id}
        comedyMovie={comedyMovie}
        selectedComedyMovie={setSelectedComedyMovie}
        showDetail={setShowDetail}
      />
    ));

  return (
    <div>
      <div className={classes.container}>
        <h2>Comedy</h2>
        <div className={classes.flex}>{renderComedyMovie()}</div>
      </div>
      <div>
        {/* khi click vào hình ảnh phim thì sẽ hiển thị thông tin phim và trailer */}
        {showDetail === true ? (
          <ComedyMovieDetail selectedComedyData={selectedComedyMovie} />
        ) : null}
      </div>
    </div>
  );
};

export default ComedyList;
