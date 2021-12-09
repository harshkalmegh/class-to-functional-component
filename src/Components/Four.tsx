import React, { useState } from "react";

function Four() {
  const [message, setmessage] = useState("What's happening this week?");

  setTimeout(() => {
    setmessage("I only know it's gon be lit!!");
  }, 5000);

  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 4</h2>
      <p>Status: {message}</p>
    </div>
  );
}

export default Four;
