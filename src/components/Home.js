import React, {useState} from "react";
import {
  Container,
  Navbar,
  Nav,
  Col,
  Row,
  Table,
  CardGroup,
  Card,
} from "react-bootstrap";
import Typewriter from "typewriter-effect";
import {MdCancel} from "react-icons/md";

import "./../App.css";
import Cat from "./../common/img/cat-home.jpg";
import ConCat1 from "../common/img/con-cat1.jpg"
import ConCat2 from "../common/img/con-cat2.jpg"
import ConCat3 from "../common/img/con-cat3.jpg"

import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

function HomeComponent(props) {
  const [modal, setmodal] = useState(false);
  return (
    <>
      <div className="home">
        <Container>
          <Row className="mx-10">
            <Col sm={8}>
              <div className="home-heading-out">
                <div className="home-heading">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          "At Kitty Cat Adoptions, we believe every cat deserves a home. "
                        )
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Be a proud cat owner today!")
                        .pauseFor(1000)
                        .deleteAll()
                        .start();
                    }}
                  />

                  <br />
                  <br />
                  <button className="adopt-btn catCard">
                    <a href="#adopt">Adopt a Cat</a>
                  </button>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <img className="header-cat-image"  src={Cat} alt="header cat image" />
            </Col>
          </Row>

          <br />
          <Row>
            <div className="home-body-heading">Featured Cat</div>
          </Row>
          <Row>
            <div className="home-body">
              <CardGroup>
                <Card
                  className="catCard"
                  style={{
                    border: "1px solid rgba(235, 146, 151,0.3)",
                    borderRadius: "5%",
                    cursor: "pointer",
                    marginRight: "5px",
                  }}
                  onClick={() => setmodal(!modal)}
                >
                 <div>
                 <Card.Img
                    className="custom-card-img d-block mx-auto img-fluid w-50 mt-3"
                    src={ConCat1}
                    width="100px"
                    height="auto"
                  />
                 </div>
                  <Card.Body>
                    <Card.Text>
                      <p>
                        Name: Jane Doe <br />
                        Breed: Tabby <br />
                        Age: 2 <br />
                        Special Needs: easily scared, missing one front paw
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  className="catCard"
                  style={{
                    border: "1px solid rgba(235, 146, 151,0.3)",
                    borderRadius: "5%",
                    cursor: "pointer",
                    marginLeft: "5px",
                  }}
                  onClick={() => setmodal(!modal)}
                >
                  <Card.Img
                    className="d-block mx-auto img-fluid w-50 mt-3"
                    src={ConCat2}
                    height="100px"
                    width="100%"
                  />
                  <Card.Body>
                    <Card.Text>
                      <p>
                        Name: Jane Doe <br />
                        Breed: Tabby <br />
                        Age: 2 <br />
                        Special Needs: easily scared, missing one front paw
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  className="catCard"
                  style={{
                    border: "1px solid rgba(235, 146, 151,0.3)",
                    borderRadius: "5%",
                    cursor: "pointer",
                    marginLeft: "5px",
                  }}
                  onClick={() => setmodal(!modal)}
                >
                  <Card.Img
                    className="d-block mx-auto img-fluid w-50 mt-3"
                    src={ConCat3}
                    height="100px"
                    width="100%"
                  />
                  <Card.Body>
                    <Card.Text>
                      <p>
                        Name: Jane Doe <br />
                        Breed: Tabby <br />
                        Age: 2 <br />
                        Special Needs: easily scared, missing one front paw
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            </div>
          </Row>

          <br />

          <AboutUs />

          <br />

          <ContactUs />
        </Container>
      </div>
      {modal && (
        <div className="bg-modal">
          <div className="contactmodal">
            <h1>DETAILS</h1>
            <p className="underline"></p>
            <span class="cancel" onClick={() => setmodal(!modal)}>
              <MdCancel />
            </span>
            <div className="content">
              <div className="img">
                <img src={Cat} alt="image of cat" />
              </div>
              <div className="details">
                <p>
                  <b>Name </b>: Jane Doe <br />
                  <b>Breed </b>: Tabby <br />
                  <b>Age </b>: 2 <br />
                  <b>Special Needs </b>: easily scared, missing one front paw
                </p>
                <p>
                  <b>About :</b>
                  <br /> Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Maiores facere dicta dolorem praesentium? Laboriosam
                  repudiandae velit enim minima modi aliquam.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HomeComponent;
