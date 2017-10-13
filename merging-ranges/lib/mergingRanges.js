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

// export const mergingRanges = (array) => {
//   let result = [];
//   let slots = {};
//   slots[array[0].startTime] = array[0].endTime;
//
//   for (let i = 1; i < array.length; i++) {
//     let [startTime, endTime] = [array[i].startTime, array[i].endTime];
//     let foundASlot = false;
//     Object.keys(slots).forEach((key) => {
//       if ((startTime >= parseInt(key) && startTime <= parseInt(slots[key])) || endTime >= parseInt(key) && endTime <= parseInt(slots[key])) {
//         foundASlot = true;
//         if (startTime >= parseInt(key) && startTime <= parseInt(slots[key])) {
//           if (endTime > parseInt(slots[key])) {
//             slots[key] = endTime;
//           }
//         } else if (endTime >= parseInt(key) && endTime <= parseInt(slots[key])) {
//           foundASlot = true;
//           let savedEndTime = slots[key];
//           delete slots[key];
//           slots[startTime] = savedEndTime;
//         }
//       }
//     });
//     if (!foundASlot) {
//       slots[startTime] = endTime;
//     }
//   }
//   Object.keys(slots).forEach((key) => {
//     result.push({'startTime': parseInt(key), 'endTime': parseInt(slots[key])});
//   });
//   return JSON.stringify(result);
// };

/*
2 cases to consider when updated endTime for a range:
1. When the preceding endTime is greater than the current startTime
2. When the preceding endTime is greater than the current endTime
*/
export const mergingRanges = ranges => {
  let sortedTimes = ranges.sort((a, b) => a.startTime > b.startTime);

  let mergedTimes = [];
  mergedTimes[0] = sortedTimes[0];

  for (let i = 0; i < sortedTimes.length; i++) {
    let currentRange = sortedTimes[i];
    let lastMergedTime = mergedTimes[mergedTimes.length - 1];

    // Update the endTime for the last merged range if the endTime for the last
    // merged range is greater than the startTime for the currentRange
    if (lastMergedTime.endTime > currentRange.startTime) {
      // Update the endTime for the last merged range to the greater of the currentRange
      // and the last merged time
      lastMergedTime.endTime = Math.max(
        lastMergedTime.endTime,
        currentRange.endTime
      );
    } else {
      mergedTimes.push(currentRange);
    }
  }

  return mergedTimes;
};
