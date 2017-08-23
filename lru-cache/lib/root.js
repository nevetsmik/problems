/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import LRUCache from './lruCache';
import LinkedList from './linkedList';

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

let lru = new LRUCache(4);
lru.set('first', 'Steve');
lru.set('second', 'Kim');
lru.set('third', 'Mary');
lru.set('fourth', 'Hauser');

window.lru = lru;
window.LinkedList = LinkedList;
window.LRUCache = LRUCache;
