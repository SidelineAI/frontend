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

export default function Profile() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const [video, setVideo] = useState([]);
  const [similarPlayers, setSimilarPlayers] = useState(null);
  const [loadingPlayer, setLoadingPlayer] = useState(true);
  const [loadingSimilarPlayers, setLoadingSimilarPlayers] = useState(true);

  useEffect(() => {
    // GET PLAYER DATA
    axios
      .get(`http://127.0.0.1:5000/player/${id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        setPlayer(res.data);
        setLoadingPlayer(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoadingPlayer(false); // Ensure loading is set to false even if there is an error
      });

    axios
      .post(`http://127.0.0.1:5000/search/video`, {
        query: ".",
        num_vids: 1,
        player_id: id,
      })
      .then((res) => {
        setVideo(res.data);
      })
      .catch((err) => {
        console.error(err);
        // setLoadingSimilarPlayers(false);
      });
    // GET SIMILAR PLAYERS
    axios
      .post(`http://127.0.0.1:5000/search/similar`, {
        uuid: id,
        num_players: 3,
      })
      .then((res) => {
        setSimilarPlayers(res.data);
        setLoadingSimilarPlayers(false);
      })
      .catch((err) => {
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
      <button className={styles.backContainer} onClick={() => navigate(-1)}>
        <img src={LeftArrow} alt="Back" />
        <p>Home</p>
      </button>
      <Header />
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
        <p className={styles.content}>{player.scouting_report}</p>
        <div className={styles.analysisContainer}>
          <img src={star} alt="Star" />
          <p className={styles.sidelineAnalysis}>Sideline AI Analysis</p>
        </div>
      </div>
      <div className={styles.recsContainer}>
        <p className={styles.subtitle}>Recommendations</p>
        <div className={styles.recs}>
          <Rec
            rec={{
              rec: "John is a dedicated student with a strong passion for physics.",
              pfp: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2024-04/240412-mark-pope-se-107p-e20400.jpg",
              name: "John Doe",
              school: "University of Example",
            }}
          />
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
