//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index += 1) {
  sum += fruits[index];
}

 sum > 15 ? console.log(sum) : console.log('numero lixo');



 let idades =[18, 14, 16];
 let menorIdade = null;
 
 if(idades[0] < idades[1]){
     menorIdade = idades[0];
 }else{
     menorIdade = idades[1];
 } if(idades[2] < menorIdade){
     menorIdade = idades[2];
 }
 if(menorIdade == idades[0]){
     console.log('Carolzita é a pessoa mais nova.');
 }if(menorIdade == idades[1]){
     console.log('Murilo é a pessoa mais nova.');
 }if(menorIdade == idades[2]){
     console.log('Baeta é a pessoa mais nova.');
 }
 