import React from "react";
import {Nav,Navbar} from 'react-bootstrap';
import { Link} from 'react-router-dom';



class NavigationBar extends React.Component{

    render() {
        return(

            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Navbar.Brand as={Link} to="/">Vremenski portal</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                             <Nav.Link as={Link} to="/history" >Zgodovina iskanja</Nav.Link>
                        </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default NavigationBar;

