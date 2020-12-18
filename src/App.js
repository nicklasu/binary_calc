import { useState } from "react";
import "./App.css";
import Input from "./Components/Input/Input";
import Result from "./Components/Result/Result";
import Unsigned from "./Components/Unsigned/Unsigned";
import getNumber from "./Functions/GetNumber";
function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [calc, setCalc] = useState("+");

  // TODO:
  // Vois jotenkin tyylitellä kevyesti tätä sivustoa
  // Kissakuvia ja mageita videoita
  // Muista golden ratio

  return (
    <main className="main-content">
      <Input setNumber={setNum1} />
      <Input setNumber={setNum2} /> <br />
      <button onClick={() => setCalc("-")}>-</button>
      <button onClick={() => setCalc("+")}>+</button>
      <Result num1={getNumber(num1)} num2={getNumber(num2)} calc={calc} />
      {
        // Show Unsigned after user has submitted in both fields
        num1 && num2 ? <Unsigned num1={num1} num2={num2} calc={calc} /> : null
      }
    </main>
  );
}

export default App;
