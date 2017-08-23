/*********
Export an object that contains multiple functions

const scratch = {
  fn1: function(){},
  fn2: function(){}
};

export { scratch };
**********/


/*********
Export multiple functions all at once

const fn1 = function(){};
const fn2 = function(){};

export { fn1, fn2 };
**********/


/*********
Export functions as you write them

export const fn1 = function(){};
export const fn2 = function(){};
**********/

export const topScores = (unsortedScores, HIGHEST_POSSIBLE_SCORE) => {
  const scoreCounts = [];
  const sortedScores = [];

  unsortedScores.forEach((score) => {
    scoreCounts[score] = scoreCounts[score] || 0;
    scoreCounts[score] = scoreCounts[score] + 1;
  });

  for (let i = HIGHEST_POSSIBLE_SCORE; i >= 0; i--) {
    if (scoreCounts[i] > 0) {
      for (let j = 0; j < scoreCounts[i]; j++) {
        sortedScores.push(i);
      }
    }
  }

  return sortedScores;
};
