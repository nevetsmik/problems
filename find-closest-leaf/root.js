import { findClosestLeaf } from './findClosestLeaf';
import Node from './node';

window.findClosestLeaf = findClosestLeaf;

/*
    1
  /   \
 2     3
        \
         4
          \
           5
*/

var current, root = new Node(1);
current = root.left = new Node(2);
current = root.right = new Node(3);
current = current.right = new Node(4);
current = current.right = new Node(5);

let result = findClosestLeaf(root, 3);
console.log(result); // returns 2

/*
          1
        /   \
      2       3
     /         \
    4           5
   /
  6
 /
7
*/

root = new Node(1);
var node2 = root.left = new Node(2);
var node3 = root.right = new Node(3);
var node4 = node2.left = new Node(4);
var node5 = node3.right = new Node(5);
var node6 = node4.left = new Node(6);
var node7 = node6.left = new Node(7);

result = findClosestLeaf(root, 4);
console.log(result); // returns 5

/*
          1
        /   \
      2       3
*/

var root = new Node(1);
var node2 = root.left = new Node(2);
var node3 = root.right = new Node(3);

result = findClosestLeaf(root, 2);
console.log(result); // returns 2
