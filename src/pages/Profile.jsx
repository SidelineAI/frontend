import styles from "../styles/profile.module.scss";
import star from "../assets/icons/Star.svg";
import Header from "../components/Header";
import ClipPlayer from "../components/ClipPlayer";
import PlayerInfoLarge from "../components/PlayerInfoLarge";
import Rec from "../components/Rec";
import SimilarPlayer from "../components/SimilarPlayer";
import LeftArrow from "../assets/icons/LeftArrow.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import ProfileHeader from "../components/ProfileHeader";

const Typewriter = ({ text, interval }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let charIndex = 0;
    const timer = setInterval(() => {
      if (charIndex < text.length) {
        setDisplayText(text.substring(0, charIndex + 1) + " |");
        charIndex++;
      } else {
        setDisplayText(text);
        clearInterval(timer);
      }
    }, interval); // Adjust the typing speed here (in milliseconds)

    return () => clearInterval(timer);
  }, [text]);

  return <p className={styles.content}>{displayText}</p>;
};

const templateRecommendations = [
  {
    rec: "A great player with a great attitude, and a hard worker. Keeps morale high and is a leader in and out of the court.",
    pfp: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2024-04/240412-mark-pope-se-107p-e20400.jpg",
    name: "John Doe",
    school: "University of Example",
  },
  {
    rec: "A great player with a great attitude, and a hard worker. Keeps morale high and is a leader in and out of the court.",
    pfp: "https://cdn.nba.com/manage/2021/12/kerr-iso-olympics-usa-784x523.jpeg",
    name: "Kyle Smith",
    school: "Some Town High School",
  },
  {
    rec: "A great player with a great attitude, and a hard worker. Keeps morale high and is a leader in and out of the court.",
    pfp: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Mike_Brown_NBA_cropped.jpg/330px-Mike_Brown_NBA_cropped.jpg",
    name: "Chris Johnson",
    school: "University of State",
  },
];

const getRandomRecommendation = () => {
  return templateRecommendations[Math.floor(Math.random() * templateRecommendations.length)];
}

export default function Profile() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const [video, setVideo] = useState([]);
  const [similarPlayers, setSimilarPlayers] = useState(null);
  const [loadingPlayer, setLoadingPlayer] = useState(true);
  const [loadingSimilarPlayers, setLoadingSimilarPlayers] = useState(true);

  useEffect(() => {
    // GET PLAYER DATA
    axios.get(`http://127.0.0.1:5000/player/${id}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
    .then(res => {
      setPlayer(res.data);
      setLoadingPlayer(false);
    })
    .catch(err => {
      console.log(err);
      setLoadingPlayer(false);
    });
  
    // GET VIDEOS
    axios.post(`http://127.0.0.1:5000/search/video`, {
        query: ".",
        num_vids: 5,
        player_id: id
    })
    .then(res => {
      setVideo(res.data);
    })
    .catch(err => {
      console.error(err);
    });
  
    // GET SIMILAR PLAYERS
    axios
      .post(`http://127.0.0.1:5000/search/similar`, {
        uuid: id,
        num_players: 3
    })
    .then(res => {
      setSimilarPlayers(res.data);
      setLoadingSimilarPlayers(false);
    })
    .catch(err => {
      console.error(err);
      setLoadingSimilarPlayers(false);
    });
  }, [id]);

  const navigate = useNavigate();

  if (loadingPlayer || loadingSimilarPlayers) {
    return <Loading />; // Display a loading message or a spinner
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.backContainer}
        onClick={() => {
          navigate(-1);
          setLoadingPlayer(true);
          setLoadingSimilarPlayers(true);
        }}
      >
        <img src={LeftArrow} alt="Back" />
        <p>Back</p>
      </button>
      <ProfileHeader setVideo={setVideo}/>
      <div className={styles.clipPlayerContainer}>
        <ClipPlayer videos={video} />
      </div>
      <div className={styles.playerInfoContainer}>
        <img src={player.profile_img} alt="PFP" />
        <PlayerInfoLarge player={player} />
        <div className={styles.statsContainer}>
          <div className={styles.stats}>
            <div>
              <p className={styles.stat}>{player.avg_points}</p>
              <p className={styles.label}>Points per Game</p>
            </div>
            <div>
              <p className={styles.stat}>{player.avg_rebounds}</p>
              <p className={styles.label}>Rebounds per Game</p>
            </div>
            <div>
              <p className={styles.stat}>{player.avg_assists}</p>
              <p className={styles.label}>Assists per Game</p>
            </div>
            <div>
              <p className={styles.stat}>{player.avg_field_goal_pct}</p>
              <p className={styles.label}>Field Goal Percentage</p>
            </div>
            <div>
              <p className={styles.stat}>{player.avg_three_point_pct}</p>
              <p className={styles.label}>Three Point Percentage</p>
            </div>
            <div>
              <p className={styles.stat}>{player.avg_free_throw_pct}</p>
              <p className={styles.label}>Free Throw Percentage</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.scoutingReport}>
        <div className={styles.contentContainer}>
          <Typewriter text={player.scouting_report} interval={4} />
        </div>
        <div className={styles.analysisContainer}>
          <img src={star} alt="Star" />
          <p className={styles.sidelineAnalysis}>Sideline AI Analysis</p>
        </div>
      </div>
      <div className={styles.recsContainer}>
        <p className={styles.subtitle}>Recommendations</p>
        <div className={styles.recs}>
          <Rec rec={getRandomRecommendation()} />
          {/* ADD FUNCTIONALITY FOR RECOMMENDATIONS BELOW ONCE IMPLEMENTED IN BACKEND */}
          {/* {player.recommendations.map((rec, index) => (
            <Rec rec={rec} key={index} />
          ))} */}
        </div>
      </div>
      <div className={styles.similarPlayersContainer}>
        <p className={styles.subtitle}>Similar Players</p>
        <div className={styles.similarPlayers}>
          {similarPlayers.map((similar, index) => (
            <SimilarPlayer
              player={similar}
              key={index}
              onSimilarPlayerClick={() => {
                navigate(`/${similar.uuid}`);
                window.location.reload(); // Reload the page
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
