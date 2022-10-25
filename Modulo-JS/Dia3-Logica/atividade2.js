let array = ['ab', 'java', 'javascript', 'python', 'html', 'css', 'a'];
let comparar3 = [];
let comparar4 = [];
let menorArray = array[0];
for (let index = 0; index < array.length; index += 1) {
    comparar3 = array[index]
    comparar4 = array[index + 1]
    if (comparar3 < comparar4 && comparar3 < menorArray) {
        menorArray = comparar3;
    } else if (comparar4 < comparar3 && comparar4 < menorArray) {
        menorArray = comparar4;
    }
} 
console.log(menorArray);

let numero = 50;
let maiorPrimo = 0;
for (let index = 2; index <= numero; index += 1) {
    let numerosPrimos = true;
    for (let numeroDivisor = 2; numeroDivisor < index; numeroDivisor += 1) {
        if (index % numeroDivisor === 0 && index !== numeroDivisor) {
            numerosPrimos = false;
        }
    }
    if (numerosPrimos === true) {
        console.log(index);
        maiorPrimo = index;
    }
} console.log(maiorPrimo);   