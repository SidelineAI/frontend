import { useState } from "react";
import styles from "../styles/playercard.module.scss";
import dunking from "../assets/dunking.mp4";
import handles from "../assets/handles.mp4";
import threepointers from "../assets/threepointer.mp4";
import layups from "../assets/layups.mp4";

export default function PlayerCard({ player }) {
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
    <div className={styles.container}>
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
          <div className={styles.top}>
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
            <p className={styles.stat}>{player.ppg}</p>
            <p className={styles.label}>Points per Game</p>
          </div>
          <div>
            <p className={styles.stat}>{player.rpg}</p>
            <p className={styles.label}>Rebounds per Game</p>
          </div>
          <div>
            <p className={styles.stat}>{player.apg}</p>
            <p className={styles.label}>Assists per Game</p>
          </div>
          <div>
            <p className={styles.stat}>{player.fgp}</p>
            <p className={styles.label}>Field Goal Percentage</p>
          </div>
        </div>
      </div>
    </div>
  );
}
