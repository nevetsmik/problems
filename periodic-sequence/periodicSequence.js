/*
A periodic sequence s is defined as follows:

s[0], a, b and m are all given positive integers;
s[i] for i > 0 is equal to (a * s[i - 1] + b) mod m.
Find the period of s, i.e. the smallest integer T such that for each i > k
(for some integer k): s[i] = s[i + T].

Example

For s0 = 11, a = 2, b = 6 and m = 12, the output should be
periodicSequence(s0, a, b, m) = 2.

The sequence would look like this: 11, 4, 2, 10, 2, 10, 2, 10, 2, 10....

For s0 = 1, a = 2, b = 3 and m = 5, the output should be
periodicSequence(s0, a, b, m) = 4.

The sequence would look like this: 1, 0, 3, 4, 1, 0, 3, 4, 1, 0, 3, 4....
*/

/*
Build up the sequence. Start counting the number of values added to the sequence when a value has
been created twice. When the sequence repeats the third time, then you return t - 1.

1. Build up the sequence
2. Hash each calculated value in the periodic
3. Once a value has been repeated twice, then start counting the number of times till the third
repeat occurs.
*/

export const periodicSequence = (s0, a, b, m) => {
  let sequence = [];
  sequence[0] = s0;
  let numRepeats = 1;
  let repeats = {};
  let t = 0;
  while (numRepeats <= 2) {
    let nextNum = (a * sequence[sequence.length - 1] + b) % m;
    sequence.push(nextNum);
    repeats[nextNum] = repeats[nextNum] || 0;
    repeats[nextNum]++;
    let values = Object.values(repeats);
    if (values.some(value => value > numRepeats)) {
      numRepeats++;
    }
    if (numRepeats >= 2) {
      t++;
    }
  }
  /*
  t increments on the start of the second cycle and on the start of the third cycle while the loop
  stops once the third cycle begins; thus you must deduct 1 from t to get the number of steps to
  find the period of the sequence.
  */
  return t - 1;
};
