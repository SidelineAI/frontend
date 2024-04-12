import styles from "../styles/header.module.scss";
import search from "../assets/Search.svg";
import filter from "../assets/Filter.svg";
import { useState } from "react";
import Filter from "./Filter";

export default function Header() {
  const [searchText, setSearchText] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const keyPressed = (e) => {
    if (e.key === "Enter") {
      setSearchText("");
    }
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sideline}>
        Side<span className={styles.red}>l</span>ine
      </div>
      <div className={styles.searchContainer}>
        <img src={search} alt="search" className={styles.searchIcon} />
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Who are you looking for today?"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={keyPressed}
        />
      </div>
      <button
        className={`${styles.filterContainer} ${showFilter ? styles.active : ""}`}
        onClick={toggleFilter}
      >
        <p>Filter</p>
        <img src={filter} alt="Filter" />
      </button>
      {showFilter && <Filter toggleFilter={toggleFilter} />}
    </div>
  );
}