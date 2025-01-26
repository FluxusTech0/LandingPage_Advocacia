import React, { useState } from "react";
import Slider from "react-slick";
import Imagem1 from '../assets/img/Administrativo2.jpeg'
import Imagem2 from '../assets/img/Consumidor.jpg' 
import Imagem3 from '../assets/img/Contratos.jpg'
import Imagem4 from '../assets/img/Tributario.jpg'
import Imagem5 from '../assets/img/Direito Civil.png'
import './Assistencia.css';

function AssistenciaJuridica() {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);

  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 480, // Para telas de até 480px
      settings: {
        slidesToShow: 2, // Mostrar 2 slides
        slidesToScroll: 1,
      },
    },
  ],
};


  return (
    <>
      <div className="paginaAssistencia" id="section2">
        <p className="textopequenoAssistencia">
          Como Podemos Ajudar
        </p>
        <p className="textoGrandeAssistencia">
          Áreas de Prática Jurídica
        </p>

        <div className="slider-container">
          <div>
            <Slider {...settings}>
              <div className="carousel-item">
                <div className="image-container">
                  <img className="Imagemcarrossel" src={Imagem1} alt="" />
                  <div className="text-container">
                    <p className="fixed-text">Administrativo</p>
                    <p className="hover-text">Texto Adicional</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="image-container">
                  <img className="Imagemcarrossel" src={Imagem2} alt="" />
                  <div className="text-container">
                    <p className="fixed-text">Consumidor</p>
                    <p className="hover-text">Texto Adicional</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="image-container">
                  <img className="Imagemcarrossel" src={Imagem3} alt="" />
                  <div className="text-container">
                    <p className="fixed-text">Contratos</p>
                    <p className="hover-text">Texto Adicional</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="image-container">
                  <img className="Imagemcarrossel" src={Imagem4} alt="" />
                  <div className="text-container">
                    <p className="fixed-text">Tributario</p>
                    <p className="hover-text">Texto Adicional</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="image-container">
                  <img className="Imagemcarrossel" src={Imagem5} alt="" />
                  <div className="text-container">
                    <p className="fixed-text">Direito Civil</p>
                    <p className="hover-text">Texto Adicional</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssistenciaJuridica;
