/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import HashMap from './hashMap';
import { makeHashTable } from './hashTableResizing';

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

// let hash = new HashMap(5);
// hash.insert(1, 'steve');
// hash.insert(2, 'kim');
// hash.insert(3, 'mary');
// hash.insert(4, 'hauser');
window.HashMap = HashMap;
window.makeHashTable = makeHashTable;

let hash = new makeHashTable(5);
hash.insert(1, 'steve');
hash.insert(2, 'kim');
hash.insert(3, 'mary');
// hash.insert(4, 'hauser');
window.hash = hash;
