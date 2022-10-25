
    let numeros = '';
    for (let index = 0; index < n; index = index + 1) {
        numeros = numeros + '*';
    }
    for (let index = 0; index < n; index = index + 1) {
        console.log(numeros);
    }

    let n = 10;
    let numeros1 = '';
    for (let index = 0; index < n; index += 1) {
        numeros1 = numeros1 + '*';
        for (let prog = 0; prog < n; prog += n) {
            console.log(numeros1);
        }
    } 

    let tri = 5;
    let string = '';
    let position = tri -1;
    let symbol = '*';
    for (let index = 0; index < tri; index += 1) {
        for (let n = 0; n < tri; n += 1){
            if (n < position) {
                string = string + ' '   ; 
            } else {    
                string = string + symbol;
            }  
        }
        console.log(string);
        string = '';
        position -= 1;
    };

let numero

   