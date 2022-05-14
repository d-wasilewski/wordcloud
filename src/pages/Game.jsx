import React, { useContext, useState } from "react";
import wordList from "../api.json";
import { Button } from "../components/Button";
import "../styles/pages/game.scss";
import Item from "../components/Item";
import { WordcloudContext } from "../context/WordcloudContext";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const [answers, setAnswers] = useState([]);
  const [isSubmited, setIsSubmitted] = useState(false);
  const { setPoints } = useContext(WordcloudContext);
  const navigate = useNavigate();
  const clickedArray = [];

  const handleCheckClick = () => {
    setAnswers(wordList.good_words);

    const badWords = wordList.all_words.filter(
      (n) => !wordList.good_words.includes(n)
    );

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

    setIsSubmitted(true);
  };

  const handleFinishClick = () => {
    navigate("/results");
  };

  return (
    <div className="wrapper">
      <h2>Select animals</h2>
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
      {!isSubmited ? (
        <Button text="Check answers" onClick={handleCheckClick} />
      ) : (
        <Button text="Finish game" onClick={handleFinishClick} />
      )}
    </div>
  );
};

export default Game;
