import React, { useState } from "react";
import './style.css';

const App = () => {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [heightVl, setHeightVl] = useState("");
  const [weightVl, setWeightVl] = useState("");
  
  const handleBmi = () => {
    
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val < 18.5) {
      setInfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
    setHeightVl("");
    setWeightVl("");
  };
  return (
    <div className="block ui container">
    <div className="ui form">
      <h1 style={{textAlign: "center"}}>BMI Calculator</h1>
      <label>Height : </label>
      <input
        type="text"
        value={heightVl}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="height in cm";
      /><br/>
      <label>Weight : </label>
      <input
        type="text"
        value={weightVl}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Weight in kg"
      /><br/>
      <button onClick={handleBmi}>Calculate</button>
    </div>  
      <h2>BMI : {bmi}</h2>
      <h2>STATUS : {info}</h2>
    </div>
  );
};

export default App;
