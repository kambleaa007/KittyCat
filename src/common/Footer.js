import { Container, Navbar, Nav, Col, Row } from 'react-bootstrap'

import './../App.css'
import BigLogo from './img/BigLogo.png'

function Footer() {
  return (
    <div>
      <Container style={{ backgroundColor: '#f1f1f1' }}>
        <Row>
          <Col sm={1} className="my-3">
            <img src={BigLogo} width="100px" height="auto" />
          </Col>
          <Col sm={4} className="my-3">
            <div className="footer-top-text">
              Tine spent with cats is never wasted
            </div>
            <div className="footer-bottom-text">
              Mailing Address: 111 Foster Place, Toronto ON XXX XXX email:
              adopt@kittycatadoptions.ca Phone: 111-222-3333 Canadian Registered
              Charity number: 00000 0000 RR0001
            </div>
          </Col>
          <Col sm={5} className="my-3">
            <div className="footer-button" style={{ cursor: 'pointer' }}>
              <Row>
                <a href="/">Home</a>
              </Row>
              <Row>
                <a href="#adopt">Adopt a Cat</a>
              </Row>
              <Row>
                <a href="#aboutus">About Us</a>
              </Row>
              <Row>
                <a href="#contactus">Faq</a>
              </Row>
            </div>
          </Col>
          <Col sm={2} className="my-3">
            <div className="footer-button" style={{ cursor: 'pointer' }}>
              <Row>
                <a href="#">Facebook</a>
              </Row>
              <Row>
                <a href="#">Instagram</a>
              </Row>
              <Row>
                <a href="#">Twitter</a>
              </Row>
              <Row>
                <a href="#">Youtube</a>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
