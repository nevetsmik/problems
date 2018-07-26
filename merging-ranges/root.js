import { mergingRanges } from "./mergingRanges";

// window.hiCal = [
//   { startTime: 1, endTime: 10 },
//   { startTime: 2, endTime: 6 },
//   { startTime: 3, endTime: 5 },
//   { startTime: 7, endTime: 9 },
// // ];
window.hiCal = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
];
// window.hiCal = [{ startTime: 1, endTime: 5 }, { startTime: 2, endTime: 3 }];
window.mergingRanges = mergingRanges;
