# Jest Workshop Submission

## Student Details
- Name: Anishka Khurana
- Roll Number: 2024-B-24082006A
- GitHub Username: Tia-ani

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test Name:
invalid subtotal throws error  
**What it protects against:**  
Prevents the function from silently accepting negative or invalid subtotal values, ensuring input validation works correctly.

---

### 2. Test Name:
no coupon case returns same amount for subtotal < 1000  
**What it protects against:**  
Ensures the base calculation remains correct when no coupon is applied and no discount conditions are met.

---

### 3. Test Name:
SAVE10 coupon applies 10% discount  
**What it protects against:**  
Verifies that percentage-based discounts are calculated correctly and not misapplied.

---

### 4. Test Name:
FLAT50 boundary case does not go negative  
**What it protects against:**  
Prevents negative final amounts when a flat discount exceeds the subtotal.

---

### 5. Test Name:
coupon is case-insensitive  
**What it protects against:**  
Ensures coupons work regardless of letter casing, improving usability and preventing unexpected failures.

---

## CI Pipeline (if implemented)
- Did CI pass successfully? Yes
- GitHub Actions Run URL: [URL](https://github.com/Tia-ani/jest-workshop/actions/runs/21824834152)

---

## Reflection (1–2 lines)
I understood how writing tests for edge cases prevents regressions and how CI ensures code reliability by automatically running tests on every push or pull request.
