// mi faccio passare 10 numeri dall'utente, li sommo e gli ritorno la somma e la media dei numeri inseriti

let sum = 0;
let media = 0;

for(i=1; i <= 10; i++) {
    sum += i;
}
media = sum/10;

console.log('sum', sum)
console.log('media',media)
