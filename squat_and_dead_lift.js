const Exercise = require("./exercise.js");

module.exports = class SquatAndDeadLift extends Exercise {
  constructor() {
    super();
    this.COEFFICIENT_TO_CALCULATE_RM = 33.3;
  }
};
