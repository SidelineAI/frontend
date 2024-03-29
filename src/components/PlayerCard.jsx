import styles from "../styles/playercard.module.scss";

export default function PlayerCard({ player }) {
  return (
    <div className={styles.container}>
      <img src={player.img} alt="Player PFP" className={styles.img} />
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
              <p className="skill" key={index}>
                {skill}
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
