import React from "react";
import Slider from "react-slick";
import "./Equipe.css";
import fotoequipe from "../assets/img/fazendo.jpg";

function Equipe() {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1,
    autoplaySpeed: 2500,
dots: true,
    infinite: true,
autoplay: true,
    cssEase: "linear",
  };
  return (
    <>
      <div className="paginaEquipe" id="section2">
      <p className="textoGrandeEquipe">
          Conheça nossa Equipe
        </p>
        <div className="slider-container2">
          <Slider {...settings}>
            <div>
              <img src={fotoequipe} alt="" />
              <div className="ab">
                <div className="banner">
                  <p className="NomeEquipe">Eduarda</p>
                  <p className="DescricaoEquipe">
                    Parece que você quis dizer "Oruam". Você se refere ao rapper
                    brasileiro Oruam? Ele é um dos nomes em ascensão no trap
                    nacional, conhecido por seu estilo marcante, voz rouca e
                    letras que retratam a realidade das ruas.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src={fotoequipe} alt="" />
              <div className="ab">
                <div className="banner">
                  <p className="NomeEquipe">Eduarda</p>
                  <p className="DescricaoEquipe">
                    Parece que você quis dizer "Oruam". Você se refere ao rapper
                    brasileiro Oruam? Ele é um dos nomes em ascensão no trap
                    nacional, conhecido por seu estilo marcante, voz rouca e
                    letras que retratam a realidade das ruas.
                  </p>
                </div>
                </div>
            </div>
            <div>
              <img src={fotoequipe} alt="" />
              <div className="ab">
                <div className="banner">
                  <p className="NomeEquipe">Eduarda</p>
                  <p className="DescricaoEquipe">
                    Parece que você quis dizer "Oruam". Você se refere ao rapper
                    brasileiro Oruam? Ele é um dos nomes em ascensão no trap
                    nacional, conhecido por seu estilo marcante, voz rouca e
                    letras que retratam a realidade das ruas.
                  </p>
                </div>
                </div>
            </div>
            <div>
              <img src={fotoequipe} alt="" />
              <div className="ab">
                <div className="banner">
                  <p className="NomeEquipe">Eduarda</p>
                  <p className="DescricaoEquipe">
                    Parece que você quis dizer "Oruam". Você se refere ao rapper
                    brasileiro Oruam? Ele é um dos nomes em ascensão no trap
                    nacional, conhecido por seu estilo marcante, voz rouca e
                    letras que retratam a realidade das ruas.
                  </p>
                </div>
                </div>
            </div>
            <div>
              <img src={fotoequipe} alt="" />
              <div className="ab">
                <div className="banner">
                  <p className="NomeEquipe">Eduarda</p>
                  <p className="DescricaoEquipe">
                    Parece que você quis dizer "Oruam". Você se refere ao rapper
                    brasileiro Oruam? Ele é um dos nomes em ascensão no trap
                    nacional, conhecido por seu estilo marcante, voz rouca e
                    letras que retratam a realidade das ruas.
                  </p>
                </div>
                </div>
            </div>
            <div>
              <img src={fotoequipe} alt="" />
              <div className="ab">
                <div className="banner">
                  <p className="NomeEquipe">Eduarda</p>
                  <p className="DescricaoEquipe">
                    Parece que você quis dizer "Oruam". Você se refere ao rapper
                    brasileiro Oruam? Ele é um dos nomes em ascensão no trap
                    nacional, conhecido por seu estilo marcante, voz rouca e
                    letras que retratam a realidade das ruas.
                  </p>
                </div>
                </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Equipe;
