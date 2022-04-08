import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Contact from './Contact';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import {member} from './Register';

function NavBar1(props) {
  function wihichMember()
  {
           if(props.member.isAlumni) { return (<p style={{color:"black"}}>Alumni</p>);}
           else {return(<p style={{color:"black"}}>student</p>);}
  }
   return(
  <Navbar id="NavBar1" collapseOnSelect expand="lg" bg="dark" variant="dark">
<Container>
<Navbar.Brand href="/">Home</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Nav className="me-auto">
 <Nav.Link>Contact</Nav.Link>
</Nav>
 <Nav>
   <NavDropdown title={props.member.fname+" "+props.member.lname} id="collasible-nav-dropdown">
     <NavDropdown.Item href="#action/3.1">{wihichMember()}</NavDropdown.Item>
     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
     <NavDropdown.Divider />
     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
   </NavDropdown>
 </Nav>
</Navbar.Collapse>
</Container>
</Navbar>
);
}
export default NavBar1;
