import styles from "../styles/header.module.scss";
import search from "../assets/icons/Search.svg";
import filter from "../assets/icons/Filter.svg";
import { useState } from "react";
import Filter from "./Filter";
import { useLocation } from "react-router-dom";
import axios from 'axios';

const initialValues = {
  stats_filter: {
    avg_field_goal_pct: "0",
    avg_free_throw_pct: "0",
    avg_three_point_pct: "0",
    avg_points: "0",
    avg_rebounds: "0",
    avg_assists: "0",
    position: "",
    weight: "",
    height: "",
    age: "",
  },
  categorical_query: ""
};

export default function Header({ searchResults, setSearchResults }) {
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

  const location = useLocation();

  const [searchParameters, setSearchParameters] = useState(initialValues);
  const [showFilter, setShowFilter] = useState(false);

  const updateSearchParameters = (newParams) => {
    setSearchParameters(newParams);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const keyPressed = (e) => {
    if (e.key === "Enter") {
      axios
        .post("http://127.0.0.1:5000/search/player", searchParameters, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(res => setSearchResults(res.data))
        .catch(err => console.log(err));
    }
  };

  return (
    <div
      className={`${styles.container} ${
        searchResults && searchResults.length === 0 && styles.lower
      }`}
    >
      <div className={styles.sideline}>
        Side<span className={styles.red}>l</span>ine
      </div>
      <div className={styles.searchContainer}>
        <img src={search} alt="search" className={styles.searchIcon} />
        <input
          className={styles.searchBar}
          type="text"
          placeholder={
            location.pathname !== "/"
              ? "Search for a video"
              : "Search for a player"
          }
          value={searchParameters.categorical_query}
          onChange={(e) => {
            updateSearchParameters({
              ...searchParameters,
              categorical_query: e.target.value
            });
          }}
          onKeyDown={keyPressed}
        />
      </div>
      <button
        className={`${styles.filterContainer} ${
          showFilter ? styles.active : ""
        }`}
        onClick={toggleFilter}
      >
        <p>Filter</p>
        <img src={filter} alt="Filter" />
      </button>
      {showFilter && (
        <Filter
          toggleFilter={toggleFilter}
          searchParameters={searchParameters}
          updateSearchParameters={setSearchParameters}
        />
      )}
    </div>
  );
}
