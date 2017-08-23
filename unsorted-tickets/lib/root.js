/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import { unsortedTickets } from './unsortedTickets';
import LinkedList from './LinkedList';

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

window.LinkedList = LinkedList;
window.unsortedTickets = unsortedTickets;
window.tickets = [
  ['charlotte', 'durham'],
  ['san francisco', 'denver'],
  ['nashville', 'charlotte'],
  ['st. louis', 'nashville'],
  ['los angeles', 'san francisco'],
  ['denver', 'st. louis'],
];
