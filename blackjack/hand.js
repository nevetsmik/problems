const Hand = function(max) {
  this.cards = [];
  this.count = 0;
  this.max = max;
};

Hand.prototype.take = function (card) {
  if (this.count <= this.max) {
    this.cards.push(card);
    this.count += 1;
  } else {
    console.log(`You already have ${this.max} cards!`);
  }
};

Hand.prototype.discard = function () {
  if (this.count > 0) {
    this.count -= 1;
    return this.cards.shift();
  } else {
    console.log(`You don't have any more cards!`);
  }
};

Hand.prototype.show = function () {
  for (let i = 0; i < this.cards; i++) {
    console.log(this.cards[i].toString());
  }
};

Hand.prototype.score = function () {
  let score = 0;
  let aces = 0;

  this.cards.forEach((card) => {
    if (card.value === 11) {
      aces += 1;
    }
    score += card.value;
  });

  if (aces > 0) {
    while (score > 21 && aces > 0) {
      score -= 10;
      aces -= 1;
    }
  }
};

module.exports = Hand;
