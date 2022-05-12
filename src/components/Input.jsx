import React, { useState } from "react";
import "../styles/components/input.scss";

const Input = ({ initialPlaceholder, value, onChange }) => {
  const [placeholder, setPlaceholder] = useState(initialPlaceholder);

  return (
    <input
      type="text"
      aria-label="search"
      placeholder={placeholder}
      onFocus={() => setPlaceholder("")}
      onBlur={() => setPlaceholder(initialPlaceholder)}
      value={value}
      onChange={onChange}
      className="input"
    />
  );
};

export default Input;
