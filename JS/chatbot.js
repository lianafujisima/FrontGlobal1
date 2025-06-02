function responder() {
    let texto = document.getElementById('entrada').value.toLowerCase();
    let chat = document.getElementById('chat');
  
    chat.innerHTML += `<p><span class="negrito">Você:</span> ${texto}</p>`;
  
    if (texto === 'como funciona?') {
      chat.innerHTML += '<p><span class="negrito">Chatbot:</span> O app funciona mesmo sem internet, via Bluetooth Mesh.</p>';
    }
    else if (texto === 'posso pedir socorro?'){
        chat.innerHTML += '<p><span class="negrito">Chatbot:</span> Se estiver em perigo, sim.</p>';
    }
    else if (texto === 'obrigada'){
        chat.innerHTML += '<p><span class="negrito">Chatbot:</span> Tem mais alguma pergunta?.</p>';
    }
    else if (texto === 'não'){
        chat.innerHTML += '<p><span class="negrito">Chatbot:</span> Até a próxima.</p>';
    }
    else{
        chat.innerHTML += '<p><span class="negrito">Chatbot:</span> Desculpe, não entendi. Pode repetir?.</p>';
    }
  
    document.getElementById('entrada').value = '';
  }