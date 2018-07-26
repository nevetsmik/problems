import { digitTreeSums, allPaths } from "./digitTreeSums";
import Node from "./digitTreeSums";

let root = new Node(9);
let branch1 = root.insertLeft(9);
let branch2 = root.insertRight(9);
let branch3 = branch2.insertLeft(1);
let branch4 = branch2.insertRight(3);

window.digitTreeSums = digitTreeSums;
window.allPaths = allPaths;
window.root = root;
