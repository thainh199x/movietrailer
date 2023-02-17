import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import classes from "./MovieList.module.css";

const TrendingMovieDetail = ({ selectedTrendingData }) => {
  const [trailer, setTrailer] = useState([]);
  console.log(selectedTrendingData);

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
  };

  useEffect(() => {
    fetchTrailer(selectedTrendingData.id);
  }, [selectedTrendingData.id]);

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
            selectedTrendingData.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${selectedTrendingData.backdrop_path}`
              : `https://image.tmdb.org/t/p/w500${selectedTrendingData.poster_path}`
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
          {selectedTrendingData.title
            ? selectedTrendingData.title
            : selectedTrendingData.name}
        </h3>
        <p className={classes.releaseDate}>
          Release Date: {selectedTrendingData.release_date}
        </p>
        <p className={classes.vote}>
          Vote: {selectedTrendingData.vote_average}/10
        </p>
        <p className={classes.overview}>{selectedTrendingData.overview}</p>
      </div>
      <div>{renderTrailerHandler()}</div>
    </div>
  );
};
export default TrendingMovieDetail;
