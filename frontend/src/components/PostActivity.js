import React from 'react';
import {Container, Row, Col, Form, Button, Card, Table, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostActivity = () => {
  return (
    <div>
        <Container style={{marginTop:"50px"}}>
            <Row>
                <Col lg={3}>
                    <Card style={{background:"#7968DC"}}>
                        <Card.Img variant="top" src="./assets/images/men.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <div className="d-grid gap-2">
                                <Link to='/employeelist'>
                                    <Button className="w-100" variant="primary" size="lg">Employee List</Button>
                                </Link>
                                <Link to='/todaysclass'>
                                    <Button className="w-100" variant="primary" size="lg">Today's Class</Button>
                                </Link>
                                <Link to='/postactivity'>
                                    <Button className="w-100" variant="primary" size="lg">Post Activity</Button>
                                </Link>
                                <Link to='/activitylist'>
                                    <Button className="w-100" variant="primary" size="lg">Activity List</Button>
                                </Link>
                                <Link to='/todaysclass'>
                                    <Button className="w-100" variant="primary" size="lg">Apply For Leave</Button>
                                </Link>
                                <Link to='/todaysclass'>
                                    <Button className="w-100" variant="primary" size="lg">Late List</Button>
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={9} >
                    <Form className='w-50 mx-auto formStyle'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="primary" size="md">Submit</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default PostActivity