import { Container, Navbar, Nav, Col, Row } from 'react-bootstrap';

import './../App.css';
import BigLogo from "./img/BigLogo.png";

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

  export default Footer;  