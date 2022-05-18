import axios from 'axios';
import React, { useState } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import SideBar from './SideBar';

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
                <SideBar></SideBar>
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