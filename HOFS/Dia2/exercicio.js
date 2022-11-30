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
const infosLivro = books.map((elemento) => `${elemento.name} - ${elemento.genre} - ${elemento.author.name}`);
// console.log(infosLivro);

const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

const formatedBookNames = (livros) => {
  return livros.map((elemento) => `${elemento.name} - ${elemento.genre} - ${elemento.author.name}`);
  // console.log(infosLivro);
}
// console.log(formatedBookNames(books));

const autoresDataNome = books.map((elemento) => `${elemento.author.name} - ${elemento.author.birthYear}`);
console.log(autoresDataNome);

const expectedResult1 = [
  'George R. R. Martin - 1948',
  'J. R. R. Tolkien - 1892',
  'Isaac Asimov - 1920',
  'Frank Herbert - 1920',
  'Stephen King - 1947',
  'H. P. Lovecraft - 1890',
];

const formatedAuthorNamesBirth = (autores) => {
  // escreva seu código aqui
  return autores.map((elemento) => `${elemento.author.name} - ${elemento.author.birthYear}`);
}
console.log(formatedAuthorNamesBirth(books));

const expectedResult3 = [
  {
    author: 'Isaac Asimov',
    age: 31,
  },
  {
    author: 'H. P. Lovecraft',
    age: 38,
  },
  {
    author: 'Stephen King',
    age: 39,
  },
  {
    author: 'George R. R. Martin',
    age: 43,
  },
  {
    author: 'Frank Herbert',
    age: 45,
  },
  {
    author: 'J. R. R. Tolkien',
    age: 62,
  },
];

const nameAndAge = (arr) => {
  // escreva seu código aqui
  return arr.map((elemento) => {
    const nasceu = elemento.author.birthYear;
    const lancou = elemento.releaseYear;
    return {
      author: elemento.author.name,
      age: lancou - nasceu
    }
  }).sort((a, b) => a.age - b.age);
}
console.log(nameAndAge(books));