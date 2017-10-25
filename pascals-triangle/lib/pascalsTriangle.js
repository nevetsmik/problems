/*
Find the first n rows of Pascal's Triangle. 
*/

// export const pascalsTriangle = function (n) {
//   if (n === 0) {
//     return [1];
//   }
//
//   if (n === 1) {
//     return [1, 1];
//   }
//
//   let last = pascalsTriangle(n - 1);
//   let next = [];
//   next.push(1);
//   last.forEach((el, idx) => {
//     if (idx < last.length - 1) {
//       next.push(el + last[idx + 1]);
//     }
//   });
//   next.push(1);
//   return next;
// };

export const pascalsTriangle = function(n) {
  if (n === 0) {
    return [[1]];
  }

  if (n === 1) {
    return [[1], [1, 1]];
  }

  let rows = pascalsTriangle(n - 1);
  let lastRow = rows.slice(-1)[0];
  let next = [];
  next.push(1);
  lastRow.forEach((el, idx) => {
    if (idx < lastRow.length - 1) {
      next.push(el + lastRow[idx + 1]);
    }
  });
  next.push(1);
  rows.push(next);
  return rows;
};
