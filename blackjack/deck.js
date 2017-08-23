let Card = require('./card');

const Deck = function () {
  this.deck = [];
  Deck.suits.forEach((suit) => {
    Deck.values.forEach((value) => {
      let card = new Card(suit, value);
      this.deck.push(card);
    });
  });
  this.shuffle();
};

Deck.suits = ['♠', '♥', '♦', '♣'];
Deck.values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

Deck.prototype.shuffle = function() {
  let m = this.deck.length - 1;

  while (m >= 0) {
    let random = Math.floor(Math.random() * m);
    [this.deck[random], this.deck[m]] = [this.deck[m], this.deck[random]];
    m--;
  }
};

// top of deck is index 0; discard from top of deck
Deck.prototype.discard = function(num) {
  let discards = [];
  for (let i = 0; i < num; i++) {
    discards.push(this.deck.shift());
  }
  return discards;
};

// bottom of the deck is last position; take cards and put on bottom
// of the deck;
Deck.prototype.take = function (card) {
  this.deck.push(card);
};

module.exports = Deck;
