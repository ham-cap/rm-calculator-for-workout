module.exports = class Calculator {
  constructor() {
    this.COEFFICIENT_FOR_STRENGTH = 0.87;
    this.COEFFICIENT_FOR_HYPERTROPHY = 0.8;
    this.COEFFICIENT_FOR_ENDURANCE = 0.65;
  }

  calculateRm(weightAndReps, COEFFICIENT_TO_CALCULATE_RM) {
    const weight = parseFloat(weightAndReps.weight);
    const reps = parseFloat(weightAndReps.reps);
    return Math.round((weight * reps) / COEFFICIENT_TO_CALCULATE_RM + weight);
  }

  calculateRecommendedWeight(rm) {
    return {
      for_strength: Math.round(rm * this.COEFFICIENT_FOR_STRENGTH),
      for_hypertrophy: Math.round(rm * this.COEFFICIENT_FOR_HYPERTROPHY),
      for_endurance: Math.round(rm * this.COEFFICIENT_FOR_ENDURANCE),
    };
  }
};
