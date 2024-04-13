import styles from "../styles/similarplayer.module.scss";
import PlayerInfo from "../components/PlayerInfo";

export default function SimilarPlayer({ player }) {
  return (
    <div className={styles.container}>
      <img src={player.img} alt="PFP" />
      <PlayerInfo player={player} />
    </div>
  );
}
