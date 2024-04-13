import styles from "../styles/clip.module.scss";

export default function Clip({ clip }) {
  return (
    <div className={styles.container}>
      <img src={clip.thumbnail} alt="Clip" />
      <div className={styles.right}>
        <p className={styles.title}>{clip.gameTitle}</p>
        <p className={styles.desc}>{clip.desc}</p>
        <p className={styles.date}>{clip.date}</p>
      </div>
    </div>
  );
}
