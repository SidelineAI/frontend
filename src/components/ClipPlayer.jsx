import styles from "../styles/clipplayer.module.scss";
import Clip from "../components/Clip";

export default function ClipPlayer({ player }) {
  return (
    <div className={styles.container}>
      <div className={styles.highlightClip}>
        <img src={player.clips[0].thumbnail} alt="Highlight" />
      </div>
      <div className={styles.otherClips}>
        {player.clips.map(
          (clip, index) => index > 0 && <Clip clip={clip} key={index} />
        )}
      </div>
    </div>
  );
}
