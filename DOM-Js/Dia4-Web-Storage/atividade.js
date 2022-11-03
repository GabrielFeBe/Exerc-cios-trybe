let textoT = document.querySelector('main');
console.log(textoT);
const butBackColor = document.querySelectorAll('.fundo');
console.log(butBackColor);
const backWhite = document.getElementById('b-white');
const backBlack = document.getElementById('b-black');
const backGreen = document.getElementById('b-green');
const backBlue = document.getElementById('b-blue');
const backYellow = document.getElementById('b-yellow');
console.log(textoT);

backWhite.addEventListener('click', (event) => {
    localStorage. removeItem('bgcolor');
    localStorage.setItem('bgcolor', 'white');
    textoT.style.backgroundColor = 'white';
    
})


backBlack.addEventListener('click', (event) => {
    localStorage. removeItem('bgcolor');
    localStorage.setItem('bgcolor', 'black');
    textoT.style.backgroundColor = 'black';
    
})


backGreen.addEventListener('click', (event) => {
    localStorage. removeItem('bgcolor');
    localStorage.setItem('bgcolor', 'green');
    textoT.style.backgroundColor = 'green';
    
})

backBlue.addEventListener('click', (event) => {
    localStorage. removeItem('bgcolor');
    localStorage.setItem('bgcolor', 'blue');
    textoT.style.backgroundColor = 'blue';
    
})


backYellow.addEventListener('click', (event) => {
    textoT.style.backgroundColor = 'yellow';
    localStorage. removeItem('bgcolor');
    localStorage.setItem('bgcolor', 'yellow');
})

window.onload = () => {
    let bgColor = localStorage.getItem('bgcolor');
    textoT.style.backgroundColor = `${bgColor}`;
    let fColor = localStorage.getItem('fcolor')
    textoT.style.color = `${fColor}`;
    let pixel = localStorage.getItem('pixel');
    textoT.style.fontSize = `${pixel}`;
    let space = localStorage.getItem('space');
    textoT.style.lineHeight = `${space}`;
    let font = localStorage.getItem('font');
    textoT.style.fontFamily = `${font}`;
}

const fontB = document.getElementById('f-black');
const fontR = document.getElementById('f-red');
const fontW = document.getElementById('f-white');

fontB.addEventListener('click', () => {
    localStorage.removeItem('fcolor');
    localStorage.setItem('fcolor', 'black');
    textoT.style.color = 'black';
})

fontR.addEventListener('click', () => {
    localStorage.removeItem('fcolor');
    localStorage.setItem('fcolor', 'red');
    textoT.style.color = 'red';
})

fontW.addEventListener('click', () => {
    localStorage.removeItem('fcolor');
    localStorage.setItem('fcolor', 'white');
    textoT.style.color = 'white';
})

const px8 = document.getElementById('8px');
const px10 = document.getElementById('10px');
const px12 = document.getElementById('12px');
const px14 = document.getElementById('14px');
const px20 = document.getElementById('20px');


px8.addEventListener('click', () => {
    localStorage.removeItem('pixel');
    localStorage.setItem('pixel', '8px');
    textoT.style.fontSize = '8px';
})

px10.addEventListener('click', () => {
    localStorage.removeItem('pixel');
    localStorage.setItem('pixel', '10px');
    textoT.style.fontSize = '10px';
})

px12.addEventListener('click', () => {
    localStorage.removeItem('pixel');
    localStorage.setItem('pixel', '12px');
    textoT.style.fontSize = '12px';
})

px14.addEventListener('click', () => {
    localStorage.removeItem('pixel');
    localStorage.setItem('pixel', '14px');
    textoT.style.fontSize = '14px';
})

px20.addEventListener('click', () => {
    localStorage.removeItem('pixel');
    localStorage.setItem('pixel', '20px');
    textoT.style.fontSize = '20px';
})

const sp1 = document.getElementById('1sp');
const normal = document.getElementById('normal');
const sp1P5 = document.getElementById('1.5sp');
const sp2 = document.getElementById('2sp');
const sp3 = document.getElementById('3sp');

sp1.addEventListener('click', () => {
    localStorage.removeItem('space');
    localStorage.setItem('space', '1.0');
    textoT.style.lineHeight = '1.0';
})

normal.addEventListener('click', () => {
    localStorage.removeItem('space');
    localStorage.setItem('space', 'normal');
    textoT.style.lineHeight = 'normal';
})

sp1P5.addEventListener('click', () => {
    localStorage.removeItem('space');
    localStorage.setItem('space', '1.5');
    textoT.style.lineHeight = '1.5';
})

sp2.addEventListener('click', () => {
    localStorage.removeItem('space');
    localStorage.setItem('space', '2.0');
    textoT.style.lineHeight = '2.0';
})

sp3.addEventListener('click', () => {
    localStorage.removeItem('space');
    localStorage.setItem('space', '3.0');
    textoT.style.lineHeight = '3.0';
})

const arial = document.getElementById('arial');
const roman = document.getElementById('roman');

arial.addEventListener('click', () => {
    localStorage.removeItem('font');
    localStorage.setItem('font', 'Arial');
    textoT.style.fontFamily = 'Arial';
})

roman.addEventListener('click', () => {
    localStorage.removeItem('font');
    localStorage.setItem('font', 'Times New Roman');
    textoT.style.fontFamily = 'Times New Roman';
})



