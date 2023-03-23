module.exports = class Validator {
  isPositiveNumber(input) {
    const [weight, reps] = Object.values(input).map((value) =>
      parseFloat(value)
    );
    if (typeof weight === "number" && typeof reps === "number") {
      if (weight > 0 && reps > 0) {
        return true;
      }
    } else {
      return "Please input valid numbers.";
    }
  }
};
