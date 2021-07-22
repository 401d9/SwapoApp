import React from 'react'

import Logo from './images/logo.png'
import { Navbar,Container, Nav } from 'react-bootstrap'
// import Home from './Home';
// import AboutUs from './AboutUs';
// import ContactUs from './ContactUs';
class BootstrapNavbar extends React.Component{
render(){
return(
<>
 
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img

          alt="Swapo"
          src={Logo}
          width="50"
          height="60"
          style={{marginLeft: -100}}
        
        //   className="d-inline-block align-top"
        />{' '}

        SWAPO
      </Navbar.Brand>
      {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
    <Nav className="me-auto" style ={{marginLeft: 500}}>
      <Nav.Link href="#home" style ={{marginRight: 30}}>Home</Nav.Link>
      <Nav.Link href="#features" style ={{marginRight: 30}}>Profile</Nav.Link>
      <Nav.Link href="#pricing" style ={{marginRight: 30}}>About us </Nav.Link>
      <Nav.Link href="#pricing" style ={{marginRight: 30}}>sign in </Nav.Link>
      <Nav.Link href="#pricing" style ={{marginRight: 30}}>sign up </Nav.Link>
 

    </Nav>
    </Container>
  </Navbar>


</>
)  
}
}
export default BootstrapNavbar;

