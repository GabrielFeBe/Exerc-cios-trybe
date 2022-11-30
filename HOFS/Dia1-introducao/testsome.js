const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((nomes) => name === nomes)
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

//Adicione seu código aqui
const verificaIdade = (arr, age) => {
  return arr.every((elemento) => elemento.age >= age)
}

console.log(verificaIdade(people, 18));
console.log(verificaIdade(people, 14));