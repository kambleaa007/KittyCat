import { Col, Row } from 'react-bootstrap';

import './../App.css';
import BigLogo from "./img/BigLogo.png";
import Facebook from "./img/facebook.png"
import Insta from "./img/insta.png"
import Twitter from "./img/twitter.png"
import Youtube from "./img/youtube.png"




function Footer() {

  return (
    <div className="footer-width">

      <Row>
          <Col sm={1} className="my-3">
            <img src={BigLogo} width="100px" height="auto" alt="bigLogo" />
          </Col>
          <Col sm={4} className="my-3">
            <div className="footer-top-text">Time spent with cats is never wasted</div>
            <div className="footer-bottom-text">
              Mailing Address: 111 Foster Place, Toronto ON XXX XXX
              email: adopt@kittycatadoptions.ca
              Phone: 111-222-3333
              Canadian Registered Charity number:  00000 0000 RR0001
            </div>
          </Col>
        <Row style={{ width: "300px", display: "flex", alignItems: "center", justifyContent: "space-between", margin: "0 20px" }} sm={5} className="my-3">
          <Col style={{ all: "initial", fontFamily: "Montserrat", fontSize: "0.8rem", color: "#fff" }}>Home</Col>
          <Col style={{ all: "initial", fontFamily: "Montserrat", fontSize: "0.8rem", color: "#fff" }}>Adopt a Cat</Col>
          <Col style={{ all: "initial", fontFamily: "Montserrat", fontSize: "0.8rem", color: "#fff" }}>About Us</Col>
          <Col style={{ all: "initial", fontFamily: "Montserrat", fontSize: "0.8rem", color: "#fff" }}>Faq</Col>
        </Row>
        <Col sm={2} className="my-3">
          <div className="footer-button" style={{ cursor: "pointer" }}>
            <Col><img src={Facebook} alt="facebook" /></Col>
            <Col><img src={Insta} alt="instagram" /></Col>
            <Col><img src={Twitter} alt="twitter" /></Col>
            <Col><img src={Youtube} alt="youtube" /></Col>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Footer;
