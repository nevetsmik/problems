/*
Implement an LRU Cache with O(1) time complexity for put and get commands
*/

import DoublyLinkedList from "./doublyLinkedList";

const LRUCache = function(size) {
  this.storage = {};
  this.list = new DoublyLinkedList();
  this.size = size;
  this.count = 0;
};

LRUCache.prototype.put = function(key, value) {
  if (this.storage[key]) {
    this.storage[key].value = value;
    this.list.moveToFront(this.storage[key]);
  } else {
    this.storage[key] = this.list.add(key, value);
    this.count++;
    if (this.count > this.size) {
      delete this.storage[this.list.tail.key];
      this.list.delete();
      this.count--;
    }
  }
};

LRUCache.prototype.get = function(key) {
  if (this.count === 0 || !this.storage.hasOwnProperty(key)) {
    return -1;
  }

  let retrievedNode = this.storage[key];
  this.list.moveToFront(retrievedNode);
  return retrievedNode.value;
};

LRUCache.prototype.print = function() {
  this.list.print();
};

export default LRUCache;
