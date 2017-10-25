import LLNode from "./deleteNode";
import { deleteNode } from "./deleteNode";

const a = new LLNode(1);
const b = new LLNode(2);
const c = new LLNode(3);

a.next = b;
b.next = c;

window.a = a;
window.b = b;
window.c = c;
window.deleteNode = deleteNode;
