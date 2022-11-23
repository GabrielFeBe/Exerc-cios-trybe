// const { describe } = require('yargs');
// const { it } = require('node:test');
const { searchEmployee, idCheca, checaErro } = require('./bonus');

describe('testando se está tudo ok', () => {
  it('testando erro com id', () => {
    expect(() => { searchEmployee('8579-6', 'firstNme') }).toThrow(new Error('Informação indisponível'))
  })

  it('testando erro com id', () => {
    expect(() => { searchEmployee('8529-6', 'firstName') }).toThrow(new Error('ID não identificada'))
  })

  it('testando funcionalidade padrão', () => {
    expect(searchEmployee('8579-6', 'firstName')).toContain('The firstName of the professional number 8579-6 is/are Ana')
  })
});

// console.log(searchEmployee('8579-6', 'firstName'));