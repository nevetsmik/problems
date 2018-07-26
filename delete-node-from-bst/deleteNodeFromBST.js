/*
Write a function to delete a node from a binary search tree.
*/

const BST = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

export const insert = function(root, value) {
  if (root === null) {
    return new BST(value);
  }

  if (value < root.value) {
    root.left = insert(root.left, value);
  } else {
    root.right = insert(root.right, value);
  }

  return root;
};

export const deleteNode = function(node, value) {
  if (node === null) {
    return null;
  }

  if (value < node.value) {
    node.left = deleteNode(node.left, value);
  } else if (value > node.value) {
    node.right = deleteNode(node.right, value);
  } else {
    // Found the node to delete!

    // Case 1: the node has no children
    if (node.right === null && node.left === null) {
      return null;
      // Case 2: the node has no left child but has a right child
    } else if (node.left !== null && node.right === null) {
      return node.left;
      // Case 3: the node has no left child but has a right child
    } else if (node.left === null && node.right !== null) {
      return node.right;
      // Case 4: the node has a right and a left child
    } else {
      // node.value = min(node.right);
      // node.right = deleteMin(node.right);
      node.value = max(node.left);
      node.left = deleteMax(node.left);
      return node;
    }
  }

  return node;
};

export const max = function(node) {
  if (node === null) {
    return null;
  }

  if (node.right === null) {
    return node.value;
  }

  return max(node.right);
};

export const min = function(node) {
  if (node === null) {
    return null;
  }

  if (node.left === null) {
    return node.value;
  }

  return min(node.left);
};

export const deleteMax = function(node) {
  if (node === null) {
    return null;
  }

  if (node.right === null) {
    if (node.left !== null) {
      return node.left;
    } else {
      return null;
    }
  }

  node.right = deleteMax(node.right);
  return node;
};

export const deleteMin = function(node) {
  if (node === null) {
    return null;
  }

  if (node.left === null) {
    if (node.right !== null) {
      return node.right;
    } else {
      return null;
    }
  }

  node.left = deleteMin(node.left);
  return node;
};

export const inorder = function(node) {
  let result = [];

  if (node === null) {
    return result;
  }

  result = result.concat(inorder(node.left));
  result.push(node.value);
  result = result.concat(inorder(node.right));

  return result;
};

export const preorder = function(node, result = []) {
  if (node === null) {
    return result;
  }

  result.push(node.value);
  preorder(node.left, result);
  preorder(node.right, result);
  return result;
};

export const postorder = function(node) {
  let result = [];

  if (node === null) {
    return result;
  }

  result = result.concat(postorder(node.left));
  result = result.concat(postorder(node.right));
  result.push(node.value);

  return result;
};

export default BST;
