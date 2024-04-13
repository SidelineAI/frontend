import styles from "../styles/header.module.scss";
import search from "../assets/icons/Search.svg";
import filter from "../assets/icons/Filter.svg";
import { useState } from "react";
import Filter from "./Filter";

export default function Header({ searchResults, setSearchResults }) {
  const mockPlayers = [
    {
      name: "James Cooper",
      pos: "SG",
      jersey: 30,
      school: "Miami University",
      height: "6'5\"",
      age: "22 y/o",
      weight: "200 lbs",
      skills: [
        { name: "Dunking", video: "dunking" },
        { name: "Handles", video: "handles" },
        { name: "3-Pointers", video: "threepointers" },
        { name: "Layups", video: "layups" },
      ],
      ppg: 18.5,
      rpg: 6.2,
      apg: 4.8,
      fgp: "45%",
      img: "https://4kwallpapers.com/images/walls/thumbs_2t/7603.jpg",
    },
    {
      name: "Kaitlin Bird",
      pos: "SG",
      jersey: 30,
      school: "Temple University",
      height: "6'5\"",
      age: "22 y/o",
      weight: "200 lbs",
      skills: [
        { name: "Dunking", video: "" },
        { name: "Layups", video: "" },
      ],
      ppg: 18.5,
      rpg: 6.2,
      apg: 4.8,
      fgp: "45%",
      img: "https://img.freepik.com/free-photo/young-caucasian-female-basketball-player-team-action-motion-run-isolated-white-background_155003-41811.jpg",
    },
    {
      name: "Austin Rindels",
      pos: "SG",
      jersey: 30,
      school: "Washington University",
      height: "6'5\"",
      age: "22 y/o",
      weight: "200 lbs",
      skills: [
        { name: "Dunking", video: "" },
        { name: "Handles", video: "" },
        { name: "3-Pointers", video: "" },
      ],
      ppg: 18.5,
      rpg: 6.2,
      apg: 4.8,
      fgp: "45%",
      img: "https://4kwallpapers.com/images/walls/thumbs_2t/7594.jpg",
    },
  ];

  const [searchParameters, setSearchParameters] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const keyPressed = (e) => {
    if (e.key === "Enter") {
      // send searchParameters to backend
      setSearchParameters("");
      // update/populate search results from backend
      setSearchResults(mockPlayers);
    }
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div
      className={`${styles.container} ${
        searchResults.length === 0 && styles.lower
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
          placeholder="Who are you looking for today?"
          value={searchParameters}
          onChange={(e) => {
            setSearchParameters(e.target.value);
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
        />
      )}
    </div>
  );
}
