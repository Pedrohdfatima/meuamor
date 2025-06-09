// src/Message.jsx

import React from 'react';

// Você pode alterar o texto da mensagem aqui diretamente
const textoDaMensagem = `
 Incrivel que eu não posso dizer que tenho um melhor dia da minha vida, sempre que eu penso isso
 passo um dia com você que vira meu novo melhor dia.
 Eu penso frequentemente no dia em que te pedi em namoro, no dia em que fomos assitir Mario, e em 
 varios outros dias que saimos juntos.
 Eu amo pensar em nós, em você e em tudo que construimos, eu tem amo muito
 Você é minha vida, você é quem me faz feliz, eu quero viver pra sempre ao seu lado.
 Te amo pra sempre meu amor
 Isso é só um pouquinho de nós dois❤️❤️
`;

function Message() {
  return (
    <p className="mensagem-romantica">
      {textoDaMensagem}
    </p>
  );
}

export default Message;