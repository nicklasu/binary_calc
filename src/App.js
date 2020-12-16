import { useState } from "react";
import "./App.css";
import Input from "./Components/Input/Input";
import Result from "./Components/Result/Result";
function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  // Poistin ne funktiot
  // Ei niissä mitään vikaa ollut hyvin ne toimi
  // Sitten kun saat tämän toimimaan niin huomaat että
  // Tämä tyyli on yksinkertaisempi

  // Buttonit josta toinen vaihtaisi -> calc <- muuttujan arvoksi (+)
  // ja toinen vaihtaisi (-)
  // setCalc liittyy vahvasti siihen
  // Löytyy Reactin sivulta kun googlettaa useState

  // Ja vois koittaa tehdä aina pull requestin ennen ku pushataan
  // Ehtisin kattoa sitä koodia ja kommentoida ennen ku liitetään se projektiin
  // En ole varma itsekään miten se tarkalleen tehdään mutta se on oikea tyyli tehä näitä :D

  //Jätin oletuksena tän + stateen koska silloin ruudulle ilmestyy interaktiivisesti lukuja, muuten vasta kun painaa nappeja.
  const [calc, setCalc] = useState("+");

  return (
    <main className="main-content">
      <Input setNumber={setNum1} />
      <Input setNumber={setNum2} /> <br />
      <button onClick={() => setCalc("-")}>-</button>
      <button onClick={() => setCalc("+")}>+</button>
      <Result num1={num1} num2={num2} calc={calc} />
    </main>
  );
}

export default App;
