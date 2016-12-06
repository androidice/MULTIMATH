import assignPlayerName from './player.js';
import { printGame, calculateScore, getProblemCount } from './game.js';

console.log('Starting with an SystemJS');

document.getElementById('startGame').addEventListener('click', function(){
  assignPlayerName(document.getElementById('playername').value);
  printGame();
});

document.getElementById('calculate').addEventListener('click', function(){
  calculateScore();
});

document.getElementById('problemCount').value = getProblemCount();


