import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import  { useState } from "react";


const theme = {
    background: '#f5f8fb',
    headerBgColor: '#007bff',
    headerFontColor: '#fff',
    botBubbleColor: '#CCAC73',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  }

const chatbotTeste = () => {
    const [redirect, setRedirect] = useState(false);

  /*const handleUserMessage = async ({ value, steps }) => {
    const userMessage = value;

    try {
      const response = await axios.post('http://localhost:5000/chat', { message: userMessage });
      const botMessage = response.data.response;

      if (botMessage.includes("WhatsApp")) {
        setRedirect(true); // Ativa o redirecionamento
      }

      return botMessage;
    } catch (error) {
      return 'Desculpe, houve um erro ao processar sua mensagem.';
    }
  };*/

  const steps = [
    {
      id: '1',
      message: 'Olá! Como posso ajudar?',
      //trigger: 'userMessage',
      trigger: 'userMessage'
    },
     {
      id: 'userMessage',
      user: true, // Tag como true para identificar que o usuário tem que digitar
      trigger: 'redirectToWhatsApp'
    },
    /*{
      id: 'userMessage',
      user: true,
      trigger: async ({ value, steps }) => {
        const botMessage = await handleUserMessage({ value, steps });
        return 'botMessage';  // Próximo passo é exibir a mensagem do bot
      },
    },
    {
      id: 'botMessage',
      message: ({ previousValue }) => previousValue,
      trigger: 'userMessage',  // Ciclo de mensagens contínuas
    },*/
    {
      id: 'redirectToWhatsApp',
      message: 'Redirecionando você para o WhatsApp...',
      component: (
        <div>
          <a href="https://wa.me/55XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
            Clique aqui para abrir o WhatsApp
          </a>
        </div>
      ),
      end: true,
    },
  ];
if (redirect) {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot steps={[steps[steps.length - 1]]} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} />
    </ThemeProvider>
  );
};

export default chatbotTeste;
