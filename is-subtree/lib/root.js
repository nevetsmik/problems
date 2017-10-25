/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import { isSubtree, isSubtreeHelper } from "./isSubtree";

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

window.isSubtree = isSubtree;
window.isSubtreeHelper = isSubtreeHelper;

window.t1 = {
  value: 5,
  left: {
    value: 10,
    left: {
      value: 4,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 2,
        left: null,
        right: null,
      },
    },
    right: {
      value: 6,
      left: null,
      right: {
        value: -1,
        left: null,
        right: null,
      },
    },
  },
  right: {
    value: 7,
    left: null,
    right: null,
  },
};

window.t2 = {
  value: 10,
  left: {
    value: 4,
    left: {
      value: 1,
      left: null,
      right: null,
    },
    right: {
      value: 2,
      left: null,
      right: null,
    },
  },
  right: {
    value: 6,
    left: null,
    right: {
      value: -1,
      left: null,
      right: null,
    },
  },
};

window.t3 = null;
window.t4 = null;

window.t5 = {
  value: 1,
  left: {
    value: 2,
    left: null,
    right: null,
  },
  right: {
    value: 2,
    left: null,
    right: null,
  },
};
window.t6 = null;
