import { Modal, Button, Container, Row, Col, Image } from 'react-bootstrap'
import Cat from './../common/img/cat-home.jpg'

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
                <Image src={Cat} roundedCircle fluid />
              </Col>
              <Col xs={12} lg={8}>
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
