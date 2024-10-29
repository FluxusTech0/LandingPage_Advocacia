import ChatBot from "react-chatbotify";
import { useState } from "react";
import { FaComments } from "react-icons/fa"; // Ícone de chat

const Chatteste = ({ isChatOpen, toggleChat }) => {
  const [form, setForm] = useState({});
  
  const settings = {
    isOpen: true,
    general: {
      primaryColor: '#42b0c5',
      secondaryColor: '#491d8d',
      fontFamily: 'Arial, sans-serif',
      embedded: true
    },
    audio: {
      disabled: false,
    },
    chatHistory: {
      storageKey: "concepts_settings"
    }
    // other sections
  };

  const formStyle = {
		marginTop: 10,
		marginLeft: 20,
		border: "1px solid #491d8d",
		padding: 10,
		borderRadius: 5,
		maxWidth: 300
	}
 
	const flow={
		start: {
			message: "Hello there! What is your name?",
			function: (params) => setForm({...form, name: params.userInput}),
			path: "ask_age"
		},
		ask_age: {
			message: (params) => `Nice to meet you ${params.userInput}, what is your age?`,
			function: (params) => setForm({...form, age: params.userInput}),
			path: "ask_pet"
		},
		ask_pet: {
			message: "Do you own any pets?",
			// alternative way to declare options, with sending of output disabled
			// more info here: https://react-chatbotify.com/docs/api/attributes
			// options: {items: ["Yes", "No"], sendOutput: false}
			options: ["Yes", "No"],
			chatDisabled: true,
			function: (params) => setForm({...form, pet_ownership: params.userInput}),
			path: "ask_choice"
		},
		ask_choice: {
			message: "Select at least 2 pets that you are comfortable to work with:",
			// alternative way to declare checkboxes, with default configurations (i.e. min 1, max 4, send output and not reusable)
			// more info here: https://react-chatbotify.com/docs/api/attributes
			// checkboxes: ["Dog", "Cat", "Rabbit", "Hamster"]
			checkboxes: {items: ["Dog", "Cat", "Rabbit", "Hamster"], min: 2},
			chatDisabled: true,
			function: (params) => setForm({...form, pet_choices: params.userInput}),
			path: "ask_work_days"
		},
		ask_work_days: {
			message: "How many days can you work per week?",
			function: (params) => setForm({...form, num_work_days: params.userInput}),
			path: "end"
		},
		end: {
			message: "Thank you for your interest, we will get back to you shortly!",
			component: (
				<div style={formStyle}>
					<p>Name: {form.name}</p>
					<p>Age: {form.age}</p>
					<p>Pet Ownership: {form.pet_ownership}</p>
					<p>Pet Choices: {form.pet_choices}</p>
					<p>Num Work Days: {form.num_work_days}</p>
				</div>
			),
			options: ["New Application"],
			chatDisabled: true,
			path: "start"
		},
	}

  const chatContainerStyle = {
    position: 'fixed',
    bottom: '80px',
    right: '20px',
    width: '370px',
    height: '550px',
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)",
    borderRadius: "12px",
    overflow: "hidden",
    backgroundColor: "#fff",
    display: isChatOpen ? "block" : "none", // Mostra ou esconde o chat com base no estado
    zIndex: 9999 // Garante que o chatbot apareça acima de outros elementos
  };

  return (
    <>
        <div style={chatContainerStyle}>
          <ChatBot settings={settings} flow={flow}/>
        </div>
    </>
  );
}

export default Chatteste;
