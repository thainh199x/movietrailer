import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import classes from "./MovieList.module.css";
import HorrorMovieDetail from "./HorrorMovieDetail";
import HorrorMovies from "./HorrorMovies";

const HorrorList = () => {
  const API_KEY = "34eeae2a98434d678e368abbead93503";
  const [horrorMovie, setHorrorMovie] = useState([]);
  const [selectedHorrorMovie, setSelectedHorrorMovie] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  const fetchHorrorMovie = async () => {
    const {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
    );
    setHorrorMovie(results);
    setSelectedHorrorMovie(results[0]);
  };

  useEffect(() => {
    fetchHorrorMovie();
  }, []);

  const renderHorrorMovie = () =>
    horrorMovie.map((horrorMovie) => (
      <HorrorMovies
        key={horrorMovie.id}
        horrorMovie={horrorMovie}
        selectedHorrorMovie={setSelectedHorrorMovie}
        showDetail={setShowDetail}
      />
    ));

  return (
    <div>
      <div className={classes.container}>
        <h2>Horror</h2>
        <div className={classes.flex}>{renderHorrorMovie()}</div>
      </div>
      <div>
        {/* khi click vào hình ảnh phim thì sẽ hiển thị thông tin phim và trailer */}
        {showDetail === true ? (
          <HorrorMovieDetail selectedHorrorData={selectedHorrorMovie} />
        ) : null}
      </div>
    </div>
  );
};

export default HorrorList;
