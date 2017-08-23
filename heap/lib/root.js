/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import BinaryHeap from './heap';
import { heapSort } from './heap';

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

window.BinaryHeap = BinaryHeap;
window.heapSort = heapSort;

let bheap = new BinaryHeap();
bheap.insert(33);
bheap.insert(54);
bheap.insert(38);
bheap.insert(29);
bheap.insert(76);
bheap.insert(23);
bheap.insert(44);
bheap.insert(2);
bheap.insert(71);

window.bheap = bheap;
