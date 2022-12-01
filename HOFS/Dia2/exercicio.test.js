// const { describe } = require('yargs');
// const { it } = require('node:test');
const { nameAndAge, expectedResult3, books } = require('./exercicio.js');

describe('fazendo um teste no último exercicio', () => {
  it('verifica o objeto', () => {
    expect(nameAndAge(books)).toMatchObject(expectedResult3)
  })
})