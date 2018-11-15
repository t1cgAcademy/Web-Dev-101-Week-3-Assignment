const button = document.getElementById("buttonGuess");
//create a variable called input that gets the id of guess using getElementById
const secretNumber = Math.floor(Math.random() * 100);
//create a variable called resetButton that creates a button element using document.createElement()
let guessCount =  0;

setGameOver = () => {
  //Disable the input value field and the button value field below.  This will require some
  //googling.  An important programming skill.
  resetButton.textContent = "Try Again";
  //Use the document.body.appendChild() function to add/append the resetButton to the DOM.
  //Add an event listener called resetGame to your newly created resetButton using addEventListener();
  //Remember, it takes two arguments, the function (click or hover for example) and resetGame.
}

resetGame = () => {
  //reset guessCount to zero
  //Declare resetResult variable and link to all elements with the class resultField using
  //querySelectorAll.
  //Iterate through resetResult and set the textContent of all these fields to an empty string
  resetButton.parentNode.removeChild(resetButton);
  input.disabled = false;
  button.disabled = false;
  input.value = "";
  //Set prevGuesses textContent to an empty string.
  input.focus();
  const secretNumber = Math.floor(Math.random() * 100);
}

guess = () => {
//set the guestCount variable (remember you can because you used "let") increment
//by one everytime a guess is entered with the guess button
document.getElementById("numOfGuesses").textContent = guessCount;
//create lowOrHigh variable for lowOrHigh <p> tag for DOM manipulation using document.querySelector.
//hint: Do not forget the #
const stringGuess = Number(input.value);
//create prevGuesses variable for prevGuesses <p> tag for DOM manipulation using document.querySelector.
//hint: Do not forget the #
prevGuesses.textContent += stringGuess + "  ";
//Remember: Keeping track of values using console.log can be useful
//console.log the value of guessCount below
//in the below if statement, set the first condition to compare the stringGuess variable with
//the secretNumber variable.  Create an alert if stringGuess is === to secretNumber
//Then call the setGameOver function to reset the game
if (){


} else if (stringGuess > secretNumber && guessCount < 11){
  lowOrHigh.textContent = "You are too high!!";
}
  //Create another else if with the conditions if the stringGuess is less than the secretNumber
  //and the guessCount is less than 11 then the textContent of lowOrHigh will change to "You are too low!!!"
  //Similar to the code above
else if (){

} else {
  lowOrHigh.textContent = "Game Over!";
  setGameOver();
}

};
