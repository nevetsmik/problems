/*
To prove this, let's write a function to tell us if a full deck of cards
shuffledDeck is a single riffle of two other halves half1 and half2.

https://www.interviewcake.com/question/java/single-riffle-check
*/

/*
Iterate through the deck and check if the top card is equal to the top card from
either half1 or half2. If there is a match with half1, pop off the next card. If
there is a match with half2, pop off the next card. If there is no match with the
top card from either half1 or half2, then return false. If you iterate through the
entire deck, then return true.
*/

export const singleRiffleCheck = (deck, half1, half2) => {
  while (deck.length > 0 && half1.length > 0 && half2.length > 0) {
    let topOfDeck = deck.pop();
    if (half1.length > 0 && topOfDeck === half1[half1.length - 1]) {
      half1.pop();
    } else if (half2.length > 0 && topOfDeck === half2[half2.length - 1]) {
      half2.pop();
    } else {
      return false;
    }
  }
  return true;
};
