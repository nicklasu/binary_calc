import './style.css';
import { useEffect } from 'react';
import getNumber from '../../Functions/GetNumber';
import calculate from '../../Functions/Calculate';
import addZeros from './Functions/addZeros';
import checkOverflow from './Functions/UnsignedOverflow';

const carryToNext = (num1, num2, num3) => Number(num1) + Number(num2) + num3 > 1;
console.log(carryToNext('1', '1', 0));

// TODO:
// Niin ku tän komponentin nimi kertoo, se näyttää vaan Unsigned version
// Tän komponentin sisälle ei muuta kamaa, eli tän komponentin
// Tehtävä on tietää vaan niistä asioista mitä sen nimi kertoo

// Jos tämän ja Signed komponentin välillä vaihdellaan näkymää
// Niin tehdään se tuolla UnSignedOr komponentissa
// Eli UnSignedOr pitäisi sisällään 2 komponenttia (Signed, UnSigned)
// UnSignedOrn sisälle se logiikka mikä vaihtaa näkymää niiden kahden komponentin välillä
// if (sign === "unsigned") niin näytä Unsigned komponentti
// Vähän samalla idealla kuin mitä oot tehnyt tonne Header komponenttiin

// Reactissa on hyvä pitää komponentit mahdollisimman pieninä, ainakin tän tason ohjelmassa
// Helpompi testata niitä ja tehdä muutoksia, kun komponentissa on mahdollisimman vähän koodia tai
// Siihen kohdistuu mahdollisimman vähän sivuvaikutuksia

// Display unsigned char calculation
function Unsigned({
  num1, num2, setNum1, setNum2, calc,
}) {
  // Set max bit size from user input
  const bitSize = Math.max(num1.length, num2.length);

  // When component updates, adds needed zeros according to bitSize
  useEffect(() => {
    setNum1(addZeros(num1, bitSize));
    setNum2(addZeros(num2, bitSize));
  });

  // Display result as binary
  const resultAsBinary = calculate(
    getNumber(num1),
    getNumber(num2),
    calc,
  ).toString(2);

  // Display the result
  const result = checkOverflow(resultAsBinary, bitSize);

  return (
    <>
      <p>{num1}</p>
      <p>{num2}</p>
      <hr />
      <p>{result}</p>
    </>
  );
}
export default Unsigned;
