import React, { useContext } from "react";
import { WordcloudContext } from "../context/WordcloudContext";

const Results = () => {
  const { username } = useContext(WordcloudContext);

  return <div>Hello {username}</div>;
};

export default Results;
