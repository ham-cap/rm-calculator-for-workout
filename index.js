const { Select } = require("enquirer");
const { Form } = require("enquirer");
const COEFFICIENT_OF_BENCH_PRESS = 40;

const calculateRm = function (weightAndReps) {
  const weight = parseFloat(weightAndReps.weight);
  const reps = parseFloat(weightAndReps.reps);
  console.log(weight);
  console.log(reps);
  const rm = (weight * reps) / COEFFICIENT_OF_BENCH_PRESS + weight;
  console.log(`あなたの現在の1RMは「 ${Math.round(rm)}kg 」です。`);
  console.log(
    "※注1：1RMとは「1 Repetition Maximum（最大挙上重量）」の略称であり、1回しか持ち上げられない重量を指します。"
  );
  console.log(
    "※注2：結果はあくまでも目安です。実際に扱える重量には個人差があります。"
  );
};

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
    .then((weightAndReps) => calculateRm(weightAndReps))
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
