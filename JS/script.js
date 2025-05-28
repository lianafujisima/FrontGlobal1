

// ===== Validação de formulário =====
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    let campos = [
      'nome', 'data', 'cpf',
      'logradouro', 'numero', 'bairro',
      'cep', 'cidade', 'estado'
    ];
  
    let formValido = true;
  
    campos.forEach(function(id) {
      let campo = document.getElementById(id);
      if (campo.value.trim() === '') {
        formValido = false;
      }
    });
  
    if (!formValido) {
      alert('Por favor, preencha,todos os campos são obrigatórios.');
      event.preventDefault();
    }
    else {
        alert('Cadastrado com sucesso!');
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