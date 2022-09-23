// faccio inserire numeri all'utente e li sommo finchè non arrivo alla somma 50

let array = [];
let userNumber;
let sum = 0;
do{ 
    array.push(userNumber = parseInt(prompt('dammi un numero')));
    sum += userNumber;
} while (sum < 50);