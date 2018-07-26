/*********
Delete a node from a linked List in O(1) time.
**********/

const LLNode = function(value) {
  this.value = value;
  this.next = null;
};

export const deleteNode = function(deleteMe) {
  // Delete b
  // a -> b -> c -> d
  // Change the b node's value to c and set b's next to d
  // So c gets garbage collected
  let nextNode = deleteMe.next;

  if (nextNode) {
    deleteMe.value = nextNode.value;
    deleteMe.next = nextNode.next;
  } else {
    console.log("Won't work with the end of a list");
  }
};

export default LLNode;
