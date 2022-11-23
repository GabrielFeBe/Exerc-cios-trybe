// const { describe } = require('yargs')
// const { it } = require('node:test');
// const { it } = require('node:test');
// const { it } = require('node:test');
const { info, printMessage } = require('./personagem')

describe('saber se tem objeto', () => {
  it('saber se tem objeto', () => {
    expect(info).toMatchObject({ personagem: expect.anything() })
  });

  it('saber se tem boas vindas', () => {
    expect(printMessage(info)).toContain('Boas vindas,')
  })
  it('saber se tem boas vindas', () => {
    expect(printMessage(info)).toContain(info.personagem)
  })
  it('saber se joga erro', () => {
    expect(() => printMessage([])).toThrow(new Error("objeto inválido"))
  });
  it('saber se e invalido ', () => {
    expect(() => printMessage('Margarida')).toThrow(new Error('objeto inválido'))
  })
});