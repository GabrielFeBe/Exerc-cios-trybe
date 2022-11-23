// const { describe } = require('yargs');
// const { it } = require('node:test');
// const { default: test } = require('node:test');
const sum = require('./sum');
describe('a função sum', () => {
  test('soma de 4 + 9', () => {
    expect(sum(4, 5)).toBe(9)
  });
  test('soma de 0 + 0', () => {
    expect(sum(0, 0)).toBe(0)
  });
  test('soma com string', () => {
    expect(() => sum(4, '5')).toThrow(new Error('parameters must be numbers'))
  })
});