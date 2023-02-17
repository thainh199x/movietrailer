import React, { useState } from "react";
import SearchTrailer from "./SearchTrailer";
import classes from "./SearchPage.module.css";

const ResultList = ({ result, showTrailer, setShowTrailer }) => {
  const [selectedImage, setSelectedImage] = useState({});

  return (
    <div className={classes.resultContainer}>
      <h2>Search Results</h2>

      <div className={classes.resultFlex}>
        {result.map((item) => (
          <div
            className={classes.imageContainer}
            key={item.id}
            onClick={() => {
              setSelectedImage(item);
              setShowTrailer(true);
            }}
          >
            {item.backdrop_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                alt=""
              ></img>
            ) : (
              <p>{item.title}</p>
            )}
          </div>
        ))}
      </div>
      {/* show trailer if click on image */}
      {showTrailer === true ? (
        <SearchTrailer selectedImage={selectedImage} />
      ) : null}
    </div>
  );
};

export default ResultList;
