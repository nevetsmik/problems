/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import LLNode from './deleteNode';
import { deleteNode } from './deleteNode';

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

const a = new LLNode(1);
const b = new LLNode(2);
const c = new LLNode(3);

a.next = b;
b.next = c;

window.a = a;
window.b = b;
window.c = c;
window.deleteNode = deleteNode;
