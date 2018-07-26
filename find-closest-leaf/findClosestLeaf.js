/*
https://leetcode.com/problems/closest-leaf-in-a-binary-tree/description/
*/


export const findClosestLeaf = (tree, target) => {
  let BFtraversed = traverseBF(tree);

  // Will find first leaf after the target starting from the left of BFtraversed
  let left = traverse("left", BFtraversed, target);

  // if target is the root then return the first leaf
  if (tree.value === target) {
    return left[0];
  }

  // Will find first leaf after the target starting from the right of BFtraversed
  let right = traverse("right", BFtraversed, target);

  // Leaves to the "left" and to the "right" of the target
  if (left && right) {
    let [valueLeft, targetLevelLeft, levelLeft] = left;
    let [valueRight, targetLevelRight, levelRight] = right;
    if (Math.abs(levelLeft - targetLevelLeft) < Math.abs(levelRight - targetLevelRight)) {
      return valueLeft;
    } else {
      return valueRight;
    }
  } else if (left) {
    // right returns null because there are no leaves to the left of the target
    let [value, targetLevel, level] = left;
    return value;
  } else {
    // left returns null because there are no leaves to the right the target
    let [value, targetLevel, level] = right;
    return value;
  }
};

const traverseBF = tree => {
  let result = [];
  let queue = [];
  queue[0] = [tree, 0];

  while (queue.length > 0) {
    let current = queue.shift();
    let node = current[0];
    let level = current[1];
    if (node.left || node.right) {
      result.push([node.value, level, false]);
      if (node.left) {
        queue.push([node.left, level + 1]);
      }

      if (node.right) {
        queue.push([node.right, level + 1]);
      }
    } else {
      result.push([node.value, level, true]);
    }
  }
  return result;
};

const traverse = function (direction, nodes, target) {
  let distance = 0;
  let targetFound = false;
  let levelTarget;
  if (direction === "left") {
    for (let i = 0; i < nodes.length; i++) {
      let [value, level, isLeaf] = nodes[i];
      if (value === target) {
        targetFound = true;
        levelTarget = level;
      }

      if (targetFound && isLeaf) {
        return [value, levelTarget, level];
      }
    }
    return null;
  } else {
    for (let i = nodes.length - 1; i >= 0; i--) {
      let [value, level, isLeaf] = nodes[i];
      if (value === target) {
        targetFound = true;
        levelTarget = level;
      }

      if (targetFound && isLeaf) {
        return [value, levelTarget, level];
      }
    }
    return null;
  }
};
