let player = {
    name : 'Marta',
    lastName : 'Silva',
    age : 34,
    medals : {
        golden : 2,
        silver : 3
    }
}
console.log(player.name + ' ' + player.lastName);

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };
  for (let key in names) {
    console.log('olá' + ' ' + names[key]);
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  }; 
  for (let key in car) {
    console.log(key + ': ' + car[key]);
  }

  function soma(a, b) {
    return a + b;
  }

  function multi(multipli, multipli1) {
    return multipli * multipli1;
  }

  function divisao(divi1, divisor) {
    return divi1 / divisor;
  }

  function modulo(modul, modulador) {
    return modul % modulador;
  } 
  function subt(sub1, sub2) {
    return sub1 - sub2;
  }

  console.log(multi(10, 20));

  function triangulo(a, b, c) {
    if (a + b + c === 180) {
        return true;
    } else if (a < 0 || b < 0 || c < 0) {
        return 'triangulo invalido';
    } else {
        return false;
    }
  }   console.log(triangulo(60, 60, 60));

  