export const OPERATORS = /\+|\-|\x|\//;
export const OPERATORS_ARR = ["+", "-", "x", "/"];
export const calcExpr = (str: string): number => {
  // '2*3' or 3*78/77' or '3-2+1'
  // take out numbers and push to array
  const numsArr: any[] = str.split(OPERATORS);
  // take out operators and push to array
  const operatorsArr: string[] = str.replace(/[0-9](\.[0-9]+)?/g, "").split("");
  let res = numsArr[0];
  numsArr.shift(); //remove first
  numsArr.forEach((num: number, idx) => {
    switch (operatorsArr[idx]) {
      case "x":
        res = Number(res) * Number(num);
        break;
      case "/":
        res = Number(res) / Number(num);
        break;
      case "+":
        res = Number(res) + Number(num);
        break;
      case "-":
        res = Number(res) - Number(num);
        break;
    }
  });
  return res;
};
export const validate = (str: string): boolean => {
  // cannot include only num
  if (!OPERATORS.test(str)) return false;
  // cannot finish with operator
  if (OPERATORS.test(str.slice(-1))) return false;
  return true;
};
export const parseString = (str: string) => {
  if (!validate(str)) return str;

  // - at the beginning shuold treated as '0-'
  if (str.slice(0, 1) === "-") {
    str = "0" + str;
  }

  // process '*' & '/'
  let res: any[] = str.split(/\-|\+/);
  // '1*2-3' => ['1*2', '3']
  res.forEach((expr, idx) => {
    res[idx] = calcExpr(expr);
  }); // ['1*2', '3']  => [2,3]
  if (res.length === 1) {
    // no '+' or '-' exists
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
