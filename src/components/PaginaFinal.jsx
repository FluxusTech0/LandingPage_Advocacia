import Logo from "../assets/img/logoouro.png";
import './PaginaFinal.css'

function PaginaFinal() {
  return (
    <>
      <div className="paginaFinal" id="section2">
        <img className="logofinal" src={Logo} alt="" />
        <a href="https://www.instagram.com/torresedemeryadvocacia/" target="_blank" rel="noopener noreferrer">
        <button className="Btn">
          <span className="svgContainer">
            <svg
              fill="white"
              className="svgIcon"
              viewBox="0 0 448 512"
              height="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
          </span>
          <span className="BG"></span>
        </button>
        </a>
        <p className="Letragrandefinal">Links Rápidos</p>
        <ul className="listinha">
          <a href="#top" className="link-custom"><li>Início</li></a>
          <br />
          <a href="#section1" className="link-custom"><li>Sobre Nós</li></a>
          <br />
          <a href="#section2" className="link-custom"><li>Áreas de Atuação</li></a>
        </ul>
        <p className="Letragrandeass">Áreas de Atuação</p>
        <ul className="listinha2">
          <a href="#section2" className="link-custom"><li>Administrativo</li></a>
          <br />
          <a href="#section2" className="link-custom"><li>Consumidor</li></a>
          <br />
          <a href="#section2" className="link-custom"><li>Contratos</li></a>
          <br />
          <a href="#section2" className="link-custom"><li>Tributario</li></a>
          <br />
          <a href="#section2" className="link-custom"><li>Direito Civil</li></a>
        </ul>
        <p className="Letragrandecontato">Contato</p>
        <p className="numerofinal">(81)99999-9999</p>
        <p className="emailfinal">reinanfofinho@gmail.com</p>
      </div>
    </>
  );
}

export default PaginaFinal;
