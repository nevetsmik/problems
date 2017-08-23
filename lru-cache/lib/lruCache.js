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

// Strategy:
/*
1. Use the storage hash to lookup a node, which stores the value associated with the key.
This allows for constant lookup time.
2. For #get(key):
  - Access the value using the storage hash to get the node which stores the value
  - Update the doubly linked list to move the most recently used item to the head of the list
  - The least recently used item will be at the tail of the list
3. For #set(key, value):
  - If the size of the list is === limit, then delete the tail node
  - Create a new node using the key's value
  - Insert the key / node pair into the storage hash
  - Insert the node at the head of the linked list
*/

import LinkedList from './linkedList';
import Node from './node';

class LRUCache {
  constructor(limit) {
    this.limit = limit;
    this.storage = {};
    this.list = new LinkedList();
    this.size = 0;
  }

  get(key) {
    if (this.size === 0) {
      return null;
    }

    let node = this.storage[key];

    if (node === this.list.head) {
      return node.value;
    }

    let prev = node.prev;
    prev.next = node.next;

    if (node === this.list.tail) {
      this.list.tail = prev;
    } else {
      node.next.prev = prev;
    }

    this.list.setHead(node);
    return node.value;
  }

  set(key, value) {
    if (this.size === this.limit) {
      let removedTail = this.list.removeTail();
      delete this.storage[removedTail.value[0]];
      this.size -= 1;
    }
    let newNode = new Node(key, value);
    this.storage[key] = newNode;
    this.list.setHead(newNode);
    this.size += 1;

    return newNode.value;
  }

  show() {
    let list = this.list.printList();
    console.log(list);
    console.log(this.storage);
  }
}

export default LRUCache;
