import React from 'react'
import { Container, Navbar, Nav, Col, Row } from 'react-bootstrap';


import './../App.css';
import Map from "./../common/img/map.jpg";

function ContactUs(props) {
    return (
        <div className="about-us">
            <Container>
                <div>
                <Row>
                    <Col sm={6}>
                        <div className="about-us-text">
                            <div className="about-us-text-heading">Contact Us</div>
                            <div className="contact-us-text-body">
                                <Row>Name: <input type="text" /></Row>
                                <Row>Email: <input type="text" /></Row>
                                <Row>Phone Number: <input type="text" /></Row>
                                <Row>Message: </Row>
                                <Row><textarea /></Row>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="contact-us-map">
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
