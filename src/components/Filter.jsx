import styles from "../styles/filter.module.scss";

export default function Filter({ toggleFilter }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <h2>Filter</h2>
        <div className={styles.filterCategories}>
          <div className={styles.category}>
            <h3>Statistics</h3>
            <div className={styles.filterItem}>
              <label>Points per Game</label>
              <input type="text" placeholder="Points per Game" />
            </div>
            <div className={styles.filterItem}>
              <label>Rebounds per Game</label>
              <input type="text" placeholder="Rebounds per Game" />
            </div>
            <div className={styles.filterItem}>
              <label>Assists per Game</label>
              <input type="text" placeholder="Assists per Game" />
            </div>
            <div className={styles.filterItem}>
              <label>Field Goal (%)</label>
              <input type="text" placeholder="Field Goal (%)" />
            </div>
            <div className={styles.filterItem}>
              <label>Free Throw (%)</label>
              <input type="text" placeholder="Free Throw (%)" />
            </div>
          </div>
          <div className={styles.category}>
            <h3>Attributes</h3>
            <div className={styles.filterItem}>
              <label>Position</label>
              <input type="text" placeholder="Position" />
            </div>
            <div className={styles.filterItem}>
              <label>Height</label>
              <input type="text" placeholder="Height" />
            </div>
            <div className={styles.filterItem}>
              <label>Weight</label>
              <input type="text" placeholder="Weight" />
            </div>
            <div className={styles.filterItem}>
              <label>Age</label>
              <input type="text" placeholder="Age" />
            </div>
          </div>
        </div>
        <button onClick={toggleFilter}>Close</button>
      </div>
    </div>
  );
}