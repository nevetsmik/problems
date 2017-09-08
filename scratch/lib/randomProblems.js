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

// Definition for singly-linked list:

// const mixEvents = obj => {
//   let events = {};
//
//   obj.on = function(eventName, cb) {
//     events[eventName] = events[eventName] || [];
//     events[eventName].push(cb);
//   };
//
//   obj.trigger = function(event, ...params) {
//     events[event].forEach(cb => cb.apply(null, params));
//   };
//
//   return obj;
// };

const fs = require('fs');
const path = require('path');

const probsDir = path.join(__dirname, '../..');

const readProbDir = dir => {
  fs.readdir(dir, (err, dirs) => {
    if (err) {
      console.log("Something isn't right...");
    }
    let randomProblems = selectRandomProblems(dirs, 3);
    console.log(randomProblems.join(' / '));
  });
};

const selectRandomProblems = (arrayOfProblems, numProblems) => {
  let randomProblems = [];
  let filtered = arrayOfProblems.filter(problem => problem !== 'scratch' || problem !== 'template');

  for (let i = 0; i < numProblems; i++) {
    const random = Math.floor(Math.random() * filtered.length);
    randomProblems.push(filtered[random]);
  }
  // console.log(randomProblems);
  return randomProblems;
};

readProbDir(probsDir);

/* Example usage:
* var obj = mixEvents({ name: 'Alice', age: 30 });
* obj.on('ageChange', function(){ // On takes an event name and a callback function
*    console.log('Age changed');
* });
* obj.age++;
* obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
*/
