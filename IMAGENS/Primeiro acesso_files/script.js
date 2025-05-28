

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


document.addEventListener("DOMContentLoaded", function () {
    const botaoMostrar = document.getElementById("botaomostrar");
    const secaoMostrar = document.getElementById("smostrar");
  
    if (botaoMostrar && secaoMostrar) {
      botaoMostrar.addEventListener("click", function () {
        if (secaoMostrar.style.display === "none") {
          secaoMostrar.style.display = "block";
        } else {
          secaoMostrar.style.display = "none";
        }
      });
    }
  });