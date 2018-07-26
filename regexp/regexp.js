let constructExp = new RegExp("abc");
let literalExp = /abc/;

/* RegExp */
// 1. test method: <pattern>.test("stringToTest");
// True or false: Is the pattern in the string?
constructExp.test("abcde"); // return true
/abc/.test("abxde"); // returns false

// 2. exec (execute) method: returns array of all matched groups; also has an index property
var match = /\d+/.exec("one two 100");
console.log(match); // → ["100"]
console.log(match.index); // 8

/* Strings */
// 1. match method: similar to exec function
// Returns an array where the first element is the whole match, second is the index of the first match,
// third is the input string
console.log("one two 100".match(/\d+/));

// 2. search: returns index of first match

// 3. replace function
// First argument is a regexp and the second is the string to replace all matches of the pattern
console.log("Borobudur".replace(/[ou]/, "a"));
// g is the global option to replace all matches
console.log("Borobudur".replace(/[ou]/g, "a"));
console.log(
  "Hopper, Grace\nMcCarthy, John\nRitchie, Dennis".replace(/([\w ]+), ([\w ]+)/g, "$2 $1")
);
// Grace Hopper
// John McCarthy
// Dennis Ritchie

/*
Set or range of characters for a pattern
/[0123456789]/.test("in 1992")
/[0-9]/.test("in 1992")

Invert a set of characters use ^ inside the brackets
let notBinary = /[^01]/;
notBinary.test("1100100010100110") // false
*/

/*
\d - Any digit character
\D - Any non-digit character
\s - Any whitespace character (tab, newline, space, etc)
\S - Any non-whitespace character
\w - Any alphanumeric 'word' character
\W - Any non-alphanumeric 'word' character
\b - A word boundary
. - Any character except newline
(|) - Choice pattern

+ - Matches one or more
* - Matches zero or more
? - Optionally match zero or 1 time
{x, y} - Express a pattern to match a precise number of times
{x, } - Express a pattern to match x or more times

^ - matches beginning of input string
$ - matches end of input string


Greedy vs non-greedy
(+, *, ?, and {}) are greedy, meaning they match as much as they can and backtrack from there
(+?, *?, ??, {}?) - put a ? after to make them non-greedy,  start by matching as little as possible,
matching more only when the remaining pattern does not fit the smaller match
*/
