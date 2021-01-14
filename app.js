const poofButton = document.getElementById('buttonPoof');
const secretMessage = document.getElementById('secretbox');
const totalWins = document.getElementById('wins');
const totalRounds = document.getElementById('totalPlayed');
const totalLosses = document.getElementById('losses'); 
const totalTies = document.getElementById('tie');

// initialize state
let disneyWins = 0;
let disneyLose = 0;
let disneyTie = 0; 
// define objects 
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
// Where the cool stuff happens
poofButton.addEventListener('click', () => {
    const computerThrow = Math.ceil(Math.random() * 2);
    let computerPlayer = playersObject[computerThrow];
    const userPlayer = document.querySelector('input[type="radio"]:checked');
    const gameOutcome = PlayerRules[userPlayer.value][computerPlayer];
    
    if (gameOutcome === 'win') {
        disneyWins++;
        secretMessage.textContent = 'Long Live the most evil villian of all! You win!';
    } else if (gameOutcome === 'lose') {
        disneyLose++;
        secretMessage.textContent = 'Poor unfortunate soul, you lose!';
    } else if (gameOutcome === 'tie') {
        disneyTie++;
        secretMessage.textContent = 'Mirror, mirror on the wall, its a tie afterall'; 
    }
    totalRounds.textContent = disneyWins + disneyLose + disneyTie;
    totalWins.textContent = disneyWins;
    totalLosses.textContent = disneyLose;
    totalTies. textContent = disneyTie; 
});

