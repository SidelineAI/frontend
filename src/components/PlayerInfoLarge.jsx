import styles from "../styles/playerinfolarge.module.scss";
import send from "../assets/icons/Send.svg";
import x from "../assets/icons/X.svg";

export default function PlayerInfoLarge({ player }) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.name}>
          {player.first_name} {player.last_name}
        </p>
        <p className={styles.pos}>| {player.position}</p>
        <div className={styles.jerseyContainer}>
          <p className={styles.numSymbol}>#</p>
          <p className={styles.jersey}>{player.number}</p>
        </div>
      </div>
      <p className={styles.school}>{player.school}</p>
      {/* <div className={styles.physical}>
        <p>{player.height}</p>
        <p>{player.age}</p>
        <p>{player.weight}</p>
      </div> */}
      <p className={styles.games}>{player.games_played} Games Played</p>
      <div className={styles.contacts}>
        <img src={send} alt="Contact" />
        <img className={styles.x} src={x} alt="X" />
      </div>
    </div>
  );
}
