import { Nav, Navbar } from "react-bootstrap";
import '../styles/Header.css';

const Header = () =>{
    return(
        <Navbar expand="lg" className="p-3" style={{justifyContent:'flex-end'}} >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:'flex-end'}}>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;