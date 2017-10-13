/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';

import Node from "./topologicalSort";
import { topologicalSortDF, topologicalSortBF } from "./topologicalSort";

/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/

const a = new Node("A");
const c = new Node("C");
const d = new Node("D");
const f = new Node("F");
const g = new Node("G");
const b = new Node("B");
const e = new Node("E");
a.addChildren(c);
c.addChildren(d);
d.addChildren(f);
f.addChildren(g);
b.addChildren(c, e);
e.addChildren(f);

window.Node = Node;
window.graph = [a, b, c, d, e, f, g];
window.topologicalSortDF = topologicalSortDF;
window.topologicalSortBF = topologicalSortBF;
