let naym = 100;
let pitos = 200;
let temp = naym;
naym = pitos ;
pitos = temp;
console.log(naym, pitos);

/* Destructuring */

let first = 300;
let last = 400;

[first, last] = [last, first];
console.log(first, last);