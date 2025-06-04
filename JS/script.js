document.getElementById('cadastroForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let campos = [
    'nome', 'data', 'cpf',
    'logradouro', 'numero', 'bairro',
    'cep', 'cidade', 'estado'
  ];

  let formValido = true;
  let dados = {};

  campos.forEach(function(id) {
    let campo = document.getElementById(id);
    if (campo.value.trim() === '') {
      formValido = false;
    } else {
      dados[id] = campo.value.trim();
    }
  });

  let aceite = document.getElementById('aceite');
  if (!aceite.checked) {
    formValido = false;
    alert('Você precisa preencher todos os campos e aceitar a política de privacidade para continuar.');
    return; 
  }

  if (!formValido) {
    alert('Por favor, preencha todos os campos.');
  } else {
    sessionStorage.setItem('dadosPerfil', JSON.stringify(dados));
    alert('Cadastrado com sucesso!');
    window.location.href = 'perfil.html';
  }
});


