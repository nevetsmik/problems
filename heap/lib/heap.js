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

/*
Properties of a heap:
1. Are complete - every level is filled except the last level, which is filled from the left
2. Can be min or max heaps - min value in a min heap is at the root; max value is at the root
for max heap

For min heap:
insert
 - push new value to the end of the array
 - bubble up the last value in the array swapping values in indices while the value in the currentIndex
is less than the parentIdx
remove
 - swap the root and the last value in the array
 - pop off the last value in the array
 - bubble down the first value in the array swapping values in the index with the value that
 is less than the currentIndex while the value in the currentIndex is not less than both children indices 
*/

const BinaryHeap = function() {
  this.heap = [];
  this.compare = function(i, j) {
    return this.heap[i] < this.heap[j];
  };
};

BinaryHeap.prototype.insert = function(value) {
  // insert at the end of the array
  this.heap.push(value);
  // bubble up the inserted value while currentIndex is less than parentIndex
  let currentIndex = this.heap.length - 1;
  let parentIndex = this.getParent(currentIndex);
  while (this.compare(currentIndex, parentIndex)) {
    // swap parentIndex and currentIndex values
    [this.heap[currentIndex], this.heap[parentIndex]] = [
      this.heap[parentIndex],
      this.heap[currentIndex],
    ];
    // update parentIndex and currentIndex
    currentIndex = parentIndex;
    parentIndex = this.getParent(currentIndex);
  }
};

BinaryHeap.prototype.remove = function() {
  [this.heap[0], this.heap[this.heap.length - 1]] = [
    this.heap[this.heap.length - 1],
    this.heap[0],
  ];
  let removedItem = this.heap.pop();
  // Set parentIndex to the first position in the heap array
  let parentIndex = 0;
  // Get the children indices
  let childrenIndices = this.getChildrenIndices(parentIndex);
  // Bubble down the parentIndex while parentIndex is less than both children
  while (
    this.compare(childrenIndices[0], parentIndex) ||
    this.compare(childrenIndices[1], parentIndex)
  ) {
    // Get the minimum of the two children
    // let minimumChild = this.compare(childrenIndices[0], childrenIndices[1]) ? childrenIndices[0] : childrenIndices[1];
    let minimumChild = this.getSmallestChildIndex(parentIndex);
    // Swap the values between the smallest child and the parentIndex
    [this.heap[parentIndex], this.heap[minimumChild]] = [
      this.heap[minimumChild],
      this.heap[parentIndex],
    ];
    // Update the parentIndex
    parentIndex = minimumChild;
    // Update the childrenIndices
    childrenIndices = this.getChildrenIndices(parentIndex);
  }
  return removedItem;
};

BinaryHeap.prototype.getSmallestChildIndex = function(parentIndex) {
  let children = this.getChildrenIndices(parentIndex).filter(index => {
    return index < this.heap.length;
  }, this);

  if (children.length === 1) {
    return children[0];
  } else {
    return this.compare(children[0], children[1]) ? children[0] : children[1];
  }
};

BinaryHeap.prototype.getParent = function(childIndex) {
  return Math.floor((childIndex - 1) / 2);
};

BinaryHeap.prototype.getChildrenIndices = function(parentIndex) {
  return [parentIndex * 2 + 1, parentIndex * 2 + 2];
};

export const heapSort = function(array) {
  // Create a returning array
  let result = [];

  // Create a new heap object
  let newHeap = new BinaryHeap();
  // Iterate through the input array
  array.forEach(el => {
    // Insert each value into the heap
    newHeap.insert(el);
  });

  // Iterate through the heap
  while (newHeap.heap.length > 0) {
    // Remove from the heap into an array
    result.push(newHeap.remove());
  }

  // Return the created array
  return result;
};

/*
[0,  1,  2,  3,  4]
[A, BA, CA, DB, EB]
parent = 1
child = 3, 4

children = [(parentIdx * 2) + 1, (parentIdx * 2) + 2]
parent = Math.floor((childIdx - 1) / 2)
*/

export default BinaryHeap;

// let bheap = new BinaryHeap();
// bheap.insert(33);
// bheap.insert(54);
// bheap.insert(38);
// bheap.insert(29);
// bheap.insert(76);
// bheap.insert(23);
// bheap.insert(44);
// bheap.insert(2);
// bheap.insert(71);
//
// console.log(bheap.heap);
//
// let sortedArray = heapSort(bheap.heap);
// console.log(sortedArray);
