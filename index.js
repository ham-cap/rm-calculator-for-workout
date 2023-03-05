const { Select } = require("enquirer");
const { Form } = require("enquirer");
const BenchPress = require("./bench_press.js");
const SquatAndDeadLift = require("./squat_and_dead_lift.js");

const isPositiveNumber = function (input) {
  const [weight, reps] = Object.values(input).map((value) => parseFloat(value));
  if (typeof weight === "number" && typeof weight === "number") {
    if (weight > 0 && reps > 0) {
      return true;
    }
  } else {
    return "Please input valid numbers.";
  }
};

const askWeightAndReps = function (answer) {
  console.log(`Answer:${answer}`);
  const selectedExercise =
    answer === "Bench Press" ? new BenchPress() : new SquatAndDeadLift();

  const promptEnterWeightAndReps = new Form({
    name: "user",
    message: "Please provide the following information:",
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
    validate: isPositiveNumber,
  });

  promptEnterWeightAndReps
    .run()
    .then((weightAndReps) => selectedExercise.calculateRm(weightAndReps))
    .catch(console.error);
};

const promptSelectAnExercise = new Select({
  name: "exercises",
  message: "Choose an exercise",
  choices: ["Bench Press", "Squat", "Dead Lift"],
});

promptSelectAnExercise
  .run()
  .then((answer) => askWeightAndReps(answer))
  .catch(console.error);
