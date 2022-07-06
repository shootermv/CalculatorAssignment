import "./styles.css";
import Header from "./header";
import Operators from "./operators";
import Buttons from "./buttons";
import { useState } from "react";
export default function App() {
  const [displayedStr, setDisplayedStr] = useState("");
  const onButtonClick = (num: number) => {
    setDisplayedStr(`${displayedStr}${num}`);
  };
  return (
    <div className="App">
      <main>
        <Header displayedStr={displayedStr} />
        <Operators />
        <Buttons onButtonClick={onButtonClick} />
      </main>
    </div>
  );
}
