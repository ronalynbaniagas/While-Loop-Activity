// WHILE LOOP STATEMENT
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const targetNumber = Math.floor(Math.random() * 10) + 1; 
let attempts = 0;

function askGuess() {
  rl.question('Guess a number between 1 and 10: ', (answer) => {
    const userGuess = parseInt(answer, 10); 
    attempts++;

    if (userGuess === targetNumber) {
      console.log(`Correct! You guessed the number in ${attempts} attempt(s).`);
      rl.close();
    } else {
      console.log('Wrong guess. Try again!');
      askGuess(); 
    }
  });
}


askGuess(); 5



