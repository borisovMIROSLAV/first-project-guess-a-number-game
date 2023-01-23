// const readline = require('readline').createInterface({
//     input: process.stdit,
//     output: process.stdout
// });

function guessNumber() {

    const computerGuess = Math.floor(Math.random() * 100);
    let number = parseInt(prompt('Guess the number (0-100): '));

    while (number != computerGuess) {
        number = parseInt(prompt('Guess the number (0-100): '));
    }

    if (number === computerGuess) {
        console.log('You guessed the correct number');
    }
    else {
        console.log('Try again')
    }
    
}
guessNumber();

// let computerGuess = Math.floor(Math.random() * 100);

// let recursiveAsyncReadLine = function () {
//     readline.question('Guess the number (0-100): ', (number) => {

//     });
// }
// recursiveAsyncReadLine();
