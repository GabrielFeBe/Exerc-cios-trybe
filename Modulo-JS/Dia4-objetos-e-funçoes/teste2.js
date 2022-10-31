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
console.log(compara([4, 4, 4, 3, 3, 4, 8, 3, 3]));



function generatePhoneNumber(tel) {
    let viar = [];
    if (tel.length !== 11) {
      return 'Array com tamanho incorreto.';
    } 
    for (let index = 0; index < tel.length; index += 1) {
      if (tel[index] < 0 || tel[index] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    for (let index = 0; index < tel.length; index += 1) {
      for(let alo = 0; alo < index; alo += 1) {
      if ( tel[index] === tel[alo]) {
          viar.push(tel[index]);
             
          }
        }
      }
      let arrayComp1 = [];
      let arrayComp2 = [];
      arrayComp1.push(viar[0]);
      for (let index = 1; index < viar.length; index += 1) {
          if (arrayComp1[0] === viar[index]) {
              arrayComp1.push(viar[index]);
          } else if (arrayComp1[0] !== viar[index] && arrayComp2[0] === viar[index]) {
              arrayComp2.push(viar[index]);
          }
        }
      return arrayComp2;
  } 
  console.log(generatePhoneNumber([1, 2, 8, 0, 5, 3, 7, 8, 9, 1, 8]));