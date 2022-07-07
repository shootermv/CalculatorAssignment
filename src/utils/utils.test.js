import { calcExpr, parseString } from "./";

describe("calcExpr", () => {
  test("should calculate", () => {
    expect(calcExpr("2+1")).toBe(3);
    expect(calcExpr("1-2")).toBe(-1);
    expect(calcExpr("3-2+1")).toBe(2);
    expect(calcExpr("2*3")).toBe(6);
    expect(calcExpr("3*78/78")).toBe(3);
  });
});
describe("parseString", () => {
  test("minus and power expressions", () => {
    expect(parseString("3*20-30/2")).toBe(45);
  });
  test("invalid", () => {
    expect(parseString("3*20-30/2-")).toBe("3*20-30/2-");
  });
});
