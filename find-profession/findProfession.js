/*
Consider a special family of Engineers and Doctors. This family has the
following rules:

- Everybody has two children
- The first child of an Engineer is an Engineer and the second child is a Doctor
- The first child of a Doctor is a Doctor and the second child is an Engineer
- All generations of Doctors and Engineers start with an Engineer

            E
       /         \
      E           D
    /   \        /  \
    E     D      D    E
  / \   / \    / \   / \
E   D D   E   D  E  E   D

Given the level and position of a person in the ancestor tree above, find the
profession of the person.

For level = 3 and pos = 3, the output should be
findProfession(level, pos) = "Doctor".

https://codefights.com/interview-practice/task/FwAR7koSB3uYYsqDp
*/

export const findProfession = (level, pos) => {
  let queue = [];
  queue[0] = ["Engineer", 1];
  let levels = [];

  while (queue.length) {
    let current = queue.shift();
    levels.push(current);
    let [profession, lvl] = current;
    if (lvl > level + 1) {
      break;
    }
    let eng = ["Engineer", lvl + 1];
    let doc = ["Doctor", lvl + 1];
    if (profession === "Engineer") {
      queue.push(eng);
      queue.push(doc);
    } else {
      queue.push(doc);
      queue.push(eng);
    }
  }
  let filteredLevel = levels.filter(node => node[1] === level);
  return filteredLevel[pos - 1][0];
};
