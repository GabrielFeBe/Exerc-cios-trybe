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