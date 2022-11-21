const { expect } = require('expect');
const { myRemove, myFizzBuzz, mapString, techList, hydrate } = require('./atividade');

describe('testa função myRemove', () => {
  it('remove 3', () => {
    const celta = [1, 2, 3, 4];
    expect([1, 2, 4]).
      toEqual(myRemove(celta, 3));
  });


  it('testa se não retorna o array inteiro', () => {
    const celta = [1, 2, 3, 4];
    expect([1, 2, 3, 4]).
      not.toEqual(myRemove(celta, 3));
  });

  it('tenta remover 5, porem 5 não existe', () => {
    const celta = [1, 2, 3, 4];
    expect([1, 2, 3, 4]).
      toEqual(myRemove(celta, 5));
  });
});

describe('testa função fizzBuzz', () => {
  test('retorna FizzBuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('retorna Fizz', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });
  test('retorna buzz', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  test('retorna numero passado', () => {
    expect(myFizzBuzz(11)).toBe(11);
  });
  test('retorna falso', () => {
    expect(myFizzBuzz('abacate')).toBe(false);
  });
});

describe('testa se o decodificador funciona', () => {
  test('retorna 12345', () => {
    expect(mapString({ 'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5 }, 'aeiou')).toEqual('12345');
  })
  test('retorna 12345', () => {
    expect(mapString({ '1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u' }, '12345')).toEqual('aeiou');
  })
  test('retorna 12345', () => {
    expect(mapString({ '1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u' }, 'g1br32l')).toEqual('gabriel');
  })
  test('retorna 12345', () => {
    expect(mapString({ '1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u' }, 'b1t1t1')).toEqual('batata');
  })
  test('retorna 12345', () => {
    expect(mapString({ 'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5 }, 'aeiou')).toHaveLength(5);
  })
})


describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});