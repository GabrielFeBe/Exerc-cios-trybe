const envio = document.getElementById('enviar');
envio.addEventListener('click', function(e) {
    e.preventDefault();
})
envio.addEventListener('click', () => {
    const nome = document.getElementById('Nome');
    const email = document.getElementById('email-input');
    console.log(nome.value.length)
    if (nome.value.length < 9 || email.value.length < 9) {
        alert('Dados Inválidos');
    } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
    }
})
const concordo1 = document.getElementById('concordo2');
concordo1.addEventListener('click', () => {
    console.log(concordo1.checked);
    if (concordo1.checked) {
        envio.removeAttribute('disabled')
    } else if (!concordo1.checked) {
        console.log('alo');
        envio.setAttribute("disabled", "");
    }
    
})