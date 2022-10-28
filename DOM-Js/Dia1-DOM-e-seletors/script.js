 const head = document.getElementById("header-container");
head.style.backgroundColor = 'green';
const importan = document.getElementsByClassName("imp");
for (let i = 0; i < importan.length; i ++) {
    importan[i].style.backgroundColor = 'purple';
}
const bodyImp = document.getElementById("emergency-tasks");
bodyImp.style.backgroundColor = 'orange';
const pe = document.getElementById('footer-container');
pe.style.backgroundColor = 'black'

const nImportan = document.getElementsByClassName("not");
for (let i = 0; i < importan.length; i ++) {
    nImportan[i].style.backgroundColor = 'black';
}

const bodyNimp = document.getElementById("no-emergency-tasks");
bodyNimp.style.backgroundColor = 'yellow';