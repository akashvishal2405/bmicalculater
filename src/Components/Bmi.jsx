import React, { useState } from "react";
import "./Bmi.css";
import hero from "../assets/hero.png";

const Bmi = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [error, setError] = useState("");

  function CalculateBmi() {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if (isValidHeight && isValidWeight) {
      const calculateHeight = height / 100;
      const calculateWeight = weight / (calculateHeight * calculateHeight);
      setBmi(calculateWeight.toFixed(2));
      if (calculateWeight < 18.5) {
        setBmiStatus("Underweight");
      } else if (calculateWeight >= 18.5 && calculateWeight < 24.9) {
        setBmiStatus("Normal Weight");
      } else if (calculateWeight >= 25 && calculateWeight < 29.9) {
        setBmiStatus("Overweight");
      } else {
        setBmiStatus("Obese");
      }
      setError("");
    } else {
      setBmi(null);
      setBmiStatus("");
      setError("Please enter valid number");
    }
  }
  function Clear() {
    setHeight("");
    setWeight("");
    setError("");
    setBmi(null);
    setBmiStatus("");
  }

  return (
    <div className="outerbox">
      <div className="innerbox">
        <div className="container">
          <div className="left">
            <img src={hero} alt="doctorImg" className="img" />
          </div>
          <div className="right">
            <h1>BMI CALCULATOR</h1>
            {error && <p className="error">{error}</p>}
            <label htmlFor="height">Height (cm):</label>
            <br />
            <input
              type="text"
              value={height}
              id="height"
              className="input"
              onChange={(e) => setHeight(e.target.value)}
            />
            <br />
            <div className="box">
              <label htmlFor="weight">Weight (Kg):</label>
              <br />
              <input
                type="text"
                value={weight}
                id="weight"
                className="input"
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="button-container">
              <button className="calculate" onClick={() => CalculateBmi()}>
                Calculate BMI
              </button>
              <button className="clear" onClick={() => Clear()}>
                Clear
              </button>
            </div>
            {bmi !== null && (
              <div className="result">
                <h4>Your BMI is: {bmi}</h4>
                <p>Status: {bmiStatus}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bmi;
