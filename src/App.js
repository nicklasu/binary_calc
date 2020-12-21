import { useState } from "react";
import "./App.css";
import Input from "./Components/Input/Input";
import Result from "./Components/Result/Result";
import Unsigned from "./Components/Unsigned/Unsigned";
import getNumber from "./Functions/GetNumber";
import Header from "./Components/Header/Header";
import UnsignedOr from "./Components/UnSignedOr/UnsignedOr";
function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [calc, setCalc] = useState("+");
  const [sign, setSign] = useState("unsigned");

  return (
    <main className="main-content">
      <Header sign={sign} />
      <Input setNumber={setNum1} />
      <Input setNumber={setNum2} /> <br />
      <button onClick={() => setCalc("-")}>-</button>
      <button onClick={() => setCalc("+")}>+</button> <br />
      <button onClick={() => setSign("signed")}>signed</button>
      <button onClick={() => setSign("unsigned")}>unsgnd</button>
      <Result num1={getNumber(num1)} num2={getNumber(num2)} />
      <UnsignedOr sign={sign} />
      {
        // Show Unsigned after user has submitted in both fields
        num1 && num2 ? (
          <Unsigned
            setNum1={setNum1}
            setNum2={setNum2}
            num1={num1}
            num2={num2}
            calc={calc}
            sign={sign}
          />
        ) : null
      }
    </main>
  );
}

export default App;
