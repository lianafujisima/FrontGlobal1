const btnSim = document.getElementById("btnSim");
const btnNao = document.getElementById("btnNao");
const mensagem = document.getElementById("mensagem");

function responderSim() {
  mensagem.innerHTML = "Que bom que está seguro! Fique atento a novos alertas..";
  mensagem.style.color = "green";
}

function responderNao() {
  mensagem.innerHTML = "Compartilhando localização com autoridades...<br>Fique calmo, socorro a caminho!";
  mensagem.style.color = "red";
}

btnSim.addEventListener("click", responderSim);
btnNao.addEventListener("click", responderNao);
