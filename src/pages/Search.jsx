import styles from "../styles/search.module.scss";
import Header from "../components/Header";
import PlayerCard from "../components/PlayerCard";
import { useState } from "react";

export default function Search() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div
      className={`${styles.container} ${
        searchResults.length === 0 && styles.background
      }`}
    >
      <Header
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
      <div className={styles.resultsContainer}>
        {searchResults.map((player, index) => (
          <PlayerCard player={player} key={index} />
        ))}
      </div>
    </div>
  );
}
