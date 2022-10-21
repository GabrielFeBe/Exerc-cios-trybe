let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numeroImpar = 0;
for (let index = 0; index < numbers.length; index += 1) {
    let compara = numbers[index];
    if (compara % 2 !== 0 ) {
        numeroImpar = numeroImpar + 1;
    } 
}
if (numeroImpar === 0) {
    console.log('nenhum valor ímpar encontrado');
} else if (numeroImpar > 0) {
    console.log(numeroImpar);
}