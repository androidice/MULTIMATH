/*
* syntax for AMD Format
* fileName: game.js
* */
define(['./player'], function(player){ // player here is a dependency

  console.log('Starting game for '+ player.getName());

  function calculateScore(){
    //calculate the score here
  }

  return {
    calculateScore: calculateScore
  }
});