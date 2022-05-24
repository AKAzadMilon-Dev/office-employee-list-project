import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Form, Table} from 'react-bootstrap';
import axios from 'axios';
import SideBar from './SideBar';

const TodaysClass = () => {

    const [todayclass, setTodayclass] = useState([])
    const [batch, setBatch] = useState('')
    const [time, setTime] = useState('')
    const [room, setRoom] = useState('')

    const handleSubmit = async (e)=>{
        e.preventDefault()
        await axios.post('http://localhost:8000/class',{
            batch: batch,
            time: time,
            room: room
        })
    }

    useEffect(()=>{
        const classData = async ()=>{
            const {data} = await axios.get('http://localhost:8000/class')
            setTodayclass(data)
        }
        classData()
    },[todayclass])

  return (
    <div style={{ background: "#112B3C"}}>
        <Container >
            <Row>
                <SideBar></SideBar>
                <Col lg={9} >
                    <Form className='textStyle' onSubmit={handleSubmit}>
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
                        <input className='btn btn-primary w-100' type="submit" value="submit"/>
                    </Form>
                    <Row style={{marginTop:"50px"}}>
                        <Col lg={12}>
                            <Table striped bordered hover variant="success">
                            <thead>
                                <tr>
                                    <th>Batch</th>
                                    <th>Time</th>
                                    <th>Room</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {todayclass.map(item=>(
                                <tbody key={item._id}>
                                    <tr >
                                        <td>{item.batch}</td>
                                        <td>{item.time}</td>
                                        <td>{item.room}</td>
                                        <td>Edit/Delete</td>
                                    </tr>
                                </tbody>
                            ))}
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