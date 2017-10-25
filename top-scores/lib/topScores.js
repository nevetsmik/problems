/*
Write a function that takes:
a list of unsorted_scores
the highest_possible_score in the game
and returns a sorted list of scores in less than O(n*log n) time.
*/

export const topScores = (unsortedScores, HIGHEST_POSSIBLE_SCORE) => {
  const scoreCounts = [];
  const sortedScores = [];

  unsortedScores.forEach(score => {
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
