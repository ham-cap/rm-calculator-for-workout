module.exports = class Calculator {
  calculateRm(weightAndReps, COEFFICIENT_TO_CALCULATE_RM) {
    const weight = parseFloat(weightAndReps.weight);
    const reps = parseFloat(weightAndReps.reps);
    return Math.round((weight * reps) / COEFFICIENT_TO_CALCULATE_RM + weight);
  }
};
