const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    console.log(`Received: ${line}`);
});

let computerGuess = Math.floor(Math.random() * 100);

let recursiveAsyncReadLine = function () {
    rl.question('Guess the number(0-100): ', number => {

    });
}
recursiveAsyncReadLine();

// console.log(computerGuess)