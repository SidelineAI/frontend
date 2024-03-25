import styles from "../styles/header.module.scss";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.sideline}>
        Side<span className={styles.red}>l</span>ine
      </div>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Who are you looking for today?"
      />
    </div>
  );
}
