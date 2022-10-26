


function palindromo(pal) {
    let palavra = pal;

    palavra = palavra.split('');7
    palavra = palavra.reverse();
    palavra = palavra.join('');
    if (palavra === pal) {
        return 'sim isso é um palindromo';
    } else {
        return 'Não';
    }
}
console.log(palindromo('touka'));
   
 function maior(val) {
    let maiorNumero = 0;
    for (let index = 0; index < val.length; index += 1) {
        for (let i = 0; i < val.length; i++) {
            if (val[i] > val[index])
            maiorNumero = i;
        } 
    }
    return maiorNumero;
 }
  console.log(maior([-2, 3, 6, 7, 10, 1]));

  function menor(val) {
    let menorNumero = val[0];
    let menorNumero1 = 0;
    for (let index = 0; index < val.length; index += 1) {
        for (let i = 0; i < val.length; i++) {
            if (val[i] < val[index] && val[i] < menorNumero)
            menorNumero1 = i;
        } 
    }
    return menorNumero1;
 }    console.log(menor([-2, 4, 6, 7, 10, 0, -3]));
 
  function nomes(alo) {
    let maiorNome = alo[0];
    for (let index = 0; index < alo.length; index += 1)
        if (alo[index].length > maiorNome.length) {
        maiorNome = alo[index];
    }
    return maiorNome;
  }
  console.log(nomes(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


function somas(a) {
    let soma = 0;
    for (let index = 1; index <= a; index += 1) {
        soma = soma + index;
    }
    return soma;
}
console.log(somas(5));


function final(word, ending) {
    let wordI = word.split('').reverse().join('');
    let splitEnding = ending.split('').reverse().join('');
    let result;
    for (let index = 0;index < splitEnding.length; index +=1) {
        if (wordI[index] !== splitEnding[index]) {
            result = false;
            break;
        } else {
            result = true;
        }
    }
    return result;
} 
console.log(final('joaofernando', 'fernan'));


function compara(a) {
    let viar = [];
    let maiorRep = 0;
    for (let index = 0; index < a.length; index += 1) {
        for(let alo = 0; alo < index; alo += 1) {
        if ( a[index] === a[alo]) {
            viar.push(a[index]);
            
        
            
            }
        }
    }

        let arrayComp1 = [];
        let arrayComp2 = [];
        arrayComp1.push(viar[0]);
        for (let index = 1; index < viar.length; index += 1) {
            if (arrayComp1[0] === viar[index]) {
                arrayComp1.push(viar[index]);
            } else {
                arrayComp2.push(viar[index]);
            }
        }
        if (arrayComp1.length > arrayComp2.length) {
            maiorRep = arrayComp1[0];
            return maiorRep;
        } else if (arrayComp2.length > arrayComp1.length) {
            maiorRep = arrayComp2[0];
            return maiorRep;
        } else {
            return console.log('números iguais ou programa bugou');
        }
        
}
console.log(compara([4, 4, 4, 3, 2, 2, 8]));