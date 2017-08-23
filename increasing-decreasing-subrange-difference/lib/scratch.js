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

var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, data) {
    if (err) throw err;
    let lines = data.split('\n');
    let firstLine = lines[0].split(' ');
    let numDays = firstLine[0];
    let window = firstLine[1];
    let array = lines[1];
    increasingDecreasingDifference(numDays, window, array);
});

let increasingDecreasingDifference = function(numDays, window, array) {
  let result = [];
  for 
};
