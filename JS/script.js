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

  if (!formValido) {
    alert('Por favor, preencha todos os campos obrigatórios.');
  } else {
    sessionStorage.setItem('dadosPerfil', JSON.stringify(dados));
    alert('Cadastrado com sucesso!');
    window.location.href = 'perfil.html';
  }
});






/* 
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




        localStorage.setItem('dadosCadastro', JSON.stringify(dados));
    alert('Cadastrado com sucesso!');
    window.location.href = 'perfil.html';



    }
  }); */
