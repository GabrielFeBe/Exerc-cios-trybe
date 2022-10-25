let num = 10;
let multiplica = 0 ;
for (let index = num; 1 < index; index = index - 1) {
    multiplica = multiplica + index * (index - 1);

} 
console.log(multiplica);


let word = 'tryber';
let wordArray = word.split('');
console.log(wordArray);
wordArray.reverse();
word = wordArray.join('');
console.log(word);

let array = ['java', 'javascript', 'python', 'html', 'css'];
let comparar = [];
let comparar2 = [];
let maiorArray = [];
for (let index = 0; index + 1 < array.length; index += 1) {
    comparar = array[index].split('');
    comparar2 = array[index + 1].split('');
    if (comparar.length > comparar2.length && comparar.length > maiorArray.length) {
        maiorArray = comparar;
    } else if (comparar.length < comparar2.length && comparar2.length > maiorArray.length) {
        maiorArray = comparar2;
    }
} maiorArray = maiorArray.join('');
console.log(maiorArray);

