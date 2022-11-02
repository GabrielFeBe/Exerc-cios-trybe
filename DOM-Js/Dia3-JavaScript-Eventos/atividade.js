const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  let dog = document.querySelector('#days');


  
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let i = 0; i < decemberDaysList.length; i += 1) {
    let mDay = document.createElement('li');
    if (decemberDaysList[i] === 24 || decemberDaysList[i] === 31) {
     mDay.className = 'day holiday';    
    } else if (decemberDaysList[i] === 4 || decemberDaysList[i] === 11 || decemberDaysList[i] === 18) {
        mDay.className = 'day friday';
   
    } else if ( decemberDaysList[i] === 25){
        mDay.className = 'day holiday friday';
    } else {
        mDay.className = 'day';
    }
    mDay.innerText = decemberDaysList[i];
    dog.appendChild(mDay);
  }
  const paiDoBut = document.querySelector('.buttons-container');
  const criandoBut = (nome, id) => {
    let butinho = document.createElement('button');
    butinho.id = id;
    butinho.innerText = nome;
    paiDoBut.appendChild(butinho);
  } 
  criandoBut('holiday', 'btn-holiday');

  const mudaCor = () => { 
    const feriados = document.querySelectorAll('.holiday');
    for (let i = 0; i < feriados.length; i += 1) {
    if (feriados[i].style.backgroundColor === 'red' ) {
      feriados[i].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      feriados[i].style.backgroundColor = 'red';
    }
    }
  }

    const butHoli = document.querySelector('#btn-holiday');
    butHoli.addEventListener('click', mudaCor);


  criandoBut('Sexta-feira', 'btn-friday');
  const lastFridayNum = [4, 11, 18, 25];
  const lastFriday = document.querySelectorAll('.friday');
  const trocaDeTexto = () => {
  for (let i = 0; i < lastFriday.length; i += 1 ){
    if (lastFriday[i].innerText !== 'é sexta feira'){
    lastFriday[i].innerText = 'é sexta feira';
    } else {
      lastFriday[i].innerText = lastFridayNum[i];
    }
  }
  }
  const idButonFrid = document.querySelector('#btn-friday');


  idButonFrid.addEventListener('click', trocaDeTexto);
  const dayDoDia = document.querySelectorAll('.day');
  console.log(dayDoDia);
  const aumentarTamanho = (event) =>{
    event.target.style.fontSize = '40px';
  } 
  const voltarAoNormal = (event1) => {
    event1.target.style.fontSize = '20px';
  }

  for(let i = 0; i < dayDoDia.length; i += 1){
    dayDoDia[i].addEventListener('mouseover', aumentarTamanho);
  }

  for(let i = 0; i < dayDoDia.length; i += 1){
    dayDoDia[i].addEventListener('mouseleave', voltarAoNormal);
  }

  
  const adcCalendario = (texto) => {
    const taskMy = document.querySelector('.my-tasks');
    const createSpan = document.createElement('span');
    createSpan.innerText = texto;
    taskMy.appendChild(createSpan);
  }
  
  adcCalendario('Assistir animes ');
 

  const criarCor = (cor) => {
    const taskMy = document.querySelector('.my-tasks');
    const makeColor = document.createElement('div');
    makeColor.className = 'task';
    makeColor.style.backgroundColor = cor;
    taskMy.appendChild(makeColor);
  }
  criarCor('red');
  criarCor('yellow');
  

  // const getTask = document.querySelector('.task');
  // const teste = (event) => {
  //   const alo = document.querySelector('.task');
  //   event.target.classList.toggle('selected');
  // } 
  // getTask.addEventListener('click', teste);

  const getTask = document.querySelector('.task');
  console.log(getTask.className);
  const chgTask = () => {
    
    if (getTask.className === 'task') {
      getTask.className = 'task selected';
    } else {
      getTask.className = 'task';
    }
  }
  getTask.addEventListener('click', chgTask);


  const setDayColor = () => {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', (event) => {
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor; 
        event.target.style.color = color; 
      } else if (eventTargetColor === taskColor) {
        event.target.style.color = 'rgb(119,119,119)';  
      }
    });
  }
  setDayColor();

  const criaFilh = () => {
    let sonOf = document.createElement('p');
    const container = document.querySelector('.input-container');
    const texoT = document.querySelector('#task-input');
    if (texoT.value.length > 0) {
    sonOf.innerText = texoT.value;
    container.appendChild(sonOf);
  } else {
    alert('errorrrrrrrrrrrrrrr');
  }
    
  } 
  const elButton = document.querySelector('#btn-add');
  elButton.addEventListener('click', criaFilh);
  const enterKey = document.querySelector('#task-input');
  enterKey.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
    const elButton = document.querySelector('#btn-add');
    elButton.click();
    }
  });
  