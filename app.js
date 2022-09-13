/* Imports */

/* State */

let gameState = 'guess';

const cPlayImgDiv = document.getElementById('cPlay-img-div'); //for showing/ hiding cplay-img div
const cPlayImg = document.getElementById('computer-choiceImg'); //for selecting R/P/S img for computer

const playerRockImg = document.getElementById('player-rockImg'); //player rock img
const playerPaperImg = document.getElementById('player-paper-img'); // player paper img
const playerScissorsImg = document.getElementById('player-scissors-img'); // player scissors img

const rockBtn = document.getElementById('rockBtn'); //rock button
const paperBtn = document.getElementById('paperBtn'); //paper button
const scissorsBtn = document.getElementById('scissorsBtn'); //scissors button
const playerBtns = document.getElementById('player-buttons'); //for showing/ hiding all player buttons

const playAgainBtn = document.getElementById('play-again-btn'); // play again button

/* Actions */
function loadPage() {}

/* Components */

/* Component */
// get DOM
// display
// event listeners

/* Run page load code */
function restartGame() {
    cPlayImgDiv.classList.add('hidden');
    playAgainBtn.classList.add('hidden');
    playerRockImg.classList.remove('hidden');
    playerPaperImg.classList.remove('hidden');
    playerScissorsImg.classList.remove('hidden');
}

loadPage();
restartGame();
// let cPlay = 'scissors';
// const computerChoice = document.getElementById('computer-choice');
// computerChoice.src = 'assets/' + cPlay + '.png';
