    // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
    const pessoa = {
        nome: 'Henri',
        idade: 20
      }
      pessoa.nome = 'Luna';
      pessoa.idade = 19;
     // Altere essa estrutura para corrigir o erro.
      console.log('Nome:', pessoa.nome);
      console.log('Idade:', pessoa.idade);


      const numeroAleatorio = () => Math.random();

      console.log(numeroAleatorio());

     const hello = (nome) => `Olá, ${nome}!`;
        
    let nome = 'Ivan';
      console.log(hello(nome));

      const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
      
      
      
      let sobrenome = 'Pires';
      console.log(nomeCompleto(nome, sobrenome));


      let speed = 90;
      const speedCar = (speed) => speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;
      

      console.log(speedCar(speed));

      let motor = 'desligado';
      const moto = () => motor === 'desligado' ? motor = 'ligado' : motor = 'desligado';

      
      
      console.log(`O Motor Está ${moto()}`);
      console.log(`O Motor Está ${moto()}`);
      console.log(`O Motor Está ${moto()}`);

      let pi = 3.14;

      const circleArea = (r) => pi * r ** 2;
      console.log(circleArea(5));


      const longestWord = (word) => {
        let splitedA = [];
        splitedA = word.split(' ');
        let biggestWord = splitedA[0];
        for (let key in splitedA) {
          if (splitedA[key].length > biggestWord.length) {
            biggestWord = splitedA[key];
          }
          
        }
        return biggestWord;
    }
      console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

      
    
      
    const sort = (a, b) => {
        if (a.length > b.length) {
            return -1;
        } else if (a.length < b.length) {
            return 1;
        } return 0;
      }

      const palvraLonga = (palavra) => {
        let sabemos = palavra.split(' ');
        sabemos.sort(sort);
        
        return sabemos['0'];
       
      }
      console.log(palvraLonga('Antônio foi no banheiro e não sabemos o que aconteceu'));