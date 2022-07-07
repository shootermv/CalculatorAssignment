export const calcExpr = (str: string): number => {
  // '2*3' or 3*78/77' or '3-2+1'
  // take out numbers and push to array
  const numsArr: any[] = str.split(/[^\d]/);
  // take out operators and push to array
  const operatorsArr: string[] = str.replace(/\d/g, "").split("");
  let res = numsArr[0];
  numsArr.shift(); //remove first
  numsArr.forEach((num: number, idx) => {
    switch (operatorsArr[idx]) {
      case "*":
        res = res * num;
        break;
      case "/":
        res = res / num;
        break;
      case "+":
        res = Number(res) + Number(num);
        break;
      case "-":
        res = res - num;
        break;
    }
  });
  return res;
};
export const validate = (str: string): boolean => {
  // cannot include only num
  if (!/\+|\-|\*|\//.test(str)) return false;
  // cannot finish with operator
  if (/\+|\-|\*|\//.test(str.slice(-1))) return false;
  return true;
};
export const parseString = (str: string) => {
  if (!validate(str)) return str;
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
