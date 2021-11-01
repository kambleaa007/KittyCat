import React, { useState } from 'react'
import { Container, Row, Table } from 'react-bootstrap'
import CatModal from './Modal'
import cats from '../common/json/cats'

import './../App.css'

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
                  {cats.totalcats.map((eachCat) => {
                    return (
                      <tr>
                        <td>
                          <img
                            src={
                              require('./../common/img/' + eachCat.image)
                                .default
                            }
                            alt="catImage"
                          />
                        </td>
                        <td>{eachCat.name}</td>
                        <td>{eachCat.breed}</td>
                        <td>{eachCat.age} yr(s) Old</td>
                        <td>
                          <div className="learn-more">
                            <button onClick={handleShow} key={eachCat.id}>
                              Learn More
                            </button>
                            <CatModal
                              show={show}
                              onHide={handleClose}
                              handleClose={handleClose}
                              image={
                                require('./../common/img/' + eachCat.image)
                                  .default
                              }
                              name={eachCat.name}
                              breed={eachCat.breed}
                              age={eachCat.age}
                              about={eachCat.about}
                              specialneeds={eachCat.specialneeds}
                              key={eachCat.id}
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
                    )
                  })}
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
