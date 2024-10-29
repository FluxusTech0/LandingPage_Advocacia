import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { FaComments } from "react-icons/fa"; // Ícone de chat

const theme = {
  background: "#f5f8fb",
  headerBgColor: "#007bff",
  headerFontColor: "#fff",
  botBubbleColor: "#CCAC73",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const chatbotTeste = () => {
  const [isChatOpen, setIsChatOpen] = useState(false); // Controla se o chat está aberto

  const toggleChat = () => setIsChatOpen(!isChatOpen); // Alterna abrir/fechar

  const steps = [
    {
      id: "1",
      message: "Olá! Como posso ajudar?",
      trigger: "userMessage",
    },
    {
      id: "userMessage",
      user: true, // Identifica que o usuário deve digitar
      trigger: "redirectToWhatsApp",
    },
    {
      id: "redirectToWhatsApp",
      message: "Redirecionando você para o WhatsApp...",
      component: (
        <div>
          <a
            href="https://wa.me/55XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clique aqui para abrir o WhatsApp
          </a>
        </div>
      ),
      end: true,
    },
  ];

  const chatContainerStyle = {
    position: "fixed",
    bottom: "80px",
    right: "20px",
    width: "300px",
    height: "400px",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)",
    borderRadius: "12px",
    overflow: "hidden",
    backgroundColor: "#fff",
    display: isChatOpen ? "block" : "none", // Mostra/esconde com base no estado
  };

  const chatButtonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "50%",
    padding: "15px",
    cursor: "pointer",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
    color: "#fff",
  };

  return (
    <>
    <div id="section10">
      {/* Botão flutuante para abrir/fechar o chat */}
      <button style={chatButtonStyle} onClick={toggleChat}>
        <FaComments size={24} />
      </button>

      {/* Contêiner do chatbot */}
      <div style={chatContainerStyle}>
        <ThemeProvider theme={theme}>
          <ChatBot steps={steps} />
        </ThemeProvider>
      </div>
      </div>
    </>
  );
};

export default chatbotTeste;
