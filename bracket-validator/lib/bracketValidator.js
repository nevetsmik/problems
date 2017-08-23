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

export const bracketValidator = (string) => {
  // Use an array to implement a stack to parse openers
  const stack = [];
  let poppedFromStack;

  // Iterate through the string character by character
  for (let i = 0; i < string.length; i++){
    let ltr = string[i];
    // If a character is an opener, i.e., (, {, or [
    if (['(', '{', '['].includes(ltr)) {
      // then push onto stack
      stack.push(ltr);
    }

    // If a character is a closer, i.e., ), }, or ]
    if ([')', '}', ']'].includes(ltr)) {
      // Then pop from the stack
      poppedFromStack = stack.pop();
      if (poppedFromStack === null) { return false; }
      // If closer and what was popped don't align, then return false
      switch (ltr) {
        case '}':
          if (poppedFromStack !== '{') { return false; }
          break;
        case ']':
          if (poppedFromStack !== '[') { return false; }
          break;
        case ')':
          if (poppedFromStack !== '(') { return false; }
          break;
      }
    }
  }

  // Return true
  return stack.length === 0;

};
