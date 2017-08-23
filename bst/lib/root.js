/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import BST from './bst';

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

let root = new BST(6);
root.insert(3);
root.insert(9);
root.insert(2);
root.insert(5);
root.insert(4);
root.insert(8);
root.insert(7);
root.insert(12);
root.insert(11);
root.insert(13);

window.BST = BST;
window.root = root;
