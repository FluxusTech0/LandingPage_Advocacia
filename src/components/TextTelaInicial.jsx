import { useSpring, animated } from "@react-spring/web";
import LogoDourada from "../assets/img/Advogadasjuntas.png";
import ImagemMulher from "../assets/img/Advogadomulher.png";
import "./TextTela.css";

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
          <animated.p style={props2} className="slide-text">
            <p className="textoRapido">Bem-vindo ao Torres & D'Emery</p>
            <p className="textoTituloGrande">Não apenas protegemos seus direitos, 
              mas oferecemos soluções jurídicas que cuidam do que realmente importa, 
              com ética e excelência</p>
            <div className="barraVertical"></div>
            <p className="textoTextoPequeno">
            um escritório de advocacia dedicado a oferecer soluções jurídicas estratégicas e eficientes.
            Atuamos com ética, transparência e excelência, sempre buscando a melhor defesa dos interesses
            de nossos clientes.Nosso time é composto por profissionais altamente qualificados e especializados
            em diversas áreas do Direito, proporcionando um atendimento personalizado e focado na resolução ágil
            e eficaz de demandas jurídicas.Não adie  a solução dos seus problemas. Estamos prontos para te ajudar.
            </p>
          </animated.p>

          <animated.p style={props} className="slide-text">
            <div>
              <img
                className="imageAdvogado"
                src={LogoDourada}
                alt="LogoDourada"
              />
               {/* <div className="formaQuadradaBorda"></div> */}
              <div className="nomep">
                <p>Eduarda D'Emery</p>
              </div>
              <div className="nomeoab">OAB/PE 99999</div>
            </div>
            <div>
            <div className="nomep2">
              <p>Eduarda Torres</p>
            </div>
            <div className="nomeoab2">OAB/PE 99999</div>
          
        </div>
          </animated.p>
        </div>
        
        <a
          href="https://wa.me/5581971115922?text=Olá!%20Gostaria%20de%20mais%20informações."
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="comic-button2">Entre em contato!</button>
        </a>
      </div>
    </>
  );
};

export default TextTelaInicial;
