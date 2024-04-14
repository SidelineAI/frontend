import { useState } from "react";
import styles from "../styles/playercard.module.scss";
import dunking from "../assets/dunking.mp4";
import handles from "../assets/handles.mp4";
import threepointers from "../assets/threepointer.mp4";
import layups from "../assets/layups.mp4";
import PlayerInfo from "./PlayerInfo";

export default function PlayerCard({ player, onPlayerClick }) {
  const [videoSrc, setVideoSrc] = useState(null);

  const handleSkillHover = (skill) => {
    const skillData = player.skills.find((s) => s.name === skill);
    if (skillData) {
      setVideoSrc(skillData.video);
    }
  };

  const handleSkillLeave = () => {
    setVideoSrc(null);
  };

  return (
    <div className={styles.container} onClick={onPlayerClick}>
      {videoSrc ? (
        <video autoPlay loop muted playsInline>
          <source
            src={
              videoSrc === "dunking"
                ? dunking
                : videoSrc === "handles"
                ? handles
                : videoSrc === "threepointers"
                ? threepointers
                : videoSrc === "layups"
                ? layups
                : ""
            }
            type="video/mp4"
          />
        </video>
      ) : (
        <img src={player.img} alt="Player PFP" className={styles.img} />
      )}
      <div className={styles.info}>
        <div className={styles.left}>
          <PlayerInfo player={player} />

          <div className={styles.skills}>
            {player.skills.map((skill, index) => (
              <p
                key={index}
                onMouseEnter={() => handleSkillHover(skill.name)}
                onMouseLeave={handleSkillLeave}
              >
                {skill.name}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <p className={styles.stat}>{player.points_per_game}</p>
            <p className={styles.label}>Points per Game</p>
          </div>
          <div>
            <p className={styles.stat}>{player.rebounds}</p>
            <p className={styles.label}>Rebounds per Game</p>
          </div>
          <div>
            <p className={styles.stat}>{player.assists}</p>
            <p className={styles.label}>Assists per Game</p>
          </div>
          <div>
            <p className={styles.stat}>{player.field_goal_pct}</p>
            <p className={styles.label}>Field Goal Percentage</p>
          </div>
          <div>
            <p className={styles.stat}>{player.three_point_pct}</p>
            <p className={styles.label}>Three Point Percentage</p>
          </div>
          <div>
            <p className={styles.stat}>{player.free_throw_pct}</p>
            <p className={styles.label}>Free Throw Percentage</p>
          </div>
        </div>
      </div>
    </div>
  );
}
