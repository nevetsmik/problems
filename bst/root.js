import BST from "./bst";

let root = new BST(6);
root.insert(3);
root.insert(9);
root.insert(2);
root.insert(5);
root.insert(4);
root.insert(8);
root.insert(7);
root.insert(12);
root.insert(11);
root.insert(13);

window.BST = BST;
window.root = root;
