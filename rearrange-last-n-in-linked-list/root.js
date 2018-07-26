import { rearrangeLastN } from "./rearrangeLastN";
import Node from "./rearrangeLastN";

let l1 = Node(1);
let l2 = Node(2);
let l3 = Node(3);
let l4 = Node(4);
let l5 = Node(5);

l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;

window.rearrangeLastN = rearrangeLastN;
window.l1 = l1;
