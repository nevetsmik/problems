const Node = function (value) {
  this.value = value;
  this.next = null;
};

const LinkedList = function () {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.insertHead = function (value) {
  let node = new Node(value);
  if (this.head === null) {
    // Empty list
    this.head = node;
    this.tail = node;
  } else { // has at least one node in the list
    // Set the new node's next
    node.next = this.head;
    // Set the head to point to the new node
    this.head = node;
  }
};

LinkedList.prototype.getHead = function () {
  return this.head.value;
};

LinkedList.prototype.insertTail = function (value) {
  if (this.tail === null) {
    this.insertHead(value);
  } else {
    let node = new Node(value);
    this.tail.next = node;
    this.tail = node;
  }
};

LinkedList.prototype.getTail = function (value) {
  return this.tail.value;
};

LinkedList.prototype.printList = function () {
  let iter = this.head;
  let tickets = '';
  while (iter) {
    tickets += JSON.stringify(iter.value);
    iter = iter.next;
  }
  return tickets;
};

export default LinkedList;
