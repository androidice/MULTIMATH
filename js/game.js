var player = require('./player.js');
var scoreboard = require('./scoreboard.js');

var factorElement = document.getElementById('factor');
var problemPerGame = 3; // set default value;

function printGame(){
  player.logPlayer();

  setProblemCount(document.getElementById('problemCount').value);

  var gameFrom = '';
  for (var i=1; i<= problemPerGame; i++){
    gameFrom += '<div class="form-group">';
    gameFrom += '<label for="answer"'+ i +' = </label>';
    gameFrom += factorElement.value + ' x '+ i + '</label>'
    gameFrom += `<div class="col-sm-1"><input type="text" class="form-control" id="answer${i}"></div>`;
    gameFrom += '</div>'
  }

  var gameElement = document.getElementById('game');
  gameElement.innerHTML = gameFrom;

  document.getElementById('calculate').removeAttribute('disabled');
}

function calculateScore(){
  var problemsInGame = getProblemCount();
  var score = 0;

  for(var i=1; i<=problemsInGame; i++){
    var answer = document.getElementById('answer'+ i).value;
    if(i* parseInt(factorElement.value, 10) === parseInt(answer, 10)){
      score++;
    }
  }

  var result = {
    name: player.getName(),
    score: score,
    problems: problemsInGame,
    factor: factorElement.value
  }

  scoreboard.addResult(result);
  scoreboard.updateScoreboard();

  document.getElementById('calculate').setAttribute('disabled', true);
}


function getProblemCount(){
  return parseInt(problemPerGame, 10);
}

function setProblemCount(newProblemCount) {
  problemPerGame = newProblemCount;
}

exports.printGame = printGame;
exports.calculateScore = calculateScore;
exports.getProblemCount = getProblemCount;
exports.setProblemCount = setProblemCount;
