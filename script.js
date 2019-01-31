// Declare button, resetButton, numberOfGuesses variables for DOM manipulation using getElementById
// (hint: watch your ids)
// Declare input and prevGuesses variables using query selector to get the id guesss
// FYI: the function below creates a random non-floating point number between
// 1 and 100
let secretNumber = Math.floor(Math.random() * 100);
// intialize guessCount variable with value of 0
//  (hint: we should let it be able to change value later)

// Declare setGameOver function {
// set the disabled attribute of input to true
// set the disabled attribute of button to be true
// set the textContent of resetButton to 'Try Again';
// Toggle the hidden class of resetButton
// note 'hidden' is a predefined css class, which is why you do not 
// need to add anything to style.css for this
// }

resetGame = () => {
  // reset guessCount to 0
  // reset the text of numberOfGuesses to empty string
  // toggle hidden class on reset button.  
  // set disabled property of input to false
  // set disabled property of button to false
  // set input value to empty string
  // set text of prevGuesses to empty string

  input.focus(); // highlights element when active
  // set secretNumber to another random number
};

enterGuess = () => {
  // add one to guessCount when function is called
  // set text of numberOfGuess to new guessCount
  // declare lowOrHi variable using querySelector
  // declare stringGuess variable set to the input value
  // hint: stringGuess must be a number for game to work properly
  prevGuesses.textContent += stringGuess + '  ';

  // use control structure to set lowOrHi guess hint display
  // you will set three specific conditions...
  // 1. If the stringGuess is equal to the secretNumber, display
  // an alert stating 'You got it right!!' and then call setGameOver() function
  // 2. If stringGuess is greater than the secretNumber and the guessCount
  // is less than 11, set the text of lowOrHi to 'You are too hi!!'
  // 3. If the stringGuess is less than the secretNumber and the guessCount
  // is less than 11, set the text of lowOrHi to 'You are too low!!!'
  // 4. If anything else happens, set the text of lowOrHi to 'Game Over!'
  // and then call setGameOver() function.
}