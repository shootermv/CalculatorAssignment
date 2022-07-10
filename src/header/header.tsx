import "./header.css";

export default function Header({
  displayedStr,
  onInputChange
}: {
  displayedStr: string;
  onInputChange: Function;
}) {
  return (
    <header className="header">
      <input
        value={displayedStr}
        onChange={() => {}}
        placeholder="0"
        onKeyDown={(e) => onInputChange(e.key)}
      />
    </header>
  );
}
