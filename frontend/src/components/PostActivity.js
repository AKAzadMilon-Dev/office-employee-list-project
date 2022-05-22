import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Form, Table} from 'react-bootstrap';
import SideBar from './SideBar';

const PostActivity = () => {

    const [activity, setActivity] = useState([])
    const [name, setName] = useState('')
    const [hour, setHour] = useState('')
    const [details, setDetails] = useState('')

    const handleSubmit = async (e)=>{
        console.log('Click')
        e.preventDefault()
        await axios.post('http://localhost:8000/activity',{
            name: name,
            hour: hour,
            details: details
        })
    }

    useEffect(()=>{
        const activityData = async ()=>{
            const {data} = await axios.get('http://localhost:8000/activity')
            setActivity(data)
        } 
        activityData()
    },[activity])

  return (
    <div style={{ background: "#112B3C"}}>
        <Container >
            <Row>
                <SideBar></SideBar>
                <Col lg={9} >
                    <Form className='w-100 mx-auto textStyle formStyle' onClick={handleSubmit}>
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


                            <Col lg={12}>
                            <Table striped bordered hover variant="success">
                            <thead>
                                <tr>
                                    <th>Batch</th>
                                    <th>Time</th>
                                    <th>Room</th>
                                </tr>
                            </thead>
                            {activity.map(item=>(
                                <tbody key={item._id}>
                                    <tr >
                                        <td>{item.name}</td>
                                        <td>{item.hour}</td>
                                        <td>{item.details}</td>
                                    </tr>
                                </tbody>
                            ))}
                            </Table>
                        </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default PostActivity