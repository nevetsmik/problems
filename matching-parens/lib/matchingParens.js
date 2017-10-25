/*

*/
/*
Write a braces/brackets/parentheses validator. Let's say:
'(', '{', '[' are called "openers."
')', '}', ']' are called "closers."

Write an efficient function that tells us whether or not an input string's
openers and closers are properly nested.

https://www.interviewcake.com/question/java/bracket-validator
*/

export const matchingParens = (string, pos) => {
  // Use an array as a stack with push/pop
  const stack = [];

  // Iterate through the string
  for (let i = 0; i < string.length; i++) {
    const ltr = string[i];
    // If there is an open paren
    if (ltr === "(") {
      // Create a tuple of position number and open paren
      const tuple = [i, "("];
      // Push tuple onto a stack
      stack.push(tuple);
    }
    // If there is a closed paren
    if (ltr === ")") {
      // Pop the stack
      let poppedFromStack = stack.pop();
      // If the pos in the tuple equals the pos argument
      if (poppedFromStack[0] === pos) {
        // Return the pos in the loop
        return i;
      }
    }
  }
  // Return null
  return null;
};
