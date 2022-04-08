import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import AuthContext from './store/AuthContext';

function NavBar2(props) {
  const authCtx=useContext(AuthContext)

  function wihichMember()
  {
           if(props.member.isAlumni) { return (<p style={{color:"black"}}>Alumni</p>);}
           else {return(<p style={{color:"black"}}>student</p>);}
  }
   // const authCtx=React.useContext(AuthContext);
  console.log(authCtx.data.isAdmin);
   return(<Navbar className="NavBar2" collapseOnSelect expand="lg" bg="dark" variant="dark">
<Container>
<Navbar.Brand href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.112247381131!2d74.35570881363395!3d16.72802323018287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc10255ed327eef%3A0x9085747f30f78f43!2sMahatma%20Gandhi%20Junior%20College!5e0!3m2!1sen!2sin!4v1637565623219!5m2!1sen!2sin">MGR</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Nav>
 <Nav.Link href="/">Home</Nav.Link>
 <Nav.Link href="/SearchAlumni">Search</Nav.Link>
 <Nav.Link href="/UpdateProfile">Update</Nav.Link>

</Nav>
 <Nav className="me-auto">
   {!authCtx.data.isAdmin &&<Nav.Link href="/suggestevent">Suggest for Event</Nav.Link>}
 </Nav>
 <Nav>
    <Nav.Link >{authCtx.data.fname+" "+authCtx.data.lname} </Nav.Link>
    <Nav.Link href="/" onClick={()=>{authCtx.logout()}}>logout</Nav.Link>
 </Nav>
</Navbar.Collapse>
</Container>
</Navbar>);
}
export default NavBar2;
