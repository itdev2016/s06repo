var prompt = require('prompt-sync')();

while (true) {
    var n = prompt('Enter a number 1-10: ');

    n = Number.parseInt(n);
    if (!isNaN(n) && n >= 1 && n <= 10) {
        break;
    }
    console.log("Entry invalid.");
}

var compGuess = 10 * Math.random() // 0.0 - 1.0
compGuess = Math.ceil(compGuess);

if (n === compGuess) {
    console.log('You win!');

} else {
    console.log('Lost', compGuess);
}



console.log(n);
console.log(compGuess);