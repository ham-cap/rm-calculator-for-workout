const { Select } = require("enquirer");
const { Form } = require("enquirer");
const BenchPress = require("./bench_press.js");
const SquatAndDeadLift = require("./squat_and_dead_lift.js");
const Validator = require("./validator.js");
const validator = new Validator();

module.exports = class Prompt {
  askAnExercise() {
    const promptSelectAnExercise = new Select({
      name: "exercises",
      message: "Choose an exercise",
      choices: ["Bench Press", "Squat", "Dead Lift"],
    });
    return promptSelectAnExercise.run();
  }

  createAnExercise(answer) {
    const selectedExercise =
      answer === "Bench Press" ? new BenchPress() : new SquatAndDeadLift();
    return selectedExercise;
  }

  askWeightAndReps() {
    const promptEnterWeightAndReps = new Form({
      name: "user",
      message:
        "Please enter Weight and Reps(number of reqetitions you can lift with the weight).",
      choices: [
        {
          name: "weight",
          message: "Weight",
        },
        {
          name: "reps",
          message: "Reps",
        },
      ],
      validate: validator.isPositiveNumber,
    });
    return promptEnterWeightAndReps.run();
  }
};
