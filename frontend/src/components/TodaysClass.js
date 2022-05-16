import React, { useState } from 'react';
import {Container, Row, Col, Form, Button, Card, Table,} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TodaysClass = () => {

    const [todayclass, setTodayclass] = useState([])
    const [batch, setBatch] = useState('')
    const [time, setTime] = useState('')
    const [room, setRoom] = useState('')

    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log('Click')
        await axios.post('http://localhost:8000/',{
            batch: batch,
            time: time,
            room: room
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
                                    <Button active className="w-100" variant="primary" size="lg">Today's Class</Button>
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
                    <Form className='textStyle'>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6">
                                <Form.Label>Batch</Form.Label>
                                <Form.Control type="text" name="batch" placeholder="Batch" onChange={(e)=>setBatch(e.target.value)}/>
                            </Form.Group>

                            <Form.Group as={Col} md="6">
                            <Form.Label>Time</Form.Label>
                                <Form.Control type="text" placeholder="Time" name="time" onChange={(e)=>setTime(e.target.value)}/>
                            </Form.Group>

                            <Form.Group as={Col} md="12">
                            <Form.Label>Room</Form.Label>
                                <Form.Control type="text" placeholder="Room" name="room" onChange={(e)=>setRoom(e.target.value)}/>
                            </Form.Group>
                        </Row>
                        <Button onClick={handleSubmit} className='w-100' type="submit">Submit</Button>
                    </Form>
                    <Row style={{marginTop:"50px"}}>
                        <Col lg={12}>
                            <Table striped bordered hover variant="success">
                            <thead>
                                <tr>
                                    <th>Batch</th>
                                    <th>Time</th>
                                    <th>Room</th>
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