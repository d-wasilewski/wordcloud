import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import Input from "../components/Input";
import { WordcloudContext } from "../context/WordcloudContext";
import "../styles/pages/welcome.scss";

const Welcome = () => {
  const { setUsername } = useContext(WordcloudContext);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(value);
    navigate("/game");
  };
  return (
    <div className="container">
      <h1>Wordcloud game</h1>
      <div className="name-input-wrapper">
        <form onSubmit={handleSubmit} className="name-input">
          <Input
            initialPlaceholder={"Enter your nickname here..."}
            value={value}
            onChange={handleChange}
          />
          <Button text="play" />
        </form>
      </div>
    </div>
  );
};

export default Welcome;
