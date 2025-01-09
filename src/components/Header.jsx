import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import LogoDourada from "../assets/img/logoouro.png";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import './Header.css';

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
      <div className="responsive">
      <Navbar className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <Nav variant="underline" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link href="/">INICIO</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">
              <Link to="section1" smooth={true} duration={500}>
                SOBRE NÓS
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">
              <Link to="section2" smooth={true} duration={500}>
                ASSISTÊNCIA JURÍDICA
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">
              <Link to="section3" smooth={true} duration={500}>
                CONTATO
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
      </div>
    </>
  );
}

export default Header;