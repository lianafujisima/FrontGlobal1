document.getElementById('cadastroForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let campos = [
    'nome', 'data', 'cpf',
    'logradouro', 'numero', 'bairro',
    'cep', 'cidade', 'estado'
  ];

  let formValido = true;
  let mensagensErro = [];
  let dados = {};

  campos.forEach(function(id) {
    let campo = document.getElementById(id);
    let valor = campo.value.trim();

    switch(id) {
      case 'nome':
        if (!/^[A-Za-zÀ-ÿ\s]{3,}$/.test(valor)) {
          mensagensErro.push("Nome deve conter pelo menos 3 letras e apenas caracteres válidos.");
          formValido = false;
        }
        break;
      case 'data':
        const dataHoje = new Date();
        const dataInformada = new Date(valor);
        if (!valor || dataInformada > dataHoje) {
          mensagensErro.push("Informe uma data de nascimento válida.");
          formValido = false;
        }
        break;
      case 'cpf':
        if (!/^\d{11}$/.test(valor)) {
          mensagensErro.push("CPF deve conter exatamente 11 números.");
          formValido = false;
        }
        break;
      case 'cep':
        if (!/^\d{8}$/.test(valor)) {
          mensagensErro.push("CEP deve conter exatamente 8 números.");
          formValido = false;
        }
        break;
      case 'numero':
        if (!/^\d+$/.test(valor)) {
          mensagensErro.push("Número da residência deve conter apenas números.");
          formValido = false;
        }
        break;
      case 'estado':
        if (!/^[A-Za-z]{2}$/.test(valor)) {
          mensagensErro.push("Estado deve ser a sigla com 2 letras (ex: SP).");
          formValido = false;
        }
        break;
      default:
        if (valor === '') {
          mensagensErro.push(`Preencha o campo ${id}.`);
          formValido = false;
        }
    }

    dados[id] = valor;
  });

  let aceite = document.getElementById('aceite');
  if (!aceite.checked) {
    mensagensErro.push("Você deve aceitar a política de privacidade.");
    formValido = false;
  }

  if (!formValido) {
    alert(mensagensErro.join('\n'));
  } else {
    sessionStorage.setItem('dadosPerfil', JSON.stringify(dados));
    alert('Cadastrado com sucesso!');
    window.location.href = 'perfil.html';
  }
});