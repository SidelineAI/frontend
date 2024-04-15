import styles from "../styles/header.module.scss";
import search from "../assets/icons/Search.svg";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const initialValues = {
  query: "",
  num_vids: 5,
  player_id: ""
};

export default function ProfileHeader({ setVideo }) {

  const { id } = useParams();

  const [searchParameters, setSearchParameters] = useState(initialValues);

  const updateSearchParameters = (newParams) => {
    setSearchParameters(newParams);
  };

  const keyPressed = (e) => {
    if (e.key === "Enter") {
      axios.post("http://127.0.0.1:5000/search/video", searchParameters, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(res => {
        setVideo(res.data);  // Set sorted videos
      })
      .catch(err => console.log(err));
    }
  };

  return (
    <div
      className={`${styles.container} ${
        styles.lower
      }`}
    >
      <div className={styles.sideline}>
        Side<span className={styles.red}>l</span>ine
      </div>
      <div className={styles.searchContainer}>
        <img src={search} alt="search" className={styles.searchIcon} />
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Search for a video"
          value={searchParameters.query}
          onChange={(e) => {
            // console.log(searchParameters)
            updateSearchParameters({
              ...searchParameters,
              query: e.target.value,
              player_id: id
            });
          }}
          onKeyDown={keyPressed}
        />
      </div>
    </div>
  );
}
