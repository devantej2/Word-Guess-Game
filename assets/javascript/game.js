// Declare variables being used

let userGuess;
let lettersGuessed = [];
let guessRemaining;
let winCount;
const possibleWords = [
  "computer",
  "laptop",
  "internet",
  "keyboard",
  "mouse",
  "usb",
];

let objective;
// Function to generate random word before game is started
function generateWord() {
  let randIndex = Math.floor(Math.random() * possibleWords.length);
  objective = possibleWords[randIndex];
  console.log(objective);
}
generateWord();

document.onkeypress = function (input) {
  userGuess = input.key;

  checkLetter();
  lettersGuessed.push(userGuess);
  console.log(lettersGuessed);
};

// Function to check user guess against the generated word
function checkLetter() {
  let found = objective.search(userGuess);
  if (found > -1) {
    console.log(objective[found]);
  } else {
    console.log("Try again");
  }
}

//function to display dashes for generated word
//if "laptop" is the chosen word, then loop through string and display a dash for every character
// function displayDash() {
//   let dash = [];
//   let x;
//   for (x of objective) {
//     dash.push(x);

//     document.getElementById("chosenWord").innerHTML = x;
//   }
//   console.log(dash);
// }
