import React, { useState } from "react";

function One() {
  const [count, setCount] = useState(0);

  const _handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 1</h2>
      <p>Count is: {count}</p>
      <button onClick={_handleIncrease}>Increase Count!</button>
    </div>
  );
}

export default One;
