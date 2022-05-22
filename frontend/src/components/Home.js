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
                <Col lg={9} >
                    <Card.Img variant="top" src="./assets/images/office.jpg" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Home