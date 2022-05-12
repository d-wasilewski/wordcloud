import React from "react";
import "../styles/components/button.scss";

export const Button = ({ text, onClick }) => {
  return (
    <button className={"button"} onClick={onClick}>
      {text}
    </button>
  );
};
