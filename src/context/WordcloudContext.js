import React, { useMemo, useState } from "react";
import wordListApi from "../api.json";

export const WordcloudContext = React.createContext();

export const WordcloudProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [points, setPoints] = useState(0);
  const [clickedArray, setClickedArray] = useState([]);

  const wordList = useMemo(() => {
    return wordListApi[Math.floor(Math.random() * wordListApi.length)];
  }, []);

  return (
    <WordcloudContext.Provider
      value={{
        username,
        setUsername,
        points,
        setPoints,
        wordList,
        clickedArray,
        setClickedArray,
      }}
    >
      {children}
    </WordcloudContext.Provider>
  );
};
