// const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
// console.log(Math.max(...randomNumbers)); // 800

// console.log([randomNumbers])

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'morango', 'maçã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite', 'açai', 'mel'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));


const countParams = (...args) => {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(countParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(countParams('string', null, [1, 2, 3], {})); // Você passou 4 parâmetros para a função.

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88