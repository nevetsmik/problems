/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';


/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

import { removeKFromList, isListPalindrome } from './scratch';
import ListNode from './scratch';

// [1,2,3,3,2,1]
//[1, 1000000000, -1000000000, -1000000000, 1000000000, 1]

let l = new ListNode(1);
let l2 = new ListNode(2);
let l3 = new ListNode(3);
let l4 = new ListNode(3);
let l5 = new ListNode(2);
let l6 = new ListNode(1);
l.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
l5.next = l6;

window.l = l;
window.isListPalindrome = isListPalindrome;
window.removeKFromList = removeKFromList;

// let root = Node(6);
// let branch1 = root.insertLeft(3);
// let branch2 = root.insertRight(9);
// let branch3 = branch1.insertLeft(2);
// let branch4 = branch1.insertRight(5);
// let branch5 = branch2.insertLeft(8);
// let branch6 = branch2.insertRight(11);
// let branch7 = branch3.insertLeft(1);
// let branch8 = branch4.insertLeft(4);
// let branch9 = branch5.insertLeft(7);
// let branch10 = branch6.insertLeft(10);
