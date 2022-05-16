import axios from 'axios';
import React, { useState } from 'react';
import {Container, Row, Col, Form, Button, Card, Table, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostActivity = () => {

    const [activity, setActivity] = useState([])
    const [name, setName] = useState('')
    const [hour, setHour] = useState('')
    const [details, setDetails] = useState('')

    const handleSubmit = async (e)=>{
        e.preventDefault()
        await axios.post('http://localhost:8000/', {
            name: name,
            hour: hour,
            details: details
        })
    }

  return (
    <div style={{ background: "#112B3C"}}>
        <Container >
            <Row>
                <Col lg={3}>
                    <Card style={{background:"#413F42"}}>
                        <Card.Img variant="top" src="./assets/images/men.jpg" />
                        <Card.Body className='textStyle'>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <div className="d-grid gap-2">
                                <Link to='/'>
                                    <Button className="w-100" variant="primary" size="lg">Home</Button>
                                </Link>
                                <Link to='/employeelist'>
                                    <Button className="w-100" variant="primary" size="lg">Employee List</Button>
                                </Link>
                                <Link to='/todaysclass'>
                                    <Button className="w-100" variant="primary" size="lg">Today's Class</Button>
                                </Link>
                                <Link to='/postactivity'>
                                    <Button active className="w-100" variant="primary" size="lg">Post Activity</Button>
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
                    <Form className='w-100 mx-auto textStyle formStyle'>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6">
                                <Form.Label>Active Name</Form.Label>
                                <Form.Control type="text" name="activeName" placeholder="Active Name"/>
                            </Form.Group>

                            <Form.Group as={Col} md="6">
                            <Form.Label>Hour Take</Form.Label>
                                <Form.Control type="text" placeholder="Hour Take" name="hourTake"/>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Active Details</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Active Details"/>
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button onClick={handleSubmit} variant="primary" size="md">Submit</Button>
                            </div>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default PostActivity