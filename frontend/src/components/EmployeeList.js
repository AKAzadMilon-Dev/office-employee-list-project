import React from 'react';
import {Container, Row, Col, Form, Button, Card} from 'react-bootstrap'

const EmployeeList = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col lg={3}>
                    <Card style={{background:"#7968DC"}}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={9}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" placeholder="Designation" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Office Time</Form.Label>
                            <Form.Control type="text" placeholder="Office time" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Off Day</Form.Label>
                            <Form.Control type="text" placeholder="Off day" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default EmployeeList