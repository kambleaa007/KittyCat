import React from 'react'
import { Container, Navbar, Nav, Col, Row } from 'react-bootstrap';


import './../App.css';
import Cat from "./../common/img/cat.jpg";

function AboutUs(props) {
    return (
        <div className="about-us">
            <Container>
                <div>
                <Row>
                    <Col sm={4}>
                        <div className="about-us-cat">
                            <img src={Cat} />
                        </div>
                    </Col>
                    <Col sm={8}>
                        <div className="about-us-text">
                            <div className="about-us-text-heading">About Us</div>
                            <div className="about-us-text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        </div>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    );
}

export default AboutUs;
