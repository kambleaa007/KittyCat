import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';


import './../App.css';
import Map from "./../common/img/map.jpg";

function ContactUs(props) {
    return (
        <div className="about-us contact-us  mt-5">
            <Container>
                <div>
                <Row>
                    <Col className="custom-col-1"  sm={6}>
                        <div className="about-us-text m-2">
                            <div className="about-us-text-heading">Contact Us</div>
                            <div className="contact-us-text-body m-3 ">
                                <Col><p className="input-name">Name: </p> <input type="text" placeholder="jhon"/></Col>
                                <Col><p className="input-name">Email: </p><input type="email" placeholder="jhon@gmail.com" /></Col>
                                <Col><p className="input-name">Phone Number:</p> <input type="text" placeholder="+91092498894" /></Col>
                                <Col><p className="input-name">Message:</p> <textarea placeholder="I love cats!" /></Col>
                                <Col><button className="input-name" type="submit">Submit</button></Col>
                            </div>
                        </div>
                    </Col>
                    <Col className="custom-col-2" sm={6}>
                        <div  className="contact-us-map m-3">
                            <img src={Map} alt="Map" />
                        </div>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    );
}

export default ContactUs;
