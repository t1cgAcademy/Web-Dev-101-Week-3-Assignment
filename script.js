const button = document.getElementById('buttonGuess');
const input = document.querySelector('#guess');
const prevGuesses = document.querySelector('#prevGuesses');
let secretNumber = Math.floor(Math.random() * 100);
const resetButton = document.getElementById('resetButton');
const numberOfGuesses = document.getElementById('numOfGuesses');
let guessCount = 0;

setGameOver = () => {
  input.disabled = true;
  button.disabled = true;
  resetButton.textContent = 'Try Again';
  resetButton.classList.toggle('hidden');
};

resetGame = () => {
  guessCount = 0;
  numberOfGuesses.textContent = '';
  resetButton.classList.toggle('hidden');
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
  /////////////////////New Task: Number check////////////////
  if (isNaN(stringGuess) === true) {
    alert('You must enter a number to continue');
    ////////////////////////////////////////////////////////////
  } else if (stringGuess === secretNumber) {
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
};

//////////////////New Task: Show answer button//////////
showAnswer = () => {
  const answer = document.querySelector('.showAnswer');
  answer.textContent = 'The answer is:' + ' ' + secretNumber;
};
////////////////////////////////////////////////////////
////////////////////////New Task: Word Guessing Game///////////////////////////
// Word Array
const words = ['here', 'are', 'some', 'words', 'chair', 'lion', 'ego', 'ouch'];

// Define Global Variables
const hiddenWordDisplay = document.getElementById('hiddenWordDisplay');
const startButton = document.getElementById('startButton');
const enterButton = document.getElementById('enterButton');
const instructionLine = document.getElementById('wordInstructions');
const alreadyGuessedDisplay = document.getElementById('alreadyGuessedDisplay');

//Initialize variable called word but do not define
//so we can let it be defined in a later function
let word;

// Set up the answerArray to show how many left
// Using underscores
let answerArray = [];

//Initialize variable called remainingLetters but do not define
//so we can let it be defined in a later function
let remainingLetters;

playGame = () => {
  // Ensure answer array is empty before use to handle
  // a new game.
  answerArray = [];

  // Get random word
  word = words[Math.floor(Math.random() * words.length)];

  // Record number of remaining letters
  remainingLetters = word.length;

  // Iterate through letters of word
  for (let i = 0; i < word.length; i++) {
    // Add an underscore to represent each letter for display
    answerArray[i] = '_';
  }

  // Set hiddenWordDisplay html content to display the contents
  // of answer array as a string
  hiddenWordDisplay.innerHTML = answerArray.join(' ');

  // Show elements (game components)
  enterButton.classList.toggle('classHidden');
  startButton.classList.toggle('classHidden');
  instructionLine.classList.toggle('classHidden');
  alreadyGuessedDisplay.classList.toggle('classHidden');
};

// Initialize array to save already guessed letters
let alreadyGuessed = [];

enterLetter = () => {
  /// ########### The main game loop ##########//
  // Get a guess from the player
  const guess = document.getElementById('letterGuess').value;

  // Check if letter has already been guessed (using indexOf)
  if (alreadyGuessed.indexOf(guess) !== -1) {
    return;
  }

  if (remainingLetters > 0) {
    // If there are letters left to be guessed
    //Update the game state with the guess
    for (let j = 0; j < word.length; j++) {
      //if the letter they guessed is in the word at
      //that point, or index
      if (word[j] === guess) {
        //update answer array with the letter they guessed
        //at that point or index
        answerArray[j] = guess;
        //subtract one from remaining letters
        remainingLetters--;
      }
    }

    // Save guess to alreadyGuessed array
    alreadyGuessed.push(guess);

    // Display previous guesses
    alreadyGuessedDisplay.innerHTML = 'Previous Guesses:' + ' ' + alreadyGuessed.join(' ');

    // Display hidden word as string
    hiddenWordDisplay.innerHTML = answerArray.join(' ');

    // When game is won, alert the user, empty alreadyGuessed
    // array and clear what is being displayed
    if (remainingLetters === 0) {
      hiddenWordDisplay.innerHTML = 'Good job! The answer was ' + word;
      enterButton.classList.toggle('classHidden');
      startButton.classList.toggle('classHidden');
      instructionLine.classList.toggle('classHidden');
      alreadyGuessedDisplay.classList.toggle('classHidden');
      alreadyGuessed = [];
      alreadyGuessedDisplay.innerHTML = '';
    }
    ////////////// End of Game Loop ///////////////////
  }
};
