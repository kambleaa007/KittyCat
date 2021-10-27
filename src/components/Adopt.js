import React, { useState } from 'react'
import { Container, Row, Table } from 'react-bootstrap'
import CatModal from './Modal'

import './../App.css'
import Cat from './../common/img/cat_headshot.jpg'

function Adopt(props) {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <div className="">
        <Container>
          <div>
            <div className="adoption-heading">Adoption List</div>
            <div className="adoption-body">
              <Table striped bordered hover className="table">
                <thead className="table-heading">
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Breed</th>
                    <th>Age</th>
                    <th>More Info</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src={Cat} />
                    </td>
                    <td>Whiskers</td>
                    <td>American ShortHair</td>
                    <td>2 yrs Old</td>
                    <td>
                      <div className="learn-more">
                        <button onClick={handleShow}>Learn More</button>
                        <CatModal
                          show={show}
                          onHide={handleClose}
                          handleClose={handleClose}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="adopt-me">
                        <Row>
                          <button>Adopt Me</button>
                          <i
                            className="fa fa-edit"
                            style={{ fontSize: 20, color: '#FC46AA' }}
                          ></i>
                          <i
                            className="fa fa-trash"
                            style={{ fontSize: 20, color: '#FC46AA' }}
                          ></i>
                        </Row>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={Cat} />
                    </td>
                    <td>Whiskers</td>
                    <td>American ShortHair</td>
                    <td>2 yrs Old</td>
                    <td>
                      <div className="learn-more">
                        <button onClick={handleShow}>Learn More</button>
                        <CatModal
                          show={show}
                          onHide={handleClose}
                          handleClose={handleClose}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="adopt-me">
                        <Row>
                          <button>Adopt Me</button>
                          <i
                            className="fa fa-edit"
                            style={{ fontSize: 20, color: '#FC46AA' }}
                          ></i>
                          <i
                            className="fa fa-trash"
                            style={{ fontSize: 20, color: '#FC46AA' }}
                          ></i>
                        </Row>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={Cat} />
                    </td>
                    <td>Whiskers</td>
                    <td>American ShortHair</td>
                    <td>2 yrs Old</td>
                    <td>
                      <div className="learn-more">
                        <button onClick={handleShow}>Learn More</button>
                        <CatModal
                          show={show}
                          onHide={handleClose}
                          handleClose={handleClose}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="adopt-me">
                        <Row>
                          <button>Adopt Me</button>
                          <i
                            className="fa fa-edit"
                            style={{ fontSize: 20, color: '#FC46AA' }}
                          ></i>
                          <i
                            className="fa fa-trash"
                            style={{ fontSize: 20, color: '#FC46AA' }}
                          ></i>
                        </Row>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={Cat} />
                    </td>
                    <td>Whiskers</td>
                    <td>American ShortHair</td>
                    <td>2 yrs Old</td>
                    <td>
                      <div className="learn-more">
                        <button onClick={handleShow}>Learn More</button>
                        <CatModal
                          show={show}
                          onHide={handleClose}
                          handleClose={handleClose}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="adopt-me">
                        <Row>
                          <button>Adopt Me</button>
                          <i
                            className="fa fa-edit"
                            style={{ fontSize: 20, color: '#FC46AA' }}
                          ></i>
                          <i
                            className="fa fa-trash"
                            style={{ fontSize: 20, color: '#FC46AA' }}
                          ></i>
                        </Row>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Adopt
