import React, { useState } from "react";
import Little from "./Little";

function Five() {
  const [showText, setshowText] = useState(true);

  const _handleShowLittle = () => {
    setshowText(!showText);
  };
  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 5</h2>
      <h3>Here below lies little text in a box</h3>
      <button onClick={_handleShowLittle}>Click to toggle Little</button>
      {showText ? <Little /> : ""}
    </div>
  );
}

export default Five;
