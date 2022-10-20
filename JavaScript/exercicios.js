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
