import ImagemS from '../assets/img/Advogadomulher.png'
import './Sobre.css';


function Sobre() {
  return (
    <>
      <div className="sobretela" id="section1">
      <div className='SobreNos'><p>Sobre Nós</p></div>
      <div className='Infos'><p>Por que Os Clientes Nos Escolhem? </p></div>
        <div className="backgroundSobre">
          <h2>Sobre Nós</h2>
          </div>
        <div><img className='ImagemSobre' src={ImagemS} alt="" /></div>
        <p className="Sobre">Texto Titulo Grande</p> 
        
        <p className="Sobrepequeno">
          JoJo's Bizarre Adventure é uma série de mangá criada por Hirohiko
          Araki em 1987. A história é dividida em várias partes, cada uma com um
          protagonista da família Joestar, cujos membros têm o apelido "JoJo".
          Cada parte tem um cenário e trama distintos, mas todas envolvem
          batalhas sobrenaturais com poderes especiais chamados "Stands" a
          partir da Parte 3.
        </p>
        
      </div>
    </>
  );
}

export default Sobre;
