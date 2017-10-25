import LLNode from "./linkedListCycles";
import { linkedListCycles } from "./linkedListCycles";

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
