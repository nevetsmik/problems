/*
Calculate the nth number in a fibonacci sequence.
*/

// export const nthFibonacci = (n) => {
//   if (n === 0) {
//     return 0;
//   }
//
//   if (n === 1) {
//     return 1;
//   }
//
//   return nthFibonacci(n - 1) + nthFibonacci(n - 2);
// };

export const nthFibonacci = (n, result = [0, 1]) => {
  if (n === 0 || n === 1) {
    return result[n];
  }

  if (result[n]) {
    return result[n];
  }

  result[n] = nthFibonacci(n - 1) + nthFibonacci(n - 2);

  return result[n];
};

export const nthFibonacciSeq = (n, result = [0, 1]) => {
  // base case:
  if (n === 0) {
    return [0];
  }
  if (n === 1) {
    return [0, 1];
  }

  if (result.length - 1 === n) {
    return result;
  } else {
    let last = nthFibonacciSeq(n - 1, result);
    result.push(last[last.length - 1] + last[last.length - 2]);
    return result;
  }
};
