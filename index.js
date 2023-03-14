#! /usr/bin/env node

const Prompt = require("./prompt.js");
const prompt = new Prompt();

async function main() {
  const answer = await prompt.askAnExercise();
  const selectedExercise = await prompt.createAnExercise(answer);
  const weightAndReps = await prompt.askWeightAndReps();
  selectedExercise.displayRepetitionMaximumAndRecommendation(weightAndReps);
}

main();
