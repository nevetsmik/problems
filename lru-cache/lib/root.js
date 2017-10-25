import LRUCache from "./lruCache";
import LinkedList from "./linkedList";

let lru = new LRUCache(4);
lru.put("Steve", "Steve");
lru.put("Kim", "Kim");
lru.put("Mary", "Mary");
lru.put("Hauser", "Hauser");

window.lru = lru;
window.LinkedList = LinkedList;
window.LRUCache = LRUCache;
