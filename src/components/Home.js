import React,{useState}  from 'react';
import { Container, Navbar, Nav, Col, Row, Table, CardGroup, Card } from 'react-bootstrap';

import {MdCancel} from 'react-icons/md';

import './../App.css';
import Cat from "./../common/img/cat-home.jpg";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

function HomeComponent(props) {
  const [modal, setmodal] = useState(false);
    return (
        <>
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
                        <Card style={{"borderColor":"#FC46AA", "borderRadius":"5%","cursor":"pointer"}} onClick={() => setmodal(!modal)}>
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
                        <Card style={{"borderColor":"#FC46AA", "borderRadius":"5%","cursor":"pointer"}} onClick={() => setmodal(!modal)}>
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
                        <Card style={{"borderColor":"#FC46AA", "borderRadius":"5%","cursor":"pointer"}} onClick={() => setmodal(!modal)}>
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
                
                <br/>
                
                    <AboutUs />
                
                <br/>
                
                    <ContactUs />
                
            </Container>
        </div>
        {modal && <div className="bg-modal">
        <div className="contactmodal">
          <h1>DETAILS</h1>
            <p className="underline"></p>
          <span class="cancel" onClick={() => setmodal(!modal)}><MdCancel /></span>
          <div className="content">
          <div className="img">
            <img src={Cat} alt="image of cat" />
          </div>
          <div className="details">
            <p>
                <b>Name </b>: Jane Doe <br/>
                <b>Breed </b>:  Tabby <br/>
                <b>Age </b>: 2 <br/>
                <b>Special Needs </b>: easily scared, missing one front paw
            </p>
            <p><b>About :</b><br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores facere dicta dolorem praesentium? Laboriosam repudiandae velit enim minima modi aliquam.</p>
          </div>
          </div>
        </div>
      </div> }
    </>
    );
}

export default HomeComponent;
