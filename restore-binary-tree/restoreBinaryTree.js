/*
Note: Your solution should have O(inorder.length) complexity, since this is
what you will be asked to accomplish in an interview.

Let's define inorder and preorder traversals of a binary tree as follows:

Inorder traversal first visits the left subtree, then the root, then its right
subtree;
Preorder traversal first visits the root, then its left subtree, then its right
subtree.

Given the inorder and preorder traversals of a binary tree t, but not t itself,
restore t and return it.

An inorder traversal of the tree. It is guaranteed that all numbers in the tree
are pairwise distinct.
*/

export const restoreBinaryTree = (inorder, preorder) => {
  if (inorder.length === 1) {
    return new Tree(inorder[0]);
  }

  if (inorder.length === 0) {
    return null;
  }

  let rootValue = preorder[0];
  let subtreeIdx = inorder.indexOf(rootValue);

  let root = new Tree(rootValue);

  root.left = restoreBinaryTree(
    inorder.slice(0, subtreeIdx),
    preorder.slice(1, subtreeIdx + 1)
  );
  root.right = restoreBinaryTree(
    inorder.slice(subtreeIdx + 1),
    preorder.slice(subtreeIdx + 1)
  );

  return root;
};

export const inorderTraversal = node => {
  if (node === null) {
    return [];
  }

  let result = [];

  result = result.concat(inorderTraversal(node.left));
  result.push(node.value);
  result = result.concat(inorderTraversal(node.right));

  return result;
};

export const preorderTraversal = node => {
  if (node === null) {
    return [];
  }

  let result = [];

  result.push(node.value);
  result = result.concat(preorderTraversal(node.left));
  result = result.concat(preorderTraversal(node.right));

  return result;
};

const Tree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};
