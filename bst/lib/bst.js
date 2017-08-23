/*********
Export an object that contains multiple functions

const scratch = {
  fn1: function(){},
  fn2: function(){}
};

export { scratch };
**********/


/*********
Export multiple functions all at once

const fn1 = function(){};
const fn2 = function(){};

export { fn1, fn2 };
**********/


/*********
Export functions as you write them

export const fn1 = function(){};
export const fn2 = function(){};
**********/

const BST = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BST.prototype.insert = function (value) {
  if (value < this.value) {
    if (this.left) {
      return this.left.insert(value);
    } else {
      let newNode = new BST(value);
      this.left = newNode;
      return newNode;
    }
  } else {
    if (this.right) {
      return this.right.insert(value);
    } else {
      let newNode = new BST(value);
      this.right = newNode;
      return newNode;
    }
  }
};

BST.prototype.min = function () {
  if (this === null) { return null; }

  if (this.left) {
    return this.left.min();
  } else {
    return this;
  }
};

BST.prototype.max = function () {
  if (this === null) { return null; }

  if (this.right) {
    return this.right.max();
  } else {
    return this;
  }
};

BST.prototype.find = function (value) {
  let found = null;

  if (this.value === value) {
    return this;
  } else if (value < this.value && this.left) {
    found = this.left.find(value);
  } else if (this.right) {
    found = this.right.find(value);
  }

  return found;
};

BST.prototype.height = function () {
  let lHeight, rHeight;
  lHeight = rHeight = 0;

  if (!this.left && !this.right) {
    return 1;
  }

  if (this.left) {
    lHeight = 1 + this.left.height();
  }

  if (this.right) {
    rHeight = 1 + this.right.height();
  }

  return Math.max(lHeight, rHeight);

};

BST.prototype.deleteMin = function () {
  if (!this.left) {
    if (this.right) {
      return this.right;
    } else {
      return null;
    }
  }

  if (this.left){
    this.left = this.left.deleteMin();
  }

  return this;
};

BST.prototype.delete = function (value) {
  if (value === null || value === undefined) { return null; }

  if (value < this.value) {
    this.left = this.left.delete(value);
  } else if (value > this.value) {
    this.right = this.right.delete(value);
  } else if (value === this.value) {
    if (!this.right) {
      return this.left;
    }
    if (!this.left) {
      return this.right;
    }
    let replacement = this.right.min();
    replacement.right = this.right.deleteMin();
    replacement.left = this.left;
    return replacement;
  }
  return this;
};

BST.prototype.secondToLargest = function() {
  if (this === null) { return null; }

  if (this.right) {
    if (!this.right.right && !this.right.left) {
      return this;
    } else if (!this.right.right && this.right.left) {
      return this.right.left.max();
    } else {
      return this.right.secondToLargest();
    }
  } else {
    return this.left;
  }

};

BST.prototype.inOrder = function () {
  let array = [];
  if (this.left) {
    array = array.concat(this.left.inOrder());
  }
  array.push(this.value);
  if (this.right) {
    array = array.concat(this.right.inOrder());
  }
  return array;
};

BST.prototype.postOrder = function () {
  let array = [];

  if (this.left) {
    array = array.concat(this.left.postOrder());
  }

  if (this.right) {
    array = array.concat(this.right.postOrder());
  }

  array.push(this.value);

  return array;
};

BST.prototype.preOrder = function () {
  let array = [];

  array.push(this.value);

  if (this.left) {
    array = array.concat(this.left.preOrder());
  }

  if (this.right) {
    array = array.concat(this.right.preOrder());
  }

  return array;
};

export default BST;
