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



      function highestCount(num) {
        let biggest = num[0]
        let contagem = 0;
        for (let index = 0; index < num.length; index += 1) {
          if (biggest < num[index]) {
            biggest = num[index];
          } 
        } 
        for (let index = 0;index < num.length; index += 1){
          if (biggest === num[index]) {
            contagem += 1;
          }
        }
        return contagem;
      }
      console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));


      let b = 1  
      let a = 3
     
      console.log(dist);


         
    let caralho = [];
    caralho.push('fizzBuzz');
    console.log(caralho);


    function encode(str) {
      let isso = str.split('');
      for (let index = 0; index < isso.length; index += 1) {
        if (isso[index] === 'a') {
          isso[index] = 1;
        } else if (isso[index] === 'e') {
          isso[index] = 2;
        } else if (isso[index] === 'i') {
          isso[index] = 3;
        } else if (isso[index] === 'o') {
          isso[index] = 4;
        } else if (isso[index] === 'u') {
          isso[index] = 5;
        }
      }
      return isso.join('');
      }
      console.log(encode('hello'));

      function techList(tel) {
      if (tel !== 11) {
        return 'Array com tamanho incorreto.';
      } 
      for (let index = 0; index < tel.length; index += 1) {
        if (tel[index] < 0 || tel[index] > 9) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }

      } 
      console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript']));



      function maisRepetido(numeros) {
        let contRepetido = 0;
        let contNumero = 0;
        let indexNumeroRepetido = 0;
      
        for (let index in numeros) {
          let verificaNumero = numeros[index];
          for (let index2 in numeros) {
            if (verificaNumero === numeros[index2]) {
              contNumero += 1;
            }
          }
          
          if (contNumero > contRepetido) {
            contRepetido = contNumero;
            indexNumeroRepetido = index;
          }
          contNumero = 0;
        }
        
        return numeros[indexNumeroRepetido];
      }
      
      console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3, 3, 4, 5, 3])); // 2