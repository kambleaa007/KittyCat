
import { Container, Navbar, Nav} from 'react-bootstrap';

import './../App.css';
import Logo from "./img/Potential_Logo.jpg";


function NavBar() {

    return(
      <div className="nav-bar">
          <Navbar className="nav custom-nav-styles" variant="light">
            <Container>
            <Navbar.Brand href="#/">
              <img src={Logo} width="50px" height="50px" alt="logo" />
            </Navbar.Brand>
            <Nav className="custom-navlink-styles me-auto">
              <Nav.Link href="#adopt">Adopt a Cat</Nav.Link>
              <Nav.Link href="#aboutus">About Us</Nav.Link>
              <Nav.Link href="#contactus">Contact Us</Nav.Link>
            </Nav>
            </Container>
          </Navbar>
      </div>
    )
  }

  export default NavBar; 