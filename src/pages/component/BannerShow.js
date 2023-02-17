import React from "react";
import classes from "./Banner.module.css";

const BannerShow = (props) => {
  console.log(props);
  if (props.banner.length !== 0) {
    return (
      <div className={classes.banner}>
        <div>
          <img
            className={classes.imgBanner}
            src={
              props.random[0].backdrop_path !== null
                ? `https://image.tmdb.org/t/p/w500${props.random[0].backdrop_path}`
                : `https://image.tmdb.org/t/p/w500${props.random[0].poster_path}
              `
            }
            alt="banner"
          />
        </div>
        <div className={classes.bannerInfo}>
          <h1>{props.random[0].name || props.random[0].title}</h1>
          {/* <div>
            <button>Play</button>
            <button>My List</button>
          </div> */}
          <p>{props.random[0].overview}</p>
        </div>
      </div>
    );
  } else {
    return <div>Can not find banner</div>;
  }
};

export default BannerShow;
