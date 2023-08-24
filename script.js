'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23:
// console.log(document.querySelector('.guess').value);
var secretNnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when no number
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }
  // when user win
  else if (guess === secretNnumber) {
    document.querySelector('.number').textContent = secretNnumber;
    document.querySelector('.message').textContent =
      '🍾 Congo Camp, You Guess It Right!';

    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // document.querySelector('.score').textContent = score;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // when guess is wrong
  else if (guess !== secretNnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNnumber ? 'Too High..' : 'Too Low..';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '😭 You lost the game...';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing..';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
});
