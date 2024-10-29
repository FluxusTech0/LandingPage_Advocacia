// ChatbotTeste.js
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#f5f8fb",
  headerBgColor: "#007bff",
  headerFontColor: "#fff",
  botBubbleColor: "#CCAC73",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const ChatbotCustom = ({ isChatOpen, toggleChat }) => {
  const steps = [
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      end: true,
    },
  ];

  const chatContainerStyle = {
    position: "fixed",
    bottom: "80px",
    right: "20px",
    width: "390px",
    height: "520px",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)",
    borderRadius: "12px",
    overflow: "hidden",
    backgroundColor: "#fff",
    display: isChatOpen ? "block" : "none", // Mostra ou esconde o chat com base no estado
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "30px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "20px",
    color: "#491d8d",
  };

  return (
    <>
      <div style={chatContainerStyle}>
        <ThemeProvider theme={theme}>
        <button style={closeButtonStyle} onClick={toggleChat}>
          &times; {/* O "X" para fechar */}
        </button>
          <ChatBot steps={steps} headerTitle="Atendimento" />
        </ThemeProvider>
      </div>
    </>
  );
};

export default ChatbotCustom;
