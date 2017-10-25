import HashMap from "./hashMap";
import { makeHashTable } from "./hashTableResizing";

// let hash = new HashMap(5);
// hash.insert(1, 'steve');
// hash.insert(2, 'kim');
// hash.insert(3, 'mary');
// hash.insert(4, 'hauser');
window.HashMap = HashMap;
window.makeHashTable = makeHashTable;

let hash = new makeHashTable(5);
hash.insert(1, "steve");
hash.insert(2, "kim");
hash.insert(3, "mary");
// hash.insert(4, 'hauser');
window.hash = hash;
