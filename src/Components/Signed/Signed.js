// Signed
import signedFlip from '../../Functions/Signed/signedFlip';
import calculate from '../../Functions/Calculate';

function Signed({
  num1, num2, calc,
}) {
  const total = calculate(signedFlip(num1),
    signedFlip(num2), calc).toString(2);

  return (
    <section>
      <p>{`${num1}`}</p>
      <p>{`${num2}`}</p>
      <hr />
      <p>{`${total}`}</p>
    </section>
  );
}
export default Signed;
