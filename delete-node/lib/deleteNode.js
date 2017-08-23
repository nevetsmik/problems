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

const LLNode = function (value) {
  this.value = value;
  this.next = null;
};

export const deleteNode = function (deleteMe) {
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
