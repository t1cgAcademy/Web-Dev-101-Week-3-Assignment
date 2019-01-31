const button = document.getElementById('buttonGuess');
const input = document.querySelector('#guess');
let secretNumber = Math.floor(Math.random() * 100);
// const resetButton = document.createElement('button');
const resetButton = document.getElementById('resetButton')
let guessCount = 0;

setGameOver = () => {
  input.disabled = true;
  button.disabled = true;
  resetButton.textContent = 'Try Again';
  document.body.appendChild(resetButton);
  resetButton.classList.toggle('hidden')
};

resetGame = () => {
  guessCount = 0;
  const resetResult = document.querySelectorAll('.resultField');
  for (let i = 0; i < resetResult.length; i++) {
    resetResult[i].textContent = '';
  }
  // resetButton.parentNode.removeChild(resetButton);
  resetButton.classList.toggle('hidden')
  input.disabled = false;
  button.disabled = false;
  input.value = '';
  prevGuesses.textContent = '';

  input.focus();
  secretNumber = Math.floor(Math.random() * 100);
};

enterGuess = () => {
  guessCount = guessCount + 1;
  document.getElementById('numOfGuesses').textContent = guessCount;
  const lowOrHi = document.querySelector('#lowOrHi');
  const stringGuess = Number(input.value);
  const prevGuesses = document.querySelector('#prevGuesses');
  prevGuesses.textContent += stringGuess + '  ';

  if (stringGuess === secretNumber) {
    alert('You got it right!!!');
    setGameOver();
  } else if (stringGuess > secretNumber && guessCount < 11) {
    lowOrHi.textContent = 'You are too hi!!';
  } else if (stringGuess < secretNumber && guessCount < 11) {
    lowOrHi.textContent = 'You are too low!!!';
  } else {
    lowOrHi.textContent = 'Game Over!';
    setGameOver();
  }
}