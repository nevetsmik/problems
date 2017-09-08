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
