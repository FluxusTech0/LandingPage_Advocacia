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

const ChatbotTeste = ({ isChatOpen, toggleChat }) => {
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
    width: "300px",
    height: "600px",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)",
    borderRadius: "12px",
    overflow: "hidden",
    backgroundColor: "#fff",
    display: isChatOpen ? "block" : "none", // Mostra ou esconde o chat com base no estado
  };

  return (
    <>
      <div style={chatContainerStyle}>
        <ThemeProvider theme={theme}>
          <ChatBot steps={steps} />
        </ThemeProvider>
      </div>
    </>
  );
};

export default ChatbotTeste;
