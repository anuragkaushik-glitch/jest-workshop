# Jest Workshop Submission

## Student Details

- Name: Abhay Pratap Yadav
- Roll Number: 2024-B-04092006B
- GitHub Username: qubitabhay

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test Name: throws on negative subtotal

**What it protects against:**

This test prevents the function from accepting a negative subtotal value.

---

### 2. Test Name: returns subtotal when coupon is omitted

**What it protects against:**

This test ensures the function returns the subtotal when no coupon is provided.

---

### 3. Test Name: applies 10% discount for SAVE10 coupon

**What it protects against:**

This test checks if the function returns the correct total amount when the coupon is "SAVE10".

### 4. Test Name: applies flat 50 discount for FLAT50 coupon

**What it protects against:**

This test checks if the function returns the correct total amount when the coupon is "FLAT50".

---

### 5. Test Name: throws for unknown coupon

**What it protects against:**

This test throws an error for all other coupon values that are not "SAVE10" or "FLAT50".

---

## CI Pipeline (if implemented)

- Did CI pass successfully? Yes
- GitHub Actions Run URL: https://github.com/QUBITABHAY/jest-workshop/actions/runs/21831965262

---

## Reflection (1–2 lines)

What is **one thing** you understood better about testing or CI after this workshop?

I understood better about the importance of testing and CI in the development process. It helps to catch bugs early and ensures that the code is working as expected.
