// ===== DOM Manipulation =====
let titulo = document.getElementById('titulo');
console.log(titulo);

let px = 0;
let py = 0;

document.addEventListener('keyup', function(e) {
    let tecla = e.keyCode;
    titulo.style.position = 'absolute';

    if (tecla == 37) { // seta esquerda
        px -= 10;
        titulo.style.left = px + 'px';
    } else if (tecla == 38) { // cima
        py -= 10;
        titulo.style.top = py + 'px';
    } else if (tecla == 39) { // direita
        px += 10;
        titulo.style.left = px + 'px';
    } else if (tecla == 40) { // baixo
        py += 10;
        titulo.style.top = py + 'px';
    }
});

// ===== Validação de formulário =====
let form = document.getElementById('cadastroForm');

form.addEventListener('submit', function(event) {
    let nome = document.getElementById('nome');
    let data = document.getElementById('data');
    let cpf = document.getElementById('cpf');
    let logradouro = document.getElementById('logradouro');
    let numero = document.getElementById('numero');
    let bairro = document.getElementById('bairro');
    let cep = document.getElementById('cep');
    let cidade = document.getElementById('cidade');
    let estado = document.getElementById('estado');

    if (
        nome.value === '' || 
        data.value === '' || 
        cpf.value.length !== 11 ||
        logradouro.value === '' || 
        numero.value === '' || 
        bairro.value === '' || 
        cep.value === '' || 
        cidade.value === '' || 
        estado.value === ''
    ) {
        alert('Por favor, preencha todos os campos corretamente.');
        event.preventDefault();
    }
});

// ===== Mostrar/Ocultar uma seção =====
let botaoToggle = document.getElementById('botaomostrar');
let secao = document.getElementById('smostrar');

botaoToggle.addEventListener('click', function() {
    if (secao.style.display === 'none') {
        secao.style.display = 'block';
    } else {
        secao.style.display = 'none';
    }
});