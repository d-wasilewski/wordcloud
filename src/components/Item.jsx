import React, { useState, useContext } from "react";
import "../styles/components/item.scss";
import { WordcloudContext } from "../context/WordcloudContext";

const Item = ({ word, answers }) => {
  const [isActive, setActive] = useState(false);
  const { clickedArray, setClickedArray } = useContext(WordcloudContext);
  const isCorrect = answers.includes(word);

  let answerClass = "";
  if (answers.length && isCorrect && isActive) {
    answerClass = "good";
  }
  if (answers.length && !isCorrect && isActive) {
    answerClass = "bad";
  }

  return (
    <span
      className={`item ${isActive && "clicked"} ${answerClass}`}
      style={{ width: word.length * 40 }}
      onClick={() => {
        setActive(!isActive);
        if (clickedArray.includes(word)) {
          const temp = clickedArray.filter((x) => x !== word);
          setClickedArray(temp);
        } else {
          setClickedArray((prevState) => [...prevState, word]);
        }
      }}
    >
      {word}
    </span>
  );
};

export default Item;
