import React, { useContext } from "react";
import { WordcloudContext } from "../context/WordcloudContext";
import "../styles/pages/results.scss";

const Results = () => {
  const { username, points } = useContext(WordcloudContext);

  return (
    <div className="container">
      <div className="congratulations">Congratulations, {username}</div>
      <div className="score">Your score:</div>
      <div className="score blue">{points} points</div>
    </div>
  );
};

export default Results;
