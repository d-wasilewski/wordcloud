import React, { useContext, useState } from "react";
import { WordcloudContext } from "../context/WordcloudContext";
import "../styles/components/item.scss";

const Item = ({ word, answers, clickedArray }) => {
  const [isActive, setActive] = useState(false);
  let { points, setPoints } = useContext(WordcloudContext);
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
        clickedArray.push(word);
      }}
    >
      {word}
    </span>
  );
};

export default Item;
