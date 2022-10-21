
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumber=[];
for (let i = 0; i < numbers.length; i += 1) {
    if (i + 1 < numbers.length) {
        let abacate = numbers[i] * numbers[i + 1];
        newNumber.push(abacate);
    } else {
        let tortilha = numbers[i] * 2;
        newNumber.push(tortilha);
    }
} console.log(newNumber);