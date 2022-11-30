const newEmployees = () => {
  const employees = {
    id1: paramentro('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: parametro('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: parametro('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};



// console.log(randomNumber);



const loteca = (aposta) => {
  let randomNumber = Math.random() * 5;
  randomNumber = Math.ceil(randomNumber);
  if (randomNumber === aposta) {
    return 'Deu bom Mlk!!!!'
  }
  return 'Azedou você perdeu'
}
console.log(loteca(4));

function testa(p1, p2) {
  let contador = 0;
  p1.forEach((element, index) => {
    if (element === p2[index]) {
      contador += 1;
      console.log(1)
    } else if (p2[index] !== 'N.A') {
      contador -= 0.5;
      console.log('a')
    }
  });
  return contador;
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const corretor = (gabarito, respostas, fuc) => {
  return fuc(gabarito, respostas);
}
console.log(corretor(RIGHT_ANSWERS, STUDENT_ANSWERS, testa));