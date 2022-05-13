import React, { useEffect, useState } from "react";

export const WordcloudContext = React.createContext();

export const WordcloudProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  //   const [potBalance, setPotBalance] = useState(0);
  //   const [playersList, setPlayersList] = useState([]);
  //   const [lotteryHistory, setLotteryHistory] = useState([]);

  return (
    <WordcloudContext.Provider
      value={{
        username,
        setUsername,
      }}
    >
      {children}
    </WordcloudContext.Provider>
  );
};
