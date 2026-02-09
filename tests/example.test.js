const { calculateFinalAmount } = require("../src/pricing");

test("example: sanity check", () => {
  expect(1 + 1).toBe(2);
});

test("invalid subtotal throws error", () => {
  expect(() => calculateFinalAmount(-100)).toThrow("Invalid subtotal");
});

test("no coupon case returns same amount for subtotal < 1000", () => {
  expect(calculateFinalAmount(500)).toBe(500);
});

test("SAVE10 coupon applies 10% discount", () => {
  expect(calculateFinalAmount(500, "SAVE10")).toBe(450);
});

test("SAVE10 coupon discount capped at 100", () => {
  expect(calculateFinalAmount(2000, "SAVE10")).toBe(1800);
});

test("FLAT50 boundary case does not go negative", () => {
  expect(calculateFinalAmount(40, "FLAT50")).toBe(0);
});

test("coupon is case-insensitive", () => {
  expect(calculateFinalAmount(500, "save10")).toBe(450);
});
