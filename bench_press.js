const Exercise = require("./exercise.js");

module.exports = class BenchPress extends Exercise {
  constructor() {
    super();
    this.COEFFICIENT_TO_CALCULATE_REPETITION_MAXIMUM = 40;
  }
};
