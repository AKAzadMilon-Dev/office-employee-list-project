import React from 'react';
import {Container, Row, Col, Form, Button, Card, Table, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TodaysClass = () => {
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
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name"  />
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

                        <Form.Group className="mb-3">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="text" placeholder="Mobile Number"/>
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="primary" size="md">Submit</Button>
                        </div>
                    </Form>
                    <Row style={{marginTop:"50px"}}>
                        <Col lg={12}>
                            <Table striped bordered hover variant="success">
                            <thead>
                                <tr>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Office Time</th>
                                <th>Off Day</th>
                                <th>Mobile Number</th>
                                </tr>
                            </thead>
                            {/* {employee.map(item=>(
                                <tbody key={item._id}>
                                    <tr >
                                        <td>{item.name}</td>
                                        <td>{item.designation}</td>
                                        <td>{item.officetime}</td>
                                        <td>{item.offday}</td>
                                        <td>{item.mobile}</td>
                                    </tr>
                                </tbody>
                            ))} */}
                            </Table>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default TodaysClass