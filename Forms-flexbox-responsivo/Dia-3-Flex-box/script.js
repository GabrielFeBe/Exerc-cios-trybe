let numeros = '1 eu gosto de abacate no fim de 3';
let numeros1 = /[1-9]/g;
numeros = numeros.match(numeros1);
console.log(numeros);