import React from 'react';
import { Container, Row, Col, Alert, Card } from 'react-bootstrap';
import EmployeeList from './EmployeeList';

const Menu = () => {
  return (
    <div>
        <Container style={{marginTop:"50px"}}>
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
                            <Card.Text>
                                <Alert>
                                    <Alert.Link href="#">Employee List</Alert.Link>
                                </Alert>
                                <Alert>
                                    <Alert.Link href="#">Today's Class</Alert.Link>
                                </Alert>
                                <Alert>
                                    <Alert.Link href="#">Post Activity</Alert.Link>
                                </Alert>
                                <Alert>
                                    <Alert.Link href="#">Activity List</Alert.Link>
                                </Alert>
                                <Alert>
                                    <Alert.Link href="#">Apply For Leave</Alert.Link>
                                </Alert>
                                <Alert>
                                    <Alert.Link href="#">Late list</Alert.Link>
                                </Alert>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <EmployeeList></EmployeeList>
            </Row>
        </Container>
    </div>
  )
}

export default Menu