/*
Find all the permutations of elements within an array (or string).
*/

export const permutations = array => {
  // array = [1, 2, 3]
  // 3! = 6 permutations
  // Assume you have permutations for [1, 2], so [1, 2] and [2, 1]. Now
  // how do you get permutations of [1, 2, 3]? Stick 3 in each of the indices.
  // [3, 1, 2], [1, 3, 2], [1, 2, 3]
  // [3, 2, 1], [2, 3, 1], [2, 1, 3]

  if (array.length <= 1) {
    return [array];
  }

  let first = array[0];
  let perms = permutations(array.slice(1));

  let totalPerms = [];

  // Iterate over each permutation
  perms.forEach(perm => {
    // Iterate over the length of the permutation
    for (let i = 0; i <= perm.length; i++) {
      // Slice in [first] at every index
      let newPerm = perm
        .slice(0, i)
        .concat([first])
        .concat(perm.slice(i));
      totalPerms.push(newPerm);
    }
  });

  return totalPerms;
};
