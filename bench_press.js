const Exercise = require("./exercise.js");

module.exports = class BenchPress extends Exercise {
  constructor() {
    super();
    this.COEFFICIENT_TO_CALCULATE_RM = 40;
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

  calculateRm(weightAndReps) {
    const weight = parseFloat(weightAndReps.weight);
    const reps = parseFloat(weightAndReps.reps);
    const rm = (weight * reps) / this.COEFFICIENT_TO_CALCULATE_RM + weight;
    console.log(`あなたの現在の1RMは「 ${Math.round(rm)}kg 」です。`);
    console.log(
      "※注1：1RMとは「1 Repetition Maximum（最大挙上重量）」の略称であり、1回しか持ち上げられない重量を指します。"
    );
    console.log(
      "※注2：結果はあくまでも目安です。実際に扱える重量には個人差があります。"
    );
    this.recommendTrainingMenu(rm);
  }
};
