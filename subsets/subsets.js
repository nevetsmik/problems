/*
Find all subsets of an array.
Example: For [1,2,3], there are 2^3 subsets:
[
  [], [1, 2, 3], [1, 2], [1, 3], [2, 3], [1], [2], [3]
]
*/

export const subsets = (array, index = 0) => {
  // array = [1, 2, 3]
  // 2^3 = 8 number of set subsets for the array
  // Assume you have already have subsets of [1, 2], so
  // [], [1], [2], [1, 2]. Now add [3] and concat the existing subsets of
  // [1, 2] with the new subsets.
  // New subsets: [3], [1, 3], [2, 3], [1, 2, 3]
  // Old subsets: [], [1], [2], [1, 2]

  if (array.length === index) {
    return [[]];
    // return [""]; // if input is a string
  }

  const first = [array[index]];
  const withoutFirst = subsets(array, index + 1);
  // remember, we don't want to mutate the subsets without the first element
  // hence, the 'concat'
  const withFirst = withoutFirst.map(sub => first.concat(sub));

  return withoutFirst.concat(withFirst);
};
