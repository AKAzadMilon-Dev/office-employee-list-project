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
        console.log('Click')
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
                    <Form className='w-100 mx-auto textStyle formStyle'onClick={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6">
                                <Form.Label>Active Name</Form.Label>
                                <Form.Control type="text" name="activeName" placeholder="Active Name" onChange={(e)=>setName(e.target.value)}/>
                            </Form.Group>

                            <Form.Group as={Col} md="6">
                            <Form.Label>Hour Take</Form.Label>
                                <Form.Control type="text" placeholder="Hour Take" name="hourTake" onChange={(e)=>setHour(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Active Details</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Active Details" onChange={(e)=>setDetails(e.target.value)}/>
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <input className='btn btn-primary w-100' type="submit" value="submit"/>
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