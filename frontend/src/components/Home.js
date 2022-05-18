import React from 'react';
import {Container, Row, Col, Card, Alert} from 'react-bootstrap';
import SideBar from './SideBar';

const Home = () => {
  return (
    <div style={{ textAlign: "center", background: "#112B3C"}}>
        <Alert >
            <h3>Welcome To</h3>
            <h1>Office Employee List Application</h1>
        </Alert>
        <Container>
            <Row >
                <SideBar></SideBar>
                {/* <Col lg={3} >
                    <Card style={{background:"#413F42"}}>
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
                </Col> */}
                <Col lg={9} >
                    <Card.Img variant="top" src="./assets/images/office.jpg" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Home