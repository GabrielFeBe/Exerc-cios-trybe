let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = 0;
for (let index = 0; index < numbers.length; index += 1) {
    let compara = numbers[index];
    if (compara > maiorNumero) {
        maiorNumero = numbers[index];
    }

} console.log(maiorNumero);



let menorNumero = maiorNumero;
for (let index = 0; index < numbers.length; index += 1) {
    let compara = numbers[index];
    if (compara <= menorNumero) {
        menorNumero = numbers[index];
    }

} console.log(menorNumero);

