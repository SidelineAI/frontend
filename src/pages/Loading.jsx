import styles from "../styles/loading.module.scss";
import basketball from "../assets/icons/Basketball.svg";

export default function Loading() {
  return (
    <div className={styles.container}>
      <p className={styles.loading}>Dribbling in progress...</p>
      <div className={styles.ballContainer}>
        <img src={basketball} alt="Basketball" />
        <div className={styles.shadow}></div>
      </div>
    </div>
  );
}
