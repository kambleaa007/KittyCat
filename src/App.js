import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Navbar, Nav, Col, Row } from 'react-bootstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import Logo from './common/img/Potential_Logo.jpg';
import BigLogo from './common/img/BigLogo.png';
import HomeComponent from './components/Home';
import MyAppComponent from './components/MyApp';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavBar />
          <Switch>
              <Route path="/" exact component= { (props) => ( <HomeComponent  /> )} />
              <Route path="/adopt" component={(props) => ( <div>adopt</div> )} />              
              <Route path="/aboutus" component={(props) => ( <AboutUs /> )} />
              <Route path="/contactus" component={(props) => ( <ContactUs /> )} />
              
          </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;


function NavBar() {

  return(
    <div className="nav-bar">
        <Navbar className="nav" variant="light">
          <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} width="50px" height="50px" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#adopt">Adopt a Cat</Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
            <Nav.Link href="#contactus">Contact Us</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
    </div>
  )
}

function Footer() {

  return(
    <div>
      <Container>
        <Row>
          <Col sm={1}>
            <img src={BigLogo} width="100px" height="auto" />
          </Col>
          <Col sm={4}>
            <div className="footer-top-text">Tine spent with cats is never wasted</div>
            <div className="footer-bottom-text">
              Mailing Address: 111 Foster Place, Toronto ON XXX XXX
              email: adopt@kittycatadoptions.ca
              Phone: 111-222-3333
              Canadian Registered Charity number:  00000 0000 RR0001
          </div>
          </Col>
          <Col sm={5}>
            <div className="footer-button">
              <Row>Home</Row>
              <Row>Adopt a Cat</Row>
              <Row>About Us</Row>
              <Row>Faq</Row>
            </div>
          </Col>
          <Col sm={2}>
            social
          </Col>
        </Row>
      </Container>
    </div>
  )
}