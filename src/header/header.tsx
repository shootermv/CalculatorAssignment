import "./header.css";

export default function Header({ displayedStr }) {
  return (
    <header className="header">
      <input value={displayedStr} />
    </header>
  );
}
