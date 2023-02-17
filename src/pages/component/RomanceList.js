import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import classes from "./MovieList.module.css";
import RomanceMovieDetail from "./RomanceMovieDetail";
import RomanceMovies from "./RomanceMovies";

const RomanceList = () => {
  const API_KEY = "34eeae2a98434d678e368abbead93503";
  const [romanceMovie, setRomanceMovie] = useState([]);
  const [selectedRomanceMovie, setSelectedRomanceMovie] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  const fetchRomanceMovie = async () => {
    const {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`
    );
    setRomanceMovie(results);
    setSelectedRomanceMovie(results[0]);
  };

  useEffect(() => {
    fetchRomanceMovie();
  }, []);

  const renderRomanceMovie = () =>
    romanceMovie.map((romanceMovie) => (
      <RomanceMovies
        key={romanceMovie.id}
        romanceMovie={romanceMovie}
        selectedRomanceMovie={setSelectedRomanceMovie}
        showDetail={setShowDetail}
      />
    ));

  return (
    <div>
      <div className={classes.container}>
        <h2>Romance</h2>
        <div className={classes.flex}>{renderRomanceMovie()}</div>
      </div>
      <div>
        {/* khi click vào hình ảnh phim thì sẽ hiển thị thông tin phim và trailer */}
        {showDetail === true ? (
          <RomanceMovieDetail selectedRomanceData={selectedRomanceMovie} />
        ) : null}
      </div>
    </div>
  );
};

export default RomanceList;
