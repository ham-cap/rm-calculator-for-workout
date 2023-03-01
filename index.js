const { Select } = require("enquirer");
const { Form } = require("enquirer");

const isPositiveNumber = function (input) {
  const [weight, reps] = Object.values(input).map((value) => Number(value));
  if (Number.isInteger(weight) && Number.isInteger(reps)) {
    if (weight > 0 && reps > 0) {
      return true;
    }
  } else {
    return "Please input valid numbers.";
  }
};
const askWeightAndReps = function (answer) {
  console.log(`Answer:${answer}`);
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
    .then((value) => console.log("Answer:", value))
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
