import "./buttons.css";

export default function Buttons({
  onButtonClick,
  equalClick,
  emptyClick
}: {
  onButtonClick: Function;
  equalClick: Function;
  emptyClick: Function;
}) {
  return (
    <section className="buttons">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
        <button key={num} onClick={() => onButtonClick(num)}>
          {num}
        </button>
      ))}

      <button onClick={() => equalClick()}>=</button>
      <button onClick={() => emptyClick()}>c</button>
    </section>
  );
}
