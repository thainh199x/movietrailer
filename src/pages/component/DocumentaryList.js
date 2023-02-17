import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import classes from "./MovieList.module.css";
import Documentaries from "./Documentaries";
import DocumentaryDetail from "./DocumentaryDetail";

const DocumentaryList = () => {
  const API_KEY = "34eeae2a98434d678e368abbead93503";
  const [documentary, setDocumentary] = useState([]);
  const [selectedDocumentary, setSelectedDocumentary] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  const fetchDocumentary = async () => {
    const {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`
    );
    setDocumentary(results);
    setSelectedDocumentary(results[0]);
  };

  useEffect(() => {
    fetchDocumentary();
  }, []);

  const renderDocumentaryMovie = () =>
    documentary.map((documentary) => (
      <Documentaries
        key={documentary.id}
        documentary={documentary}
        selectedDocumentary={setSelectedDocumentary}
        showDetail={setShowDetail}
      />
    ));

  return (
    <div>
      <div className={classes.container}>
        <h2>Documentary</h2>
        <div className={classes.flex}>{renderDocumentaryMovie()}</div>
      </div>
      <div>
        {/* khi click vào hình ảnh phim thì sẽ hiển thị thông tin phim và trailer */}
        {showDetail === true ? (
          <DocumentaryDetail selectedDocumentaryData={selectedDocumentary} />
        ) : null}
      </div>
    </div>
  );
};

export default DocumentaryList;
