// VARIABILI
let userNumber;
let sum = 0;

// FOR
for(let i=1; i <=5; i++ ) {
    userNumber = parseInt(prompt('dammi un numero'));
    sum += userNumber;
}

// WHILE

let i = 1;

while (i<=5) {
    userNumber = parseInt(prompt('dammi un numero'));
    sum += userNumber;
    i++;
}

console.log(sum)