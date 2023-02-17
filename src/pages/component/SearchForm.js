import React, { Fragment, useState } from "react";
import axios from "axios";
import classes from "./SearchPage.module.css";
import ResultList from "./ResultList";

const SearchForm = () => {
  const API_KEY = "34eeae2a98434d678e368abbead93503";

  const [searchKey, setSearchKey] = useState("");
  const [result, setResult] = useState([]);
  const [showTrailer, setShowTrailer] = useState(false);

  const inputHandler = (event) => {
    event.preventDefault();
    setSearchKey(event.target.value);
  };

  const fetchData = async () => {
    const {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en&query=${searchKey}`
    );
    setResult(results);
    console.log(results);
  };

  const searchHandler = () => {
    if (searchKey.trim().length > 0) {
      fetchData();
      console.log(result);
    } else {
      alert("nothing found");
    }
  };

  return (
    <Fragment>
      <div className={classes.form}>
        <div className={classes.input}>
          <input
            type="text"
            className={classes.inputText}
            onChange={inputHandler}
          ></input>
          <button
            type="submit"
            className={classes.inputBtn}
            onClick={() => {
              searchHandler();
              // ẩn đi trailer trước đó (nếu có)
              setShowTrailer(false);
            }}
          >
            <svg
              className="svg-inline--fa fa-search fa-w-16"
              fill="#ccc"
              aria-hidden="true"
              data-prefix="fas"
              data-icon="search"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
            </svg>
          </button>
        </div>
        <div className={classes.btns}>
          {/* tải lại trang khi bấm vào reset */}
          <a href="../search" className={classes.reset}>
            RESET
          </a>
          <button
            type="submit"
            className={classes.searchBtn}
            onClick={() => {
              searchHandler();
              // ẩn đi trailer trước đó (nếu có)
              setShowTrailer(false);
            }}
          >
            SEARCH
          </button>
        </div>
      </div>
      <ResultList
        key={Math.random()}
        result={result}
        setShowTrailer={setShowTrailer}
        showTrailer={showTrailer}
      />
    </Fragment>
  );
};

export default SearchForm;
