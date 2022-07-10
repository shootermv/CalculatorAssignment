import "./operators.css";
import { OPERATORS_ARR } from "../utils";
export default function Operators({
  onOperatorClick
}: {
  onOperatorClick: Function;
}) {
  return (
    <section className="operators">
      {OPERATORS_ARR.map((op) => (
        <button key={op} onClick={() => onOperatorClick(op)}>
          {op}
        </button>
      ))}
    </section>
  );
}
