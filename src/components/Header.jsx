import styles from "../styles/header.module.scss";
import search from "../assets/icons/Search.svg";
import filter from "../assets/icons/Filter.svg";
import { useState } from "react";
import Filter from "./Filter";
import { useLocation } from "react-router-dom";
import axios from "axios";

const initialValues = {
  stats_filter: {
    avg_field_goal_pct: "0",
    avg_free_throw_pct: "0",
    avg_three_point_pct: "0",
    avg_points: "0",
    avg_rebounds: "0",
    avg_assists: "0",
    position: "",
    weight: "",
    height: "",
    age: "",
  },
  categorical_query: "",
  num_players: 10,
};

export default function Header({ searchResults, setSearchResults }) {
  const location = useLocation();

  const [searchParameters, setSearchParameters] = useState(initialValues);
  const [showFilter, setShowFilter] = useState(false);

  const updateSearchParameters = (newParams) => {
    setSearchParameters(newParams);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const keyPressed = (e) => {
    if (e.key === "Enter") {
      axios
        .post("http://127.0.0.1:5000/search/player", searchParameters, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => setSearchResults(res.data))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div
      className={`${styles.container} ${
        searchResults &&
        searchResults.length === 0 &&
        location.pathname === "/search" &&
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
          placeholder="Search for a player"
          value={searchParameters.categorical_query}
          onChange={(e) => {
            updateSearchParameters({
              ...searchParameters,
              categorical_query: e.target.value,
            });
          }}
          onKeyDown={keyPressed}
        />
      </div>
      <button
        className={`${styles.filterContainer} ${
          showFilter ? styles.active : ""
        }`}
        onClick={toggleFilter}
      >
        <p>Filter</p>
        <img src={filter} alt="Filter" />
      </button>
      {showFilter && (
        <Filter
          toggleFilter={toggleFilter}
          searchParameters={searchParameters}
          updateSearchParameters={setSearchParameters}
        />
      )}
    </div>
  );
}
