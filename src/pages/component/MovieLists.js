import React, { Fragment } from "react";
import TrendingList from "./TrendingList";
import TopratedList from "./TopratedList";
import OriginalList from "./OriginalList";
import ActionList from "./ActionList";
import ComedyList from "./ComedyList";
import HorrorList from "./HorrorList";
import RomanceList from "./RomanceList";
import DocumentaryList from "./DocumentaryList";

const MovieLists = () => {
  return (
    <Fragment>
      <OriginalList />
      <TrendingList />
      <TopratedList />
      <ActionList />
      <ComedyList />
      <HorrorList />
      <RomanceList />
      <DocumentaryList />
    </Fragment>
  );
};

export default MovieLists;
