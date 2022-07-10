import { calcExpr, parseString } from "./";

describe("calcExpr", () => {
  test("should calculate", () => {
    expect(calcExpr("2+1")).toBe(3);
    expect(calcExpr("1-2")).toBe(-1);
    expect(calcExpr("3-2+1")).toBe(2);
    expect(calcExpr("2x3")).toBe(6);
    expect(calcExpr("3x78/78")).toBe(3);
    expect(calcExpr("2.5+1")).toBe(3.5);
  });
});
describe("parseString", () => {
  test("minus and power expressions", () => {
    expect(parseString("3x20-30/2")).toBe(45);
  });
  test("invalid should return string", () => {
    expect(parseString("3x20-30/2-")).toBe("3x20-30/2-");
  });
  test("'-' at the beginning shold treated as '0-'", () => {
    expect(parseString("-3x20-30/2")).toBe(-75);
  });
});
