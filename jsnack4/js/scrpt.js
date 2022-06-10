let list1 = [];
let list2 = [];
console.log(list1)
console.log(list2)
let randomNum1 = Math.floor(Math.random()*100);
let randomNum2 = Math.floor(Math.random()*100);
console.log(randomNum1)
console.log(randomNum2)


for (i=1; i <=randomNum1; i++) {
    list1 += [1];
}
for (i=1; i <=randomNum2; i++) {
    list2 += [1];
}

console.log(list1)
console.log(list2)

if (list1 < list2) {
    
    while (list1 < list2) {
        list1 += 1;
    } 
} else if (list1 > list2) {
    
    while (list1 > list2) {
        list2 += 1;
    }
}



console.log('list1',list1)
console.log('list2',list2)




