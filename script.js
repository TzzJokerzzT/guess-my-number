'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//Refactor
const secretNumberCalculator = function (number) {
  Math.trunc(Math.random() * 20) + 1;
};
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayBackgroundColor = function (body) {
  document.querySelector('body').style.backgroundColor = body;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayNumber_2 = function (number) {
  document.querySelector('.number').style.width = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayGuess = function (guess) {
  document.querySelector('.guess').style.color = guess;
};
const displayGuess_2 = function (guess) {
  document.querySelector('.guess').style.backgroundColor = guess;
};
const numberGuess = function (guess) {
  document.querySelector('.guess').value = guess;
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = secretNumberCalculator;

  displayNumber('?');

  displayScore(score);

  displayGuess('#eee');

  displayNumber_2('15rem');

  numberGuess('');

  displayBackgroundColor('#222');

  displayMessage('Start guessing...');
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //If the player don´t put any number
  if (!guess) {
    displayMessage('📛 No Number!');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🤨 Too high!' : '😬 Too low!');

      score--;

      displayScore(score);
    } else {
      displayMessage('😭 You loss the game!');

      displayBackgroundColor('#F51D3A');

      displayGuess_2('#222');

      displayGuess('#F51D3A');

      displayNumber_2('30rem');

      displayScore(0);

      displayNumber(secretNumber);
    }
    //If the player wins
  } else if (guess === secretNumber) {
    displayMessage('😁 Correct number!');

    displayNumber(secretNumber);

    displayBackgroundColor('#35B1F4');

    displayGuess_2('#222');

    displayGuess('#35B1F4');

    displayNumber_2('30rem');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});
