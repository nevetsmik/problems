import { pathToTargetSum } from "./pathToTargetSum";
import Node from "./pathToTargetSum";

let root = new Node(4);
let branch1 = root.insertLeft(1);
let branch2 = root.insertRight(3);
let branch3 = branch1.insertLeft(-2);
let branch4 = branch3.insertRight(3);
let branch5 = branch2.insertLeft(1);
let branch6 = branch2.insertRight(2);
let branch7 = branch6.insertLeft(-4);
let branch8 = branch6.insertRight(-3);

// let root = new Node(6);
// let branch1 = root.insertLeft(3);
// let branch2 = root.insertRight(9);
// let branch3 = branch1.insertLeft(2);
// let branch4 = branch1.insertRight(5);
// let branch5 = branch2.insertLeft(8);
// let branch6 = branch2.insertRight(11);
// let branch7 = branch3.insertLeft(1);
// let branch8 = branch4.insertLeft(4);
// let branch9 = branch5.insertLeft(7);
// let branch10 = branch6.insertLeft(10);

window.pathToTargetSum = pathToTargetSum;
window.root = root;
