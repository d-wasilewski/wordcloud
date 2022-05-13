import React, { useState } from "react";
import wordList from "../api.json";
import { Button } from "../components/Button";
import "../styles/pages/game.scss";
import Item from "../components/Item";

const Game = () => {
  const [answers, setAnswers] = useState([]);

  const handleClick = () => {
    setAnswers(wordList.good_words);
  };

  return (
    <div className="wrapper">
      <h2>Select animals</h2>
      <div className="box">
        {wordList.all_words.map((word) => {
          return <Item word={word} key={word} answers={answers} />;
        })}
      </div>
      <Button text="Check answers" onClick={handleClick} />
    </div>
  );
};

export default Game;
