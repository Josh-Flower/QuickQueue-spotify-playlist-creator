import React from "react";
import styles from "./SearchResults.module.css";
import Tracklist from "../TrackList/TrackList.js";

function SearchResults(props) {
  return (
    <div className={styles.SearchResults}>
      {/* <!-- Add a TrackList component --> */}
      <Tracklist
        userSearchResults={props.userSearchResults}
        isRemoval={true}
        onAdd={props.onAdd}
      />
    </div>
  );
}

export default SearchResults;