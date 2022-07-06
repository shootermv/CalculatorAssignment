import "./styles.css";
import Header from "./header";
import Operators from "./operators";
import Buttons from "./buttons";
import { useState } from "react";
const calcExpr = (str: string) => {
  // '2*3' or 3*78/77'
  // take out numbers and push to array
  const numsArr: any[] = str.split(/[^\d]/);
  // take out operators and push to array
  const operatorsArr: any[] = str.replace(/\d/g, "").split("");
  let res = numsArr[0];
  numsArr.shift(); //remove first
  numsArr.forEach((num, idx) => {
    switch (operatorsArr[idx]) {
      case "*":
        res = res * num;
        break;
      case "/":
        res = res / num;
        break;
      case "+":
        res = res + num;
        break;
      case "-":
        res = res - num;
        break;
    }
  });
  return res;
};
const parseString = (str: string) => {
  // cannot include only num
  if (!/\+|\-|\*|\//.test(str)) return str;
  // cannot finish with operator
  if (/\+|\-|\*|\//.test(str.slice(-1))) return str;

  // process '*' & '/'
  let res = str.split(/\-|\+/);
  res.forEach((expr, idx) => {
    res[idx] = calcExpr(expr);
  });
  if (res.length === 1) {
    return res[0];
  }

  // process '-' & '+'
  let finalExp = res[0];
  res.shift();
  let operators = str.replace(/[^\-|\+]/g, "").split("");

  res.forEach((num, idx) => {
    finalExp += operators[idx] + num;
  });

  return calcExpr(finalExp);
};
export default function App() {
  const [displayedStr, setDisplayedStr] = useState<string>("");
  const equalClick = () => {
    const parsed = parseString(displayedStr);
    setDisplayedStr("" + parsed);
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
  return (
    <div className="App">
      <main>
        <Header displayedStr={displayedStr} />
        <Operators onOperatorClick={onOperatorClick} />
        <Buttons onButtonClick={onButtonClick} equalClick={equalClick} />
      </main>
    </div>
  );
}
