const Prompt = require("./prompt.js");
const prompt = new Prompt();

async function test() {
  const answer = await prompt.askAnExercise();
  const selectedExercise = await prompt.createAnExercise(answer);
  const weightAndReps = await prompt.askWeightAndReps();
  selectedExercise.displayRmAndRecommendation(weightAndReps);
}

test();
