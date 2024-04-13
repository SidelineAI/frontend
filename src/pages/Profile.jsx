import styles from "../styles/profile.module.scss";
import star from "../assets/icons/Star.svg";
import Header from "../components/Header";
import ClipPlayer from "../components/ClipPlayer";
import PlayerInfoLarge from "../components/PlayerInfoLarge";
import Rec from "../components/Rec";
import SimilarPlayer from "../components/SimilarPlayer";

export default function Profile({}) {
  const player = {
    name: "James Cooper",
    pos: "SG",
    jersey: 30,
    school: "Miami University",
    height: "6'5\"",
    age: "22 y/o",
    weight: "200 lbs",
    skills: [
      { name: "Dunking", video: "dunking" },
      { name: "Handles", video: "handles" },
      { name: "3-Pointers", video: "threepointers" },
      { name: "Layups", video: "layups" },
    ],
    ppg: 18.5,
    rpg: 6.2,
    apg: 4.8,
    fgp: "45%",
    ftp: "82%",
    img: "https://4kwallpapers.com/images/walls/thumbs_2t/7603.jpg",
    report:
      "A dynamic wing player with freakish length and agility and a scorers mentality … Has the ability to essentially score at will on the college level … A special player offensively, who has fully developed post skills to go along with an NBA-range jumper … His ability to pull up off the dribble is absolutely illegal for a 6-10 player.",
    recommendations: [
      {
        pfp: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/04/896/500/calipari.jpg?ve=1&tl=1",
        name: "Coach Thomas",
        school: "University of Kansas",
        rec: "A dynamic wing player with freakish length and agility and a scorers mentality. Has the ability to essentially score at will on the college level. A special player offensively, who has fully developed post skills to go along with an NBA-range jumper. His ability to pull up off the dribble is absolutely illegal for a 6-10 player.",
      },
    ],
    clips: [
      {
        gameTitle: "vs Duke",
        desc: "60% Field Goal Percentage",
        date: "2024-04-10",
        thumbnail:
          "https://www.al.com/resizer/eCGrFt56cZ55GLV1-E_bZ6gZmKw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/HOCJVTZCIVCR7J2TDNNPU7LNJ4.JPG",
      },
      {
        gameTitle: "vs NC State",
        desc: "80% Free Throw Percentage",
        date: "2024-04-07",
        thumbnail:
          "https://variety.com/wp-content/uploads/2023/11/GettyImages-1760793417.jpg?w=1000&h=563&crop=1",
      },
      {
        gameTitle: "vs Indiana",
        desc: "24 Points",
        date: "2024-04-05",
        thumbnail:
          "https://www.yourbasin.com/wp-content/uploads/sites/78/2022/12/62ee53f9a6764735a9b070c2bc1f5c2f.jpg?w=2560&h=1440&crop=1",
      },
      {
        gameTitle: "vs Stanford",
        desc: "10 Rebounds",
        date: "2024-04-01",
        thumbnail:
          "https://www.courier-journal.com/gcdn/presto/2021/12/18/PLOU/c898bc1e-f1a5-40e6-88ee-e931f892fffa-032A8436.JPG?crop=6719,3780,x0,y341&width=660&height=372&format=pjpg&auto=webp",
      },
      {
        gameTitle: "vs UF",
        desc: "8 Assists",
        date: "2024-03-27",
        thumbnail:
          "https://buffalostateathletics.com/images/2023/11/28/mbb_matt_parkinson_1_XU8is.jpg?width=960&height=643&mode=crop&format=jpg&quality=80",
      },
      {
        gameTitle: "vs UF",
        desc: "8 Assists",
        date: "2024-03-27",
        thumbnail:
          "https://buffalostateathletics.com/images/2023/11/28/mbb_matt_parkinson_1_XU8is.jpg?width=960&height=643&mode=crop&format=jpg&quality=80",
      },
      {
        gameTitle: "vs UF",
        desc: "8 Assists",
        date: "2024-03-27",
        thumbnail:
          "https://buffalostateathletics.com/images/2023/11/28/mbb_matt_parkinson_1_XU8is.jpg?width=960&height=643&mode=crop&format=jpg&quality=80",
      },
      {
        gameTitle: "vs UF",
        desc: "8 Assists",
        date: "2024-03-27",
        thumbnail:
          "https://buffalostateathletics.com/images/2023/11/28/mbb_matt_parkinson_1_XU8is.jpg?width=960&height=643&mode=crop&format=jpg&quality=80",
      },
    ],
  };

  const similarPlayers = [
    {
      name: "Kaitlin Bird",
      pos: "SG",
      jersey: 30,
      school: "Temple University",
      height: "6'5\"",
      age: "22 y/o",
      weight: "200 lbs",
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
      img: "https://4kwallpapers.com/images/walls/thumbs_2t/7594.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.clipPlayerContainer}>
        <ClipPlayer player={player} />
      </div>
      <div className={styles.playerInfoContainer}>
        <img src={player.img} alt="PFP" />
        <PlayerInfoLarge player={player} />
        <div className={styles.stats}>
          <div>
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
          </div>
          <div>
            <div>
              <p className={styles.stat}>{player.fgp}</p>
              <p className={styles.label}>Field Goal Percentage</p>
            </div>
            <div>
              <p className={styles.stat}>{player.ftp}</p>
              <p className={styles.label}>Free Throw Percentage</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.scoutingReport}>
        <p className={styles.content}>{player.report}</p>
        <div className={styles.analysisContainer}>
          <img src={star} alt="Star" />
          <p className={styles.sidelineAnalysis}>Sideline AI Analysis</p>
        </div>
      </div>
      <div className={styles.recsAndSkills}>
        <div className={styles.recsContainer}>
          <p className={styles.subtitle}>Recommendations</p>
          <div className={styles.recs}>
            {player.recommendations.map((rec, index) => (
              <Rec rec={rec} key={index} />
            ))}
          </div>
        </div>
        <div className={styles.skillsContainer}>
          <p className={styles.subtitle}>Skills</p>
          <div className={styles.skills}>
            {player.skills.map((skill, index) => (
              <p key={index}>{skill.name}</p>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.similarPlayersContainer}>
        <p className={styles.subtitle}>Similar Players</p>
        <div className={styles.similarPlayers}>
          {similarPlayers.map((similar, index) => (
            <SimilarPlayer player={similar} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
