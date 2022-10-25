//Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
//“Player 1 won” ou “A Ties” ou “Player 2 won”.
let pedra = 1;
let papel = 2;
let tesoura = 3;
let jog1 = tesoura;
let jog2 = pedra;
if (jog1 === pedra && jog2 === tesoura) {
    console.log('jogador 1 won');
} else if (jog1 === papel && jog2 === pedra) {
    console.log('jogador1 won');
} else if (jog1 === tesoura && jog2 === papel) {
    console.log('jogador 1 won');
} else if (jog2 === pedra && jog1 === tesoura) {
    console.log('jogador 2 won');
} else if (jog2 === papel && jog1 === pedra) {
    console.log('jogador 2 won');
} else if (jog2 === tesoura && jog1 === papel) {
    console.log('jogador 2 won');
} else if (jog1 === jog2) {
        console.log('draw');
    }


//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade. Imprima no console seguindo o exemplo: “A pessoa é maior de idade”.
//Bônus: Crie a condição utilizando operador ternário.
let indade = 18;
indade >= 18 ? console.log('A pessoa é maior de idade') : console.log('A pessoa é menor de idade');

