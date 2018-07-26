import { largestLevelSum } from "./largestLevelSum";
import Tree from "./largestLevelSum";

let root = new Tree(30);
let branch1 = root.addChild(3);
let branch2 = root.addChild(9);
let branch3 = branch1.addChild(2);
let branch4 = branch1.addChild(5);
let branch5 = branch2.addChild(8);
let branch6 = branch2.addChild(11);
let branch7 = branch3.addChild(1);
let branch8 = branch4.addChild(4);
let branch9 = branch5.addChild(7);
let branch10 = branch6.addChild(10);

/*
              6
        3           9
    2       5    8     11
  1       4    7    10
*/

window.largestLevelSum = largestLevelSum;
window.Tree = Tree;
window.root = root;
