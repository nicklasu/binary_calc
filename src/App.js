import { useState } from "react";
import getNumber from "./Functions/GetNumber";
function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();

  console.log(Number(num1) + Number(num2));

  return (
    <>
      <input onChange={(e) => setNum1(getNumber(e.target.value))}></input>
      <input onChange={(e) => setNum2(getNumber(e.target.value))}></input>
    </>
  );
}

export default App;
