const valorItens = [1, 32, 44, 2, 3];

// valorItens.reduce((acc, curr) => {
//   console.log(`acumulador - acc:`, acc);
//   console.log(`valorAtual - curr:`, curr);
// }, 0);



valorItens.reduce((acc, curr) => {
  // console.log(`acc:`, acc);
  // console.log(`curr:`, curr);
  // console.log('a soma atual é', acc + curr);

  return acc + curr;
}, 0);

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
// const somaPar = numbers.reduce((acc, curr) => {
//   if (curr % 2 === 0) {
//     console.log(curr)
//     return acc + curr;
//   }
//   return acc
// }, 0)

const somaPar2 = numbers.reduce((ac, cur) => (cur % 2 === 0) ? ac + cur : ac, 0)
console.log(somaPar2);