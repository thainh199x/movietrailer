import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import classes from "./MovieList.module.css";

const TopratedMovieDetail = ({ selectedTopratedData }) => {
  const [trailer, setTrailer] = useState([]);
  console.log(selectedTopratedData);

  const API_KEY = "34eeae2a98434d678e368abbead93503";

  const opts = {
    height: "400",
    width: "600",
    playerVars: {
      autoplay: 0,
    },
  };

  const fetchTrailer = async (trailerId) => {
    const {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/movie/${trailerId}/videos?api_key=${API_KEY}`
    );
    setTrailer(results);
    console.log(trailer);
  };

  useEffect(() => {
    fetchTrailer(selectedTopratedData.id);
  }, [selectedTopratedData.id]);

  console.log(trailer);

  const renderTrailerHandler = () => {
    // khi có trailer thì hiển thị trailer
    if (trailer.length > 0) {
      const trailerKey = trailer[0].key;
      console.log(trailerKey);
      return <YouTube videoId={trailerKey} opts={opts} />;
    }
    // khi không có trailer thì hiển thị poster hoặc backdrop
    else {
      return (
        <img
          height="400"
          width="600"
          alt="no found"
          src={
            selectedTopratedData.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${selectedTopratedData.backdrop_path}`
              : `https://image.tmdb.org/t/p/w500${selectedTopratedData.poster_path}`
          }
        />
      );
    }
  };
  // hiển thị thông tin chi tiết phim
  return (
    <div className={classes.detailTrailer}>
      <div className={classes.detail}>
        <h3>
          {selectedTopratedData.title
            ? selectedTopratedData.title
            : selectedTopratedData.name}
        </h3>
        <p className={classes.releaseDate}>
          Release Date: {selectedTopratedData.release_date}
        </p>
        <p className={classes.vote}>
          Vote: {selectedTopratedData.vote_average}/10
        </p>
        <p className={classes.overview}>{selectedTopratedData.overview}</p>
      </div>
      <div>{renderTrailerHandler()}</div>
    </div>
  );
};
export default TopratedMovieDetail;
