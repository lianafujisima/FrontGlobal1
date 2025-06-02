1.Objetivo 
  O projeto S.O.S. Agora tem como finalidade criar uma interface de comunicação emergencial para situações de desastre que muitas vezes fazem com que sinal de internet e telefônico fiquem indisponíveis. Ao baixar o app o usuário tem a obrigatoriedade de preencher todos os dados e concordar com a política de privacidade, que diz que ao acionar socorro, sua localização será compartilhada com autoridades, e só após todos os requisitos serem preenchidos o cadastro é concluído, permitindo o uso. 
  O sistema permite que usuários respondam a alertas de desastre que são acidonados pelo app diretamente para usuário que está naquele exato momento na área afetada pelo desastre independente de seu endereço de cadastro, assim como são feitos os alertas disparados pela Defesa Civil quando há algum risco. No alerta é avisado sobre o desastre na região e pergunta se o usuário esta seguro ou não, caso esteja seguro, o usuário recebe uma mensagem para que fique atento a novos alertas, e caso responda que não está seguro, o app compartilha a localização do usuário(previamente autorizada no cadastro) com autoridades para que seja socorrido, esta função não aparece no layout do app, aparece apenas quando há algum alerta disparado pelo próprio app.
  Outra função do app é o Pedir Socorro em que o usuário pode pedir socorro mesmo sem o alerta, caso precise e esteja sem sinal, e da mesma forma que o alerta a localização é compartilhada com autoridade responsável assim que o botão é acionado através do Bluethooth Mesh que será o diferencial do projeto. 
  Além disso, o projeto conta com um Chatbot e faq que funcionam de maneira offline. Outros meios de comunicação são telefone para falar com um atendente, e-mail, e um canal direto com Whatsapp, no entanto essas 3 opções de comunicação necessitam de sinal tefefonico ou internet.

2.Estrutura de pastas e arquivos
  O projeto está estruturado em uma pasta raíz chamada FRONTGLOBAL1 que nela estão os arquivos HTML, e pastas que organizam os arquivos po tipo: CSS para estilos, JS para lógica interativa, uma pasta IMAGENS com arquivos de recurso visual.

  CSS - contém o arquivo style.css, que é responsável pela estilização visual do site, incluindo cores, espaçamento, responsividade e aparência geral dos elementos.

  IMAGENS - contém todas as imagens e logos utilizados no projeto.

  JS:
    - alerta.js - é a interação dos botões sim e não do alerta.html, que ao serem acionados retornam um resposta/frase.

    - chatbot.js - é a interação de uma conversa com o chatbot offline, em que ao identificar pergunta do usuário, existe uma resposta, usado pelo chatbot.html.

    - oculta.js - é uma interação para ocultar e mostrar um aviso ao apertar o botão, usado pelo index.html e contato.html.

    - perfil.js - quando o cadastro é realizado no index.html, o perfil.js verifica se há dados de perfil salvos no sessionStorage (usado para armazenar temporariamente os dados enquanto a aba do navegador estiver aberta) quando a página carrega. Se existirem, usa o JSON para armazenar e recuperar os dados do perfil como texto, então ele preenche automaticamente os campos do perfil com essas informações. Caso contrário, mostra a mensagem “Nenhum dado cadastrado”.

    - script.js -  é a interação do formulário de cadastro. Ele valida os campos, salva os dados no navegador (via sessionStorage) e redireciona para a página de perfil se tudo estiver correto e preenchido, pois todos os dados são obrigatórios, incluindo o aceite da privacidade. Caso algum item esteja preenchido incorretamente ou não preenchido, so tentar cadastrar vai gerar um aviso para preencher todos os campos ou preencher de maneira correta. Então apenas quando tudo estiver certo o usuário consegue realizar o cadastro gerando um aviso de cadastro reslizado com sucesso. Usado pelo index.html.

    - sos.js - interação do botão de pedir socorro, que ao acionar gera uma mensagem que a localização está sendo compartilhada com autoridade.

  FRONTGLOBAL1:
    - alerta.html - alerta de desastre, que na realidade não vai aparecer a opção de entrar nessa página pelo usuário. Ela vai aparecer apenas quando o app enviar o alerta. No projeto coloquei na pagina principal(index.html) para que seja mais fácil a sua visualização.

    - chatbot.html - interação do chatbot offline.

    - consentimento.html - documento de políticas de privacidade, que precisam ser aceitas pelo usuário, para concluir cadastro.

    - contato.html - tem os meios de contato com o app e também telefones úteis.

    - FAQ.html - são as perguntas mais frequentes feitas.

    - index.html - pagina inicial, com cadastro, que é necessário para a utilização do app.

    - integrantes.html - os integrantes do projeto.

    - perfil.html - página de perfil do usuário.

    - sos.html - página em que o usuário pode pedir ajuda/socorro mesmo não tendo nenhum alerta de desastre.

3.Tecnologia utilizada
  As tecnologias utilizadas são:
  - Dados: Oracle data Modeler
  - SMS Georreferenciado, para a emissão do alerta por parte do app.
  - Bluetooth Mesh - para o usuário reponder o alerta e enviar um pedido de socorro.
  - back: Python e Java.
  - chatbot: IBM WatsonAssistent.
  - front: html para estruturação das páginas, css para estilização da interface e Javascript para lógica de interação, respostas automáticas e ações do sistema.

4.Integrantes
  Liana Lyumi Morisita Fujisima RM 565698
  Victor Willian Hwan Cho RM 565382
  
5.Endereço do repositório no Github
  https://github.com/lianafujisima/FrontGlobal1 
