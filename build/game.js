'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProblemCount = exports.setProblemCount = exports.calculateScore = exports.printGame = undefined;

var _player = require('./player.js');

var _scoreboard = require('./scoreboard.js');

var scoreboard = _interopRequireWildcard(_scoreboard);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var factorElement = document.getElementById('factor');
var problemPerGame = 3; // set default value;

function printGame() {
  (0, _player.logPlayer)();

  setProblemCount(document.getElementById('problemCount').value);

  var gameFrom = '';
  for (var i = 1; i <= problemPerGame; i++) {
    gameFrom += '<div class="form-group">';
    gameFrom += '<label for="answer"' + i + ' = </label>';
    gameFrom += factorElement.value + ' x ' + i + '</label>';
    gameFrom += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '"></div>';
    gameFrom += '</div>';
  }

  var gameElement = document.getElementById('game');
  gameElement.innerHTML = gameFrom;

  document.getElementById('calculate').removeAttribute('disabled');
}

function calculateScore() {
  var problemsInGame = getProblemCount();
  var score = 0;

  for (var i = 1; i <= problemsInGame; i++) {
    var answer = document.getElementById('answer' + i).value;
    if (i * parseInt(factorElement.value, 10) === parseInt(answer, 10)) {
      score++;
    }
  }

  var result = {
    name: (0, _player.getName)(),
    score: score,
    problems: problemsInGame,
    factor: factorElement.value
  };

  scoreboard.addResult(result);
  scoreboard.updateScoreboard();

  document.getElementById('calculate').setAttribute('disabled', true);
}

function getProblemCount() {
  return parseInt(problemPerGame, 10);
}

function setProblemCount(newProblemCount) {
  problemPerGame = newProblemCount;
}

exports.printGame = printGame;
exports.calculateScore = calculateScore;
exports.setProblemCount = setProblemCount;
exports.getProblemCount = getProblemCount;