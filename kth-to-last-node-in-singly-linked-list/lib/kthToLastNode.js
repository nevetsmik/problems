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

// export const kthToLastNode = (k, head) => {
//   // Create two node references: ahead and behind
//   // Initialize ahead to the head of the list
//   // Initialize behind to the head of the list
//   let ahead = head;
//   let behind = head;
//
//   // Iterate ahead k nodes into the list
//   let count = 0;
//   while (ahead && count < k) {
//     ahead = ahead.next;
//     count++;
//   }
//
//   // Return null if k is greater than size of linked list
//   if (count < k && ahead === null) { return null; }
//
//   // Iterate each node 1 step into the list until ahead reach null
//   while (ahead) {
//     ahead = ahead.next;
//     behind = behind.next;
//   }
//
//   // Return behind
//   return behind;
// };

export const kthToLastNode = (k, head) => {
  // Create two node references: ahead and behind
  // Initialize ahead to the head of the list
  // Initialize behind to the head of the list
  let ahead = head;
  let behind = head;

  // Iterate ahead k nodes into the list
  let count = 1;
  while (ahead) {
    ahead = ahead.next;
    count++;
    if (count > k) {
      behind = behind.next;
    }
  }

  // Return null if k is greater than size of linked list
  if (count < k && ahead === null) { return null; }

  // Return behind
  return behind;
};
