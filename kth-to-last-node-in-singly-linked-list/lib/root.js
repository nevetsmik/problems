/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import { kthToLastNode, LinkedListNode } from './kthToLastNode';

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/
// *
// * *  *
// **** *
// ******
// ******

const a = new LinkedListNode("Angel Food");
const b = new LinkedListNode("Bundt");
const c = new LinkedListNode("Cheese");
const d = new LinkedListNode("Devil's Food");
const e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

window.a = a;
window.b = b;
window.c = c;
window.d = d;
window.e = e;
window.kthToLastNode = kthToLastNode;
