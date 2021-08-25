'use strict';

const randomNumber = Math.trunc(Math.random() * 20) + 1;

let usersScore = 20;
let usersHighScore = localStorage.getItem('usersHighScore');
//event listner. Mouse click. Mouse moving. Happens on the page

document.querySelector('.check').addEventListener('click', function () {
  const usersGuess = Number(document.querySelector('.guess').value);

  console.log(usersGuess); // remember users input is a string
  //so we need to convert that to a number

  if (!usersGuess) {
    document.querySelector('.message').textContent = `No number entered!`;
  } else if (usersGuess === randomNumber) {
    document.querySelector(
      '.message'
    ).textContent = `You got it! The number was ${randomNumber}`;
    document.querySelector('body').style.background =
      'linear-gradient(to right, #1CD8D2, #93EDC7)';
    let guessBox = document.querySelector('.guess'); //we dont want the user to be able to enter in numbers anymore!
    guessBox.parentNode.removeChild(guessBox);
    //document.querySelector(".guess").removeChild('.guess');
    if (usersScore > usersHighScore) {
      usersHighScore = usersScore;
      localStorage.setItem('usersHighScore', usersHighScore);
      document.querySelector('.highscore').textContent = usersHighScore;
    }
  } else if (usersGuess > randomNumber) {
    if (usersScore > 1) {
      document.querySelector(
        '.message'
      ).textContent = `You're guess is too high!`;
      usersScore--;
      document.querySelector('.score').textContent = usersScore;
    } else {
      document.querySelector('.score').textContent = 0;
    }
  } else if (usersGuess < randomNumber) {
    if (usersScore > 1) {
      document.querySelector(
        '.message'
      ).textContent = `You're guess is too low!`;
      usersScore--;
      document.querySelector('.score').textContent = usersScore;
      document.querySelector('.score').textContent = usersScore;
    } else {
      document.querySelector(
        '.message'
      ).textContent = `You lose. Click Again to try again!`;
      document.querySelector('.score').textContent = 0;
    }
  }

  // if(usersGuess + 1 === randomNumber) {
  //     document.querySelector(".message").textContent = `You're very close...`

  // }

  // if(usersScore === 0) {
  //     document.querySelector(".message").textContent = `You lose. Click Again to try again!`
  //     setTimeout(function(){location.reload()}, 5000);
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  location.reload();
}); //check class we select cuz we dont want to
//hit all the buttons. so thats why we dont opt for btn

document.querySelector('.highscore').textContent = localStorage.getItem(
  'usersHighScore'
);
