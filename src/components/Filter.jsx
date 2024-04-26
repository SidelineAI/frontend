import { useState } from "react";
import styles from "../styles/filter.module.scss";

export default function Filter({
  toggleFilter,
  searchParameters,
  updateSearchParameters,
}) {
  const [values, setValues] = useState(searchParameters);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newSearchParameters = { ...searchParameters };
    newSearchParameters["stats_filter"][name] = value;
    setValues(newSearchParameters);
    updateSearchParameters(newSearchParameters);
  };

  const saveFilter = () => {
    toggleFilter();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <h2>Filter Search</h2>
        <div className={styles.filterCategories}>
          <div className={styles.category}>
            <h3>Statistics</h3>
            <div className={styles.filterItem}>
              <label>Points per Game</label>
              <input
                type="text"
                placeholder="Points per Game"
                value={values.stats_filter.avg_points}
                onChange={handleInputChange}
                name="avg_points"
              />
            </div>
            <div className={styles.filterItem}>
              <label>Rebounds per Game</label>
              <input
                type="text"
                placeholder="Rebounds per Game"
                value={values.stats_filter.avg_rebounds}
                onChange={handleInputChange}
                name="avg_rebounds"
              />
            </div>
            <div className={styles.filterItem}>
              <label>Assists per Game</label>
              <input
                type="text"
                placeholder="Assists per Game"
                value={values.stats_filter.avg_assists}
                onChange={handleInputChange}
                name="avg_assists"
              />
            </div>
            <div className={styles.filterItem}>
              <label>Field Goal (%)</label>
              <input
                type="text"
                placeholder="Field Goal (%)"
                value={values.stats_filter.avg_field_goal_pct}
                onChange={handleInputChange}
                name="avg_field_goal_pct"
              />
            </div>
            <div className={styles.filterItem}>
              <label>Free Throw (%)</label>
              <input
                type="text"
                placeholder="Free Throw (%)"
                value={values.stats_filter.avg_free_throw_pct}
                onChange={handleInputChange}
                name="avg_free_throw_pct"
              />
            </div>
            <div className={styles.filterItem}>
              <label>3-Point (%)</label>
              <input
                type="text"
                placeholder="3-Point (%)"
                value={values.stats_filter.avg_three_point_pct}
                onChange={handleInputChange}
                name="avg_three_point_pct"
              />
            </div>
          </div>
          <div className={styles.category}>
            <h3>Attributes</h3>
            <div className={styles.filterItem}>
              <label>Position</label>
              <input
                type="text"
                placeholder="Position"
                value={values.stats_filter.position}
                onChange={handleInputChange}
                name="position"
              />
            </div>
            <div className={styles.filterItem}>
              <label>Height</label>
              <input
                type="text"
                placeholder="Height"
                value={values.stats_filter.height}
                onChange={handleInputChange}
                name="height"
              />
            </div>
            <div className={styles.filterItem}>
              <label>Weight</label>
              <input
                type="text"
                placeholder="Weight"
                value={values.stats_filter.weight}
                onChange={handleInputChange}
                name="weight"
              />
            </div>
            <div className={styles.filterItem}>
              <label>Age</label>
              <input
                type="text"
                placeholder="Age"
                value={values.stats_filter.age}
                onChange={handleInputChange}
                name="age"
              />
            </div>
          </div>
        </div>
        <button onClick={saveFilter}>Save</button>
      </div>
    </div>
  );
}
