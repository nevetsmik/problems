import BinaryHeap from "./heap";
import { heapSort } from "./heap";

window.BinaryHeap = BinaryHeap;
window.heapSort = heapSort;

let bheap = new BinaryHeap();
bheap.insert(33);
bheap.insert(54);
bheap.insert(38);
bheap.insert(29);
bheap.insert(76);
bheap.insert(23);
bheap.insert(44);
bheap.insert(2);
bheap.insert(71);

window.bheap = bheap;
