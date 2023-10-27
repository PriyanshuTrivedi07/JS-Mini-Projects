const randonNumber = Math.round((Math.random() * 100 + 1));
console.log(randonNumber);
const userInput = document.getElementById('guessField');
const submitBtn = document.getElementById('subt');
const resultContainer = document.getElementById('resultContainer');
const guessSlot = document.querySelector('.guesses');
const guessRemainingSpan = document.getElementById('guessRemaining');
const result = document.getElementById('result');
const restartBtn = document.getElementById('restart');

let guessRemaining = 10;
let prevGuess = [];


let playGame = true;
let lowOrHiMsg;

if (playGame) {
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const userInputNumber = parseInt(userInput.value);
        validateGuess(userInputNumber);
    })
} else {
    userInput.setAttribute('disabled', "disabled");
    userInput.style.cursor = "not-allowed";
}


function validateGuess(guessVal) {
    if (guessVal < 1 || guessVal > 100 || isNaN(guessVal) || guessVal == "") {
        let errorMsg = "Enter a number b/w 1 to 100";
        displayMsg(errorMsg);
    }
    else {
        prevGuess.push(guessVal);
        guessRemaining--;
        checkGuessedNumber(guessVal);
        if (guessRemaining == 0) {
            displayMsg(`Game Over!<br> Your Attempts are finished.<br> The number was ${randonNumber}`);
            endGame();
        }
        displayUpdatedValues();
    }
    userInput.value = "";
    return;
}

function checkGuessedNumber(num) {
    if (num === randonNumber) {
        displayMsg(`You Guessed it Right in ${10 - guessRemaining} Attempt !!!!`);
        endGame();
    }
    else if (num > randonNumber) {
        displayMsg("You guessed GREATER number.");
    }
    else {
        displayMsg("You guessed SMALLER number.");
    }
    return;
}

function displayMsg(msg) {
    result.innerHTML = msg;
    return;
}

function displayUpdatedValues() {
    guessRemainingSpan.innerHTML = guessRemaining;
    guessSlot.innerHTML = prevGuess;
    return;
}

function endGame() {
    playGame = false;
    submitBtn.setAttribute("disabled", "disabled");
    submitBtn.classList.add('disableBtn');
    userInput.setAttribute('disabled', "disabled");
    userInput.classList.add('disableBtn');
    restartBtn.classList.add('show');
    return;
}
restartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    restartGame();
})



function restartGame() {
    playGame = true;
    submitBtn.classList.remove('disableBtn');
    submitBtn.removeAttribute("disabled");
    userInput.removeAttribute('disabled');
    userInput.classList.remove('disableBtn');
    restartBtn.classList.remove('show');
    guessRemaining = 10;
    prevGuess = [];
    displayUpdatedValues();
    displayMsg("Start Guessing");
    return;
}