import {
  LinkedListNode,
  reverseLinkList,
  printLinkedList,
} from "./reverseLinkList";

let nodeA = new LinkedListNode("A");
let nodeB = new LinkedListNode("B");
let nodeC = new LinkedListNode("C");
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = null;

window.LinkedListNode = LinkedListNode;
window.reverseLinkList = reverseLinkList;
window.printLinkedList = printLinkedList;
window.nodeA = nodeA;
window.nodeB = nodeB;
window.nodeC = nodeC;
