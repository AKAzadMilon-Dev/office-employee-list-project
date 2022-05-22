import React, { useState } from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

const Signup = () => {

    const [signup, setSignup] = useState([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



  return (
    <Container className='w-25 border p-3 mt-5'>
        <Row>
            <Col>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Conform Password</Form.Label>
                        <Form.Control type="password" placeholder="Conform Password" />
                    </Form.Group>

                    <Button className='w-100' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default Signup