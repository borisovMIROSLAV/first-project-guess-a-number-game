function guessAnumber() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let computerGuess = Math.floor(Math.random() * 100);
    let playerGuess;

    let recursiveAsyncReadLine = function () {
        readline.question('Guess the number(0-100): ', (number) => {
            playerGuess = Number(number);

            if (playerGuess <= 100 && playerGuess >= 0) {
                if (playerGuess === computerGuess) {
                    console.log('You guessed it!');
                    return readline.close();
                } else if (playerGuess < computerGuess) {
                    console.log('Too Low!');
                    recursiveAsyncReadLine();
                } else if (playerGuess > computerGuess) {
                    console.log('Too High!');
                    recursiveAsyncReadLine();
                }
            } else {
                console.log('Invalid Input! Try again...');
                recursiveAsyncReadLine();
            }
        });
    }
    recursiveAsyncReadLine();
}
guessAnumber();