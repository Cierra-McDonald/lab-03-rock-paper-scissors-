import { playersObject, PlayerRules } from '../variables.js';

const test = QUnit.test;
test('it should return Ursula when given a value of 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Ursula';
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = playersObject[1];
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('playersObject should return Maleficent when given a value of 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Maleficent';
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = playersObject[0];
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('playersObject should return Jafar when given a value of 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Jafar';
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = playersObject[2];
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('if user player plays Maleficent and computer player plays Ursula, the user wins.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = PlayerRules['Maleficent']['Ursula'];
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

