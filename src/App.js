import "./App.css";
import React, { useState } from "react";

function App() {
  // Corrected useState usage
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
  
  let calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height');
    } else {
      const calculatedBmi = (weight / (height * height) * 703).toFixed(1);
      setBmi(calculatedBmi);
  
      if (calculatedBmi < 18.5) {
        setMessage('You are underweight');
      } else if (calculatedBmi >= 18.5 && calculatedBmi < 25) {
        setMessage('You have a healthy weight');
      } else {
        setMessage('You are overweight');
      }
    }
  }
  

  let reload = () => {
    window.location.reload();
  }

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            {/* Added labels for input fields */}
            <label htmlFor="weight">Weight (ibs)</label>
            <input id="weight" type="text" placeholder="Enter the weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            {/* Added labels for input fields */}
            <label htmlFor="height">Height (in)</label>
            <input id="height" type="text" placeholder="Enter the height" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className="btn" type="submit">
              {" "}
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="button"> {/* Changed type to "button" */}
              {" "}
              Reload
            </button>
          </div>
          <div className="center">
            {/* Added space after "is" */}
            <h3>Your BMI is {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
