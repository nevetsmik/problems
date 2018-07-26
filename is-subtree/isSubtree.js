/*
Given two binary trees t1 and t2, determine whether the second tree is a subtree
of the first tree. A subtree for vertex v in a binary tree t is a tree consisting
of v and all its descendants in t. Determine whether or not there is a vertex v
(possibly none) in tree t1 such that a subtree for vertex v (possibly empty)
in t1 equals t2

https://codefights.com/interview-practice/task/mDpAJnDQkJqaYYsCg
*/

export const isSubtree = (t1, t2) => {
  if (t1 === null && t2 === null) {
    return true;
  }

  if (t1 === null) {
    return false;
  }

  if (isSubtreeHelper(t1, t2)) {
    return true;
  }

  return isSubtree(t1.left, t2) || isSubtree(t1.right, t2);
};

export const isSubtreeHelper = (t1, t2) => {
  if (t1 === null && t2 === null) {
    return true;
  }

  if ((t1 !== null && t2 === null) || (t1 === null && t2 !== null)) {
    return false;
  }

  if (t1.value !== t2.value) {
    return false;
  }

  return (
    isSubtreeHelper(t1.left, t2.left) && isSubtreeHelper(t1.right, t2.right)
  );
};
