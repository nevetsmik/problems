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

const fs = require("fs");

const readNumsFromFile = (filepath, callback) => {
  fs.readFile(filepath, (err, lines) => {
    if (err) {
      console.log("file not found");
    }
    callback(lines);
  });
};

readNumsFromFile("./queries.sql", lines => {
  lines = lines.toString();
  console.log(
    lines
      .split("\n")
      .map(Number)
      .reduce((a, b) => a + b)
  );
});
