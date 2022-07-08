import "./styles.css";
import Header from "./header";
import Operators from "./operators";
import Buttons from "./buttons";
import { useState } from "react";
import { parseString } from "./utils";

export default function App() {
  const [displayedStr, setDisplayedStr] = useState<string>("");
  const equalClick = () => {
    const parsed = parseString(displayedStr);
    setDisplayedStr(`${parsed}`);
  };
  const onButtonClick = (num: number) => {
    setDisplayedStr(`${displayedStr}${num}`);
  };
  const onOperatorClick = (op: string) => {
    // logic
    if (displayedStr === "") return; //no opertators when no digits
    if (/\+|\-|\*|\//.test(displayedStr.slice(-1))) return; //cannot add operator twice
    setDisplayedStr(`${displayedStr}${op}`);
  };
  const onInputChange = (key: string) => {
    if (/^[0-9]$/i.test(key)) {
      onButtonClick(Number(key));
    }
  };
  return (
    <div className="App">
      <main>
        <Header displayedStr={displayedStr} onInputChange={onInputChange} />
        <Operators onOperatorClick={onOperatorClick} />
        <Buttons
          onButtonClick={onButtonClick}
          equalClick={equalClick}
          emptyClick={() => setDisplayedStr("")}
        />
      </main>
    </div>
  );
}
