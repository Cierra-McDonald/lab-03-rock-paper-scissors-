let disneyWins = 0;
let disneyLose = 0;
let disneyTie = 0; 
export function getGameOutcome(gameOutcome, secretMessage) {
    
    if (gameOutcome === 'win') {
        disneyWins++;
        secretMessage.textContent = 'Long Live the most evil villian of all! You win!';
    } else if (gameOutcome === 'lose') {
        disneyLose++;
        secretMessage.textContent = 'Poor unfortunate soul, you lose!';
    } else {
        disneyTie++;
        secretMessage.textContent = 'Mirror, mirror on the wall, its a tie afterall'; 
    } 
    console.log(disneyWins, 'disney wins');
    console.log(disneyLose, 'disney loss');
    console.log(disneyTie, 'disney ties');
    

    return [disneyWins, disneyTie, disneyLose];
}