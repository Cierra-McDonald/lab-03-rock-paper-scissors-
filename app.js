// import functions and grab DOM elements
import { makeMUJ } from './utils.js'; 

const poofButton = document.getElementById('buttonPoof');
const currentDraw = document.getElementById('current-shoot');
const totalWins = document.getElementById('wins');
const totalRounds = document.getElementById('totalPlayed');
const totalLosses = document.getElementById('losses'); 

console.log(poofButton, currentDraw, totalWins, totalRounds, totalLosses);

// initialize state
let disneyWins = 0;
let disneyTotal= 0;

makeMUJ();

poofButton.addEventListener('click', () => {
    console.log('im in the button');
    disneyWins++;
    const computerThrow = Math.round(Math.random());

    const computerMUJ = makeMUJ(computerThrow);
    

});


// let totalGamesPlayed = 0,

// set event listeners to update state and DOM
