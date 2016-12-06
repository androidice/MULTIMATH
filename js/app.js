var player = require('./player.js');
var game = require('./game.js');

console.log('Starting with an SystemJS');

document.getElementById('startGame').addEventListener('click', function(){
  player.setName(document.getElementById('playername').value);
  game.printGame();
});

document.getElementById('calculate').addEventListener('click', function(){
  game.calculateScore();
});

document.getElementById('problemCount').value = game.getProblemCount();


