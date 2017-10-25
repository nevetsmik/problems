/*
Your company built an in-house calendar tool called HiCal. You want to add a
feature to see the times in a day when everyone is available. To do this, you’ll
need to know when any team is having a meeting. In HiCal, a meeting is stored as
objects with integer properties startTime and endTime. These integers represent
the number of 30-minute blocks past 9:00am.

For example,

{startTime: 2, endTime: 3} // meeting from 10:00 – 10:30 am
{startTime: 6, endTime: 9} // meeting from 12:00 – 1:30 pm

Write a function mergeRanges() that takes an array of meeting time ranges and
returns an array of condensed ranges.

https://www.interviewcake.com/question/javascript/merging-ranges
*/

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
