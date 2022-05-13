import React, { useState } from "react";
import "../styles/components/item.scss";

const Item = ({ word, answers }) => {
  const [isActive, setActive] = useState(false);
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
      }}
    >
      {word}
    </span>
  );
};

export default Item;
