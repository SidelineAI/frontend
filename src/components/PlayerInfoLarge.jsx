import styles from "../styles/playerinfolarge.module.scss";

export default function PlayerInfoLarge({ player }) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.name}>{player.name}</p>
        <p className={styles.pos}>| {player.pos}</p>
        <div className={styles.jerseyContainer}>
          <p className={styles.numSymbol}>#</p>
          <p className={styles.jersey}>{player.jersey}</p>
        </div>
      </div>
      <p className={styles.school}>{player.school}</p>
      <div className={styles.physical}>
        <p>{player.height}</p>
        <p>{player.age}</p>
        <p>{player.weight}</p>
      </div>
    </div>
  );
}
