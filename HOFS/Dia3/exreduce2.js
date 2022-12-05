const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

const countA = (arr) => {
  // retorne seu código aqui
  return arr.reduce((ac, curr) => {
    const atualLc = curr.toLowerCase().split('');
    const arrayA = atualLc.filter((element) => element === 'a')
    return arrayA.length + ac
  }, 0)
}
console.log(countA(names));