import "./operators.css";

export default function Operators({
  onOperatorClick
}: {
  onOperatorClick: Function;
}) {
  return (
    <section className="operators">
      {["+", "-", "*", "/"].map((op) => (
        <button key={op} onClick={() => onOperatorClick(op)}>
          {op}
        </button>
      ))}
    </section>
  );
}
