/*
CTCI: You are building a diving board by placing a bunch of planks of wood end-to-end. There already
type type of planks, one of length shorter and the other longer. You must use exactly K planks of
wood. Write a method to generate all possible lengths for the diving board.

Example: 5 planks; shorter = 1, longer = 2

{
shorter + shorter + shorter + shorter + shorter,
shorter + shorter + shorter + shorter + longer,
shorter + shorter + shorter + longer + longer,
etc...
}

*/

export const divingBoard = (k, shorter, longer) => {
  return Object.keys(divingBoardHelper(k, [shorter, longer])).length;
  // return divingBoardHelper(k, [shorter, longer]);
};

// export const divingBoardHelper = (k, lengths, currentLength = 0, diffLengths = {}) => {
//   if (k === 0) {
//     if (!diffLengths.hasOwnProperty(currentLength)) {
//       diffLengths[currentLength] = true;
//     }
//     return diffLengths;
//   }
//
//   for (let i = 0; i < lengths.length; i++) {
//     divingBoardHelper(k - 1, lengths, currentLength + lengths[i], diffLengths);
//   }
//
//   return diffLengths;
// };

// Memoized
export const divingBoardHelper = (k, lengths, currentLength = 0, diffLengths = {}) => {
  if (diffLengths.hasOwnProperty(`${k}-${currentLength}`)) {
    return diffLengths;
  }

  if (k === 0) {
    // console.log(currentLength);
    if (!diffLengths.hasOwnProperty(currentLength)) {
      diffLengths[`${k}-${currentLength}`] = true;
    }
    return diffLengths;
  }

  for (let i = 0; i < lengths.length; i++) {
    divingBoardHelper(k - 1, lengths, currentLength + lengths[i], diffLengths);
  }

  return diffLengths;
};
