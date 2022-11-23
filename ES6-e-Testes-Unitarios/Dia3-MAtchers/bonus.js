// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// for (let i of professionalBoard) {
//   console.log(i);
// }



const checaErro = (detalher) => {
  for (let i of professionalBoard) {
    // console.log(i[detalher])
    if (i[detalher] === undefined) {
      throw new Error("Informação indisponível")
    }
  }
}
// console.log(professionalBoard[0].id)

const idCheca = (identify) => {

  for (let i of professionalBoard) {
    if (i.id === identify)
      return
  }
  throw new Error("ID não identificada")
}
// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
  // try {
  checaErro(detail);
  idCheca(id);
  for (let i of professionalBoard) {
    if (i.id === id) {
      return `The ${detail} of the professional number ${id} is/are ${i[detail]}`;
    }
  }
  // }
  // catch (erro) {
  // return erro.message;
  // }
};

console.log(searchEmployee('8579-6', 'firstName'));

module.exports = { searchEmployee, idCheca, checaErro };
// checaErro('firstName')