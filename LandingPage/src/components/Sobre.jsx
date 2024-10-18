import ImagemS from '../assets/img/Advogadomulher.png'

function Sobre() {
  return (
    <>
      <div className="testando" id="section1">
      <div className='SobreNos'><p>Sobre Nós</p></div>
      <div className='Infos'><p>Por que Os Clientes Nos Escolham</p></div>
        <div className="backgroundSobre">
        <div className='ImagemSobre'><img src={ImagemS} alt="" /></div>
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
      </div>
    </>
  );
}

export default Sobre;
