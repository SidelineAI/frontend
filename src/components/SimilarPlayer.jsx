import styles from "../styles/similarplayer.module.scss";
import PlayerInfo from "../components/PlayerInfo";

export default function SimilarPlayer({ player, onSimilarPlayerClick }) {
  return (
    <div className={styles.container} onClick={onSimilarPlayerClick}>
      <img src={player.profile_img} alt="PFP" />
      <PlayerInfo player={player} />
    </div>
  );
}
