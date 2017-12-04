import LRUCache from "./lruCache";
import DoublyLinkedList from "./doublyLinkedList";

let lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1)); // return 1
lru.put(3, 3); // evicts (2, 2)
console.log(lru.get(2)); // return -1
lru.put(4, 4);
console.log(lru.get(1)); // return -1
console.log(lru.get(3)); // return 3
console.log(lru.get(4)); // return 4

// doubly linked list should be 4 -> 3
// keys in lru cache should be {3, 4}

window.lru = lru;
window.DoublyLinkedList = DoublyLinkedList;
window.LRUCache = LRUCache;
