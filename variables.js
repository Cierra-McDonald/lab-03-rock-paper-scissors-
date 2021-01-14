
export const PlayerRules = {
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
export const playersObject = {
    0: 'Maleficent',
    1: 'Ursula', 
    2: 'Jafar',
};