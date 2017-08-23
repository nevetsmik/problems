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

export const singleRiffleCheck = (deck, half1, half2) => {
  let deckIdx = 0;
  let half1Idx = 0;
  let half2Idx = 0;
  let half1Max = half1.length - 1;
  let half2Max = half2.length - 1;

  // Iterate thru the deck
  while (deckIdx < deck.length) {
    // If the bottom card from half1 or half2 equals the bottom card of the deck, then...
    let deckCard = deck[deckIdx];
      // If half1 matches, then...
      if (half1Idx <= half1Max && deckCard === half1[half1Idx]) {
        // Increment half1 index
        half1Idx++;
      } // If half2 matches, then...
      else if (half2Idx <= half2Max && deckCard === half2[half2Idx]) {
        // Increment half2 index
        half2Idx++;
      } else { // Else, no bottom card from half1 or half2 matches, so deck is not single-riffed
      // return false
      return false;
    }
    deckIdx++;
  }
  // Return true
  return true;
};
