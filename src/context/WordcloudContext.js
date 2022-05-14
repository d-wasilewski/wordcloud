import React, { useState } from "react";

export const WordcloudContext = React.createContext();

export const WordcloudProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [points, setPoints] = useState(0);

  return (
    <WordcloudContext.Provider
      value={{
        username,
        setUsername,
        points,
        setPoints,
      }}
    >
      {children}
    </WordcloudContext.Provider>
  );
};
