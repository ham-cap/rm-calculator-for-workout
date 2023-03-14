const Calculator = require("./calculator.js");
const calculator = new Calculator();

module.exports = class Exercise {
  constructor() {
    this.NUMBER_OF_REPETITION_FOR_STRENGTH = 5;
    this.NUMBER_OF_REPETITION_FOR_HYPERTROPHY = 8;
    this.NUMBER_OF_REPETITION_FOR_ENDURANCE = 18;
    this.NUMBER_OF_SETS = 3;
  }

  showRepetitionMaximum(rm) {
    console.log("");
    console.log(`Your current 1RM* is about ${rm}kg.`);
    console.log(
      "* One-Repetition Maximum. It means the heaviest weight you can lift only once."
    );
    console.log("** The result is only guideline.");
  }

  showRecommendedTrainingMenu(rm) {
    const recommendedWeight = calculator.calculateRecommendedWeight(rm);
    console.log("");
    console.log(
      "The recommended training menus based on the result are shown below. They are grouped by purposes."
    );
    console.log(
      `For Muscle Strength: ${recommendedWeight.for_strength}kg × ${this.NUMBER_OF_REPETITION_FOR_STRENGTH}times × ${this.NUMBER_OF_SETS}sets`
    );
    console.log(
      `For Muscle Hypertrophy: ${recommendedWeight.for_hypertrophy}kg × ${this.NUMBER_OF_REPETITION_FOR_HYPERTROPHY}times × ${this.NUMBER_OF_SETS}sets`
    );
    console.log(
      `For Muscle Endurance: ${recommendedWeight.for_endurance}kg × ${this.NUMBER_OF_REPETITION_FOR_ENDURANCE}times × ${this.NUMBER_OF_SETS}sets`
    );
    console.log("");
    console.log("Let's enjoy your workout!!");
    console.log("");
  }

  displayRepetitionMaximumAndRecommendation(weightAndReps) {
    const rm = calculator.calculateRepetitionMaximum(
      weightAndReps,
      this.COEFFICIENT_TO_CALCULATE_REPETITION_MAXIMUM
    );
    this.showRepetitionMaximum(rm);
    this.showRecommendedTrainingMenu(rm);
  }
};
