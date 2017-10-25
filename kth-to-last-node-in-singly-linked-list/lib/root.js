import { kthToLastNode, LinkedListNode } from "./kthToLastNode";

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
