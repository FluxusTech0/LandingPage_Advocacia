import { useSpring, animated } from "@react-spring/web";
import LogoDourada from "../assets/img/Advogadohomem.png";
import ImagemMulher from "../assets/img/Advogadomulher.png";
import './TextTela.css';

const TextTelaInicial = () => {
  const props = useSpring({
    from: { transform: "translateX(-250%)" }, // Começa fora da tela à direita
    to: { transform: "translateX(-45%)" }, // Move para fora da tela à esquerda
    config: { duration: 650 }, // Duração da animação
    reset: true, // Permite reiniciar a animação
    loop: false, // Repetir a animação
  });

  const props2 = useSpring({
    from: { transform: "translateX(200%)" }, // Começa fora da tela à direita
    to: { transform: "translateX(-45%)" }, // Move para fora da tela à esquerda
    config: { duration: 650 }, // Duração da animação
    reset: true, // Permite reiniciar a animação
    loop: false, // Repetir a animação
  });

  return (
    <>
    <div id="section0">
      <div className="slide-container">
        <animated.p style={props} className="slide-text">
          <p className="textoRapido">Texto Rápido</p>
          <p className="textoTituloGrande">Texto Titulo Grande</p>
          <p className="textoTextoPequeno">
            Um dos principais motivos para a preservação ambiental é a
            biodiversidade. A diversidade biológica, que abrange todas as formas
            de vida na Terra, desempenha um papel vital na manutenção dos
            ecossistemas. Cada espécie, por menor que seja, contribui para o
            equilíbrio ecológico. A extinção de uma única espécie pode desencadear
            uma série de reações em cadeia, afetando outras espécies e,
            eventualmente, os seres humanos. Portanto, proteger a biodiversidade é
            fundamental não apenas para a sobrevivência das espécies, mas também
            para a nossa própria sobrevivência.
          </p>
        </animated.p>

        <animated.p style={props2} className="slide-text">
          <div>
            <img className="imageAdvogado" src={LogoDourada} alt="LogoDourada" />
            <div className="nomep"><p>Eduarda D'Emery</p></div>
            <div className="nomeoab">OAB/PE 99999</div>
          </div>

        </animated.p>
      </div>
      <div>
        <animated.p style={props2} className="slide-text">
          <div>
            <img className="imageAdvogada" src={ImagemMulher} alt="LogoDourada" />
          </div>
          <div className="nomep2"><p>Eduarda Torres</p></div>
          <div className="nomeoab2">OAB/PE 99999</div>
        </animated.p>
      </div>
      </div>
    </>

  );
};

export default TextTelaInicial;
