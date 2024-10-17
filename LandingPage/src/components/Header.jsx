import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
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
    window.addEventListener('scroll', handleScroll);

    // Remove o event listener quando o componente desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <div>
        <img className="imagelogob" src={LogoDourada} alt="LogoDourada" />
      </div>

      <Navbar className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <Nav variant="underline" defaultActiveKey="/home" >
          <Nav.Item>
            <Nav.Link href="/home">INICIO</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">
              <Link to="section1" smooth={true} duration={500}>
                SOBRE NÓS
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">ASSISTÊNCIA JURÍDICA</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">CONTATO</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
}

export default Header;
