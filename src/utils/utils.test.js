import { calcExpr, parseString } from "./";

describe("calcExpr", () => {
  test("should calculate", () => {
    expect(calcExpr("3-2+1")).toBe(2);
    expect(calcExpr("2*3")).toBe(6);
    expect(calcExpr("3*78/78")).toBe(3);
  });
});
describe("parseString", () => {
  test("ac", () => {
    expect(parseString("3*20-30/2")).toBe(45);
  });
});
