import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

const Signin = () => {
  return (
    <Container className='w-25 border p-3 mt-5'>
        <Row>
            <Col>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
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

export default Signin