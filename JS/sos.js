function acionarSocorro() {
    const mensagem = document.getElementById('sosmensagem');

    mensagem.innerHTML = 'Compartilhando localização com autoridades...<br>' +
      'Fique calmo, socorro a caminho!';
    mensagem.style.color = "red";
  }