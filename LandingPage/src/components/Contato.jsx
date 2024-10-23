import Iconhome from '../assets/img/Homeicon.png'
import Iconemail from '../assets/img/Emailicon.png'
import Icontele from '../assets/img/Telefone.png'
import Iconrelogio from '../assets/img/relogio.png'
import Logoplanfleto from '../assets/img/logopreto.png'

function Contato() {
  return (
    <>
      <div className="paginaContato" id="section3">
        <div className="panfleto">
          <p className="Letraprincipal">Informações de contato</p>
          <p className="Letramenor">
            Estamos disponiveis para ajuda-lo. Entre em contato conosco para
            obter mais informações ou para agendar a consulta
          </p>
          <img className='homeicon' src={Iconhome} alt="" />
          <p className='endereco'>Endereço do Escritório</p>
          <p className='enderecoreal'>Rua Sessenta, Numero: 15, Caetes III</p>
          <img className='emailicon' src={Iconemail} alt="" />
          <p className='email'>Endereço de Email</p>
          <p className='emailreal'>reinanfofinho.gmail.com</p>
          <img className='telefoneicon' src={Icontele} alt="" />
          <p className='telefone'>Telefone</p>
          <p className='telefonereal'>(81) 99999-9999</p>
          <img className='relogioicon' src={Iconrelogio} alt="" />
          <p className='relogio'>Horário de Funcionamento</p>
          <p className='horario'>08:30-12:00/13:30-17:30</p>
        </div>
        <div className="panfleto2">
          <img className='logoplanfleto' src={Logoplanfleto} alt="" />
          <p className='textopequenocontato'>Entre em contato hoje mesmo</p>
          <p className='textograndecontato'>Para falar com um especialista</p>
          <button class="comic-button">Entre em contato!</button>
        </div>
      </div>
    </>
  );
}

export default Contato;
