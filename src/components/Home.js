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
                <div className="home-body">
                    <CardGroup>
                        <Card>
                            <Card.Img className="d-block mx-auto img-fluid w-50" src={Cat} height="100px" width="100%"/>
                            <Card.Body>
                            <Card.Text>
                                <p>
                                    Name: Jane Doe <br/>
                                    Breed:  Tabby <br/>
                                    Age: 2 <br/>
                                    Special Needs: easily scared, missing one front paw
                                </p>                                                         
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img className="d-block mx-auto img-fluid w-50" src={Cat} height="100px" width="100%"/>
                            <Card.Body>
                            <Card.Text>
                                <p>
                                    Name: Jane Doe <br/>
                                    Breed:  Tabby <br/>
                                    Age: 2 <br/>
                                    Special Needs: easily scared, missing one front paw
                                </p>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img className="d-block mx-auto img-fluid w-50" src={Cat} height="100px" width="100%"/>
                            <Card.Body>
                            <Card.Text>
                                <p>
                                    Name: Jane Doe <br/>
                                    Breed:  Tabby <br/>
                                    Age: 2 <br/>
                                    Special Needs: easily scared, missing one front paw
                                </p>
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
