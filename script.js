const button = document.getElementById('buttonGuess');
const input = document.querySelector('#guess');
const prevGuesses = document.querySelector('#prevGuesses');
let secretNumber = Math.floor(Math.random() * 100);
const resetButton = document.getElementById('resetButton')
const numberOfGuesses = document.getElementById('numOfGuesses');
let guessCount = 0;

setGameOver = () => {
  input.disabled = true;
  button.disabled = true;
  resetButton.textContent = 'Try Again';
  resetButton.classList.toggle('hidden')
};

resetGame = () => {
  guessCount = 0;
  numberOfGuesses.textContent = '';
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
  numberOfGuesses.textContent = guessCount;
  const lowOrHi = document.querySelector('#lowOrHi');
  const stringGuess = Number(input.value);
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