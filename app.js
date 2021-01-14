import { getGameOutcome } from './utils.js';
import { PlayerRules, playersObject } from './variables.js';

const poofButton = document.getElementById('buttonPoof');
const secretMessage = document.getElementById('secretbox');
const totalWins = document.getElementById('wins');
const totalRounds = document.getElementById('totalPlayed');
const totalLosses = document.getElementById('losses'); 
const totalTies = document.getElementById('tie');

let Wins = 0;
let Ties = 0; 
let Loss = 0; 
// define objects 

// Where the cool stuff happens
poofButton.addEventListener('click', () => {
    const computerThrow = Math.ceil(Math.random() * 2);
    let computerPlayer = playersObject[computerThrow];
    const userPlayer = document.querySelector('input[type="radio"]:checked');
    const gameOutcome = PlayerRules[userPlayer.value][computerPlayer];
    
    [Wins, Ties, Loss] = getGameOutcome(gameOutcome, secretMessage);
    
    totalRounds.textContent = Wins + Loss + Ties;
    totalWins.textContent = Wins;
    totalLosses.textContent = Loss;
    totalTies.textContent = Ties; 
});
