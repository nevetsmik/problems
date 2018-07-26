/*
Write a braces/brackets/parentheses validator. Let's say:
'(', '{', '[' are called "openers."
')', '}', ']' are called "closers."

Write an efficient function that tells us whether or not an input string's
openers and closers are properly nested.

https://www.interviewcake.com/question/java/bracket-validator
*/

export const bracketValidator = string => {
  // Use an array to implement a stack to parse openers
  const stack = [];
  let poppedFromStack;

  // Iterate through the string character by character
  for (let i = 0; i < string.length; i++) {
    let ltr = string[i];
    // If a character is an opener, i.e., (, {, or [
    if (["(", "{", "["].includes(ltr)) {
      // then push onto stack
      stack.push(ltr);
    }

    // If a character is a closer, i.e., ), }, or ]
    if ([")", "}", "]"].includes(ltr)) {
      // Then pop from the stack
      poppedFromStack = stack.pop();
      if (poppedFromStack === null) {
        return false;
      }
      // If closer and what was popped don't align, then return false
      switch (ltr) {
        case "}":
          if (poppedFromStack !== "{") {
            return false;
          }
          break;
        case "]":
          if (poppedFromStack !== "[") {
            return false;
          }
          break;
        case ")":
          if (poppedFromStack !== "(") {
            return false;
          }
          break;
      }
    }
  }

  // Return true
  return stack.length === 0;
};
