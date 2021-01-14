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

// makeMUJ();

poofButton.addEventListener('click', () => {
    // console.log('im in the button');
    disneyWins++;
    const computerThrow = Math.round(Math.random());

    const computerMUJ = makeMUJ(computerThrow);
    // console.log(computerMUJ); 

    const selectedVillianButton = document.querySelector('input[type="radio"]:checked');
    // console.log(selectedVillianButton);

    const userVillian = selectedVillianButton.value;
    // console.log(userVillian);
  
    if (userVillian === computerMUJ) {
        currentDraw.textContent = 'Mirror, mirror on the wall, it is a tie afterall!';
    } else if (userVillian === 'Maleficent' && computerMUJ === 'Ursula') {
        currentDraw.textContent = 'Mistriss of Evil rules them all, You win!';
    } else if (userVillian === 'Ursula' && computerMUJ === 'Jafar') {
        currentDraw.textContent = 'You are the true queen of the sea, You win!';
    } else if (userVillian === 'Jafar' && computerMUJ === 'Maleficent') {
        currentDraw.textContent = 'Prince Ali has nothing on you either, You win!';
    }

});


// let totalGamesPlayed = 0,

// set event listeners to update state and DOM
