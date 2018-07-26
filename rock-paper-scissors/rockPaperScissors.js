// export const rockPaperScissors = (throwsLeft, currentCombo = []) => {
//   let rps = ["rock", "paper", "scissors"];
//
//   if (throwsLeft === 0) {
//     return [currentCombo.slice()];
//   }
//
//   let result = [];
//
//   for (let i = 0; i < rps.length; i++) {
//     let device = rps[i];
//     currentCombo.push(device);
//     result = result.concat(rockPaperScissors(throwsLeft - 1, currentCombo));
//     currentCombo.pop();
//   }
//
//   return result;
// };

export const rockPaperScissors = (
  throwsLeft,
  currentCombo = [],
  final = []
) => {
  let rps = ["rock", "paper", "scissors"];

  if (throwsLeft === 0) {
    final.push(currentCombo.slice());
    return;
  }

  for (let i = 0; i < rps.length; i++) {
    let device = rps[i];
    currentCombo.push(device);
    rockPaperScissors(throwsLeft - 1, currentCombo, final);
    currentCombo.pop();
  }

  return final;
};
