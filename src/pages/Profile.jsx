import styles from "../styles/profile.module.scss";
import star from "../assets/icons/Star.svg";
import Header from "../components/Header";
import ClipPlayer from "../components/ClipPlayer";
import PlayerInfoLarge from "../components/PlayerInfoLarge";
import Rec from "../components/Rec";
import SimilarPlayer from "../components/SimilarPlayer";
import LeftArrow from "../assets/icons/LeftArrow.svg";
import { useNavigate, useParams } from "react-router-dom";

export default function Profile() {
  const mockPlayers = [
    {
      uuid: 1,
      first_name: "James",
      last_name: "Cooper",
      position: "SG",
      number: 30,
      school: "Miami University",
      height: "6'5\"",
      age: "22 y/o",
      weight: "200 lbs",
      skills: [
        { name: "Dunking", video: "dunking" },
        { name: "Handles", video: "handles" },
        { name: "3-Pointers", video: "threepointers" },
      ],
      games_played: 254,
      points_per_game: 18.5,
      rebounds: 6.2,
      assists: 4.8,
      field_goal_pct: "45%",
      three_point_pct: "25%",
      free_throw_pct: "82%",
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
    },
    {
      uuid: 2,
      first_name: "Kaitlin",
      last_name: "Bird",
      position: "SG",
      number: 30,
      school: "Temple University",
      height: "6'5\"",
      age: "22 y/o",
      weight: "200 lbs",
      skills: [
        { name: "Dunking", video: "" },
        { name: "Layups", video: "" },
      ],
      games_played: 340,
      points_per_game: 18.5,
      rebounds: 6.2,
      assists: 4.8,
      field_goal_pct: "45%",
      three_point_pct: "35%",
      free_throw_pct: "60%",
      img: "https://img.freepik.com/free-photo/young-caucasian-female-basketball-player-team-action-motion-run-isolated-white-background_155003-41811.jpg",
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
    },
    {
      uuid: 3,
      first_name: "Austin",
      last_name: "Riedels",
      position: "SG",
      number: 30,
      school: "Washington University",
      height: "6'5\"",
      age: "22 y/o",
      weight: "200 lbs",
      skills: [
        { name: "Dunking", video: "" },
        { name: "Handles", video: "" },
        { name: "3-Pointers", video: "" },
      ],
      games_played: 230,
      points_per_game: 18.5,
      rebounds: 6.2,
      assists: 4.8,
      field_goal_pct: "45%",
      three_point_pct: "30%",
      free_throw_pct: "45%",
      img: "https://4kwallpapers.com/images/walls/thumbs_2t/7594.jpg",
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
    },
  ];

  const similarPlayers = [
    {
      first_name: "Kaitlin",
      last_name: "Bird",
      position: "SG",
      number: 30,
      school: "Temple University",
      height: "6'5\"",
      age: "22 y/o",
      weight: "200 lbs",
      games_played: 230,
      img: "https://img.freepik.com/free-photo/young-caucasian-female-basketball-player-team-action-motion-run-isolated-white-background_155003-41811.jpg",
    },
    {
      first_name: "Austin",
      last_name: "Riedels",
      position: "SG",
      number: 30,
      school: "Washington University",
      height: "6'5\"",
      age: "22 y/o",
      weight: "200 lbs",
      games_played: 345,
      img: "https://4kwallpapers.com/images/walls/thumbs_2t/7594.jpg",
    },
    {
      first_name: "Austin",
      last_name: "Riedels",
      position: "SG",
      number: 30,
      school: "Washington University",
      height: "6'5\"",
      age: "22 y/o",
      weight: "200 lbs",
      games_played: 345,
      img: "https://4kwallpapers.com/images/walls/thumbs_2t/7594.jpg",
    },
  ];

  const { id } = useParams();
  // replace with finding the right player from search results
  const player = mockPlayers.find((p) => p.uuid === parseInt(id));

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <button className={styles.backContainer} onClick={() => navigate(-1)}>
        <img src={LeftArrow} alt="Back" />
        <p>Home</p>
      </button>
      <Header />
      <div className={styles.clipPlayerContainer}>
        <ClipPlayer player={player} />
      </div>
      <div className={styles.playerInfoContainer}>
        <img src={player.img} alt="PFP" />
        <PlayerInfoLarge player={player} />
        <div className={styles.statsContainer}>
          <div className={styles.stats}>
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
      <div className={styles.scoutingReport}>
        <p className={styles.content}>{player.report}</p>
        <div className={styles.analysisContainer}>
          <img src={star} alt="Star" />
          <p className={styles.sidelineAnalysis}>Sideline AI Analysis</p>
        </div>
      </div>
      <div className={styles.recsContainer}>
        <p className={styles.subtitle}>Recommendations</p>
        <div className={styles.recs}>
          {player.recommendations.map((rec, index) => (
            <Rec rec={rec} key={index} />
          ))}
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
