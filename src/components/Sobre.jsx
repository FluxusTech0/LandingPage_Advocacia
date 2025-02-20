import ImagemS from "../assets/img/EduardaMery.png";
import ImagemS2 from "../assets/img/EduardaTorres.png";
import "./Sobre.css";

function Sobre() {
  return (
    <>
      <div className="sobretela" id="section1">
        <div className="SobreNos">
          <p>Sobre Nós</p>
        </div>
        <div className="Infos">
          <p>Por que Os Clientes Nos Escolhem? </p>
        </div>
        <div className="backgroundSobre">
          <h2>Sobre Nós</h2>
        </div>
        <div>
          <img className="ImagemSobre" src={ImagemS} alt="" />
        </div>
        <div>
          <img className="ImagemSobre2" src={ImagemS2} alt="" />
        </div>
        <p className="Sobre">Texto Titulo Grande</p>

        <p className="Sobrepequeno">
          🔹 Atendimento próximo e humanizado – Valorizamos a escuta ativa para
          entender cada caso com atenção e empatia.
          <div>
            🔹 Soluções ágeis e estratégicas – Trabalhamos com foco na
            eficiência e na melhor resolução para o cliente.
          </div>
          <div>
            🔹 Transparência e ética – Compromisso total com a verdade e com os
            princípios do Direito.
          </div>
          <div>
            🔹 Escritório Moderno e Atualizado Acompanhar as constantes mudanças
            na legislação e nas tendências do Direito é essencial. Estamos
            sempre atualizados para oferecer as melhores soluções e estratégias
            jurídicas, utilizando tecnologia e inovação para otimizar o
            atendimento e os processos.
          </div>
          <div>
          🔹 Transparência e comunicação clara – Mantemos nossos clientes informados sobre cada etapa do processo, explicando tudo de forma acessível.
          </div>
        </p>
      </div>
    </>
  );
}

export default Sobre;
