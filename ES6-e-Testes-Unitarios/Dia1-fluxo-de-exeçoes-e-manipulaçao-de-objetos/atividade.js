const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const mudaTurno = (objeto, chave, valor) => {
  return objeto.chave = valor;
}

const listarChaves = (objeto) => {
  const chaves = Object.keys(objeto);
  return chaves
}

const objetoTamanho = (objeto) => {
  const tamanho = Object.entries(objeto);
  return tamanho.length
}

console.log(objetoTamanho(lesson1));

const objetoValores = (objeto) => {
  const valores = Object.values(objeto);
  return valores;
}

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log(allLessons.lesson1);
const conta = (object) => {
  let conta = 0;
  for (let i in object) {
    // console.log(object[i].numeroEstudantes)
    conta = object[i].numeroEstudantes + conta;
  }
  return conta
}
// console.log(conta(allLessons));

const valores = (valor, numero) => {
  // let value = allLessons[valor];
  let value = Object.values(valor);
  console.log(value);
  return value[numero];
}

console.log(valores(lesson1, 0));


const verificaChaveValor = (objeto, chave, valor) => {
  const key = Object.entries(objeto);
  // let teste = true;
  for (let i in key) {
    console.log(key[i]);
    if (key[i].includes(chave) && key[i].includes(valor)) {
      return true;
    }
  }
  return false
}

console.log(verificaChaveValor(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verificaChaveValor(lesson3, 'materia', 'Maria Clara'));
// Output: false

const pegaValores = (obj, professor1) => {
  const objeto = {};
  const materias = [];
  let alunos = 0;
  let name = professor1;
  for (let i in obj) {
    let abacate = obj;

    let entrada = Object.entries(abacate[i]);
    for (let index in entrada) {
      console.log(entrada[index].includes(professor1));
      if (entrada[index].includes(professor1)) {
        alunos += obj[i].numeroEstudantes;
        materias.push(obj[i].materia);
      }
    }

  }
  return { materias: materias, numeroEstudantes: alunos, professor: name }
}


console.log(pegaValores(allLessons, 'Maria Clara'));