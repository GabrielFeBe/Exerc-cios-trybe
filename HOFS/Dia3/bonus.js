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

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

const reduceNames = (arr) => {
  return arr.reduce((ac, curr, index) => {
    if (index === arr.length - 1) {
      return `${ac}, ${curr.author.name}.`
    }
    return ac.length > 1 ? `${ac}, ${curr.author.name}` : curr.author.name
  }, '')
}

console.log(reduceNames(books))

const expectedResult1 = 43;

const averageAge = (arr) => arr.reduce((ac, curr) => ac + (curr.releaseYear - curr.author.birthYear)
  , 0) / arr.length


console.log(averageAge(books))

const expectedResult3 = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

const longestNamedBook = (arr) => {
  // retorne seu código aqui
  return arr.reduce((ac, curr) => {
    if (ac.name === undefined) {
      return curr
    }
    return ac.name.length > curr.name.length ? ac : curr
  }, {})
}

console.log(longestNamedBook(books));