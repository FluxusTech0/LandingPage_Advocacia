// Contato.js
import React, { useState } from 'react';
import Iconhome from '../assets/img/Homeicon.png';
import Iconemail from '../assets/img/Emailicon.png';
import Icontele from '../assets/img/Telefone.png';
import Iconrelogio from '../assets/img/relogio.png';
import Logoplanfleto from '../assets/img/logopreto.png';
import ChatCustom from './ChatCustom'; // Importando o chatbot
import './Contato.css';

function Contato() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatToggle = () => {
    setIsChatOpen((prev) => !prev); // Alterna o estado do chatbot
  };

  return (
    <>
      <div className="paginaContato" id="section3">
        <div className="panfleto">
          <p className="Letraprincipal">Informações de contato</p>
          <p className="Letramenor">
            Estamos disponíveis para ajudá-lo. Entre em contato conosco para
            obter mais informações ou para agendar a consulta.
          </p>
          <img className="homeicon" src={Iconhome} alt="Home icon" />
          <p className="endereco">Endereço do Escritório</p>
          <p className="enderecoreal">Rua Sessenta, Número: 15, Caetés III</p>
          <img className="emailicon" src={Iconemail} alt="Email icon" />
          <p className="email">Endereço de Email</p>
          <p className="emailreal">reinanfofinho@gmail.com</p>
          <img className="telefoneicon" src={Icontele} alt="Phone icon" />
          <p className="telefone">Telefone</p>
          <p className="telefonereal">(81) 99999-9999</p>
          <img className="relogioicon" src={Iconrelogio} alt="Clock icon" />
          <p className="relogio">Horário de Funcionamento</p>
          <p className="horario">08:30-12:00 / 13:30-17:30</p>
        </div>
        <div className="panfleto2">
          <img className="logoplanfleto" src={Logoplanfleto} alt="Logo" />
          <p className="textopequenocontato">Entre em contato hoje mesmo</p>
          <p className="textograndecontato">Para falar com um especialista</p>
         <a href="https://wa.me/5581971115922?text=Olá!%20Gostaria%20de%20mais%20informações."target="_blank" rel="noopener noreferrer"><button className="comic-button">Entre em contato!</button></a>
        </div>
      </div>
      {/* Renderiza o chatbot com base no estado isChatOpen */}
      <ChatCustom isChatOpen={isChatOpen} toggleChat={handleChatToggle} />
    </>
  );
}

export default Contato;
