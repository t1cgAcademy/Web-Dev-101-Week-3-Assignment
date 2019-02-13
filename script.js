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
  // you will set four specific conditions...
  // 1. If the stringGuess is not a number (NaN), display an alert
  // stating 'You must enter a number to continue'
  // 2. If the stringGuess is equal to the secretNumber, display
  // an alert stating 'You got it right!!' and then call setGameOver() function
  // 3. If stringGuess is greater than the secretNumber and the guessCount
  // is less than 11, set the text of lowOrHi to 'You are too hi!!'
  // 4. If the stringGuess is less than the secretNumber and the guessCount
  // is less than 11, set the text of lowOrHi to 'You are too low!!!'
  // 5. If anything else happens, set the text of lowOrHi to 'Game Over!'
  // and then call setGameOver() function.
};

// Create a showAnswer function that gets the element with the class
// .showAnswer (use any selector), and sets the text content of that element to 'The answer is:'
// a space, and the secretNumber.

//////////////////////Guess the Word///////////////////////////
// Word Array//
// Define a constant array called words, and fill the array with any word you like
// (Tip: ^^^ You might not want to put in too many words at first, a large word
//     string array right here will make development more difficult)

// Define Global Variables//
// Declare hiddenWordDisplay, startButton, enterButton and alreadyGuessedDisplay using
// getElementById and ids of the same name
// Declare instructionLine using getElementById and id alreadyGuessedDisplay

// Initialize variable called word but do not define
// so we can let it be defined in a later function

// Set up the answerArrow to show how many letters are left
// using underscores
// Initialize answerArray with empty array

// Initialize variable called remainingLetters but do not define
// so we can let it be defined in a later function

playGame = () => {
  // Ensure answer array is empty before use to handle a new game.
  // (Hint: value reset!)
  // Get random word
  // Now you will use the word variable you initialized above.
  // To get a random word, you must set your word variable to equal
  // the value of wordS.  Since words is an array, you will need to provide
  // words with the index number of the word you want from the array (ex: words[4]).
  // But, you cannot just hard code a number, because the word you get will not
  // be randomly chosen.  Instead you will need to set the index number to
  // calculate a random number without decimals but within the range (length) of
  // the word array (ex: words[aPredfinedJavascriptMathMethod(anotherPredefinedMathMethod * limit of words array size)])
  // Record number of remaining letters
  // Define remainingLetters with the number of letters in word
  // Iterate through letters of word {
  // Set values in answerArray to '_'
  // }
  // Set hiddenWordDisplay html content to display the contents
  // of answer array as a string
  // Show elements (game components)
  // Toggle the visibility of enterButton, startButton, instructionLine, and alreadyGuessedDisplay.
};

// Initialize empty array to save alreadyGuessed letters <- use provided name
enterLetter = () => {
    /// ########### The main game loop ########### //
    // Get a guess from the player by creating selector called guess using
    // getElementById and value 


    // Check if letter has already been guessed (using indexOf)
    if (alreadyGuessed.indexOf(guess) !== -1) {
        return;
    }
    
    // If the remainingLetters count is greater than 0 {
        // Update the game state with the guess
        // Open up the iteration (hint: use j) {
            // If the letter they guessed is in the word at that point or index {
                // Define (update) each value (at each index) in answerArray with
                // the guess
                // subtract one from remaining letters (remember Javascript decrement operation)
            // }
        // }
        // Save guess to alreadyGuessed array here (push carefully)

        // Display previous guesses
        // Set alreadyGuessedDisplay html to display "Previous Guesses:" a space and alreadyGuessed array as a string
        // to get rid of out of place commas
        
        // Display hidden word as string
        // Set hiddenWordDisplay html to show the answerArray as one string

        // When game is won, alert the user, empty alreadyGuessed
        // array and clear what is being displayed
        // if (there are no more remainingLetters) {
            // Set hiddenWordDisplay html to tell user they are correct and 
            // what the answer is

            // Use class to hide enterButton, startButton, instructionLine and 
            // alreadyGuessedDisplay

            // Empty alreadyGuessed array

            //empty alreadyGuessedDisplay html
        // }
    /////////////// End of Game loop ////////////////////
// }
// }
///////////////////////////////////////////////////////////////
