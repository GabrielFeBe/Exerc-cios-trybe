const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
const change = (samba) => {
    const troca = document.querySelector('.tech');
    troca.classList.remove('tech');
    samba.target.classList.add('tech');
}
firstLi.addEventListener('click', change);
secondLi.addEventListener('click', change);
thirdLi.addEventListener('click', change);
    


// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

const trocar = (texto) => {
    const textinho = document.querySelector('.tech');
    textinho.innerText = input.value;
}
input.addEventListener('change', trocar);

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
const link = 'https://gabrielfebe.github.io';


const linkPra = () => {
const win = window.open(link, '_blank')
win.focus()
}
myWebpage.addEventListener('dblclick', linkPra);

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

const color = (event) => {
event.target.style.backgroundColor = 'green';
}
myWebpage.addEventListener('mouseover', color);
const color2 = (event) => event.target.style.backgroundColor = '#333';
myWebpage.addEventListener('mouseleave', color2);
// Segue abaixo um exemplo do uso de event.target:


const resetText = (event) => {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.