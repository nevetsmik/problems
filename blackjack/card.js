const Card = function (suit, value) {
  this.suit = suit;
  this.value = value;
};

Card.prototype.value = function () {
  let faceCards = ['K', 'Q', 'J'];
  if (this.value === 'A') {
    return 11;
  } else if (faceCards.includes(this.value)) {
    return 10;
  } else {
    return parseInt(this.value);
  }
};

Card.prototype.toString = function() {
  return `${this.value} ${this.suit}`;
};

module.exports = Card;
