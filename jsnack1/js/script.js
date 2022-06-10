let array = [];
let userNumber;
let sum = 0;
do{ 
    array.push(userNumber = parseInt(prompt('dammi un numero')));
    sum += userNumber;
} while (sum < 50);