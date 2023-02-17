import React from "react";

const Documentaries = ({ documentary, selectedDocumentary, showDetail }) => {
  return (
    <img
      onClick={() => {
        selectedDocumentary(documentary);
        showDetail(true);
      }}
      key={documentary.id}
      src={`https://image.tmdb.org/t/p/w500${documentary.backdrop_path}`}
      alt="poster"
    />
  );
};

export default Documentaries;
