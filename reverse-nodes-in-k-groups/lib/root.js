/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import { Node, reverseList, reverseNodesInKGroups } from './reverseNodesInKGroups';

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

// let l1 = Node(24042453);
// let l2 = Node(-540165420);
// let l3 = Node(992040586);
// let l4 = Node(867794712);
// let l5 = Node(262916773);
// let l6 = Node(-508129645);
// let l7 = Node(-503549928);
// let l8 = Node(-526666356);
// let l9 = Node(766910780);
// let l10 = Node(-417669299);

let l1 = Node(1);
let l2 = Node(2);
let l3 = Node(3);
let l4 = Node(4);
let l5 = Node(5);
let l6 = Node(6);
let l7 = Node(7);
let l8 = Node(8);
let l9 = Node(9);
let l10 = Node(10);

// [24042453, -540165420, 992040586, 867794712, 262916773, -508129645, -503549928, -526666356, 766910780, -417669299]
// [-508129645, 262916773, 867794712, 992040586, -540165420, 24042453, -503549928, -417669299]
// [-508129645, 262916773, 867794712, 992040586, -540165420, 24042453, -503549928, -526666356, 766910780, -417669299]

l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
l5.next = l6;
l6.next = l7;
l7.next = l8;
l8.next = l9;
l9.next = l10;

window.reverseList = reverseList;
window.reverseNodesInKGroups = reverseNodesInKGroups;
window.l1 = l1;
