const a = 10;
const b = 20;
let adicao = a +b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

const numero1 = 20;
const numero2 = 40;
if (numero1 > numero2) {
    console.log(numero1);
} else if (numero2 > numero1) {
    console.log(numero2);
}

const comparaTres1 = 10;
const comparaTres2 = 100;
const comparaTres3 = 100;
if (comparaTres1 > comparaTres2 && comparaTres1 > comparaTres3) {
    console.log(comparaTres1);
} else if (comparaTres2 > comparaTres1 && comparaTres2 > comparaTres3) {
    console.log(comparaTres2);
} else if (comparaTres3 > comparaTres1 && comparaTres3 > comparaTres2) {
    console.log(comparaTres3);
} else {
    console.log('há números empatados');
}

const testPoNeZe= -10;
if (testPoNeZe > 0) {
    console.log('positive');
} else if (testPoNeZe < 0) {
    console.log('negative');
} else {
    console.log('zero');
}

const lado1 = 60;
const lado2 = 60;
const lado3 = 60;
let triangulo;
if (lado1 < 0 || lado2 < 0 || lado3 < 0) {
    console.log('erro!!!');
}else if (lado1 + lado2 + lado3 !== 180) {
    triangulo = false;

    console.log(triangulo);
}else if (lado1 + lado2 + lado3 === 180) {
    triangulo = true;

    console.log(triangulo);
} 

let answer='alberto'
answer = answer.toLowerCase();
switch(answer) {
    case 'king':
        console.log('The King moves from its square to a neighboring square');
        break;
    case 'bishop':
        console.log('the Bishop moves diagonally');
        break;
    case 'queen':
        console.log('the Queen may move like a Rook or a Bishop,');
        break;
    case 'knight':
        console.log('the Knight jumps in making the shortest move that is not a straight one, and.');
        break;
    case 'pawn':
        console.log('the Pawn moves one square straight ahead.');
        break;
    case 'rook':
        console.log('the Rook can move in its line or row,');
        break;
    default:
        console.log('ERROOOOOOOOOOOO!')                           
}

let porcent = -10;
let notaLetra;
if (porcent >= 90) {
    notaLetra = 'A';
    console.log(notaLetra);
} else if (porcent >= 80 && porcent < 90) {
    notaLetra = 'B';
    console.log(notaLetra);
} else if (porcent >= 70 && porcent < 80) {
    notaLetra = 'C';
    console.log(notaLetra);
} else if (porcent >= 60 && porcent < 70) {
    notaLetra = 'D';
    console.log(notaLetra);
} else if (porcent >= 50 && porcent < 60) {
    notaLetra = 'E';
    console.log(notaLetra);
} else if (porcent < 50 && porcent >= 0) {
    notaLetra = 'F';
    console.log(notaLetra);
} else {
    console.log('ERROU, ERROU FEIO, ERROU RUDE!!!')
}

const numeroPar1 = 13;
const numeroPar2 = 11;
const numeroPar3 = 25;
let valid;
if (numeroPar1 % 2 === 0 || numeroPar2 % 2 === 0 || numeroPar3 % 2 === 0 ) {
    valid = true;
    console.log(valid);
} else {
    valid = false;
    console.log(valid);
}
const numeroImpar1 = 20;
const numeroImpar2 = 31;
const numeroImpar3 = 20;
let valid1;
if (numeroImpar1 % 2 !== 0 || numeroImpar2 % 2 !== 0 || numeroImpar3 % 2 !== 0 ) {
    valid = true;
    console.log(valid);
} else {
    valid = false;
    console.log(valid);
}

const custoT = 100;
const vendaVal = 200;
let valorCustoTotal = (custoT * 20 / 100) + custoT
let lucro;
if (custoT < 0 || vendaVal < 0 || valorCustoTotal < 0) {
    console.log('AZEDOU, QUEBRAMOS!!!!')
} else {
    lucro = (vendaVal - valorCustoTotal) * 1000;
    console.log(lucro)
}

let salarioBruto = 500000;
let salarioINSS;
let salario;
if (salarioBruto > 5189.82) {
    salarioINSS = salarioBruto - 570.88;
    console.log(salarioINSS)
} else if (salarioBruto >= 2594.93 && salarioBruto < 5189.82) {
    salarioINSS = salarioBruto - (salarioBruto * 0.11);
} else if (salarioBruto >= 1556.95 && salarioBruto < 2594.93) {
    salarioINSS = salarioBruto - (salarioBruto * 0.09);
} else if (salarioBruto >= 0 && salarioBruto < 1556.95) {
    salarioINSS = salarioBruto - (salarioBruto * 0.08);
}
if (salarioINSS > 4664.68) {
    salario = salarioINSS - (salarioINSS * 0.275 - 869.36);
    console.log(salario);
} else if (salarioINSS >= 3751.06 && salarioINSS < 4664.68) {
    salario = salarioINSS - (salarioINSS * 0.225 - 636.13);
    console.log(salario)
} else if (salarioINSS >= 2826.66 && salarioINSS < 3751.06) {
    salario = salarioINSS - (salarioINSS * 0.15 - 354.80);
    console.log(salario);
} else if (salarioINSS >= 1903.99 && salarioINSS < 2826.65) {
    salario = salarioINSS - (salarioINSS * 0.075 - 142.80);
    console.log(salario);
} else if (salarioINSS < 1903.98) {
    salario = salarioINSS + 0;
    console.log(salario);
}