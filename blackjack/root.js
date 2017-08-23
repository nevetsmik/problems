const Game = require('./game');
const Player = require('./player');

let player = new Player("Steve");
let dealer = new Player("Dealer");

let game = new Game(dealer, player);
game.play();
