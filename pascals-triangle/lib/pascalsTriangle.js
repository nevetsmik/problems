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

export const pascalsTriangle = function (n) {
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
