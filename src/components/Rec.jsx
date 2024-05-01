import styles from "../styles/rec.module.scss";
import verified from "../assets/icons/Verified.svg"

export default function Rec({ rec }) {
  return (
    <div className={styles.container}>
      <p className={styles.rec}>{rec.rec}</p>
      <div className={styles.author}>
        <img src={rec.pfp} alt="Author" />
        <div className={styles.right}>
          <p className={styles.name}>{rec.name}</p>
          <p className={styles.school}>{rec.school}</p>
        </div>
        <img src={verified} alt="Verified" />
      </div>
    </div>
  );
}
