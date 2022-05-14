import React, { useContext, useState } from "react";
import wordList from "../api.json";
import { Button } from "../components/Button";
import "../styles/pages/game.scss";
import Item from "../components/Item";
import { WordcloudContext } from "../context/WordcloudContext";

const Game = () => {
  const [answers, setAnswers] = useState([]);
  const { points, setPoints } = useContext(WordcloudContext);
  const clickedArray = [];

  const handleClick = () => {
    setAnswers(wordList.good_words);
    console.log("Clicked: ", clickedArray);

    const badWords = wordList.all_words.filter(
      (n) => !wordList.good_words.includes(n)
    );

    console.log("Bad: ", badWords);

    for (const item of wordList.good_words) {
      if (clickedArray.includes(item)) {
        setPoints((prevState) => prevState + 2);
      } else {
        setPoints((prevState) => prevState - 1);
      }
    }

    for (const item of badWords) {
      if (clickedArray.includes(item)) {
        setPoints((prevState) => prevState - 1);
      }
    }
  };

  return (
    <div className="wrapper">
      <h2>Select animals {points}</h2>
      <div className="box">
        {wordList.all_words.map((word) => {
          return (
            <Item
              word={word}
              key={word}
              answers={answers}
              clickedArray={clickedArray}
            />
          );
        })}
      </div>
      <Button text="Check answers" onClick={handleClick} />
    </div>
  );
};

export default Game;
