import {
  insert,
  deleteNode,
  max,
  min,
  deleteMax,
  deleteMin,
  inorder,
  preorder,
  postorder,
} from "./deleteNodeFromBST";
import BST from "./deleteNodeFromBST";

window.root = new BST(5);
window.insert = insert;
window.deleteNode = deleteNode;
window.min = min;
window.deleteMin = deleteMin;
window.inorder = inorder;
window.preorder = preorder;
window.postorder = postorder;

insert(root, 2);
insert(root, 6);
insert(root, 1);
insert(root, 4);
insert(root, 3);
insert(root, 8);
insert(root, 7);
// insert(root, 3);
// insert(root, 2);
// insert(root, 1);
// insert(root, 5);
// insert(root, 4);
// insert(root, 20);
// insert(root, 15);
// insert(root, 25);
// insert(root, 11);
// insert(root, 18);
// insert(root, 10);
// insert(root, 14);
// insert(root, 19);
// insert(root, 13);
// insert(root, 12);

window.testInorder = [1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 18, 19, 20, 25];
window.testPreorder = [
  6,
  3,
  2,
  1,
  5,
  4,
  20,
  15,
  11,
  10,
  14,
  13,
  12,
  18,
  19,
  25,
];
window.testPostorder = [
  1,
  2,
  4,
  5,
  3,
  10,
  12,
  13,
  14,
  11,
  19,
  18,
  15,
  25,
  20,
  6,
];
