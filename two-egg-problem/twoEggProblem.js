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

export const twoEggProblem = (numFloors, floorNumDrop, floorNumSuccess, numEggs) => {

  // If floorNumDrop is > 100 or floorNumDrop is < 1 or numEggs === 0
  if (floorNumDrop > numFloors || floorNumDrop < 1 || numEggs === 0) {
    // return floorNumSuccess
    return floorNumSuccess;
  }

  // Drop the egg
  const didEggBreakFromNumFloorDrop = dropEggFromFloorNum(floorNumDrop);

  // If the egg breaks, then...
  if (didEggBreakFromNumFloorDrop) {
    // Decrement the floorNumDrop by 1, decrement floorNumDrop
    // Recurse
    return twoEggProblem(numFloors, floorNumDrop - 1, floorNumSuccess, numEggs - 1);
  } else { // If the egg doesn't break, then...
    // If the floorNumDrop is 1 above floorNumSuccess, then...
    if (floorNumDrop - floorNumSuccess === 1) {
      // return floorNumSuccess
      return floorNumSuccess;
    }
    // Increment floorNumDrop by 2, set floorNumSuccess to floorNumDrop
    // Recurse
    return twoEggProblem(numFloors, floorNumDrop + 2, floorNumDrop, numEggs);
  }
};

export const dropEggFromFloorNum = floorNum => {
  return Math.floor(Math.random() * 2);
};
