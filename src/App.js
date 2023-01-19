import './App.css';
import { useState } from "react";

function App() {

  const [age, setAge] = useState(0);

  const increasAge = () => {
    setAge(age + 1);
  };

  const decreaseAge = () => {
    setAge(age - 1);
  };

  const setToZero = () => {
    setAge(0);
  };

  return (
    <div className="App">
      <h1>{age}</h1> <br/>
      <button onClick={increasAge}>Increase Age</button>
      <button onClick={decreaseAge}>Dicrease Age</button>
      <button onClick={setToZero}>Set to Zero</button>
    </div>
  );
}

export default App;

