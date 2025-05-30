window.addEventListener('DOMContentLoaded', () => {
  const dadosSalvos = sessionStorage.getItem('dadosPerfil');

  if (dadosSalvos) {
    const dados = JSON.parse(dadosSalvos);

    document.getElementById('perfilNome').textContent = dados.nome;
    document.getElementById('perfilData').textContent = dados.data;
    document.getElementById('perfilCPF').textContent = dados.cpf;

    document.getElementById('perfilEndereco').textContent =
      `${dados.logradouro}, ${dados.numero}, ${dados.bairro}, ${dados.cidade} - ${dados.estado}, ${dados.cep}`;
  } else {
    const container = document.querySelector('.perfil');
    container.innerHTML = '<p>Nenhum dado cadastrado.</p>';
  }
});
