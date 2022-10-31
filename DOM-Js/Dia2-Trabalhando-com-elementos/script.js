document.getElementById('elementoOndeVoceEsta').style.color = 'red';
document.getElementById('elementoOndeVoceEsta').parentElement.style.color = 'blue';
document.getElementById('primeiroFilhoDoFilho').innerText = 'alo mainha to aaaaaaaaaaaaaaaaaaaaaaa';
console.log(document.getElementById('pai').firstElementChild);
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);
console.log(document.getElementById('pai').lastElementChild.previousElementSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);
let astolfo = document.createElement('div');
astolfo.innerText = 'mãe de deus';
let paiDeTodos = document.getElementById('pai');
paiDeTodos.appendChild(astolfo);

let elementoEsta = document.getElementById('elementoOndeVoceEsta');
let semiramis = document.createElement('section');
semiramis.innerText = 'ronaldo'
elementoEsta.appendChild(semiramis);

let karna = document.createElement('section');
let primeiroDoFi = document.getElementById('primeiroFilhoDoFilho');
karna.innerText = 'karna o filho do deus sol';
primeiroDoFi.appendChild(karna);

console.log(document.getElementById(karna));

const filhoDo = karna;
console.log(filhoDo.parentElement.parentElement.nextElementSibling);