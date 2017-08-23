/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import { LinkedListNode, reverseLinkList, printLinkedList } from './reverseLinkList';

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/
// *
// * *  *
// **** *
// ******
// ******

let nodeA = new LinkedListNode("A");
let nodeB = new LinkedListNode("B");
let nodeC = new LinkedListNode("C");
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = null;

window.LinkedListNode = LinkedListNode;
window.reverseLinkList = reverseLinkList;
window.printLinkedList = printLinkedList;
window.nodeA = nodeA;
window.nodeB = nodeB;
window.nodeC = nodeC;
