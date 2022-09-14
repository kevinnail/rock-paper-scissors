/* Imports */
import { getRandomItem } from '/utils.js';

/* State */

let gameState = 'guess';
let guess = ''; // for holding player's choice
let comGuessArray = ['rock', 'paper', 'scissors']; // array for computer's play
let comGuess = getRandomItem(comGuessArray); //picks random numboer in index of computer plays
let playerScoreDiv = document.getElementById('player-score');
let comScoreDiv = document.getElementById('computer-score');
let playerScore = 0;
let comScore = 0;

const cPlayImg = document.getElementById('computer-choiceImg'); //for selecting R/P/S img for computer
const gameComment = document.getElementById('game-comment');

const playerRockImg = document.getElementById('player-rock-img'); //player rock img
const playerPaperImg = document.getElementById('player-paper-img'); // player paper img
const playerScissorsImg = document.getElementById('player-scissors-img'); // player scissors img

const rockBtn = document.getElementById('rockBtn'); //rock button
const paperBtn = document.getElementById('paperBtn'); //paper button
const scissorsBtn = document.getElementById('scissorsBtn'); //scissors button
const playerBtns = document.getElementById('player-buttons'); //for showing/ hiding all player buttons

const playAgainBtn = document.getElementById('play-again-btn'); // play again button

/* Actions */
function loadPage() {
    restartGame();
    displayScoreBoard();
}

function makePlay(playerChoice) {
    gameState = 'results';
    guess = playerChoice;
    comGuess = getRandomItem(comGuessArray);
    displayChoice();
    displayComChoice();
    checkWinner(guess, comGuess);
    displayScoreBoard();
}
// }

/* Components */

/* Component */

// get DOM
// display
function displayChoice() {
    if (gameState === 'results') {
        if (guess === 'rock') {
            playerRockImg.classList.remove('hidden');
            playerPaperImg.classList.add('hidden');
            playerScissorsImg.classList.add('hidden');
            playerBtns.classList.add('hidden');
        } else if (guess === 'paper') {
            playerRockImg.classList.add('hidden');
            playerPaperImg.classList.remove('hidden');
            playerScissorsImg.classList.add('hidden');
            playerBtns.classList.add('hidden');
        } else if (guess === 'scissors') {
            playerRockImg.classList.add('hidden');
            playerPaperImg.classList.add('hidden');
            playerScissorsImg.classList.remove('hidden');
            playerBtns.classList.add('hidden');
        }
    }
}
function displayComChoice() {
    if (gameState === 'results') {
        if (comGuess === 'rock') {
            cPlayImg.src = './assets/' + comGuess + '.png';
            cPlayImg.classList.remove('hidden');
            playAgainBtn.classList.remove('hidden');
        } else if (comGuess === 'paper') {
            cPlayImg.src = './assets/' + comGuess + '.png';
            cPlayImg.classList.remove('hidden');
            playAgainBtn.classList.remove('hidden');
        } else if (comGuess === 'scissors') {
            cPlayImg.src = './assets/' + comGuess + '.png';
            cPlayImg.classList.remove('hidden');
            playAgainBtn.classList.remove('hidden');
        }
    }
}

function checkWinner(playerChoice, computerChoice) {
    switch (playerChoice) {
        case 'rock':
            if (computerChoice === 'paper') {
                comScore++;
                gameComment.textContent = 'You lose!';
                playerRockImg.classList.add('lose-color');
            } else if (computerChoice === 'scissors') {
                playerScore++;
                gameComment.textContent = 'You win!';
            } else {
                gameComment.textContent = "It's a tie!";
            }
            break;
        case 'paper':
            if (computerChoice === 'scissors') {
                comScore++;
                gameComment.textContent = 'You lose!';
            } else if (computerChoice === 'rock') {
                playerScore++;
                gameComment.textContent = 'You win!';
            } else {
                gameComment.textContent = "It's a tie!";
            }
            break;
        case 'scissors':
            if (computerChoice === 'rock') {
                comScore++;
                gameComment.textContent = 'You lose!';
            } else if (computerChoice === 'paper') {
                playerScore++;
                gameComment.textContent = 'You win!';
            } else {
                gameComment.textContent = "It's a tie!";
            }
    }
}

function displayScoreBoard() {
    if (gameState === 'guess') {
        comScoreDiv.textContent = 0;
        playerScoreDiv.textContent = 0;
    } else {
        comScoreDiv.textContent = comScore;
        playerScoreDiv.textContent = playerScore;
    }
}

// event listeners

rockBtn.addEventListener('click', () => {
    makePlay('rock');
});
paperBtn.addEventListener('click', () => {
    makePlay('paper');
});
scissorsBtn.addEventListener('click', () => {
    makePlay('scissors');
});

playAgainBtn.addEventListener('click', () => {
    restartGame();
});

/* Run page load code */
function restartGame() {
    gameState = 'guess';
    cPlayImg.classList.add('hidden');
    playAgainBtn.classList.add('hidden');
    playerBtns.classList.remove('hidden');
    playerRockImg.classList.remove('hidden');
    playerPaperImg.classList.remove('hidden');
    playerScissorsImg.classList.remove('hidden');
    gameComment.textContent = "Let's play! ";
}

loadPage();
