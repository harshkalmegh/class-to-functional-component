import React, { useState } from "react";

function Two() {
  const [activeUser, setActiveUser] = useState<any>("Chris");

  const _handleChangeUser = () => {
    setActiveUser("Bolingo!");
  };

  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 2</h2>
      <p>Active User is: {activeUser}</p>
      <button onClick={_handleChangeUser}>Change Me!</button>
    </div>
  );
}

export default Two;
