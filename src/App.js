import { useState } from "react";
import "./App.css";
import Input from "./Components/Input/Input";
import Button from "./Components/Button/Button";
import Result from "./Components/Result/Result";
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
      <Button text="-" setValue={setCalc} />
      <Button text="+" setValue={setCalc} /> <br />
      <Button text="signed" setValue={setSign} />
      <Button text="unsigned" setValue={setSign} />
      <Result num1={getNumber(num1)} num2={getNumber(num2)} calc={calc} />
      {
        // Show Unsigned or signed after user has submitted in both fields
        num1 && num2 ? (
          <UnsignedOr
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
