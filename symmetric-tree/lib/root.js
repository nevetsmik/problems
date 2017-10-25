import { symmetricTree, inorderTreeTraversal } from "./symmetricTree";
import Node from "./symmetricTree";

let root = new Node(4);
let branch1 = root.insertLeft(1);
let branch2 = root.insertRight(3);
let branch3 = branch1.insertLeft(-2);
let branch4 = branch3.insertRight(3);
let branch5 = branch2.insertLeft(1);
let branch6 = branch2.insertRight(2);
let branch7 = branch6.insertLeft(-4);
let branch8 = branch6.insertRight(-3);

window.root = root;
window.symmetricTree = symmetricTree;
window.inorderTreeTraversal = inorderTreeTraversal;
