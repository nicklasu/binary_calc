import { useState } from "react";
import "./App.css";
import Input from "./Components/Input/Input";
import Result from "./Components/Result/Result";
function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  // Buttonit josta toinen vaihtaisi allaolevan muuttujan arvoksi (+)
  // ja toinen vaihtaisi (-)
  // Löytyy Reactin sivulta kun googlettaa useState
  const [calc, setCalc] = useState("-");

  return (
    <main className="main-content">
      <Input setNumber={setNum1} />
      <Input setNumber={setNum2} />
      <Result num1={num1} num2={num2} calc={calc} />
    </main>
  );
}

export default App;
