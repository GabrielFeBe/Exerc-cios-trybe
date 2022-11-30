const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
const autora1947 = books.find((elemento) => elemento.author.birthYear === 1947);
console.log(`O Autor de nome ${autora1947.author.name}`)

const expectedResult = 'Duna';
const smallerName = (arr) => {
  let nameBook;
  // escreva aqui o seu código
  nameBook = arr[0].name
  // console.log(nameBook)
  arr.forEach(elemento => {
    // let oBoy = elemento.name
    if (elemento.name.length < nameBook.length) {
      nameBook = elemento.name
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
console.log(smallerName(books))


const expectedResult1 = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

const getNamedBook = () => {
  // escreva seu código aqui
  return books.find((livro) => livro.name.length === 26)
}
console.log(getNamedBook())


const expectedResult2 = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((elemento) => {
    const autor = elemento.author.birthYear;
    return autor >= 1901 && autor <= 2000;
  })
}

console.log(everyoneWasBornOnSecXX());


const expectedResult3 = true;

const someBookWasReleaseOnThe80s = () => {
  // escreva seu código aqui
  return books.some((elemento) => {
    const dataLivro = elemento.releaseYear;
    return dataLivro >= 1980 && dataLivro <= 1989
  })
}

console.log(someBookWasReleaseOnThe80s())


const expectedResult4 = false;

function authorUnique() {
  // escreva seu código aqui
  const primeiro = books[0].author.birthYear;
  // console.log(primeiro)
  for (let i = 0; i < books.length; i += 1) {
    const primeiro = books[i].author.birthYear;
    for (let index = 0; index < books.length; index += 1) {
      const segundoFor = books[index].author.birthYear;
      if (segundoFor === primeiro && i !== index) {
        console.log(i);
        console.log(index);
        return false
      }
    }
  }
  return true
}
console.log(authorUnique())