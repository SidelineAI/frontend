import { useState } from "react";
import styles from "../styles/filter.module.scss";

const initialValues = {
  ppg: "",
  rpg: "",
  apg: "",
  fg: "",
  ft: "",
  pos: "",
  height: "",
  weight: "",
  age: "",
  searchParameters: "",
};

export default function Filter({ toggleFilter, searchParameters }) {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const saveFilter = () => {
    initialValues.searchParameters = searchParameters;
    // send filter values to backend
    toggleFilter();
    console.log(initialValues);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <h2>Filter</h2>
        <div className={styles.filterCategories}>
          <div className={styles.category}>
            <h3>Statistics</h3>
            <div className={styles.filterItem}>
              <label>Points per Game</label>
              <input
                type="text"
                placeholder="Points per Game"
                value={values.ppg}
                onChange={handleInputChange}
                name="ppg"
              />
            </div>
            <div className={styles.filterItem}>
              <label>Rebounds per Game</label>
              <input
                type="text"
                placeholder="Rebounds per Game"
                value={values.rpg}
                onChange={handleInputChange}
                name="rpg"
              />
            </div>
            <div className={styles.filterItem}>
              <label>Assists per Game</label>
              <input
                type="text"
                placeholder="Assists per Game"
                value={values.apg}
                onChange={handleInputChange}
                name="apg"
              />
            </div>
            <div className={styles.filterItem}>
              <label>Field Goal (%)</label>
              <input
                type="text"
                placeholder="Field Goal (%)"
                value={values.fg}
                onChange={handleInputChange}
                name="fg"
              />
            </div>
            <div className={styles.filterItem}>
              <label>Free Throw (%)</label>
              <input
                type="text"
                placeholder="Free Throw (%)"
                value={values.ft}
                onChange={handleInputChange}
                name="ft"
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
                value={values.pos}
                onChange={handleInputChange}
                name="pos"
              />
            </div>
            <div className={styles.filterItem}>
              <label>Height</label>
              <input
                type="text"
                placeholder="Height"
                value={values.height}
                onChange={handleInputChange}
                name="height"
              />
            </div>
            <div className={styles.filterItem}>
              <label>Weight</label>
              <input
                type="text"
                placeholder="Weight"
                value={values.weight}
                onChange={handleInputChange}
                name="weight"
              />
            </div>
            <div className={styles.filterItem}>
              <label>Age</label>
              <input
                type="text"
                placeholder="Age"
                value={values.age}
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
