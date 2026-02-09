const { calculateFinalAmount } = require("../src/pricing");

test("example: sanity check", () => {
  expect(1 + 1).toBe(2);
});

test("Check for invalid sub total", () => {
  expect(() => calculateFinalAmount(-100, "DISCOUNT")).toThrow(
    "Invalid subtotal",
  );
});

test("returns subtotal when coupon is omitted", () => {
  const expectedValue = calculateFinalAmount(100);
  expect(expectedValue).toEqual(Math.max(0, Math.round(100 * 100) / 100));
});

test("applies 10% discount for SAVE10 coupon", () => {
  const expectedValue = calculateFinalAmount(100, "SAVE10");
  expect(expectedValue).toEqual(90);
});

test("applies flat 50 discount for FLAT50 coupon", () => {
  const expectedValue = calculateFinalAmount(100, "FLAT50");
  expect(expectedValue).toEqual(Math.max(0, Math.round(50 * 100) / 100));
});

test("throws for unknown coupon", () => {
  expect(() => calculateFinalAmount(100, "Other")).toThrow("Invalid Coupon");
});
