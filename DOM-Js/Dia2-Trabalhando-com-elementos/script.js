document.getElementById('elementoOndeVoceEsta').style.color = 'red';
document.getElementById('elementoOndeVoceEsta').parentElement.style.color = 'blue';
document.getElementById('primeiroFilhoDoFilho').innerText = 'alo mainha to aaaaaaaaaaaaaaaaaaaaaaa';
console.log(document.getElementById('pai').firstElementChild);
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);
console.log(document.getElementById('pai').lastElementChild.previousElementSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling)