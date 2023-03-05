const COEFFICIENT_OF_BENCH_PRESS = 40;
const COEFFICIENT_FOR_STRENGTH = 0.87;
const NUMBER_OF_REPETITION_FOR_STRENGTH = 5;
const COEFFICIENT_FOR_HYPERTROPHY = 0.8;
const NUMBER_OF_REPETITION_FOR_HYPERTROPHY = 8;
const COEFFICIENT_FOR_ENDURANCE = 0.65;
const NUMBER_OF_REPETITION_FOR_ENDURANCE = 18;
const NUMBER_OF_SETS = 3;

module.exports = class BenchPress {
  recommendTrainingMenu(rm) {
    console.log("目的別の推奨メニューは以下のとおりです。");
    console.log(
      `【筋力アップ】 ${Math.round(
        rm * COEFFICIENT_FOR_STRENGTH
      )}kg × ${NUMBER_OF_REPETITION_FOR_STRENGTH}回 × ${NUMBER_OF_SETS}セット`
    );
    console.log(
      `【筋肥大】 ${Math.round(
        rm * COEFFICIENT_FOR_HYPERTROPHY
      )}kg × ${NUMBER_OF_REPETITION_FOR_HYPERTROPHY}回 × ${NUMBER_OF_SETS}セット`
    );
    console.log(
      `【筋持久力アップ】 ${Math.round(
        rm * COEFFICIENT_FOR_ENDURANCE
      )}kg × ${NUMBER_OF_REPETITION_FOR_ENDURANCE}回 × ${NUMBER_OF_SETS}セット`
    );
    console.log("理想の身体を目指して頑張りましょう！");
  }

  calculateRm(weightAndReps) {
    const weight = parseFloat(weightAndReps.weight);
    const reps = parseFloat(weightAndReps.reps);
    const rm = (weight * reps) / COEFFICIENT_OF_BENCH_PRESS + weight;
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
