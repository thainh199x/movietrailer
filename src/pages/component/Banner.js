import React, { Fragment } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import classes from "./Banner.module.css";
import BannerShow from "./BannerShow";

const Banner = () => {
  const API_KEY = "34eeae2a98434d678e368abbead93503";
  const [banner, setBanner] = useState([]);

  const fetchBanner = async () => {
    const {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_network=123`
    );
    setBanner(results);
  };

  useEffect(() => {
    fetchBanner();
  }, []);
  console.log(banner);

  const renderBanner = () => {
    let randomMovie = [banner[Math.floor(Math.random() * banner.length - 1)]];
    console.log(randomMovie);
    return (
      <Fragment>
        <BannerShow banner={banner} random={randomMovie} />
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div className={classes.banner}>{renderBanner()}</div>
    </Fragment>
  );
};

export default Banner;
