import React from 'react'
import { Container, Navbar, Nav, Col, Row } from 'react-bootstrap';


import './../App.css';
import Map from "./../common/img/map.jpg";

function ContactUs(props) {
    return (
        <div className="about-us mt-5">
            <Container>
                <div>
                <Row>
                    <Col sm={6}>
                        <div className="about-us-text m-2">
                            <div className="about-us-text-heading">Contact Us</div>
                            <div className="contact-us-text-body m-3 ">
                                <Row>Name: <input type="text" /></Row>
                                <Row>Email: <input type="text" /></Row>
                                <Row>Phone Number: <input type="text" /></Row>
                                <Row>Message: </Row>
                                <Row><textarea /></Row>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="contact-us-map m-3">
                            <img src={Map} />
                        </div>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    );
}

export default ContactUs;
