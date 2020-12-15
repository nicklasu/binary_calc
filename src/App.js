import { useState } from "react";
<<<<<<< HEAD

=======
import getNumber from "./Functions/GetNumber";
>>>>>>> 65621ca75691313548a559d1aa815378954078b6
function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();

  console.log(Number(num1) + Number(num2));

  return (
    <>
<<<<<<< HEAD
      <input onChange={(e) => setNum1(e.target.value)}></input>
      <input onChange={(e) => setNum2(e.target.value)}></input>
=======
      <input onChange={(e) => setNum1(getNumber(e.target.value))}></input>
      <input onChange={(e) => setNum2(getNumber(e.target.value))}></input>
>>>>>>> 65621ca75691313548a559d1aa815378954078b6
    </>
  );
}

export default App;
