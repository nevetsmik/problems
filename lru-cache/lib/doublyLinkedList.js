import Node from "./node";

const DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.moveToFront = function(node) {
  if (this.head !== node) {
    node.prev.next = node.next;
    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }
    node.prev = null;
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
};

DoublyLinkedList.prototype.add = function(key, value) {
  let newNode = new Node(key, value);
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }
  return newNode;
};

DoublyLinkedList.prototype.delete = function() {
  if (this.tail !== null) {
    if (this.tail === this.head) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }
};

DoublyLinkedList.prototype.print = function() {
  let result = [];
  let itr = this.head;
  while (itr !== null) {
    result.push(itr.value);
    itr = itr.next;
  }
  console.log(result);
};

export default DoublyLinkedList;
