import React from 'react'
import { Nav, Navbar, Image } from "react-bootstrap";
import '../styles/Header.css';

class Header extends React.Component{
    
    constructor(){
        super()

        this.state = {
            navExpanded: false
        }

        this.setNavExpanded = this.setNavExpanded.bind(this)
        this.closeNav = this.closeNav.bind(this)
    }

    setNavExpanded(expanded){
        this.setState({ navExpanded: expanded})
    }

    closeNav(){
        this.setState({ navExpanded: false})
    }

    render(){
        return(
            <Navbar 
                expand="lg" 
                variant="dark" 
                className="p-3" 
                fixed="top" 
                style={{justifyContent:'flex-end'}} 
                onToggle={this.setNavExpanded}
                expanded={this.state.navExpanded} 
            >
                <Navbar.Toggle
                    children={<Image src={process.env.PUBLIC_URL + '/img/list.svg'}/>} aria-controls="basic-navbar-nav"
                />
                <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:'flex-end'}}>
                    <Nav.Link className="onHover navBar-link" onClick={this.closeNav} variant="light" bg="dark" href="#about">About</Nav.Link>
                    <Nav.Link className="onHover navBar-link" onClick={this.closeNav} variant="light" bg="dark" href="#projects">Projects</Nav.Link>
                    <Nav.Link className="onHover navBar-link" onClick={this.closeNav} variant="light" bg="dark" href="#contact">Contact</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;