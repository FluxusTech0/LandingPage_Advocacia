import React from 'react';
import './Preloader.css'; // CSS opcional para estilização
import logoloading from '../assets/img/logoouro.png'

const Preloader = () => {
  return (
    <div className="preloader">
        <div className='spinner'></div>
      <img 
        src={logoloading} // Caminho para sua imagem específica
        alt="Loading..." 
        className="preloader-image"
      />
    </div>
  );
};

export default Preloader;
