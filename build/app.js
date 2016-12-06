'use strict';

var _player = require('./player.js');

var _player2 = _interopRequireDefault(_player);

var _game = require('./game.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('Starting with an SystemJS');

document.getElementById('startGame').addEventListener('click', function () {
  (0, _player2.default)(document.getElementById('playername').value);
  (0, _game.printGame)();
});

document.getElementById('calculate').addEventListener('click', function () {
  (0, _game.calculateScore)();
});

document.getElementById('problemCount').value = (0, _game.getProblemCount)();