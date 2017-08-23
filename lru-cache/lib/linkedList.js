import Node from './node';

class LinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
  }

  setHead(newNode) {

    if (this.head !== null) {
      newNode.next = this.head;
      this.head.prev = newNode;
    }

    this.head = newNode;

    if (this.tail === null) {
      this.tail = newNode;
    }

    return this.head;
  }

  removeTail() {
    if (this.tail === null) {
      return null;
    }

    let removedTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    return removedTail;
  }

  printList() {
    let list = '';
    let itr = this.head;
    while (itr) {
      list += `[${itr.value[0]}, ${itr.value[1]}], `;
      itr = itr.next;
    }
    return list;
  }
}

export default LinkedList;
