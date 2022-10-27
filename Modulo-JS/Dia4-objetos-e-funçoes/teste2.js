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