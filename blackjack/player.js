const Hand = require('./hand');

const Player = function (name) {
  this.name = name;
  this.hand = new Hand();
};

Player.prototype.discard = function () {
  this.hand.discard();
};

Player.prototype.take = function (numCards, deck) {
  let cards = deck.discard(numCards);
  this.hand.concat(cards);
};

Player.prototype.show = function () {
  this.hand.show();
};

Player.prototype.busted = function () {
  if (this.hand.score > 21) {
    return true;
  } else {
    return false;
  }
};
