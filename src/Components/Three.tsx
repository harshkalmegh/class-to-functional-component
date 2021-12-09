import React, { useState } from "react";

function Three() {
  const [car, setcar] = useState({
    year: 1995,
    type: "Mercedes",
    used: true,
  });

  const _handleCarYear = (e: any) => {
    const { value } = e.target;
    setcar((prevState) => ({
      ...prevState,
      year: value,
    }));
  };

  const _handleCartype = (e: any) => {
    const { value } = e.target;
    setcar((prevState) => ({
      ...prevState,
      type: value,
    }));
  };

  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 3</h2>
      <h3>Car Spec is:</h3>
      <ul>
        <li>{car.type}</li>
        <li>{car.year}</li>
        <li>{car.used ? "Used Car" : "Brand New!"}</li>
      </ul>
      <span>Type : </span>
      <input type="text" onChange={_handleCartype} />
      <br />
      <span>Year : </span>
      <input type="text" onChange={_handleCarYear} />
    </div>
  );
}

export default Three;
