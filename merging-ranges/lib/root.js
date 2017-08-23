/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import { mergingRanges } from './mergingRanges';

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

window.hiCal =   [
    {startTime: 1, endTime: 10},
    {startTime: 2, endTime: 6},
    {startTime: 3, endTime: 5},
    {startTime: 7, endTime: 9},
];
// window.hiCal = [
//   {startTime: 0,  endTime: 1},
//   {startTime: 3,  endTime: 5},
//   {startTime: 4,  endTime: 8},
//   {startTime: 10, endTime: 12},
//   {startTime: 9,  endTime: 10}
// ];
window.mergingRanges = mergingRanges;
