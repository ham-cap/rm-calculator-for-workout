const Calculator = require("./calculator.js");
const calculator = new Calculator();

module.exports = class Exercise {
  constructor() {
    this.COEFFICIENT_FOR_STRENGTH = 0.87;
    this.NUMBER_OF_REPETITION_FOR_STRENGTH = 5;
    this.COEFFICIENT_FOR_HYPERTROPHY = 0.8;
    this.NUMBER_OF_REPETITION_FOR_HYPERTROPHY = 8;
    this.COEFFICIENT_FOR_ENDURANCE = 0.65;
    this.NUMBER_OF_REPETITION_FOR_ENDURANCE = 18;
    this.NUMBER_OF_SETS = 3;
  }

  showRm(rm) {
    console.log(`あなたの現在の1RMは「 ${rm}kg 」です。`);
    console.log(
      "※注1：1RMとは「1 Repetition Maximum（最大挙上重量）」の略称であり、1回しか持ち上げられない重量を指します。"
    );
    console.log(
      "※注2：結果はあくまでも目安です。実際に扱える重量には個人差があります。"
    );
  }

  recommendTrainingMenu(rm) {
    console.log("目的別の推奨メニューは以下のとおりです。");
    console.log(
      `【筋力アップ】 ${Math.round(rm * this.COEFFICIENT_FOR_STRENGTH)}kg × ${
        this.NUMBER_OF_REPETITION_FOR_STRENGTH
      }回 × ${this.NUMBER_OF_SETS}セット`
    );
    console.log(
      `【筋肥大】 ${Math.round(rm * this.COEFFICIENT_FOR_HYPERTROPHY)}kg × ${
        this.NUMBER_OF_REPETITION_FOR_HYPERTROPHY
      }回 × ${this.NUMBER_OF_SETS}セット`
    );
    console.log(
      `【筋持久力アップ】 ${Math.round(
        rm * this.COEFFICIENT_FOR_ENDURANCE
      )}kg × ${this.NUMBER_OF_REPETITION_FOR_ENDURANCE}回 × ${
        this.NUMBER_OF_SETS
      }セット`
    );
    console.log("理想の身体を目指して頑張りましょう！");
  }

  displayRmAndRecommendation(weightAndReps) {
    const rm = calculator.calculateRm(
      weightAndReps,
      this.COEFFICIENT_TO_CALCULATE_RM
    );
    this.showRm(rm);
    this.recommendTrainingMenu(rm);
  }
};
