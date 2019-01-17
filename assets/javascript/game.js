// alert for instructions
alert("Guess what the computer is thinking.  Press okay to start.");

//variables
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessChoices = [];


// Variables inside HTML references
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guesseslText = document.getElementById("guessesl-text");
var guessText = document.getElementById("guess-text");

//Functions
document.onkeyup = function (event) {
    //determins which key was pressed - all lowercase 
    var userGuess = event.key.toLowerCase();
    //the computers guesses from the arrays
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);


    //user guess beats computer 
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
        guessChoices = [];
    }

    // user does not guess right, guesses go down
    if (userGuess !== computerGuess) {
        guessesLeft--;
        guessChoices.push(userGuess);

    }
    // guesses left out of 9 
    if (guessesLeft === 0) {
        guessesLeft = 9;
        losses++;
        guesschoices = [];
    }

    //Display User Choice and Computer Choice
    userChoiceText.textContent = "Your Guess: " + userGuess;
    computerChoiceText.textContent = "Computer Guess: " + computerGuess;
    
    //Display Wins and Losses
    lossesText.textContent = "Losses: " + losses;
    winsText.textContent = "Wins: " + wins;

    //Display guesses remaining
    guesseslText.textContent = "Guesses Left: " + guessesLeft;

}
// Function that updates the score...
function updateScore() {
    document.querySelector("#score").innerHTML = "Score: " + score;
}


