/*
Implement an LRU Cache with O(1) time complexity for put and get commands
*/

import LinkedList from "./linkedList";
import Node from "./node";

const LRUCache = function(size) {
  this.storage = {};
  this.list = new LinkedList();
  this.size = size;
  this.count = 0;
};

LRUCache.prototype.put = function(key, value) {
  this.storage[key] = this.list.add(value);
  this.count++;
  if (this.count > this.size) {
    this.list.delete();
  }
};

LRUCache.prototype.get = function(key) {
  if (this.count === 0 || !this.storage.hasOwnProperty(key)) {
    return null;
  }

  let retrievedNode = this.storage[key];
  this.list.moveToFront(retrievedNode);
  return retrievedNode.value;
};

LRUCache.prototype.print = function() {
  this.list.print();
};

export default LRUCache;
