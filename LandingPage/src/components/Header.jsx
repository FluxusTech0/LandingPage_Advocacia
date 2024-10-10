import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Logopreta from '../assets/img/logoouro.png';


function Header() {
   
    return (
        <>

            <div><img className='imagelogob' src={Logopreta} alt="logopreta" /></div>
            <div className="navbar">

                <Nav variant="underline" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">INICIO</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">SOBRE NÓS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">ASSISTÊNCIA JURÍDICA</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3">CONTATO</Nav.Link>
                    </Nav.Item>
                </Nav>

            </div>
        </>
    );
}

export default Header;