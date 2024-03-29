import styles from "../styles/header.module.scss";
import search from "../assets/Search.svg";

export default function Header() {
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
        />
      </div>
    </div>
  );
}
