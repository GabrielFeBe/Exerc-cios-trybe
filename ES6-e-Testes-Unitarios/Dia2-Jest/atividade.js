function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}
console.log(myFizzBuzz('a'))

const mapString = (objectMap, string) => {
  const splitString = string.split('');
  const mappedArray = [];
  for (let index = 0; index < splitString.length; index += 1) {
    const character = splitString[index];
    const mappedValue = objectMap[character];

    if (mappedValue) {
      mappedArray.push(mappedValue);
    } else {
      mappedArray.push(character);
    }
  }
  return mappedArray.join('');
}
const encode = (string) => {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return mapString(map, string);
}
const decode = (string) => {
  const map = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return mapString(map, string);
}

console.log(mapString({ 'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5 }, 'aeiou'));


const techList = (array, nome) => {
  const objeto = [];
  const ordernar = array.sort();
  if (array.length >= 1) {
    for (let i = 0; i < array.length; i += 1) {
      const obj = {
        tech: ordernar[i],
        name: nome
      };
      objeto.push(obj);
    }
    return objeto;
  }
  return 'Vazio!'
}

const hydrate = (string) => {
  let pegaNumero = string.replace(/[^0-9]/g, '');
  let contador = 0;
  for (let i = 0; i < pegaNumero.length; i += 1) {
    contador += parseInt(pegaNumero[i]);
  }
  if (contador > 1) {
    return `${contador} copos de água`;
  }
  return `${contador} copo de água`;
}
// implemente seus testes aqui

module.exports = { myRemove, myFizzBuzz, mapString, techList, hydrate };
// implemente seus testes aqui 