// import functions and grab DOM elements
import { makeMUJ } from './utils.js'; 

const poofButton = document.getElementById('buttonPoof');
const totalWins = document.getElementById('wins');
const totalRounds = document.getElementById('totalPlayed');
const totalLosses = document.getElementById('losses'); 
const totalTies = document.getElementById('tie');
console.log(totalTies);

console.log(poofButton, totalWins, totalRounds, totalLosses);

// initialize state
let disneyWins = 0;
let disneyTotal = 0;
let disneyLose = 0;
let disneyTie = 0; 

const PlayerRules = {
    'Maleficent' : {
        'Ursula' : 'win',
        'Jafar': 'lose',
        'Maleficent': 'tie'
    },
    'Ursula' : {
        'Maleficent' : 'lose',
        'Jafar' : 'win',
        'Ursula': 'tie'
    }, 
    'Jafar' : {
        'Maleficent' : 'wins',
        'Ursula' : 'lose',
        'Jafar': 'tie'
    }
};
const playersObject = {
    0: 'Maleficent',
    1: 'Ursula', 
    2: 'Jafar',
};

// makeMUJ();

poofButton.addEventListener('click', () => {
    // console.log('im in the button');
    // disneyTotal++;
    const computerThrow = Math.ceil(Math.random() * 2);
    // Randomly generates a number between 0 and 2

    let computerPlayer = playersObject[computerThrow];
    // console.log(computerMUJ); 

    const userPlayer = document.querySelector('input[type="radio"]:checked');
    // // console.log(selectedVillianButton);
    const gameOutcome = PlayerRules[userPlayer.value][computerPlayer];
    // const userVillian = selectedVillianButton.value;
    // // console.log(userVillian);
    console.log('the outcome of the game: ', gameOutcome);

    if (gameOutcome === 'win') {
        disneyWins++;
    } else if (gameOutcome === 'lose') {
        disneyLose++;
    } else if (gameOutcome === 'tie') {
        disneyTie++;
    }
    totalRounds.textContent = disneyWins + disneyLose + disneyTie;
    totalWins.textContent = disneyWins;
    totalLosses.textContent = disneyLose;
    totalTies. textContent = disneyTie;


    // if (userVillian === computerMUJ) {
    //     currentDraw.textContent = 'Mirror, mirror on the wall, it is a tie afterall!';
    // } else if (userVillian === 'Maleficent' && computerMUJ === 'Ursula') {
    //     disneyWins++,
    //     currentDraw.textContent = 'Mistriss of Evil rules them all, You win!';
    // } else if (userVillian === 'Ursula' && computerMUJ === 'Jafar') {
    //     disneyWins++,
    //     currentDraw.textContent = 'You are the true queen of the sea, You win!';
    // } else if (userVillian === 'Jafar' && computerMUJ === 'Maleficent') {
    //     disneyWins++,
    //     currentDraw.textContent = 'Prince Ali has nothing on you either, You win!';
    // }

});


// let totalGamesPlayed = 0,

// set event listeners to update state and DOM
