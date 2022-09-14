/* Imports */

/* State */

let gameState = 'guess';
let guess = ''; // for holding player's choice

const cPlayImgDiv = document.getElementById('cPlay-img-div'); //for showing/ hiding cplay-img div
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
}

function makePlay(playerChoice) {
    gameState = 'results';
    guess = playerChoice;
    displayChoice();
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

/* Run page load code */
function restartGame() {
    gameState = 'guess';
    cPlayImgDiv.classList.add('hidden');
    playAgainBtn.classList.add('hidden');
    playerRockImg.classList.remove('hidden');
    playerPaperImg.classList.remove('hidden');
    playerScissorsImg.classList.remove('hidden');
    gameComment.textContent = "Let's play!";
}

loadPage();
// let cPlay = 'scissors';
// const computerChoice = document.getElementById('computer-choice');
// computerChoice.src = 'assets/' + cPlay + '.png';
