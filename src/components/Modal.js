import { Modal, Button, Container, Row, Col, Image } from 'react-bootstrap'

function CatModal(props) {
  if (!props.show) {
    return null
  }
  return (
    <Modal
      animation={false}
      show={props.show}
      onHide={props.handleClose}
      dialogClassName="modal-90vw"
      centered
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Details of Cat</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ backgroundColor: '#FFF3F3' }}>
          <Container>
            <Row>
              <Col xs={12} lg={4} className="m-auto">
                <Image src={props.image} roundedCircle fluid />
              </Col>
              <Col xs={12} lg={8}>
                <p>
                  <b>Name </b>: {props.name} <br />
                  <b>Breed </b>: {props.breed} <br />
                  <b>Age </b>: {props.age} <br />
                  <b>Special Needs </b>: {props.specialneeds}
                </p>
                <p>
                  <b>About :</b>
                  <br /> {props.about}
                </p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>

        <Modal.Footer>
          <Button
            style={{
              backgroundColor: '#FFF3F3',
              color: '#FC46AA',
              borderColor: 'black',
            }}
            onClick={props.handleClose}
          >
            Close
          </Button>
          <Button
            style={{
              backgroundColor: '#FC46AA',
              color: 'black',
              borderColor: 'black',
            }}
          >
            Adopt
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  )
}

export default CatModal
