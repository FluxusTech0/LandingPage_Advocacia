import LogoDourada from "../assets/img/logoouro.png";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Se a posição de scroll for maior que 50px, marca como scrolled
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Adiciona o event listener no scroll
    window.addEventListener("scroll", handleScroll);

    // Remove o event listener quando o componente desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <img className="imagelogob" src={LogoDourada} alt="LogoDourada" />
      </div>

      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="alinhamento">
        <p className="nav-link" id="InicioNav" ><Link to="section0" smooth={true} duration={500}>
                INÍCIO
              </Link></p>
        <p className="nav-link" id="InicioNav"><Link to="section1" smooth={true} duration={500}>
                SOBRE NÓS
              </Link></p>
        <p className="nav-link" id="AssisNav"><Link to="section2" smooth={true} duration={500}>
        ASSISTÊNCIA JURÍDICA
              </Link></p>
        <p className="nav-link" id="ContatoNav" > <Link to="section3" smooth={true} duration={500}>
                CONTATO
              </Link></p>
              </div>  
      </nav>
    </>
  );
}

export default Header;
