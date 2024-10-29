import ChatBot from "react-chatbotify";
import { useState } from "react";
import { FaComments } from "react-icons/fa"; // Ícone de chat

function Chatteste() {
  const [isChatOpen, setIsChatOpen] = useState(false); // Controla a abertura do chat

  const toggleChat = () => setIsChatOpen(!isChatOpen); // Alterna entre abrir/fechar

  const styles = {
    botBubbleStyle: {
      textAlign: "left",
      color: "#334155",
      borderRadius: "12px 12px 12px 0",
      backgroundColor: "#e5e7eb",
      padding: "10px",
    },
    chatButtonStyle: {
      color: "#fff",
      backgroundColor: "#350000",
      border: "none",
      padding: "10px 15px",
      borderRadius: "50%",
      cursor: "pointer",
      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
      position: "fixed",
      bottom: "20px",
      right: "20px",
    },
  };

  return (
    <>
      {/* Botão flutuante que alterna o chat */}
      <button style={styles.chatButtonStyle} onClick={toggleChat}>
        <FaComments size={24} />
      </button>

      {/* Chatbot visível apenas se o estado isChatOpen for true */}
      {isChatOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "300px",
            height: "400px",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)",
            borderRadius: "12px",
            overflow: "hidden",
            backgroundColor: "#fff",
          }}
        >
          <ChatBot styles={styles} />
        </div>
      )}
    </>
  );
}

export default Chatteste;
