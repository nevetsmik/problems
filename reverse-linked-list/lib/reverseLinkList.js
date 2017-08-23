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

export const LinkedListNode = function(value) {
  this.value = value;
  this.next = null;
};

// ***************************
// In-place
// ***************************

// export const reverseLinkList = head => {
//   // Create an itr and initialize to head
//   let itr = head;
//   // Create a previous node and initialize to null
//   let prev = null;
//   // Create a temp node to save the node's original next reference and initialize to null
//   let savedNext = null;
//   // Iterate thru list until itr is null
//   while (itr) {
//     // Save the itr's original next reference
//     savedNext = itr.next;
//     // Set the itr's next to the previous node
//     itr.next = prev;
//     // Update the previous node to itr
//     prev = itr;
//     // update the itr to the saved next reference
//     itr = savedNext;
//   }
//   return prev;
// };

// ***************************
// Out-of-place
// ***************************

export const reverseLinkList = head => {
  // Create an itr and initialize to head
  let itr = head;
  // Create a previous node and initialize to null
  let prev = null;
  // Create a temp node to save the node's original next reference and initialize to null
  let savedNext = null;
  // Iterate thru list until itr is null
  while (itr) {
    // Create a new node with the itr node's value
    const newNode = new LinkedListNode(itr.value);
    // Save the itr's next
    savedNext = itr.next;
    // Set new node's next to prev
    newNode.next = prev;
    // Set prev to the new node
    prev = newNode;
    // Set itr to savedNext
    itr = savedNext;
  }
  return prev;
};


export const printLinkedList = (node) => {
  let itr = node;
  while (itr !== null) {
    console.log(`Node value is: ${itr.value}`);
    itr = itr.next;
  }
};
