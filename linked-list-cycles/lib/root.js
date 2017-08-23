/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import LLNode from './linkedListCycles';
import { linkedListCycles } from './linkedListCycles';

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

let a = new LLNode(1);
let b = new LLNode(2);
let c = new LLNode(3);
let d = new LLNode(4);
let e = new LLNode(5);
let f = new LLNode(6);

a.next = b;
b.next = null;
// c.next = a;
// d.next = e;
// e.next = f;
// f.next = a;

window.LLNode = LLNode;
window.a = a;
window.linkedListCycles = linkedListCycles;
