// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// // Adicione seu código aqui
// emailListInData.forEach((email) => {
//   console.log(`O email ${email} está cadastrado em nosso banco de dados!.`)
// })
const numbers = [19, 21, 30, 3, 45, 22, 15];

const divi = numbers.find((numero) => numero % 3 === 0 && numero % 5 === 0)
console.log(divi)
// Adicione seu código aqui
const names = ['João', 'Irene', 'Fernando', 'Maria'];

// Adicione seu código aqui
const nome = names.find((naimes) => naimes.length === 5)
console.log(nome)



const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

// Adicione seu código aqui
const id = musicas.find((aid) => aid.id === '31031685')
console.log(id);