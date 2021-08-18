import React from 'react'
import { Container, Navbar, Nav, Col, Row, Table, CardGroup, Card } from 'react-bootstrap';


import './../App.css';
import Cat from "./../common/img/cat-home.jpg";

function HomeComponent(props) {
    return (
        <div className="home">
            <Container>
                <Row>
                    <Col sm={8}>
                        <div className="home-heading-out">
                            <div className="home-heading">
                                At Kitty Cat Adoptions, we believe every cat deserves a home. 
                                <br/><br/>   
                                Be a proud cat owner today! 
                                <br/><br/>  
                                <button>Adopt a Cat</button>
                            </div>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <img src={Cat} />
                    </Col>
                </Row>
                <br/>
                <Row>
                    <div className="home-body-heading">Featured Cat</div>                    
                </Row>
                <Row>
                <div>
                    <CardGroup>
                        <Card>
                            <Card.Img src={Cat} height="100%" width="100%"/>
                            <Card.Body>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default HomeComponent;
