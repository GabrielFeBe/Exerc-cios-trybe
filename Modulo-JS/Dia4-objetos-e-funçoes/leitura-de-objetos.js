let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);
  console.log(leitor.livrosFavoritos[0].titulo);
  leitor['livrosFavoritos'].push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  });
  console.log(leitor.livrosFavoritos)
  console.log('Júlia tem ' + leitor.livrosFavoritos.length + ' livros favoritos');


  let arrayV = [];
  arrayV.push({
    titulo: 'buceta',
    vai: 'sefoder'
  });
  console.log(arrayV)