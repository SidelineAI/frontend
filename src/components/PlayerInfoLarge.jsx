import styles from "../styles/playerinfolarge.module.scss";
import send from "../assets/icons/Send.svg";
import x from "../assets/icons/X.svg";

function getRandomValue(baseValue, deviation) {
  const min = baseValue - deviation;
  const max = baseValue + deviation;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const HeightAndWeight = () => {
  const heightFeet = 6;
  const heightInches = 4;
  const weight = 200;
  const heightDeviation = 4; // Deviation for height in inches
  const weightDeviation = 10; // Deviation for weight in lbs

  const randomHeightInches = getRandomValue(heightInches, heightDeviation);
  const randomWeight = getRandomValue(weight, weightDeviation);

  return (
    <div style={{ marginBottom: '0.5rem' }}>
      <p className={styles.games}>6'{randomHeightInches}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{randomWeight} Ibs</p>
    </div>
  );
}

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
      <HeightAndWeight />
      <div className={styles.contacts}>
        <img src={send} alt="Contact" />
        <img className={styles.x} src={x} alt="X" />
      </div>
    </div>
  );
}
