import styles from "../styles/search.module.scss";
import Header from "../components/Header";
import PlayerCard from "../components/PlayerCard";

export default function Search() {
  const mockPlayers = [
    {
      name: "James Cooper",
      pos: "SG",
      jersey: 30,
      school: "Miami University",
      height: "6'5\"",
      age: "22 y/o",
      weight: "200 lbs",
      skills: ["Dunking", "Handles", "3-Pointers", "Layups"],
      ppg: 18.5,
      rpg: 6.2,
      apg: 4.8,
      fgp: "45%",
      img: "https://4kwallpapers.com/images/walls/thumbs_2t/7603.jpg",
    },
    {
      name: "Kaitlin Bird",
      pos: "SG",
      jersey: 30,
      school: "Temple University",
      height: "6'5\"",
      age: "22 y/o",
      weight: "200 lbs",
      skills: ["Dunking", "Layups"],
      ppg: 18.5,
      rpg: 6.2,
      apg: 4.8,
      fgp: "45%",
      img: "https://img.freepik.com/free-photo/young-caucasian-female-basketball-player-team-action-motion-run-isolated-white-background_155003-41811.jpg",
    },
    {
      name: "Austin Rindels",
      pos: "SG",
      jersey: 30,
      school: "Washington University",
      height: "6'5\"",
      age: "22 y/o",
      weight: "200 lbs",
      skills: ["Dunking", "Handles", "3-Pointers"],
      ppg: 18.5,
      rpg: 6.2,
      apg: 4.8,
      fgp: "45%",
      img: "https://4kwallpapers.com/images/walls/thumbs_2t/7594.jpg",
    },
  ];

  return (
    <>
      <Header></Header>
      <div className={styles.resultsContainer}>
        {mockPlayers.map((player, index) => (
          <PlayerCard player={player} key={index} />
        ))}
      </div>
    </>
  );
}
